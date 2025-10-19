import { A as StorageUtil, F as ConstantsUtil, O as OptionsController, S as ApiController, g as ConnectionController, k as CoreHelperUtil, p as ChainController, t as ConstantsUtil$1, y as ConnectorController } from "./ConstantsUtil-CYeKml_O.js";
const ConstantsUtil$2 = {
	METMASK_CONNECTOR_NAME: "MetaMask",
	TRUST_CONNECTOR_NAME: "Trust Wallet",
	SOLFLARE_CONNECTOR_NAME: "Solflare",
	PHANTOM_CONNECTOR_NAME: "Phantom",
	COIN98_CONNECTOR_NAME: "Coin98",
	MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
	BACKPACK_CONNECTOR_NAME: "Backpack",
	BITGET_CONNECTOR_NAME: "Bitget Wallet",
	FRONTIER_CONNECTOR_NAME: "Frontier",
	XVERSE_CONNECTOR_NAME: "Xverse Wallet",
	LEATHER_CONNECTOR_NAME: "Leather",
	EIP155: "eip155",
	ADD_CHAIN_METHOD: "wallet_addEthereumChain",
	EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
	EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
	CONNECTOR_RDNS_MAP: {
		coinbaseWallet: "com.coinbase.wallet",
		coinbaseWalletSDK: "com.coinbase.wallet"
	},
	CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
	CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
	CONNECTOR_TYPE_INJECTED: "INJECTED",
	CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
	CONNECTOR_TYPE_AUTH: "AUTH",
	CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
	CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH"
};
const HelpersUtil = {
	getCaipTokens(tokens) {
		if (!tokens) return;
		const caipTokens = {};
		Object.entries(tokens).forEach(([id, token]) => {
			caipTokens[`${ConstantsUtil$2.EIP155}:${id}`] = token;
		});
		return caipTokens;
	},
	isLowerCaseMatch(str1, str2) {
		return str1?.toLowerCase() === str2?.toLowerCase();
	}
};
const WalletUtil = {
	filterOutDuplicatesByRDNS(wallets) {
		const connectors = OptionsController.state.enableEIP6963 ? ConnectorController.state.connectors : [];
		const recent = StorageUtil.getRecentWallets();
		const connectorRDNSs = connectors.map((connector) => connector.info?.rdns).filter(Boolean);
		const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
		const allRDNSs = connectorRDNSs.concat(recentRDNSs);
		if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
			const index = allRDNSs.indexOf("io.metamask.mobile");
			allRDNSs[index] = "io.metamask";
		}
		return wallets.filter((wallet) => !allRDNSs.includes(String(wallet?.rdns)));
	},
	filterOutDuplicatesByIds(wallets) {
		const connectors = ConnectorController.state.connectors.filter((connector) => connector.type === "ANNOUNCED" || connector.type === "INJECTED");
		const recent = StorageUtil.getRecentWallets();
		const connectorIds = connectors.map((connector) => connector.explorerId);
		const recentIds = recent.map((wallet) => wallet.id);
		const allIds = connectorIds.concat(recentIds);
		return wallets.filter((wallet) => !allIds.includes(wallet?.id));
	},
	filterOutDuplicateWallets(wallets) {
		const uniqueByRDNS = this.filterOutDuplicatesByRDNS(wallets);
		return this.filterOutDuplicatesByIds(uniqueByRDNS);
	},
	markWalletsAsInstalled(wallets) {
		const { connectors } = ConnectorController.state;
		const { featuredWalletIds } = OptionsController.state;
		const installedWalletRdnsMap = connectors.filter((connector) => connector.type === "ANNOUNCED").reduce((rdnsMap, connector) => {
			if (!connector.info?.rdns) return rdnsMap;
			rdnsMap[connector.info.rdns] = true;
			return rdnsMap;
		}, {});
		return wallets.map((wallet) => ({
			...wallet,
			installed: Boolean(wallet.rdns) && Boolean(installedWalletRdnsMap[wallet.rdns ?? ""])
		})).sort((walletA, walletB) => {
			const installationComparison = Number(walletB.installed) - Number(walletA.installed);
			if (installationComparison !== 0) return installationComparison;
			if (featuredWalletIds?.length) {
				const walletAFeaturedIndex = featuredWalletIds.indexOf(walletA.id);
				const walletBFeaturedIndex = featuredWalletIds.indexOf(walletB.id);
				if (walletAFeaturedIndex !== -1 && walletBFeaturedIndex !== -1) return walletAFeaturedIndex - walletBFeaturedIndex;
				if (walletAFeaturedIndex !== -1) return -1;
				if (walletBFeaturedIndex !== -1) return 1;
			}
			return 0;
		});
	},
	getConnectOrderMethod(_features, _connectors) {
		const connectMethodOrder = _features?.connectMethodsOrder || OptionsController.state.features?.connectMethodsOrder;
		const connectors = _connectors || ConnectorController.state.connectors;
		if (connectMethodOrder) return connectMethodOrder;
		const { injected, announced } = ConnectorUtil.getConnectorsByType(connectors, ApiController.state.recommended, ApiController.state.featured);
		const shownInjected = injected.filter(ConnectorUtil.showConnector);
		const shownAnnounced = announced.filter(ConnectorUtil.showConnector);
		if (shownInjected.length || shownAnnounced.length) return [
			"wallet",
			"email",
			"social"
		];
		return ConstantsUtil$1.DEFAULT_CONNECT_METHOD_ORDER;
	},
	isExcluded(wallet) {
		const isRDNSExcluded = Boolean(wallet.rdns) && ApiController.state.excludedWallets.some((w) => w.rdns === wallet.rdns);
		const isNameExcluded = Boolean(wallet.name) && ApiController.state.excludedWallets.some((w) => HelpersUtil.isLowerCaseMatch(w.name, wallet.name));
		return isRDNSExcluded || isNameExcluded;
	}
};
const ConnectorUtil = {
	getConnectorsByType(connectors, recommended, featured) {
		const { customWallets } = OptionsController.state;
		const recent = StorageUtil.getRecentWallets();
		const filteredRecommended = WalletUtil.filterOutDuplicateWallets(recommended);
		const filteredFeatured = WalletUtil.filterOutDuplicateWallets(featured);
		const multiChain = connectors.filter((connector) => connector.type === "MULTI_CHAIN");
		const announced = connectors.filter((connector) => connector.type === "ANNOUNCED");
		const injected = connectors.filter((connector) => connector.type === "INJECTED");
		const external = connectors.filter((connector) => connector.type === "EXTERNAL");
		return {
			custom: customWallets,
			recent,
			external,
			multiChain,
			announced,
			injected,
			recommended: filteredRecommended,
			featured: filteredFeatured
		};
	},
	showConnector(connector) {
		const rdns = connector.info?.rdns;
		const isRDNSExcluded = Boolean(rdns) && ApiController.state.excludedWallets.some((wallet) => Boolean(wallet.rdns) && wallet.rdns === rdns);
		const isNameExcluded = Boolean(connector.name) && ApiController.state.excludedWallets.some((wallet) => HelpersUtil.isLowerCaseMatch(wallet.name, connector.name));
		if (connector.type === "INJECTED") {
			if (connector.name === "Browser Wallet") {
				if (!CoreHelperUtil.isMobile()) return false;
				if (CoreHelperUtil.isMobile() && !rdns && !ConnectionController.checkInstalled()) return false;
			}
			if (isRDNSExcluded || isNameExcluded) return false;
		}
		if ((connector.type === "ANNOUNCED" || connector.type === "EXTERNAL") && (isRDNSExcluded || isNameExcluded)) return false;
		return true;
	},
	getIsConnectedWithWC() {
		return Array.from(ChainController.state.chains.values()).some((chain) => {
			return ConnectorController.getConnectorId(chain.namespace) === ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
		});
	},
	getConnectorTypeOrder({ recommended, featured, custom, recent, announced, injected, multiChain, external, overriddenConnectors = OptionsController.state.features?.connectorTypeOrder ?? [] }) {
		const isConnectedWithWC = ConnectorUtil.getIsConnectedWithWC();
		const enabledConnectors = [
			{
				type: "walletConnect",
				isEnabled: OptionsController.state.enableWalletConnect && !isConnectedWithWC
			},
			{
				type: "recent",
				isEnabled: recent.length > 0
			},
			{
				type: "injected",
				isEnabled: [
					...injected,
					...announced,
					...multiChain
				].length > 0
			},
			{
				type: "featured",
				isEnabled: featured.length > 0
			},
			{
				type: "custom",
				isEnabled: custom && custom.length > 0
			},
			{
				type: "external",
				isEnabled: external.length > 0
			},
			{
				type: "recommended",
				isEnabled: recommended.length > 0
			}
		].filter((option) => option.isEnabled);
		const enabledConnectorTypes = new Set(enabledConnectors.map((option) => option.type));
		const prioritizedConnectors = overriddenConnectors.filter((type) => enabledConnectorTypes.has(type)).map((type) => ({
			type,
			isEnabled: true
		}));
		const remainingConnectors = enabledConnectors.filter(({ type: enabledConnectorType }) => {
			return !prioritizedConnectors.some(({ type: prioritizedConnectorType }) => prioritizedConnectorType === enabledConnectorType);
		});
		return Array.from(new Set([...prioritizedConnectors, ...remainingConnectors].map(({ type }) => type)));
	}
};
export { ConstantsUtil$2 as i, WalletUtil as n, HelpersUtil as r, ConnectorUtil as t };
