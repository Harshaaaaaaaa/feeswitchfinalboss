const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/secp256k1-B6ln1GTe.js","assets/index-DsXNkSEX.js","assets/index-Clfk3Kz3.css"])))=>i.map(i=>d[i]);
import { A as set, D as createStore, O as del, a as B, c as l, ht as __vitePreload, i as y, k as get$1, n as h, o as _, ot as import_eventemitter3, r as init_hooks_module, s as init_preact_module, st as secp256k1, t as T } from "./index-DsXNkSEX.js";
import { $ as getNodeError, $n as parseAbiParameter, $t as arrayRegex$1, A as padRight$1, An as toHex, At as CallExecutionError, B as toBigInt$2, Bn as AbiEventNotFoundError, Bt as prettyPrint, C as concat$2, Cn as hexToBytes, Ct as UnsupportedChainIdError, D as fromNumber$1, Dn as bytesToHex$1, Dt as HttpRequestError, E as fromBytes$4, En as boolToHex, Et as UserRejectedRequestError, F as from$9, Fn as trim, G as stringify$2, Gn as DecodeLogTopicsMismatch, Gt as decodeErrorResult, H as toNumber, Hn as AbiEventSignatureNotFoundError, Ht as formatEther, I as fromHex$5, In as pad, It as InvalidSerializableTransactionError, J as isAddressEqual, Jn as size, Jt as PositionOutOfBoundsError$1, K as BaseError$2, Kn as UnsupportedPackedAbiType, Kt as decodeAbiParameters, L as fromString$1, Ln as AbiDecodingDataSizeTooSmallError, Lt as TransactionNotFoundError, M as slice$4, Mn as hexToBool, Mt as ContractFunctionRevertedError, N as toNumber$1, Nn as hexToNumber, Nt as ContractFunctionZeroDataError, O as fromString$2, On as numberToHex, Ot as RpcRequestError, P as validate$5, Pn as hexToString, Pt as RawContractError, Q as extract$1, Qn as parseStructs, Qt as encodeAbiParameters, R as size$5, Rn as AbiDecodingZeroDataError, Rt as TransactionReceiptNotFoundError, S as IntegerOutOfRangeError$1, Sn as toBytes$2, St as UnknownRpcError, T as fromBoolean, Tn as toBytes$1, Tt as UnsupportedProviderMethodError, U as toString, Un as BytesSizeMismatchError$1, Ut as formatUnits, V as toBoolean, Vn as AbiEventSignatureEmptyTopicsError, Vt as formatGwei, W as trimLeft, Wn as DecodeLogDataMismatch, Wt as stringify$1, X as serializeStateOverride, Xn as formatAbiItem, Xt as parseAccount, Y as assertRequest, Yn as isHex, Yt as encodeFunctionData, Z as formatTransactionRequest, Zn as parseAbi, Zt as getAbiItem, _ as multicall3Abi, _n as aoutput$1, _t as ResourceUnavailableRpcError, a as createBatchScheduler, an as concatHex, ar as modifiers, at as DuplicateIdError, b as universalResolverReverseAbi, bn as createView$1, bt as UnauthorizedProviderError, c as getChainContractAddress, cn as getAddress, ct as InvalidParamsRpcError, d as erc6492SignatureValidatorByteCode, dn as toEventSelector, dt as LimitExceededRpcError, en as bytesRegex$1, er as parseSignature$1, et as UnknownNodeError, f as multicall3Bytecode, fn as keccak256, ft as MethodNotFoundRpcError, g as erc6492SignatureValidatorAbi, gn as aexists$1, gt as ResourceNotFoundRpcError, h as erc20Abi, hn as abytes$1, ht as ProviderDisconnectedError, i as call, in as concat$1, ir as isStructSignature, it as ChainDisconnectedError, j as size$4, jn as hexToBigInt, jt as ContractFunctionExecutionError, k as padLeft$1, kn as stringToHex, kt as TimeoutError, l as encodeDeployData, ln as LruMap$1, lt as InvalidRequestRpcError, m as erc1271Abi, mn as Hash$1, mt as ParseRpcError, n as localBatchGatewayUrl, nn as slice, nr as InvalidAbiParametersError, nt as AtomicityNotSupportedError, o as withResolvers, on as isAddress, or as formatAbiItem$1, ot as InternalRpcError, p as addressResolverAbi, pn as keccak_256, pt as MethodNotSupportedRpcError, q as decodeFunctionResult, qn as BaseError, qt as createCursor, r as decodeFunctionData, rn as sliceHex, rr as InvalidAbiItemError, rt as BundleTooLargeError, s as getCallError, sn as checksumAddress, sr as formatAbiParameters, st as InvalidInputRpcError, tn as integerRegex$1, tr as splitParameters, tt as AtomicReadyWalletRejectedUpgradeError, u as deploylessCallViaBytecodeBytecode, un as InvalidAddressError$1, ut as JsonRpcVersionUnsupportedError, v as textResolverAbi, vn as clean$1, vt as SwitchChainError, w as from$10, wn as stringToBytes, wt as UnsupportedNonOptionalCapabilityError, x as toRpc, xn as rotr$1, xt as UnknownBundleIdError, y as universalResolverResolveAbi, yn as createHasher$1, yt as TransactionRejectedRpcError, z as slice$3, zn as AbiEncodingLengthMismatchError, zt as WaitForTransactionReceiptTimeoutError } from "./localBatchGatewayRequest-CVEp0kY3.js";
var package_default = {
	name: "@base-org/account",
	version: "1.1.1",
	description: "Base Account SDK",
	keywords: [
		"base",
		"account",
		"sdk",
		"web3"
	],
	publishConfig: { "access": "public" },
	type: "module",
	main: "dist/index.js",
	types: "dist/index.d.ts",
	browser: "dist/base-account.min.js",
	exports: {
		".": {
			"types": "./dist/index.d.ts",
			"import": "./dist/index.js",
			"require": "./dist/index.js"
		},
		"./payment": {
			"types": "./dist/interface/payment/index.d.ts",
			"import": "./dist/interface/payment/index.js",
			"require": "./dist/interface/payment/index.js"
		},
		"./ui-assets": {
			"types": "./dist/ui/assets/index.d.ts",
			"import": "./dist/ui/assets/index.js",
			"require": "./dist/ui/assets/index.js"
		}
	},
	files: [
		"dist",
		"README.md",
		"LICENSE"
	],
	sideEffects: false,
	repository: "https://github.com/base/account-sdk.git",
	author: "Base",
	license: "Apache-2.0",
	scripts: {
		"clean": "rm -rf dist && rm -rf node_modules",
		"pretest": "node compile-assets.cjs",
		"test": "vitest",
		"test:coverage": "vitest --coverage",
		"prebuild": "rm -rf ./dist",
		"build": "node compile-assets.cjs && tsc -p ./tsconfig.build.json && tsc-alias && yarn build:browser",
		"build:browser": "rollup -c rollup.config.js",
		"prepublishOnly": "yarn build",
		"dev": "yarn build && tsc --watch & nodemon --watch dist --delay 1 --exec tsc-alias",
		"typecheck": "tsc --noEmit",
		"lint": "biome lint .",
		"format": "biome format . --write",
		"format:check": "biome check . --formatter-enabled=true --linter-enabled=false --organize-imports-enabled=false",
		"size": "size-limit"
	},
	dependencies: {
		"@noble/hashes": "1.4.0",
		"clsx": "1.2.1",
		"eventemitter3": "5.0.1",
		"idb-keyval": "6.2.1",
		"ox": "0.6.9",
		"preact": "10.24.2",
		"viem": "^2.31.7",
		"zustand": "5.0.3"
	},
	devDependencies: {
		"@rollup/plugin-commonjs": "^25.0.7",
		"@rollup/plugin-json": "^6.1.0",
		"@rollup/plugin-node-resolve": "^15.2.3",
		"@rollup/plugin-replace": "^5.0.5",
		"@rollup/plugin-typescript": "^11.1.6",
		"@size-limit/preset-big-lib": "^11.1.6",
		"@testing-library/jest-dom": "^6.5.0",
		"@testing-library/preact": "^3.2.4",
		"@types/node": "^14.18.54",
		"@vitest/coverage-v8": "2.1.2",
		"@vitest/web-worker": "3.2.1",
		"fake-indexeddb": "^6.0.0",
		"glob": "^11.0.0",
		"jest-websocket-mock": "^2.4.0",
		"jsdom": "^25.0.1",
		"nodemon": "^3.1.0",
		"rollup": "^4.9.6",
		"rollup-plugin-terser": "^7.0.2",
		"sass": "^1.64.1",
		"size-limit": "^11.1.6",
		"tsc-alias": "^1.8.8",
		"tslib": "^2.6.0",
		"typescript": "^5.1.6",
		"vitest": "^2.1.9"
	},
	"size-limit": [{
		"path": "./dist/index.js",
		"limit": "31 KB",
		"import": "*"
	}]
};
const CB_KEYS_URL = "https://keys.coinbase.com/connect";
const CB_WALLET_RPC_URL = "https://rpc.wallet.coinbase.com";
const PACKAGE_NAME = package_default.name;
const PACKAGE_VERSION = package_default.version;
function createJSONStorage(getStorage, options) {
	let storage$1;
	try {
		storage$1 = getStorage();
	} catch (e) {
		return;
	}
	return {
		getItem: (name$1) => {
			var _a;
			const parse = (str2) => {
				if (str2 === null) return null;
				return JSON.parse(str2, options == null ? void 0 : options.reviver);
			};
			const str = (_a = storage$1.getItem(name$1)) != null ? _a : null;
			if (str instanceof Promise) return str.then(parse);
			return parse(str);
		},
		setItem: (name$1, newValue) => storage$1.setItem(name$1, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
		removeItem: (name$1) => storage$1.removeItem(name$1)
	};
}
var toThenable = (fn) => (input) => {
	try {
		const result = fn(input);
		if (result instanceof Promise) return result;
		return {
			then(onFulfilled) {
				return toThenable(onFulfilled)(result);
			},
			catch(_onRejected) {
				return this;
			}
		};
	} catch (e) {
		return {
			then(_onFulfilled) {
				return this;
			},
			catch(onRejected) {
				return toThenable(onRejected)(e);
			}
		};
	}
};
var persistImpl = (config$1, baseOptions) => (set$1, get$2, api) => {
	let options = {
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => state,
		version: 0,
		merge: (persistedState, currentState) => ({
			...currentState,
			...persistedState
		}),
		...baseOptions
	};
	let hasHydrated = false;
	const hydrationListeners = /* @__PURE__ */ new Set();
	const finishHydrationListeners = /* @__PURE__ */ new Set();
	let storage$1 = options.storage;
	if (!storage$1) return config$1((...args) => {
		console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
		set$1(...args);
	}, get$2, api);
	const setItem = () => {
		const state = options.partialize({ ...get$2() });
		return storage$1.setItem(options.name, {
			state,
			version: options.version
		});
	};
	const savedSetState = api.setState;
	api.setState = (state, replace) => {
		savedSetState(state, replace);
		setItem();
	};
	const configResult = config$1((...args) => {
		set$1(...args);
		setItem();
	}, get$2, api);
	api.getInitialState = () => configResult;
	let stateFromStorage;
	const hydrate = () => {
		var _a, _b;
		if (!storage$1) return;
		hasHydrated = false;
		hydrationListeners.forEach((cb) => {
			var _a2;
			return cb((_a2 = get$2()) != null ? _a2 : configResult);
		});
		const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get$2()) != null ? _a : configResult)) || void 0;
		return toThenable(storage$1.getItem.bind(storage$1))(options.name).then((deserializedStorageValue) => {
			if (deserializedStorageValue) if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
				if (options.migrate) {
					const migration = options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
					if (migration instanceof Promise) return migration.then((result) => [true, result]);
					return [true, migration];
				}
				console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
			} else return [false, deserializedStorageValue.state];
			return [false, void 0];
		}).then((migrationResult) => {
			var _a2;
			const [migrated, migratedState] = migrationResult;
			stateFromStorage = options.merge(migratedState, (_a2 = get$2()) != null ? _a2 : configResult);
			set$1(stateFromStorage, true);
			if (migrated) return setItem();
		}).then(() => {
			postRehydrationCallback?.(stateFromStorage, void 0);
			stateFromStorage = get$2();
			hasHydrated = true;
			finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
		}).catch((e) => {
			postRehydrationCallback?.(void 0, e);
		});
	};
	api.persist = {
		setOptions: (newOptions) => {
			options = {
				...options,
				...newOptions
			};
			if (newOptions.storage) storage$1 = newOptions.storage;
		},
		clearStorage: () => {
			storage$1?.removeItem(options.name);
		},
		getOptions: () => options,
		rehydrate: () => hydrate(),
		hasHydrated: () => hasHydrated,
		onHydrate: (cb) => {
			hydrationListeners.add(cb);
			return () => {
				hydrationListeners.delete(cb);
			};
		},
		onFinishHydration: (cb) => {
			finishHydrationListeners.add(cb);
			return () => {
				finishHydrationListeners.delete(cb);
			};
		}
	};
	if (!options.skipHydration) hydrate();
	return stateFromStorage || configResult;
};
var persist = persistImpl;
var createStoreImpl = (createState) => {
	let state;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (partial, replace) => {
		const nextState = typeof partial === "function" ? partial(state) : partial;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
			listeners.forEach((listener) => listener(state, previousState));
		}
	};
	const getState = () => state;
	const getInitialState = () => initialState;
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	const api = {
		setState,
		getState,
		getInitialState,
		subscribe
	};
	const initialState = state = createState(setState, getState, api);
	return api;
};
var createStore$1 = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var createChainSlice = () => {
	return { chains: [] };
};
var createKeysSlice = () => {
	return { keys: {} };
};
var createAccountSlice = () => {
	return { account: {} };
};
var createSubAccountSlice = () => {
	return { subAccount: void 0 };
};
var createSubAccountConfigSlice = () => {
	return { subAccountConfig: {} };
};
var createSpendPermissionsSlice = () => {
	return { spendPermissions: [] };
};
var createConfigSlice = () => {
	return { config: { version: PACKAGE_VERSION } };
};
const sdkstore = createStore$1(persist((...args) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, createChainSlice(...args)), createKeysSlice(...args)), createAccountSlice(...args)), createSubAccountSlice(...args)), createSpendPermissionsSlice(...args)), createConfigSlice(...args)), createSubAccountConfigSlice(...args)), {
	name: "base-acc-sdk.store",
	storage: createJSONStorage(() => localStorage),
	partialize: (state) => {
		return {
			chains: state.chains,
			keys: state.keys,
			account: state.account,
			subAccount: state.subAccount,
			spendPermissions: state.spendPermissions,
			config: state.config
		};
	}
}));
const subAccountsConfig = {
	get: () => sdkstore.getState().subAccountConfig,
	set: (subAccountConfig) => {
		sdkstore.setState((state) => ({ subAccountConfig: Object.assign(Object.assign({}, state.subAccountConfig), subAccountConfig) }));
	},
	clear: () => {
		sdkstore.setState({ subAccountConfig: {} });
	}
};
const subAccounts = {
	get: () => sdkstore.getState().subAccount,
	set: (subAccount) => {
		sdkstore.setState((state) => ({ subAccount: state.subAccount ? Object.assign(Object.assign({}, state.subAccount), subAccount) : Object.assign({ address: subAccount.address }, subAccount) }));
	},
	clear: () => {
		sdkstore.setState({ subAccount: void 0 });
	}
};
const spendPermissions = {
	get: () => sdkstore.getState().spendPermissions,
	set: (spendPermissions$1) => {
		sdkstore.setState({ spendPermissions: spendPermissions$1 });
	},
	clear: () => {
		sdkstore.setState({ spendPermissions: [] });
	}
};
const account = {
	get: () => sdkstore.getState().account,
	set: (account$1) => {
		sdkstore.setState((state) => ({ account: Object.assign(Object.assign({}, state.account), account$1) }));
	},
	clear: () => {
		sdkstore.setState({ account: {} });
	}
};
const chains = {
	get: () => sdkstore.getState().chains,
	set: (chains$1) => {
		sdkstore.setState({ chains: chains$1 });
	},
	clear: () => {
		sdkstore.setState({ chains: [] });
	}
};
const keys = {
	get: (key) => sdkstore.getState().keys[key],
	set: (key, value) => {
		sdkstore.setState((state) => ({ keys: Object.assign(Object.assign({}, state.keys), { [key]: value }) }));
	},
	clear: () => {
		sdkstore.setState({ keys: {} });
	}
};
const config = {
	get: () => sdkstore.getState().config,
	set: (config$1) => {
		sdkstore.setState((state) => ({ config: Object.assign(Object.assign({}, state.config), config$1) }));
	}
};
var actions = {
	subAccounts,
	subAccountsConfig,
	spendPermissions,
	account,
	chains,
	keys,
	config
};
const store = Object.assign(Object.assign({}, sdkstore), actions);
const TELEMETRY_SCRIPT_CONTENT = `!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClientAnalytics=t():e.ClientAnalytics=t()}(this,(function(){return(()=>{var e={792:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},562:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],a=0;a<4;a++)8*r+6*a<=8*e.length?n.push(t.charAt(i>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}},e.exports=n},335:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},762:(e,t,n)=>{var r,i,a,o,s;r=n(562),i=n(792).utf8,a=n(335),o=n(792).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):i.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,d=-1732584194,p=271733878,m=0;m<n.length;m++)n[m]=16711935&(n[m]<<8|n[m]>>>24)|4278255360&(n[m]<<24|n[m]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var f=s._ff,v=s._gg,g=s._hh,b=s._ii;for(m=0;m<n.length;m+=16){var h=u,w=l,y=d,T=p;u=f(u,l,d,p,n[m+0],7,-680876936),p=f(p,u,l,d,n[m+1],12,-389564586),d=f(d,p,u,l,n[m+2],17,606105819),l=f(l,d,p,u,n[m+3],22,-1044525330),u=f(u,l,d,p,n[m+4],7,-176418897),p=f(p,u,l,d,n[m+5],12,1200080426),d=f(d,p,u,l,n[m+6],17,-1473231341),l=f(l,d,p,u,n[m+7],22,-45705983),u=f(u,l,d,p,n[m+8],7,1770035416),p=f(p,u,l,d,n[m+9],12,-1958414417),d=f(d,p,u,l,n[m+10],17,-42063),l=f(l,d,p,u,n[m+11],22,-1990404162),u=f(u,l,d,p,n[m+12],7,1804603682),p=f(p,u,l,d,n[m+13],12,-40341101),d=f(d,p,u,l,n[m+14],17,-1502002290),u=v(u,l=f(l,d,p,u,n[m+15],22,1236535329),d,p,n[m+1],5,-165796510),p=v(p,u,l,d,n[m+6],9,-1069501632),d=v(d,p,u,l,n[m+11],14,643717713),l=v(l,d,p,u,n[m+0],20,-373897302),u=v(u,l,d,p,n[m+5],5,-701558691),p=v(p,u,l,d,n[m+10],9,38016083),d=v(d,p,u,l,n[m+15],14,-660478335),l=v(l,d,p,u,n[m+4],20,-405537848),u=v(u,l,d,p,n[m+9],5,568446438),p=v(p,u,l,d,n[m+14],9,-1019803690),d=v(d,p,u,l,n[m+3],14,-187363961),l=v(l,d,p,u,n[m+8],20,1163531501),u=v(u,l,d,p,n[m+13],5,-1444681467),p=v(p,u,l,d,n[m+2],9,-51403784),d=v(d,p,u,l,n[m+7],14,1735328473),u=g(u,l=v(l,d,p,u,n[m+12],20,-1926607734),d,p,n[m+5],4,-378558),p=g(p,u,l,d,n[m+8],11,-2022574463),d=g(d,p,u,l,n[m+11],16,1839030562),l=g(l,d,p,u,n[m+14],23,-35309556),u=g(u,l,d,p,n[m+1],4,-1530992060),p=g(p,u,l,d,n[m+4],11,1272893353),d=g(d,p,u,l,n[m+7],16,-155497632),l=g(l,d,p,u,n[m+10],23,-1094730640),u=g(u,l,d,p,n[m+13],4,681279174),p=g(p,u,l,d,n[m+0],11,-358537222),d=g(d,p,u,l,n[m+3],16,-722521979),l=g(l,d,p,u,n[m+6],23,76029189),u=g(u,l,d,p,n[m+9],4,-640364487),p=g(p,u,l,d,n[m+12],11,-421815835),d=g(d,p,u,l,n[m+15],16,530742520),u=b(u,l=g(l,d,p,u,n[m+2],23,-995338651),d,p,n[m+0],6,-198630844),p=b(p,u,l,d,n[m+7],10,1126891415),d=b(d,p,u,l,n[m+14],15,-1416354905),l=b(l,d,p,u,n[m+5],21,-57434055),u=b(u,l,d,p,n[m+12],6,1700485571),p=b(p,u,l,d,n[m+3],10,-1894986606),d=b(d,p,u,l,n[m+10],15,-1051523),l=b(l,d,p,u,n[m+1],21,-2054922799),u=b(u,l,d,p,n[m+8],6,1873313359),p=b(p,u,l,d,n[m+15],10,-30611744),d=b(d,p,u,l,n[m+6],15,-1560198380),l=b(l,d,p,u,n[m+13],21,1309151649),u=b(u,l,d,p,n[m+4],6,-145523070),p=b(p,u,l,d,n[m+11],10,-1120210379),d=b(d,p,u,l,n[m+2],15,718787259),l=b(l,d,p,u,n[m+9],21,-343485551),u=u+h>>>0,l=l+w>>>0,d=d+y>>>0,p=p+T>>>0}return r.endian([u,l,d,p])})._ff=function(e,t,n,r,i,a,o){var s=e+(t&n|~t&r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._gg=function(e,t,n,r,i,a,o){var s=e+(t&r|n&~r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._hh=function(e,t,n,r,i,a,o){var s=e+(t^n^r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._ii=function(e,t,n,r,i,a,o){var s=e+(n^(t|~r))+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}},2:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Perfume:()=>ze,incrementUjNavigation:()=>Le,markStep:()=>Re,markStepOnce:()=>qe});var r,i,a={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{},enableNavigationTracking:!0},o=window,s=o.console,c=o.navigator,u=o.performance,l=function(){return c.deviceMemory},d=function(){return c.hardwareConcurrency},p="mark.",m=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},f="4g",v=!1,g={},b={value:0},h={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},w={value:0},y={value:0},T={},k={isHidden:!1,didChange:!1},_=function(){k.isHidden=!1,document.hidden&&(k.isHidden=document.hidden,k.didChange=!0)},S=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){s.warn("Perfume.js:",e)}return null},E=function(){return!!(d()&&d()<=4)||!!(l()&&l()<=4)},x=function(e,t){switch(e){case"slow-2g":case"2g":case"3g":return!0;default:return E()||t}},O=function(e){return parseFloat(e.toFixed(4))},j=function(e){return"number"!=typeof e?null:O(e/Math.pow(1024,2))},N=function(e,t,n,r,i){var s,u=function(){a.analyticsTracker&&(k.isHidden&&!["CLS","INP"].includes(e)||a.analyticsTracker({attribution:r,metricName:e,data:t,navigatorInformation:c?{deviceMemory:l()||0,hardwareConcurrency:d()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:E(),isLowEndExperience:x(f,v)}:{},rating:n,navigationType:i}))};["CLS","INP"].includes(e)?u():(s=u,"requestIdleCallback"in o?o.requestIdleCallback(s,{timeout:3e3}):s())},I=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<b.value)){var t=e.duration-50;t>0&&(w.value+=t,y.value+=t)}}))};!function(e){e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable"}(r||(r={}));var P,M,B,C,D,A=((i={})[r.instant]={vitalsThresholds:[100,200],maxOutlierThreshold:1e4},i[r.quick]={vitalsThresholds:[200,500],maxOutlierThreshold:1e4},i[r.moderate]={vitalsThresholds:[500,1e3],maxOutlierThreshold:1e4},i[r.slow]={vitalsThresholds:[1e3,2e3],maxOutlierThreshold:1e4},i[r.unavoidable]={vitalsThresholds:[2e3,5e3],maxOutlierThreshold:2e4},i),L={RT:[100,200],TBT:[200,600],NTBT:[200,600]},U=function(e,t){return L[e]?t<=L[e][0]?"good":t<=L[e][1]?"needsImprovement":"poor":null},R=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=O(t[e]))})),N(e,t,null,n||{})},q=function(e){var t=e.attribution,n=e.name,r=e.rating,i=e.value,o=e.navigationType;"FCP"===n&&(b.value=i),["FCP","LCP"].includes(n)&&!T[0]&&(T[0]=S("longtask",I)),"FID"===n&&setTimeout((function(){k.didChange||(q({attribution:t,name:"TBT",rating:U("TBT",w.value),value:w.value,navigationType:o}),R("dataConsumption",h.value))}),1e4);var s=O(i);s<=a.maxTime&&s>=0&&N(n,s,r,t,o)},F=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},z=function(e){if("loading"===document.readyState)return"loading";var t=F();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},K=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},$=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:K(r)+(r.className&&r.className.length?"."+r.className.replace(/\\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},Q=-1,W=function(){return Q},H=function(e){addEventListener("pageshow",(function(t){t.persisted&&(Q=t.timeStamp,e(t))}),!0)},V=function(){var e=F();return e&&e.activationStart||0},J=function(e,t){var n=F(),r="navigate";return W()>=0?r="back-forward-cache":n&&(r=document.prerendering||V()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},X=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},G=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Z=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},Y=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},ee=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},te=-1,ne=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},re=function(e){"hidden"===document.visibilityState&&te>-1&&(te="visibilitychange"===e.type?e.timeStamp:0,ae())},ie=function(){addEventListener("visibilitychange",re,!0),addEventListener("prerenderingchange",re,!0)},ae=function(){removeEventListener("visibilitychange",re,!0),removeEventListener("prerenderingchange",re,!0)},oe=function(){return te<0&&(te=ne(),ie(),H((function(){setTimeout((function(){te=ne(),ie()}),0)}))),{get firstHiddenTime(){return te}}},se=function(e,t){t=t||{},ee((function(){var n,r=[1800,3e3],i=oe(),a=J("FCP"),o=X("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-V(),0),a.entries.push(e),n(!0)))}))}));o&&(n=Z(e,a,r,t.reportAllChanges),H((function(i){a=J("FCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,n(!0)}))})))}))},ce={passive:!0,capture:!0},ue=new Date,le=function(e,t){P||(P=t,M=e,B=new Date,me(removeEventListener),de())},de=function(){if(M>=0&&M<B-ue){var e={entryType:"first-input",name:P.type,target:P.target,cancelable:P.cancelable,startTime:P.timeStamp,processingStart:P.timeStamp+M};C.forEach((function(t){t(e)})),C=[]}},pe=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){le(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,ce),removeEventListener("pointercancel",r,ce)};addEventListener("pointerup",n,ce),addEventListener("pointercancel",r,ce)}(t,e):le(t,e)}},me=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,pe,ce)}))},fe=0,ve=1/0,ge=0,be=function(e){e.forEach((function(e){e.interactionId&&(ve=Math.min(ve,e.interactionId),ge=Math.max(ge,e.interactionId),fe=ge?(ge-ve)/7+1:0)}))},he=function(){return D?fe:performance.interactionCount||0},we=0,ye=function(){return he()-we},Te=[],ke={},_e=function(e){var t=Te[Te.length-1],n=ke[e.interactionId];if(n||Te.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ke[r.id]=r,Te.push(r)}Te.sort((function(e,t){return t.latency-e.latency})),Te.splice(10).forEach((function(e){delete ke[e.id]}))}},Se={},Ee=function e(t){document.prerendering?ee((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},xe=function(e,t){t=t||{};var n=[800,1800],r=J("TTFB"),i=Z(e,r,n,t.reportAllChanges);Ee((function(){var a=F();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;r.value=Math.max(o-V(),0),r.entries=[a],i(!0),H((function(){r=J("TTFB",0),(i=Z(e,r,n,t.reportAllChanges))(!0)}))}}))},Oe=function(e){e.forEach((function(e){e.identifier&&q({attribution:{identifier:e.identifier},name:"ET",rating:null,value:e.startTime})}))},je=function(e){e.forEach((function(e){if(a.isResourceTiming&&R("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;h.value[e.initiatorType]+=t,h.value.total+=t}}))},Ne=function(){!function(e,t){xe((function(e){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(e),function(e){e.value>0&&q(e)}(e)}),t)}(0,a.reportOptions.ttfb),function(e,t){!function(e,t){t=t||{},ee((function(){var e,n=[.1,.25],r=J("CLS"),i=-1,a=0,o=[],s=function(e){i>-1&&function(e){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:$(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:z(t.startTime)})}}var r;e.attribution={}}(e),function(e){q(e)}(e)}(e)},c=function(t){t.forEach((function(t){if(!t.hadRecentInput){var n=o[0],i=o[o.length-1];a&&t.startTime-i.startTime<1e3&&t.startTime-n.startTime<5e3?(a+=t.value,o.push(t)):(a=t.value,o=[t]),a>r.value&&(r.value=a,r.entries=o,e())}}))},u=X("layout-shift",c);u&&(e=Z(s,r,n,t.reportAllChanges),se((function(t){i=t.value,r.value<0&&(r.value=0,e())})),G((function(){c(u.takeRecords()),e(!0)})),H((function(){a=0,i=-1,r=J("CLS",0),e=Z(s,r,n,t.reportAllChanges),Y((function(){return e()}))})))}))}(0,t)}(0,a.reportOptions.cls),function(e,t){se((function(e){!function(e){if(e.entries.length){var t=F(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:z(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:z(W())}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[100,300],i=oe(),a=J("FID"),o=function(e){e.startTime<i.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},s=function(e){e.forEach(o)},c=X("first-input",s);n=Z(e,a,r,t.reportAllChanges),c&&G((function(){s(c.takeRecords()),c.disconnect()}),!0),c&&H((function(){var i;a=J("FID"),n=Z(e,a,r,t.reportAllChanges),C=[],M=-1,P=null,me(addEventListener),i=o,C.push(i),de()}))}))}((function(e){!function(e){var t=e.entries[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fid),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[2500,4e3],i=oe(),a=J("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-V(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n())}},s=X("largest-contentful-paint",o);if(s){n=Z(e,a,r,t.reportAllChanges);var c=function(){Se[a.id]||(o(s.takeRecords()),s.disconnect(),Se[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),G(c,!0),H((function(i){a=J("LCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,Se[a.id]=!0,n(!0)}))}))}}))}((function(e){!function(e){if(e.entries.length){var t=F();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],a=Math.max(0,t.responseStart-n),o=Math.max(a,i?(i.requestStart||i.startTime)-n:0),s=Math.max(o,i?i.responseEnd-n:0),c=Math.max(s,r?r.startTime-n:0),u={element:$(r.element),timeToFirstByte:a,resourceLoadDelay:o-a,resourceLoadTime:s-o,elementRenderDelay:c-s,navigationEntry:t,lcpEntry:r};return r.url&&(u.url=r.url),i&&(u.lcpResourceEntry=i),void(e.attribution=u)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.lcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n=[200,500];"interactionCount"in performance||D||(D=X("event",be,{type:"event",buffered:!0,durationThreshold:0}));var r,i=J("INP"),a=function(e){e.forEach((function(e){e.interactionId&&_e(e),"first-input"===e.entryType&&!Te.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&_e(e)}));var t,n=(t=Math.min(Te.length-1,Math.floor(ye()/50)),Te[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=X("event",a,{durationThreshold:t.durationThreshold||40});r=Z(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),G((function(){a(o.takeRecords()),i.value<0&&ye()>0&&(i.value=0,i.entries=[]),r(!0)})),H((function(){Te=[],we=he(),i=J("INP"),r=Z(e,i,n,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}((function(e){return q(e)}),a.reportOptions.inp),a.isResourceTiming&&S("resource",je),a.isElementTiming&&S("element",Oe)},Ie=function(e){var t="usageDetails"in e?e.usageDetails:{};R("storageEstimate",{quota:j(e.quota),usage:j(e.usage),caches:j(t.caches),indexedDB:j(t.indexedDB),serviceWorker:j(t.serviceWorkerRegistrations)})},Pe={finalMarkToStepsMap:{},startMarkToStepsMap:{},active:{},navigationSteps:{}},Me=function(e){delete Pe.active[e]},Be=function(){return Pe.navigationSteps},Ce=function(e){var t;return null!==(t=Be()[e])&&void 0!==t?t:{}},De=function(e,t,n){var r="step."+e,i=u.getEntriesByName(p+t).length>0;if(u.getEntriesByName(p+n).length>0&&a.steps){var o=A[a.steps[e].threshold],s=o.maxOutlierThreshold,c=o.vitalsThresholds;if(i){var l=u.measure(r,p+t,p+n),d=l.duration;if(d<=s){var m=function(e,t){return e<=t[0]?"good":e<=t[1]?"needsImprovement":"poor"}(d,c);d>=0&&(N("userJourneyStep",d,m,{stepName:e},void 0),u.measure("step.".concat(e,"_vitals_").concat(m),{start:l.startTime+l.duration,end:l.startTime+l.duration,detail:{type:"stepVital",duration:d}}))}}}},Ae=function(){var e=Be(),t=Pe.startMarkToStepsMap,n=Object.keys(e).length;if(0===n)return{};var r={},i=n-1,a=Ce(i);if(Object.keys(a).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))})),n>1){var o=Ce(i-1);Object.keys(o).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))}))}return r},Le=function(){var e,t=Object.keys(Pe.navigationSteps).length;Pe.navigationSteps[t]={};var n=Ae();null===(e=a.onMarkStep)||void 0===e||e.call(a,"",Object.keys(n))},Ue=function(e){var t,n,r,i,o,s,c;if(Pe.finalMarkToStepsMap[e]){!function(e){var t=Pe.navigationSteps,n=Pe.finalMarkToStepsMap,r=Object.keys(t).length;if(0!==r){var i=r-1,a=Ce(i);if(a&&n[e]){var o=n[e];o&&Object.keys(o).forEach((function(e){if(a[e]){var n=Ce(i)||{};n[e]=!1,t[i]=n}if(r>1){var o=i-1,s=Ce(o);s[e]&&(s[e]=!1,t[o]=s)}}))}}}(e);var u=Pe.finalMarkToStepsMap[e];Object.keys(u).forEach((function(t){var n=u[t];n.forEach(Me),Promise.all(n.map((function(n){return function(e,t,n,r){return new(n||(n=Promise))((function(e,t){function i(e){try{o(r.next(e))}catch(e){t(e)}}function a(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}o((r=r.apply(undefined,[])).next())}))}(0,0,void 0,(function(){return function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(r){switch(r.label){case 0:return[4,De(n,t,e)];case 1:return r.sent(),[2]}}))}))}))).catch((function(){}))}))}else r=e,i=Pe.navigationSteps,o=Object.keys(i).length,(c=Ce(s=(o>0?o:1)-1)||[])[r]=!0,i[s]=c,function(e){var t,n=null!==(t=Pe.startMarkToStepsMap[e])&&void 0!==t?t:[];Object.keys(n).forEach((function(e){Pe.active[e]||(Pe.active[e]=!0)}))}(e);if(a.enableNavigationTracking){var l=Ae();null===(t=a.onMarkStep)||void 0===t||t.call(a,e,Object.keys(l))}else null===(n=a.onMarkStep)||void 0===n||n.call(a,e,Object.keys(Pe.active))},Re=function(e){u.mark(p+e),Ue(e)},qe=function(e){0===u.getEntriesByName(p+e).length&&(u.mark(p+e),Ue(e))},Fe=0,ze=function(){function e(e){if(void 0===e&&(e={}),this.v="9.0.0-rc.3",a.analyticsTracker=e.analyticsTracker,a.isResourceTiming=!!e.resourceTiming,a.isElementTiming=!!e.elementTiming,a.maxTime=e.maxMeasureTime||a.maxTime,a.reportOptions=e.reportOptions||a.reportOptions,a.steps=e.steps,a.onMarkStep=e.onMarkStep,a.enableNavigationTracking=e.enableNavigationTracking,m()){"PerformanceObserver"in o&&Ne(),void 0!==document.hidden&&document.addEventListener("visibilitychange",_);var t=function(){if(!m())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart,redirectTime:e.redirectEnd-e.redirectStart}}();R("navigationTiming",t),t.redirectTime&&q({attribution:{},name:"RT",rating:U("RT",t.redirectTime),value:t.redirectTime}),R("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(f=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(Ie),a.steps&&a.steps&&(Pe.startMarkToStepsMap={},Pe.finalMarkToStepsMap={},Pe.active={},Pe.navigationSteps={},Object.entries(a.steps).forEach((function(e){var t,n,r=e[0],i=e[1].marks,a=i[0],o=i[1],s=null!==(n=Pe.startMarkToStepsMap[a])&&void 0!==n?n:{};if(s[r]=!0,Pe.startMarkToStepsMap[a]=s,Pe.finalMarkToStepsMap[o]){var c=Pe.finalMarkToStepsMap[o][a]||[];c.push(r),Pe.finalMarkToStepsMap[o][a]=c}else Pe.finalMarkToStepsMap[o]=((t={})[a]=[r],t)})))}}return e.prototype.start=function(e){m()&&!g[e]&&(g[e]=!0,u.mark("mark_".concat(e,"_start")))},e.prototype.end=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n=!0),m()&&g[e]){u.mark("mark_".concat(e,"_end")),delete g[e];var r=function(e){u.measure(e,"mark_".concat(e,"_start"),"mark_".concat(e,"_end"));var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e);n&&R(e,O(r),t)}},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete g[e],u.clearMarks&&(u.clearMarks("mark_".concat(e,"_start")),u.clearMarks("mark_".concat(e,"_end")))},e.prototype.markNTBT=function(){var e=this;this.start("ntbt"),y.value=0,clearTimeout(Fe),Fe=setTimeout((function(){e.end("ntbt",{},!1),q({attribution:{},name:"NTBT",rating:U("NTBT",y.value),value:y.value}),y.value=0}),2e3)},e}()},426:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,i={};function a(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function o(){}function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=a.prototype;var c=s.prototype=new o;c.constructor=s,r(c,a.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var u={current:null};t.useCallback=function(e,t){return u.current.useCallback(e,t)},t.useEffect=function(e,t){return u.current.useEffect(e,t)},t.useRef=function(e){return u.current.useRef(e)}},784:(e,t,n)=>{"use strict";e.exports=n(426)},353:function(e,t,n){var r;!function(i,a){"use strict";var o="function",s="undefined",c="object",u="string",l="major",d="model",p="name",m="type",f="vendor",v="version",g="architecture",b="console",h="mobile",w="tablet",y="smarttv",T="wearable",k="embedded",_="Amazon",S="Apple",E="ASUS",x="BlackBerry",O="Browser",j="Chrome",N="Firefox",I="Google",P="Huawei",M="LG",B="Microsoft",C="Motorola",D="Opera",A="Samsung",L="Sharp",U="Sony",R="Xiaomi",q="Zebra",F="Facebook",z="Chromium OS",K="Mac OS",$=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},Q=function(e,t){return typeof e===u&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===u)return e=e.replace(/^\\s\\s*/,""),typeof t===s?e:e.substring(0,350)},V=function(e,t){for(var n,r,i,s,u,l,d=0;d<t.length&&!u;){var p=t[d],m=t[d+1];for(n=r=0;n<p.length&&!u&&p[n];)if(u=p[n++].exec(e))for(i=0;i<m.length;i++)l=u[++r],typeof(s=m[i])===c&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):a:this[s[0]]=l?s[1].call(this,l,s[2]):a:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):a):this[s]=l||a;d+=2}},J=function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(Q(t[n][r],e))return"?"===n?a:n}else if(Q(t[n],e))return"?"===n?a:n;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\\b(?:crmo|crios)\\/([\\w\\.]+)/i],[v,[p,"Chrome"]],[/edg(?:e|ios|a)?\\/([\\w\\.]+)/i],[v,[p,"Edge"]],[/(opera mini)\\/([-\\w\\.]+)/i,/(opera [mobiletab]{3,6})\\b.+version\\/([-\\w\\.]+)/i,/(opera)(?:.+version\\/|[\\/ ]+)([\\w\\.]+)/i],[p,v],[/opios[\\/ ]+([\\w\\.]+)/i],[v,[p,D+" Mini"]],[/\\bopr\\/([\\w\\.]+)/i],[v,[p,D]],[/(kindle)\\/([\\w\\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\\/ ]?([\\w\\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\\/ ]?([\\w\\.]*)/i,/(ba?idubrowser)[\\/ ]?([\\w\\.]+)/i,/(?:ms|\\()(ie) ([\\w\\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\\/([-\\w\\.]+)/i,/(heytap|ovi)browser\\/([\\d\\.]+)/i,/(weibo)__([\\d\\.]+)/i],[p,v],[/(?:\\buc? ?browser|(?:juc.+)ucweb)[\\/ ]?([\\w\\.]+)/i],[v,[p,"UC"+O]],[/microm.+\\bqbcore\\/([\\w\\.]+)/i,/\\bqbcore\\/([\\w\\.]+).+microm/i],[v,[p,"WeChat(Win) Desktop"]],[/micromessenger\\/([\\w\\.]+)/i],[v,[p,"WeChat"]],[/konqueror\\/([\\w\\.]+)/i],[v,[p,"Konqueror"]],[/trident.+rv[: ]([\\w\\.]{1,9})\\b.+like gecko/i],[v,[p,"IE"]],[/ya(?:search)?browser\\/([\\w\\.]+)/i],[v,[p,"Yandex"]],[/(avast|avg)\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 Secure "+O],v],[/\\bfocus\\/([\\w\\.]+)/i],[v,[p,N+" Focus"]],[/\\bopt\\/([\\w\\.]+)/i],[v,[p,D+" Touch"]],[/coc_coc\\w+\\/([\\w\\.]+)/i],[v,[p,"Coc Coc"]],[/dolfin\\/([\\w\\.]+)/i],[v,[p,"Dolphin"]],[/coast\\/([\\w\\.]+)/i],[v,[p,D+" Coast"]],[/miuibrowser\\/([\\w\\.]+)/i],[v,[p,"MIUI "+O]],[/fxios\\/([-\\w\\.]+)/i],[v,[p,N]],[/\\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 "+O],v],[/(comodo_dragon)\\/([\\w\\.]+)/i],[[p,/_/g," "],v],[/(electron)\\/([\\w\\.]+) safari/i,/(tesla)(?: qtcarbrowser|\\/(20\\d\\d\\.[-\\w\\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\\/ ]?([\\w\\.]+)/i],[p,v],[/(metasr)[\\/ ]?([\\w\\.]+)/i,/(lbbrowser)/i,/\\[(linkedin)app\\]/i],[p],[/((?:fban\\/fbios|fb_iab\\/fb4a)(?!.+fbav)|;fbav\\/([\\w\\.]+);)/i],[[p,F],v],[/(kakao(?:talk|story))[\\/ ]([\\w\\.]+)/i,/(naver)\\(.*?(\\d+\\.[\\w\\.]+).*\\)/i,/safari (line)\\/([\\w\\.]+)/i,/\\b(line)\\/([\\w\\.]+)\\/iab/i,/(chromium|instagram)[\\/ ]([-\\w\\.]+)/i],[p,v],[/\\bgsa\\/([\\w\\.]+) .*safari\\//i],[v,[p,"GSA"]],[/musical_ly(?:.+app_?version\\/|_)([\\w\\.]+)/i],[v,[p,"TikTok"]],[/headlesschrome(?:\\/([\\w\\.]+)| )/i],[v,[p,j+" Headless"]],[/ wv\\).+(chrome)\\/([\\w\\.]+)/i],[[p,j+" WebView"],v],[/droid.+ version\\/([\\w\\.]+)\\b.+(?:mobile safari|safari)/i],[v,[p,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\\/v?([\\w\\.]+)/i],[p,v],[/version\\/([\\w\\.\\,]+) .*mobile\\/\\w+ (safari)/i],[v,[p,"Mobile Safari"]],[/version\\/([\\w(\\.|\\,)]+) .*(mobile ?safari|safari)/i],[v,p],[/webkit.+?(mobile ?safari|safari)(\\/[\\w\\.]+)/i],[p,[v,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\\/([\\w\\.]+)/i],[p,v],[/(navigator|netscape\\d?)\\/([-\\w\\.]+)/i],[[p,"Netscape"],v],[/mobile vr; rv:([\\w\\.]+)\\).+firefox/i],[v,[p,N+" Reality"]],[/ekiohf.+(flow)\\/([\\w\\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\\/ ]?([\\w\\.\\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([-\\w\\.]+)$/i,/(firefox)\\/([\\w\\.]+)/i,/(mozilla)\\/([\\w\\.]+) .+rv\\:.+gecko\\/\\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\\. ]?browser)[-\\/ ]?v?([\\w\\.]+)/i,/(links) \\(([\\w\\.]+)/i,/panasonic;(viera)/i],[p,v],[/(cobalt)\\/([\\w\\.]+)/i],[p,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\\)]/i],[[g,"ia32"]],[/\\b(aarch64|arm(v?8e?l?|_?64))\\b/i],[[g,"arm64"]],[/\\b(arm(?:v[67])?ht?n?[fl]p?)\\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\\))/i],[[g,/ower/,"",W]],[/(sun4\\w)[;\\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\\))|\\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\\b|pa-risc)/i],[[g,W]]],device:[[/\\b(sch-i[89]0\\d|shw-m380s|sm-[ptx]\\w{2,4}|gt-[pn]\\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[f,A],[m,w]],[/\\b((?:s[cgp]h|gt|sm)-\\w+|sc[g-]?[\\d]+a?|galaxy nexus)/i,/samsung[- ]([-\\w]+)/i,/sec-(sgh\\w+)/i],[d,[f,A],[m,h]],[/(?:\\/|\\()(ip(?:hone|od)[\\w, ]*)(?:\\/|;)/i],[d,[f,S],[m,h]],[/\\((ipad);[-\\w\\),; ]+apple/i,/applecoremedia\\/[\\w\\.]+ \\((ipad)/i,/\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios/i],[d,[f,S],[m,w]],[/(macintosh);/i],[d,[f,S]],[/\\b(sh-?[altvz]?\\d\\d[a-ekm]?)/i],[d,[f,L],[m,h]],[/\\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\\d{2})\\b(?!.+d\\/s)/i],[d,[f,P],[m,w]],[/(?:huawei|honor)([-\\w ]+)[;\\)]/i,/\\b(nexus 6p|\\w{2,4}e?-[atu]?[ln][\\dx][012359c][adn]?)\\b(?!.+d\\/s)/i],[d,[f,P],[m,h]],[/\\b(poco[\\w ]+)(?: bui|\\))/i,/\\b; (\\w+) build\\/hm\\1/i,/\\b(hm[-_ ]?note?[_ ]?(?:\\d\\w)?) bui/i,/\\b(redmi[\\-_ ]?(?:note|k)?[\\w_ ]+)(?: bui|\\))/i,/\\b(mi[-_ ]?(?:a\\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\\d?\\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,h]],[/\\b(mi[-_ ]?(?:pad)(?:[\\w_ ]+))(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,w]],[/; (\\w+) bui.+ oppo/i,/\\b(cph[12]\\d{3}|p(?:af|c[al]|d\\w|e[ar])[mt]\\d0|x9007|a101op)\\b/i],[d,[f,"OPPO"],[m,h]],[/vivo (\\w+)(?: bui|\\))/i,/\\b(v[12]\\d{3}\\w?[at])(?: bui|;)/i],[d,[f,"Vivo"],[m,h]],[/\\b(rmx[12]\\d{3})(?: bui|;|\\))/i],[d,[f,"Realme"],[m,h]],[/\\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\\b[\\w ]+build\\//i,/\\bmot(?:orola)?[- ](\\w*)/i,/((?:moto[\\w\\(\\) ]+|xt\\d{3,4}|nexus 6)(?= bui|\\)))/i],[d,[f,C],[m,h]],[/\\b(mz60\\d|xoom[2 ]{0,2}) build\\//i],[d,[f,C],[m,w]],[/((?=lg)?[vl]k\\-?\\d{3}) bui| 3\\.[-\\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[f,M],[m,w]],[/(lm(?:-?f100[nv]?|-[\\w\\.]+)(?= bui|\\))|nexus [45])/i,/\\blg[-e;\\/ ]+((?!browser|netcast|android tv)\\w+)/i,/\\blg-?([\\d\\w]+) bui/i],[d,[f,M],[m,h]],[/(ideatab[-\\w ]+)/i,/lenovo ?(s[56]000[-\\w]+|tab(?:[\\w ]+)|yt[-\\d\\w]{6}|tb[-\\d\\w]{6})/i],[d,[f,"Lenovo"],[m,w]],[/(?:maemo|nokia).*(n900|lumia \\d+)/i,/nokia[-_ ]?([-\\w\\.]*)/i],[[d,/_/g," "],[f,"Nokia"],[m,h]],[/(pixel c)\\b/i],[d,[f,I],[m,w]],[/droid.+; (pixel[\\daxl ]{0,6})(?: bui|\\))/i],[d,[f,I],[m,h]],[/droid.+ (a?\\d[0-2]{2}so|[c-g]\\d{4}|so[-gl]\\w+|xq-a\\w[4-7][12])(?= bui|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i],[d,[f,U],[m,h]],[/sony tablet [ps]/i,/\\b(?:sony)?sgp\\w+(?: bui|\\))/i],[[d,"Xperia Tablet"],[f,U],[m,w]],[/ (kb2005|in20[12]5|be20[12][59])\\b/i,/(?:one)?(?:plus)? (a\\d0\\d\\d)(?: b|\\))/i],[d,[f,"OnePlus"],[m,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\\))/i,/(kf[a-z]+)( bui|\\)).+silk\\//i],[d,[f,_],[m,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\\)).+silk\\//i],[[d,/(.+)/g,"Fire Phone $1"],[f,_],[m,h]],[/(playbook);[-\\w\\),; ]+(rim)/i],[d,f,[m,w]],[/\\b((?:bb[a-f]|st[hv])100-\\d)/i,/\\(bb10; (\\w+)/i],[d,[f,x],[m,h]],[/(?:\\b|asus_)(transfo[prime ]{4,10} \\w+|eeepc|slider \\w+|nexus 7|padfone|p00[cj])/i],[d,[f,E],[m,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \\d\\w?)\\b/i],[d,[f,E],[m,h]],[/(nexus 9)/i],[d,[f,"HTC"],[m,w]],[/(htc)[-;_ ]{1,2}([\\w ]+(?=\\)| bui)|\\w+)/i,/(zte)[- ]([\\w ]+?)(?: bui|\\/|\\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\\.))|sony(?!-bra))[-_ ]?([-\\w]*)/i],[f,[d,/_/g," "],[m,h]],[/droid.+; ([ab][1-7]-?[0178a]\\d\\d?)/i],[d,[f,"Acer"],[m,w]],[/droid.+; (m[1-5] note) bui/i,/\\bmz-([-\\w]{2,})/i],[d,[f,"Meizu"],[m,h]],[/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\\w]*)/i,/(hp) ([\\w ]+\\w)/i,/(asus)-?(\\w+)/i,/(microsoft); (lumia[\\w ]+)/i,/(lenovo)[-_ ]?([-\\w]+)/i,/(jolla)/i,/(oppo) ?([\\w ]+) bui/i],[f,d,[m,h]],[/(kobo)\\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\\/([\\w\\.]+)/i,/(nook)[\\w ]+build\\/(\\w+)/i,/(dell) (strea[kpr\\d ]*[\\dko])/i,/(le[- ]+pan)[- ]+(\\w{1,9}) bui/i,/(trinity)[- ]*(t\\d{3}) bui/i,/(gigaset)[- ]+(q\\w{1,9}) bui/i,/(vodafone) ([\\w ]+)(?:\\)| bui)/i],[f,d,[m,w]],[/(surface duo)/i],[d,[f,B],[m,w]],[/droid [\\d\\.]+; (fp\\du?)(?: b|\\))/i],[d,[f,"Fairphone"],[m,h]],[/(u304aa)/i],[d,[f,"AT&T"],[m,h]],[/\\bsie-(\\w*)/i],[d,[f,"Siemens"],[m,h]],[/\\b(rct\\w+) b/i],[d,[f,"RCA"],[m,w]],[/\\b(venue[\\d ]{2,7}) b/i],[d,[f,"Dell"],[m,w]],[/\\b(q(?:mv|ta)\\w+) b/i],[d,[f,"Verizon"],[m,w]],[/\\b(?:barnes[& ]+noble |bn[rt])([\\w\\+ ]*) b/i],[d,[f,"Barnes & Noble"],[m,w]],[/\\b(tm\\d{3}\\w+) b/i],[d,[f,"NuVision"],[m,w]],[/\\b(k88) b/i],[d,[f,"ZTE"],[m,w]],[/\\b(nx\\d{3}j) b/i],[d,[f,"ZTE"],[m,h]],[/\\b(gen\\d{3}) b.+49h/i],[d,[f,"Swiss"],[m,h]],[/\\b(zur\\d{3}) b/i],[d,[f,"Swiss"],[m,w]],[/\\b((zeki)?tb.*\\b) b/i],[d,[f,"Zeki"],[m,w]],[/\\b([yr]\\d{2}) b/i,/\\b(dragon[- ]+touch |dt)(\\w{5}) b/i],[[f,"Dragon Touch"],d,[m,w]],[/\\b(ns-?\\w{0,9}) b/i],[d,[f,"Insignia"],[m,w]],[/\\b((nxa|next)-?\\w{0,9}) b/i],[d,[f,"NextBook"],[m,w]],[/\\b(xtreme\\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],d,[m,h]],[/\\b(lvtel\\-)?(v1[12]) b/i],[[f,"LvTel"],d,[m,h]],[/\\b(ph-1) /i],[d,[f,"Essential"],[m,h]],[/\\b(v(100md|700na|7011|917g).*\\b) b/i],[d,[f,"Envizen"],[m,w]],[/\\b(trio[-\\w\\. ]+) b/i],[d,[f,"MachSpeed"],[m,w]],[/\\btu_(1491) b/i],[d,[f,"Rotor"],[m,w]],[/(shield[\\w ]+) b/i],[d,[f,"Nvidia"],[m,w]],[/(sprint) (\\w+)/i],[f,d,[m,h]],[/(kin\\.[onetw]{3})/i],[[d,/\\./g," "],[f,B],[m,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\\)/i],[d,[f,q],[m,w]],[/droid.+; (ec30|ps20|tc[2-8]\\d[kx])\\)/i],[d,[f,q],[m,h]],[/smart-tv.+(samsung)/i],[f,[m,y]],[/hbbtv.+maple;(\\d+)/i],[[d,/^/,"SmartTV"],[f,A],[m,y]],[/(nux; netcast.+smarttv|lg (netcast\\.tv-201\\d|android tv))/i],[[f,M],[m,y]],[/(apple) ?tv/i],[f,[d,S+" TV"],[m,y]],[/crkey/i],[[d,j+"cast"],[f,I],[m,y]],[/droid.+aft(\\w)( bui|\\))/i],[d,[f,_],[m,y]],[/\\(dtv[\\);].+(aquos)/i,/(aquos-tv[\\w ]+)\\)/i],[d,[f,L],[m,y]],[/(bravia[\\w ]+)( bui|\\))/i],[d,[f,U],[m,y]],[/(mitv-\\w{5}) bui/i],[d,[f,R],[m,y]],[/Hbbtv.*(technisat) (.*);/i],[f,d,[m,y]],[/\\b(roku)[\\dx]*[\\)\\/]((?:dvp-)?[\\d\\.]*)/i,/hbbtv\\/\\d+\\.\\d+\\.\\d+ +\\([\\w\\+ ]*; *([\\w\\d][^;]*);([^;]*)/i],[[f,H],[d,H],[m,y]],[/\\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\\b/i],[[m,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,d,[m,b]],[/droid.+; (shield) bui/i],[d,[f,"Nvidia"],[m,b]],[/(playstation [345portablevi]+)/i],[d,[f,U],[m,b]],[/\\b(xbox(?: one)?(?!; xbox))[\\); ]/i],[d,[f,B],[m,b]],[/((pebble))app/i],[f,d,[m,T]],[/(watch)(?: ?os[,\\/]|\\d,\\d\\/)[\\d\\.]+/i],[d,[f,S],[m,T]],[/droid.+; (glass) \\d/i],[d,[f,I],[m,T]],[/droid.+; (wt63?0{2,3})\\)/i],[d,[f,q],[m,T]],[/(quest( 2| pro)?)/i],[d,[f,F],[m,T]],[/(tesla)(?: qtcarbrowser|\\/[-\\w\\.]+)/i],[f,[m,k]],[/(aeobc)\\b/i],[d,[f,_],[m,k]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+? mobile safari/i],[d,[m,h]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+?(?! mobile) safari/i],[d,[m,w]],[/\\b((tablet|tab)[;\\/]|focus\\/\\d(?!.+mobile))/i],[[m,w]],[/(phone|mobile(?:[;\\/]| [ \\w\\/\\.]*safari)|pda(?=.+windows ce))/i],[[m,h]],[/(android[-\\w\\. ]{0,9});.+buil/i],[d,[f,"Generic"]]],engine:[[/windows.+ edge\\/([\\w\\.]+)/i],[v,[p,"EdgeHTML"]],[/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i],[v,[p,"Blink"]],[/(presto)\\/([\\w\\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i,/ekioh(flow)\\/([\\w\\.]+)/i,/(khtml|tasman|links)[\\/ ]\\(?([\\w\\.]+)/i,/(icab)[\\/ ]([23]\\.[\\d\\.]+)/i,/\\b(libweb)/i],[p,v],[/rv\\:([\\w\\.]{1,9})\\b.+(gecko)/i],[v,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,v],[/(windows) nt 6\\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\\/ ]?([\\d\\.\\w ]*)/i,/(windows)[\\/ ]?([ntce\\d\\. ]+\\w)(?!.+xbox)/i],[p,[v,J,X]],[/(win(?=3|9|n)|win 9x )([nt\\d\\.]+)/i],[[p,"Windows"],[v,J,X]],[/ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)/i,/ios;fbsv\\/([\\d\\.]+)/i,/cfnetwork\\/.+darwin/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\\w\\. ]*)/i,/(macintosh|mac_powerpc\\b)(?!.+haiku)/i],[[p,K],[v,/_/g,"."]],[/droid ([\\w\\.]+)\\b.+(android[- ]x86|harmonyos)/i],[v,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\\/ ]?([\\w\\.]*)/i,/(blackberry)\\w*\\/([\\w\\.]*)/i,/(tizen|kaios)[\\/ ]([\\w\\.]+)/i,/\\((series40);/i],[p,v],[/\\(bb(10);/i],[v,[p,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\\/ ]?([\\w\\.]*)/i],[v,[p,"Symbian"]],[/mozilla\\/[\\d\\.]+ \\((?:mobile|tablet|tv|mobile; [\\w ]+); rv:.+ gecko\\/([\\w\\.]+)/i],[v,[p,N+" OS"]],[/web0s;.+rt(tv)/i,/\\b(?:hp)?wos(?:browser)?\\/([\\w\\.]+)/i],[v,[p,"webOS"]],[/watch(?: ?os[,\\/]|\\d,\\d\\/)([\\d\\.]+)/i],[v,[p,"watchOS"]],[/crkey\\/([\\d\\.]+)/i],[v,[p,j+"cast"]],[/(cros) [\\w]+(?:\\)| ([\\w\\.]+)\\b)/i],[[p,z],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\\/(\\d+\\.[\\w\\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\\);]+)/i,/\\b(joli|palm)\\b ?(?:os)?\\/?([\\w\\.]*)/i,/(mint)[\\/\\(\\) ]?(\\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\\/ ]?(?!chrom|package)([-\\w\\.]*)/i,/(hurd|linux) ?([\\w\\.]*)/i,/(gnu) ?([\\w\\.]*)/i,/\\b([-frentopcghs]{0,5}bsd|dragonfly)[\\/ ]?(?!amd|[ix346]{1,2}86)([\\w\\.]*)/i,/(haiku) (\\w+)/i],[p,v],[/(sunos) ?([\\w\\.\\d]*)/i],[[p,"Solaris"],v],[/((?:open)?solaris)[-\\/ ]?([\\w\\.]*)/i,/(aix) ((\\d)(?=\\.|\\)| )[\\w\\.])*/i,/\\b(beos|os\\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\\w\\.]*)/i],[p,v]]},Z=function(e,t){if(typeof e===c&&(t=e,e=a),!(this instanceof Z))return new Z(e,t).getResult();var n=typeof i!==s&&i.navigator?i.navigator:a,r=e||(n&&n.userAgent?n.userAgent:""),b=n&&n.userAgentData?n.userAgentData:a,y=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(G,t):G,T=n&&n.userAgent==r;return this.getBrowser=function(){var e,t={};return t[p]=a,t[v]=a,V.call(t,r,y.browser),t[l]=typeof(e=t[v])===u?e.replace(/[^\\d\\.]/g,"").split(".")[0]:a,T&&n&&n.brave&&typeof n.brave.isBrave==o&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[g]=a,V.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[f]=a,e[d]=a,e[m]=a,V.call(e,r,y.device),T&&!e[m]&&b&&b.mobile&&(e[m]=h),T&&"Macintosh"==e[d]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[d]="iPad",e[m]=w),e},this.getEngine=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.os),T&&!e[p]&&b&&"Unknown"!=b.platform&&(e[p]=b.platform.replace(/chrome os/i,z).replace(/macos/i,K)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===u&&e.length>350?H(e,350):e,this},this.setUA(r),this};Z.VERSION="1.0.35",Z.BROWSER=$([p,v,l]),Z.CPU=$([g]),Z.DEVICE=$([d,f,m,b,h,y,w,T,k]),Z.ENGINE=Z.OS=$([p,v]),typeof t!==s?(e.exports&&(t=e.exports=Z),t.UAParser=Z):n.amdO?(r=function(){return Z}.call(t,n,t,e))===a||(e.exports=r):typeof i!==s&&(i.UAParser=Z);var Y=typeof i!==s&&(i.jQuery||i.Zepto);if(Y&&!Y.ua){var ee=new Z;Y.ua=ee.getResult(),Y.ua.get=function(){return ee.getUA()},Y.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var n in t)Y.ua[n]=t[n]}}}("object"==typeof window?window:this)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionType:()=>f,AmplitudePlatformName:()=>g,AnalyticsEventImportance:()=>l,AnalyticsQueries:()=>e,AuthStatus:()=>b,ComponentType:()=>m,IThresholdTier:()=>Jt,MetricType:()=>d,PlatformName:()=>v,SessionActions:()=>h,SessionAutomatedEvents:()=>w,SessionRank:()=>y,SubjectType:()=>p,UserTypeCommerce:()=>c,UserTypeInsto:()=>i,UserTypeRetail:()=>t,UserTypeRetailBusinessBanking:()=>s,UserTypeRetailEmployeeInternal:()=>a,UserTypeRetailEmployeePersonal:()=>o,UserTypeWallet:()=>u,automatedEvents:()=>xn,automatedMappingConfig:()=>In,clearMarkEntry:()=>Vn,clearPerformanceMarkEntries:()=>Xn,config:()=>A,createEventConfig:()=>On,createNewSpan:()=>Ln,createNewTrace:()=>Un,device:()=>W,endPerfMark:()=>Jn,exposeExperiment:()=>wn,flushQueue:()=>or,generateUUID:()=>V,getAnalyticsHeaders:()=>sr,getReferrerData:()=>le,getTracingHeaders:()=>An,getTracingId:()=>Dn,getUrlHostname:()=>pe,getUrlParams:()=>me,getUrlPathname:()=>fe,getUserContext:()=>ar,identify:()=>Tn,identifyFlow:()=>xe,identity:()=>H,identityFlow:()=>Se,incrementUjNavigation:()=>an,init:()=>yn,initNextJsTrackPageview:()=>_n,initTrackPageview:()=>kn,isEventKeyFormatValid:()=>we,isSessionEnded:()=>pt,location:()=>re,logEvent:()=>$t,logMetric:()=>Ht,logPageView:()=>on,logTrace:()=>Rn,markNTBT:()=>tn,markStep:()=>nn,markStepOnce:()=>rn,onVisibilityChange:()=>ln,optIn:()=>En,optOut:()=>Sn,perfMark:()=>Wn,persistentData:()=>oe,postMessage:()=>K,recordSessionDuration:()=>pn,removeFromIdentifyFlow:()=>Ee,savePersistentData:()=>st,sendScheduledEvents:()=>Bt,setBreadcrumbs:()=>ie,setConfig:()=>U,setLocation:()=>ae,setPagePath:()=>ve,setPageview:()=>Kt,setPersistentData:()=>se,setSessionStart:()=>dt,setTime:()=>Ue,startPerfMark:()=>Hn,timeStone:()=>Le,useEventLogger:()=>Yn,useLogEventOnMount:()=>tr,usePerformanceMarks:()=>rr});let e=function(e){return e.fbclid="fbclid",e.gclid="gclid",e.msclkid="msclkid",e.ptclid="ptclid",e.ttclid="ttclid",e.utm_source="utm_source",e.utm_medium="utm_medium",e.utm_campaign="utm_campaign",e.utm_term="utm_term",e.utm_content="utm_content",e}({});const t=0,i=1,a=2,o=3,s=4,c=5,u=6;let l=function(e){return e.low="low",e.high="high",e}({}),d=function(e){return e.count="count",e.rate="rate",e.gauge="gauge",e.distribution="distribution",e.histogram="histogram",e}({}),p=function(e){return e.commerce_merchant="commerce_merchant",e.device="device",e.edp_fingerprint_id="edp_fingerprint_id",e.nft_user="nft_user",e.user="user",e.wallet_user="wallet_user",e.uuid="user_uuid",e}({}),m=function(e){return e.unknown="unknown",e.banner="banner",e.button="button",e.card="card",e.chart="chart",e.content_script="content_script",e.dropdown="dropdown",e.link="link",e.page="page",e.modal="modal",e.table="table",e.search_bar="search_bar",e.service_worker="service_worker",e.text="text",e.text_input="text_input",e.tray="tray",e.checkbox="checkbox",e.icon="icon",e}({}),f=function(e){return e.unknown="unknown",e.blur="blur",e.click="click",e.change="change",e.dismiss="dismiss",e.focus="focus",e.hover="hover",e.select="select",e.measurement="measurement",e.move="move",e.process="process",e.render="render",e.scroll="scroll",e.view="view",e.search="search",e.keyPress="keyPress",e}({}),v=function(e){return e.unknown="unknown",e.web="web",e.android="android",e.ios="ios",e.mobile_web="mobile_web",e.tablet_web="tablet_web",e.server="server",e.windows="windows",e.macos="macos",e.extension="extension",e}({}),g=function(e){return e.web="Web",e.ios="iOS",e.android="Android",e}({}),b=function(e){return e[e.notLoggedIn=0]="notLoggedIn",e[e.loggedIn=1]="loggedIn",e}({}),h=function(e){return e.ac="ac",e.af="af",e.ah="ah",e.al="al",e.am="am",e.ar="ar",e.as="as",e}({}),w=function(e){return e.pv="pv",e}({}),y=function(e){return e.xs="xs",e.s="s",e.m="m",e.l="l",e.xl="xl",e.xxl="xxl",e}({});const T="https://analytics-service-dev.cbhq.net",k=3e5,_=5e3,S="analytics-db",E="experiment-exposure-db",x="Analytics SDK:",O=Object.values(e),j="pageview",N="session_duration",I={navigationTiming:{eventName:"perf_navigation_timing"},redirectTime:{eventName:"perf_redirect_time"},RT:{eventName:"perf_redirect_time"},TTFB:{eventName:"perf_time_to_first_byte"},networkInformation:{eventName:"perf_network_information"},storageEstimate:{eventName:"perf_storage_estimate"},FCP:{eventName:"perf_first_contentful_paint"},FID:{eventName:"perf_first_input_delay"},LCP:{eventName:"perf_largest_contentful_paint"},CLS:{eventName:"perf_cumulative_layout_shift"},TBT:{eventName:"perf_total_blocking_time"},NTBT:{eventName:"perf_navigation_total_blocking_time"},INP:{eventName:"perf_interact_to_next_paint"},ET:{eventName:"perf_element_timing"},userJourneyStep:{eventName:"perf_user_journey_step"}},P="1",M="web";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const C=/^(https?:\\/\\/)/;function D(e){return{eventsEndpoint:e+"/amp",metricsEndPoint:e+"/metrics",exposureEndpoint:e+"/track-exposures",tracesEndpoint:e+"/traces"}}const A=B({authCookie:"logged_in",amplitudeApiKey:"",batchEventsPeriod:_,batchEventsThreshold:30,batchMetricsPeriod:_,batchMetricsThreshold:30,batchTracesPeriod:_,batchTracesThreshold:30,headers:{},interactionManager:null,isAlwaysAuthed:!1,isProd:!1,isInternalApplication:!1,onError:(e,t)=>{console.error(x,e,t)},platform:v.unknown,projectName:"",ricTimeoutScheduleEvent:1e3,ricTimeoutSetDevice:500,showDebugLogging:!1,trackUserId:!1,version:null,apiEndpoint:T},D(T),{steps:{}}),L=[].reduce(((e,t)=>n=>e(t(n))),(e=>{if(!e.isProd)return e.isInternalApplication?(e.apiEndpoint="https://analytics-service-internal-dev.cbhq.net",B({},e,D(e.apiEndpoint))):e;const t=(e=>e.apiEndpoint?C.test(e.apiEndpoint)?e.apiEndpoint:\`https://\${e.apiEndpoint}\`:e.isInternalApplication?"https://analytics-service-internal.cbhq.net":"https://as.coinbase.com")(e);return B({},e,{apiEndpoint:t},D(t))})),U=e=>{const{batchEventsThreshold:t,batchMetricsThreshold:n,batchTracesThreshold:r}=e,i=[t,n,r];for(const e of i)if((e||0)>30){console.warn("You are setting the threshhold for the batch limit to be greater than 30. This may cause request overload.");break}Object.assign(A,L(e))},R=[v.web,v.mobile_web,v.tablet_web];function q(){return"android"===A.platform}function F(){return"ios"===A.platform}function z(){return R.includes(A.platform)}function K(e){if(z()&&navigator&&"serviceWorker"in navigator&&navigator.serviceWorker.controller)try{navigator.serviceWorker.controller.postMessage(e)}catch(e){e instanceof Error&&A.onError(e)}}var $=n(353),Q=n.n($);const W={amplitudeOSName:null,amplitudeOSVersion:null,amplitudeDeviceModel:null,amplitudePlatform:null,browserName:null,browserMajor:null,osName:null,userAgent:null,width:null,height:null},H={countryCode:null,deviceId:null,device_os:null,isOptOut:!1,languageCode:null,locale:null,jwt:null,session_lcc_id:null,userAgent:null,userId:null},V=e=>e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,V),J=()=>A.isAlwaysAuthed||!!H.userId,X=()=>{const e={};return H.countryCode&&(e.country_code=H.countryCode),e},G=()=>{const{platform:e}=A;if(e===v.web)switch(!0){case window.matchMedia("(max-width: 560px)").matches:return v.mobile_web;case window.matchMedia("(max-width: 1024px, min-width: 561px)").matches:return v.tablet_web}return e},Z=()=>{var e,t,n,r,i;z()?("requestIdleCallback"in window?window.requestIdleCallback(ne,{timeout:A.ricTimeoutSetDevice}):ne(),W.amplitudePlatform=g.web,W.userAgent=(null==(e=window)||null==(e=e.navigator)?void 0:e.userAgent)||null,ee({height:null!=(t=null==(n=window)?void 0:n.innerHeight)?t:null,width:null!=(r=null==(i=window)?void 0:i.innerWidth)?r:null})):F()?(W.amplitudePlatform=g.ios,W.userAgent=H.userAgent,W.userAgent&&ne()):q()&&(W.userAgent=H.userAgent,W.amplitudePlatform=g.android,W.userAgent&&ne())},Y=e=>{Object.assign(H,e),z()&&K({identity:{isAuthed:!!H.userId,locale:H.locale||null}})},ee=e=>{W.height=e.height,W.width=e.width},te=()=>{U({platform:G()}),z()&&K({config:{platform:A.platform}})},ne=()=>{var e;performance.mark&&performance.mark("ua_parser_start");const t=new(Q())(null!=(e=W.userAgent)?e:"").getResult();W.browserName=t.browser.name||null,W.browserMajor=t.browser.major||null,W.osName=t.os.name||null,W.amplitudeOSName=W.browserName,W.amplitudeOSVersion=W.browserMajor,W.amplitudeDeviceModel=W.osName,K({device:{browserName:W.browserName,osName:W.osName}}),performance.mark&&(performance.mark("ua_parser_end"),performance.measure("ua_parser","ua_parser_start","ua_parser_end"))},re={breadcrumbs:[],initialUAAData:{},pageKey:"",pageKeyRegex:{},pagePath:"",prevPageKey:"",prevPagePath:""};function ie(e){Object.assign(re,{breadcrumbs:e})}function ae(e){Object.assign(re,e)}const oe={eventId:0,sequenceNumber:0,sessionId:0,lastEventTime:0,sessionStart:0,sessionUUID:null,userId:null,ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0};function se(e){Object.assign(oe,e)}function ce(){var e,t;return null!=(e=null==(t=document)?void 0:t.referrer)?e:""}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}const le=()=>{const e=ce();if(!e)return{};const t=new URL(e);return t.hostname===pe()?{}:{referrer:e,referring_domain:t.hostname}},de=()=>{const e=new URLSearchParams(me()),t={};return O.forEach((n=>{e.has(n)&&(t[n]=(e.get(n)||"").toLowerCase())})),t},pe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.hostname)||""},me=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.search)||""},fe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.pathname)||""},ve=()=>{const e=A.overrideWindowLocation?re.pagePath:fe()+me();e&&e!==re.pagePath&&(e!==re.pagePath&&ge(),re.pagePath=e,re.pageKeyRegex&&Object.keys(re.pageKeyRegex).some((e=>{if(re.pageKeyRegex[e].test(re.pagePath))return re.pageKey=e,!0})))},ge=()=>{if(z()){const e=ce();if(!re.prevPagePath&&e){const t=new URL(e);if(t.hostname===pe())return void(re.prevPagePath=t.pathname)}}re.prevPagePath=re.pagePath,re.prevPageKey=re.pageKey},be=e=>{z()&&Object.assign(e,z()?(Object.keys(re.initialUAAData).length>0||(new URLSearchParams(me()),re.initialUAAData=ue({},(()=>{const e={};return O.forEach((t=>{oe[t]&&(e[t]=oe[t])})),e})(),de(),le())),re.initialUAAData):re.initialUAAData)},he=/^[a-zd]+(_[a-zd]+)*$/;function we(e){return he.test(e)}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}const Te=["action","component_type","component_name","context","logging_id"],ke=["num_non_hardware_accounts","ujs"],_e="ujs_",Se={};function Ee(e){e.forEach((e=>{ke.includes(e)&&delete Se[e]}))}function xe(e){var t;const n=Object.entries(e).reduce(((e,t)=>{const[n,r]=t;return!Te.includes(n)&&ke.includes(n)?we(n)?ye({},e,{[n]:r}):(A.onError(new Error("IdentityFlow property names must have snake case format"),{[n]:r}),e):e}),{});null!=(t=n.ujs)&&t.length&&(n.ujs=n.ujs.map((e=>\`\${_e}\${e}\`))),Object.assign(Se,n)}function Oe(){return A.platform!==v.unknown||(A.onError(new Error("SDK platform not initialized")),!1)}const je={eventsQueue:[],eventsScheduled:!1,metricsQueue:[],metricsScheduled:!1,tracesQueue:[],tracesScheduled:!1};function Ne(e){Object.assign(je,e)}const Ie={ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0},Pe={ac:20,af:5,ah:1,al:1,am:0,ar:10,as:20},Me={pv:25},Be={xs:0,s:1,m:1,l:2,xl:2,xxl:2},Ce=e=>e<15?y.xs:e<60?y.s:e<240?y.m:e<960?y.l:e<3840?y.xl:y.xxl,De=e=>{Object.assign(Ie,e)};function Ae(){return(new Date).getTime()}const Le={timeStart:Ae(),timeOnPagePath:0,timeOnPageKey:0,prevTimeOnPagePath:0,prevTimeOnPageKey:0,sessionDuration:0,sessionEnd:0,sessionStart:0,prevSessionDuration:0};function Ue(e){Object.assign(Le,e)}const Re=(e,t)=>t.some((t=>e instanceof t));let qe,Fe;const ze=new WeakMap,Ke=new WeakMap,$e=new WeakMap,Qe=new WeakMap,We=new WeakMap;let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ke.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ve(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Xe(this),e),Je(ze.get(this))}:function(...e){return Je(t.apply(Xe(this),e))}:function(e,...n){const r=t.call(Xe(this),e,...n);return $e.set(r,e.sort?e.sort():[e]),Je(r)}:(e instanceof IDBTransaction&&function(e){if(Ke.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ke.set(e,t)}(e),Re(e,qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,He):e);var t}function Je(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(Je(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ze.set(t,e)})).catch((()=>{})),We.set(t,e),t}(e);if(Qe.has(e))return Qe.get(e);const t=Ve(e);return t!==e&&(Qe.set(e,t),We.set(t,e)),t}const Xe=e=>We.get(e),Ge=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],Ye=new Map;function et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Ye.set(t,a),a}var tt;tt=He,He={...tt,get:(e,t,n)=>et(e,t)||tt.get(e,t,n),has:(e,t)=>!!et(e,t)||tt.has(e,t)};const nt={isReady:!1,idbKeyval:null};function rt(e){Object.assign(nt,e)}const it={},at=async e=>{if(!nt.idbKeyval)return Promise.resolve(null);try{return await nt.idbKeyval.get(e)}catch(e){return A.onError(new Error("IndexedDB:Get:InternalError")),Promise.resolve(null)}},ot=async(e,t)=>{if(nt.idbKeyval)try{await nt.idbKeyval.set(e,t)}catch(e){A.onError(new Error("IndexedDB:Set:InternalError"))}},st=()=>{"server"!==A.platform&&(se({sessionStart:Le.sessionStart,ac:Ie.ac,af:Ie.af,ah:Ie.ah,al:Ie.al,am:Ie.am,ar:Ie.ar,as:Ie.as,pv:Ie.pv}),H.userId&&se({userId:H.userId}),ot(S,oe))},ct="rgb(5,177,105)",ut=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=\`%c \${x}\`,a=\`color:\${ct};font-size:11px;\`,o=\`Importance: \${r}\`;console.group(i,a,t,o),n.forEach((e=>{e.event_type?console.log(e.event_type,e):console.log(e)})),console.groupEnd()},lt=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=\`color:\${ct};font-size:11px;\`,a=\`%c \${x}\`,o=\`Importance: \${r}\`;console.log(a,i,t,n,o)},dt=()=>{const e=Ae();oe.sessionId&&oe.lastEventTime&&oe.sessionUUID&&!pt(e)||(oe.sessionId=e,oe.sessionUUID=V(),Ue({sessionStart:e}),lt({metricName:"Started new session:",data:{persistentData:oe,timeStone:Le}})),oe.lastEventTime=e},pt=e=>e-oe.lastEventTime>18e5;function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}const ft=e=>{var t;(e=>{switch(e.action){case f.click:Ie.ac+=1;break;case f.focus:Ie.af+=1;break;case f.hover:Ie.ah+=1;break;case f.move:Ie.am+=1;break;case f.scroll:Ie.al+=1;break;case f.search:Ie.ar+=1;break;case f.select:Ie.as+=1}})(t=e),t.event_type!==j?t.event_type===N&&((e=>{if(!e.session_rank)return;const t=e.session_rank;Object.values(h).forEach((e=>{Ie.sqs+=Ie[e]*Pe[e]})),Object.values(w).forEach((e=>{Ie.sqs+=Ie[e]*Me[e]})),Ie.sqs*=Be[t]})(t),Object.assign(t,Ie),De({ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0})):Ie.pv+=1;const n=e.event_type;delete e.event_type;const r=e.deviceId?e.deviceId:null,i=e.timestamp;return delete e.timestamp,se({eventId:oe.eventId+1}),se({sequenceNumber:oe.sequenceNumber+1}),dt(),st(),{device_id:H.deviceId||r||null,user_id:H.userId,timestamp:i,event_id:oe.eventId,session_id:oe.sessionId||-1,event_type:n,version_name:A.version||null,platform:W.amplitudePlatform,os_name:W.amplitudeOSName,os_version:W.amplitudeOSVersion,device_model:W.amplitudeDeviceModel,language:H.languageCode,event_properties:mt({},e,{session_uuid:oe.sessionUUID,height:W.height,width:W.width}),user_properties:X(),uuid:V(),library:{name:"@cbhq/client-analytics",version:"10.6.0"},sequence_number:oe.sequenceNumber,user_agent:W.userAgent||H.userAgent}},vt=e=>e.map((e=>ft(e)));function gt(){return gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gt.apply(this,arguments)}const bt=e=>e.map((e=>(e=>{const t=e.tags||{},n=gt({authed:J()?"true":"false",platform:A.platform},t,{project_name:A.projectName,version_name:A.version||null});return{metric_name:e.metricName,page_path:e.pagePath||null,value:e.value,tags:n,type:e.metricType}})(e))),ht=e=>0!==je.metricsQueue.length&&(je.metricsQueue.length>=A.batchMetricsThreshold||(je.metricsScheduled||(je.metricsScheduled=!0,setTimeout((()=>{je.metricsScheduled=!1,e(bt(je.metricsQueue)),je.metricsQueue=[]}),A.batchMetricsPeriod)),!1)),wt=e=>0!==je.tracesQueue.length&&(je.tracesQueue.length>=A.batchTracesThreshold||(je.tracesScheduled||(je.tracesScheduled=!0,setTimeout((()=>{je.tracesScheduled=!1,e(je.tracesQueue),je.tracesQueue=[]}),A.batchTracesPeriod)),!1)),yt=e=>{var t;z()&&null!=(t=window)&&t.requestIdleCallback?window.requestIdleCallback(e,{timeout:A.ricTimeoutScheduleEvent}):(q()||F())&&A.interactionManager?A.interactionManager.runAfterInteractions(e):e()};function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}const kt="application/x-www-form-urlencoded; charset=UTF-8",_t=e=>{const{data:t,importance:n,isJSON:r,onError:i,url:a}=e,o=r?"application/json":kt,s=n||l.low,c=r?JSON.stringify(t):new URLSearchParams(t).toString();function u(){const e=new XMLHttpRequest;e.open("POST",a,!0),Object.keys(A.headers||{}).forEach((t=>{e.setRequestHeader(t,A.headers[t])})),e.setRequestHeader("Content-Type",kt),H.jwt&&e.setRequestHeader("authorization",\`Bearer \${H.jwt}\`),e.send(c)}if(!z()||r||!("sendBeacon"in navigator)||s!==l.low||A.headers&&0!==Object.keys(A.headers).length)if(z()&&!r)u();else{const e=Tt({},A.headers,{"Content-Type":o});H.jwt&&(e.Authorization=\`Bearer \${H.jwt}\`),fetch(a,{method:"POST",mode:"no-cors",headers:e,body:c}).catch((e=>{i(e,{context:"AnalyticsSDKApiError"})}))}else{const e=new Blob([c],{type:kt});try{navigator.sendBeacon.bind(navigator)(a,e)||u()}catch(e){console.error(e),u()}}};var St=n(762),Et=n.n(St);const xt=(e,t,n)=>{const r=e||"";return Et()("2"+r+t+n)};function Ot(){return Ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ot.apply(this,arguments)}class jt extends Error{constructor(e){super(e),this.name="CircularJsonReference",this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class Nt extends jt{constructor(...e){super(...e),this.name="DomReferenceInAnalyticsEvent"}}function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},It.apply(this,arguments)}const Pt=(e,t=l.low)=>{var n;e&&je.eventsQueue.push(e),nt.isReady&&(!A.trackUserId||H.userId?(t===l.high||(n=Mt,0!==je.eventsQueue.length&&(je.eventsQueue.length>=A.batchEventsThreshold||(je.eventsScheduled||(je.eventsScheduled=!0,setTimeout((()=>{je.eventsScheduled=!1,n(vt(je.eventsQueue)),je.eventsQueue=[]}),A.batchEventsPeriod)),0))))&&Bt():je.eventsQueue.length>10&&(A.trackUserId=!1,A.onError(new Error("userId not set in Logged-in"))))},Mt=(e,t=l.low)=>{if(H.isOptOut||0===e.length)return;let n;try{n=JSON.stringify(e)}catch(t){const r=e.map((e=>e.event_type)).join(", "),[i,a]=(e=>{try{const n=[];for(const r of e){const e=Ot({},r);r.event_properties&&(e.event_properties=Ot({},e.event_properties,{currentTarget:null,target:null,relatedTarget:null,_dispatchInstances:null,_targetInst:null,view:(t=r.event_properties.view,["string","number","boolean"].includes(typeof t)?r.event_properties.view:null)})),n.push(e)}return[!0,JSON.stringify(n)]}catch(e){return[!1,""]}var t})(e);if(!i)return void A.onError(new jt(t instanceof Error?t.message:"unknown"),{listEventType:r});n=a,A.onError(new Nt("Found DOM element reference"),{listEventType:r,stringifiedEventData:n})}const r=Ae().toString(),i=It({},{e:n,v:"2",upload_time:r},{client:A.amplitudeApiKey,checksum:xt(A.amplitudeApiKey,n,r)});_t({url:A.eventsEndpoint,data:i,importance:t,onError:A.onError}),ut({metricName:"Batch Events",data:e,importance:t})},Bt=()=>{Mt(vt(je.eventsQueue)),Ne({eventsQueue:[]})};function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ct.apply(this,arguments)}const Dt=Object.values(f),At=Object.values(m),Lt=e=>Dt.includes(e)?e:f.unknown,Ut=e=>At.includes(e)?e:m.unknown,Rt=(e,t,n)=>{const r={auth:J()?b.loggedIn:b.notLoggedIn,action:Lt(e),component_type:Ut(t),logging_id:n,platform:A.platform,project_name:A.projectName};return"number"==typeof H.userTypeEnum&&(r.user_type_enum=H.userTypeEnum),r},qt=e=>{const t=Ae();if(!e)return A.onError(new Error("missing logData")),Ct({},Rt(f.unknown,m.unknown),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});const n=Ct({},e,Rt(e.action,e.componentType,e.loggingId),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});return delete n.componentType,delete n.loggingId,n},Ft={blacklistRegex:[],isEnabled:!1};function zt(){return{page_key:re.pageKey,page_path:re.pagePath,prev_page_key:re.prevPageKey,prev_page_path:re.prevPagePath}}function Kt(e){Object.assign(Ft,e)}function $t(e,t,n=l.low){if(H.isOptOut)return;if(!Oe())return;const r=qt(t);!function(e){Ft.isEnabled&&(ve(),Object.assign(e,zt()))}(r),be(r),function(e){Object.keys(Se).length>0&&Object.assign(e,Se)}(r),r.has_double_fired=!1,r.event_type=e,n===l.high?Pt(r,n):yt((()=>{Pt(r)}))}function Qt(e,t=!1){t?_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Metrics",data:e})}function Wt(){return Wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wt.apply(this,arguments)}function Ht(e){if(!Oe())return;v.server!==A.platform&&!e.pagePath&&re.pagePath&&(e.pagePath=re.pagePath);const t=Object.keys(Se).length?Wt({},e.tags,Se):e.tags;t&&Object.assign(e,{tags:t}),je.metricsQueue.push(e),ht(Qt)&&(Qt(bt(je.metricsQueue)),je.metricsQueue=[])}function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(this,arguments)}let Jt=function(e){return e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable",e}({});function Xt(e){return e.toLowerCase()}let Gt={};const Zt=(e,t)=>{null!=A&&A.onMarkStep&&A.onMarkStep(e,t),xe({ujs:t})};let Yt;const en={Perfume:()=>{},markStep:e=>{},markStepOnce:e=>{},incrementUjNavigation:()=>{}},tn=()=>{z()&&Yt&&Yt.markNTBT&&Yt.markNTBT()},nn=e=>{z()&&Yt&&en.markStep&&en.markStep(e)},rn=e=>{z()&&Yt&&en.markStepOnce&&en.markStepOnce(e)},an=()=>{z()&&Yt&&en.incrementUjNavigation&&en.incrementUjNavigation()};function on(e={callMarkNTBT:!0}){"unknown"!==A.platform&&(Ft.blacklistRegex.some((e=>e.test(fe())))||($t(j,{action:f.render,componentType:m.page}),e.callMarkNTBT&&tn()))}let sn=!1,cn=!1;const un=e=>{sn=!e.persisted},ln=(e,t="hidden",n=!1)=>{cn||(addEventListener("pagehide",un),addEventListener("beforeunload",(()=>{})),cn=!0),addEventListener("visibilitychange",(({timeStamp:n})=>{document.visibilityState===t&&e({timeStamp:n,isUnloading:sn})}),{capture:!0,once:n})},dn=36e3;function pn(){const e=pt(Ae());if(e&&(O.forEach((e=>{oe[e]&&delete oe[e]})),st()),!oe.lastEventTime||!Le.sessionStart||!e)return;const t=Math.round((oe.lastEventTime-Le.sessionStart)/1e3);if(t<1||t>dn)return;const n=Ce(t);$t(N,{action:f.measurement,componentType:m.page,session_duration:t,session_end:oe.lastEventTime,session_start:Le.sessionStart,session_rank:n})}function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn.apply(this,arguments)}const fn=[],vn=[],gn=()=>{const e=fn.shift();e&&e()},bn=()=>{const e=vn.shift();e&&e()};let hn={};function wn(e){const t=function(e){return{test_name:e.testName,group_name:e.group,subject_id:e.subjectId,exposed_at:Ae(),subject_type:e.subjectType,platform:A.platform}}(e);hn[e.testName]=hn[e.testName]||0,hn[e.testName]+k>Ae()?lt({metricName:\`Event: exposeExperiment \${e.testName} not sent\`,data:t}):(hn[e.testName]=Ae(),ot(E,hn),lt({metricName:\`Event: exposeExperiment \${e.testName} sent\`,data:t}),_t({url:A.exposureEndpoint,data:[t],onError:(t,n)=>{hn[e.testName]=0,ot(E,hn),A.onError(t,n)},isJSON:!0,importance:l.high}))}const yn=e=>{var t,r,i;U(e),z()&&(H.languageCode=(null==(t=navigator)?void 0:t.languages[0])||(null==(r=navigator)?void 0:r.language)||""),te(),(()=>{var e;if(z()&&null!=(e=window)&&e.indexedDB){const e=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Je(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Je(o.result),e.oldVersion,e.newVersion,Je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}});rt({idbKeyval:{get:async t=>(await e).get("keyval",t),set:async(t,n)=>(await e).put("keyval",n,t),delete:async t=>(await e).delete("keyval",t),keys:async()=>(await e).getAllKeys("keyval")}})}else rt({idbKeyval:{get:async e=>new Promise((t=>{t(it[e])})),set:async(e,t)=>new Promise((n=>{it[e]=t,n(e)})),delete:async e=>new Promise((()=>{delete it[e]})),keys:async()=>new Promise((e=>{e(Object.keys(it))}))}})})(),lt({metricName:"Initialized Analytics:",data:{deviceId:H.deviceId}}),fn.push((()=>{Pt()})),(async()=>{const e=await at(S);rt({isReady:!0}),gn(),e&&(bn(),se({eventId:e.eventId||oe.eventId,sequenceNumber:e.sequenceNumber||oe.sequenceNumber,sessionId:e.sessionId||oe.sessionId,lastEventTime:e.lastEventTime||oe.lastEventTime,sessionUUID:e.sessionUUID||oe.sessionUUID}),function(e){se(mn({},function(e){const t={};return O.forEach((n=>{e[n]&&(t[n]=e[n])})),t}(e),de()))}(e),Ue({sessionStart:e.sessionStart||oe.sessionStart}),De({ac:e.ac||Ie.ac,af:e.af||Ie.af,ah:e.ah||Ie.ah,al:e.al||Ie.al,am:e.am||Ie.am,ar:e.ar||Ie.ar,as:e.as||Ie.as,pv:e.pv||Ie.pv}),A.trackUserId&&Y({userId:e.userId||H.userId}),pn(),lt({metricName:"Initialized Analytics IndexedDB:",data:e}))})(),async function(){at(E).then((e=>{hn=null!=e?e:{}})).catch((e=>{e instanceof Error&&A.onError(e)}))}(),Z(),z()&&(ln((()=>{se({lastEventTime:Ae()}),st(),Bt()}),"hidden"),ln((()=>{pn()}),"visible")),z()&&(i=()=>{var e,t,n,r;te(),ee({width:null!=(e=null==(t=window)?void 0:t.innerWidth)?e:null,height:null!=(n=null==(r=window)?void 0:r.innerHeight)?n:null})},addEventListener("resize",(()=>{requestAnimationFrame((()=>{i()}))}))),(()=>{if(z())try{const e=n(2);en.markStep=e.markStep,en.markStepOnce=e.markStepOnce,en.incrementUjNavigation=e.incrementUjNavigation,Yt=new e.Perfume({analyticsTracker:e=>{const{data:t,attribution:n,metricName:r,navigatorInformation:i,rating:a}=e,o=I[r],s=(null==n?void 0:n.category)||null;if(!o&&!s)return;const c=(null==i?void 0:i.deviceMemory)||0,u=(null==i?void 0:i.hardwareConcurrency)||0,l=(null==i?void 0:i.isLowEndDevice)||!1,p=(null==i?void 0:i.isLowEndExperience)||!1,v=(null==i?void 0:i.serviceWorkerStatus)||"unsupported",g=Vt({deviceMemory:c,hardwareConcurrency:u,isLowEndDevice:l,isLowEndExperience:p,serviceWorkerStatus:v},Gt),b={is_low_end_device:l,is_low_end_experience:p,page_key:re.pageKey||"",save_data:t.saveData||!1,service_worker:v,is_perf_metric:!0};if("navigationTiming"===r)t&&"number"==typeof t.redirectTime&&Ht({metricName:I.redirectTime.eventName,metricType:d.histogram,tags:b,value:t.redirectTime||0});else if("TTFB"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),Ht({metricName:I.TTFB.eventName,metricType:d.histogram,tags:Vt({},b),value:t}),a&&Ht({metricName:\`perf_web_vitals_ttfb_\${a}\`,metricType:d.count,tags:b,value:1});else if("networkInformation"===r)null!=t&&t.effectiveType&&(Gt=t,$t(o.eventName,{action:f.measurement,componentType:m.page,networkInformationDownlink:t.downlink,networkInformationEffectiveType:t.effectiveType,networkInformationRtt:t.rtt,networkInformationSaveData:t.saveData,navigatorDeviceMemory:c,navigatorHardwareConcurrency:u}));else if("storageEstimate"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page},t,g)),Ht({metricName:"perf_storage_estimate_caches",metricType:d.histogram,tags:b,value:t.caches}),Ht({metricName:"perf_storage_estimate_indexed_db",metricType:d.histogram,tags:b,value:t.indexedDB});else if("CLS"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,score:100*t||null,vitalsScore:a||null},g)),a&&Ht({metricName:\`perf_web_vitals_cls_\${a}\`,metricType:d.count,tags:b,value:1});else if("FID"===r){const e=(null==n?void 0:n.performanceEntry)||null,r=parseInt((null==e?void 0:e.processingStart)||"");$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,processingStart:null!=e&&e.processingStart?r:null,startTime:null!=e&&e.startTime?parseInt(e.startTime):null,vitalsScore:a||null},g)),a&&Ht({metricName:\`perf_web_vitals_fidVitals_\${a}\`,metricType:d.count,tags:b,value:1})}else"userJourneyStep"===r?($t("perf_user_journey_step",Vt({action:f.measurement,componentType:m.page,duration:t||null,rating:null!=a?a:null,step_name:(null==n?void 0:n.stepName)||""},g)),Ht({metricName:\`user_journey_step.\${A.projectName}.\${A.platform}.\${(null==n?void 0:n.stepName)||""}_vitals_\${a}\`,metricType:d.count,tags:b,value:1}),Ht({metricName:\`user_journey_step.\${A.projectName}.\${A.platform}.\${(null==n?void 0:n.stepName)||""}\`,metricType:d.distribution,tags:b,value:t||null})):I[r]&&t&&($t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),a&&(Ht({metricName:\`perf_web_vitals_\${Xt(r)}_\${a}\`,metricType:d.count,tags:b,value:1}),"LCP"===r&&Ht({metricName:\`perf_web_vitals_\${Xt(r)}\`,metricType:d.distribution,tags:b,value:t})))},maxMeasureTime:3e4,steps:A.steps,onMarkStep:Zt})}catch(e){e instanceof Error&&A.onError(e)}})()},Tn=e=>{Y(e),e.userAgent&&Z(),lt({metricName:"Identify:",data:{countryCode:H.countryCode,deviceId:H.deviceId,userId:H.userId}})},kn=({blacklistRegex:e,pageKeyRegex:t,browserHistory:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.listen((()=>{on()}))},_n=({blacklistRegex:e,pageKeyRegex:t,nextJsRouter:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.events.on("routeChangeComplete",(()=>{on()}))},Sn=()=>{Y({isOptOut:!0}),ot(S,{})},En=()=>{Y({isOptOut:!1})},xn={Button:{label:"cb_button",uuid:"e921a074-40e6-4371-8700-134d5cd633e6",componentType:m.button}};function On(e,t,n){return{componentName:e,actions:t,data:n}}function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}function Nn(e,t,n){const{componentName:r,data:i}=n;$t(e.label,jn({componentType:e.componentType,action:t,loggingId:e.uuid,component_name:r},i))}const In={actionMapping:{onPress:f.click,onHover:f.hover},handlers:{Button:{[f.click]:e=>Nn(xn.Button,f.click,e),[f.hover]:e=>Nn(xn.Button,f.hover,e)}}};function Pn(e,t=!1){t?_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Traces",data:e})}function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mn.apply(this,arguments)}const Bn=1e6;function Cn(e){return e*Bn}function Dn(e=function(){var e;return null==(e=window)?void 0:e.crypto}()){const t=new Uint32Array(2);return null==e||e.getRandomValues(t),((BigInt(t[0])<<BigInt(32))+BigInt(t[1])).toString()}function An(e,t){return{"x-datadog-origin":"rum","x-datadog-parent-id":t,"x-datadog-sampling-priority":"1","x-datadog-trace-id":e}}function Ln(e){var t;const{name:n,traceId:r,spanId:i,start:a,duration:o,resource:s,meta:c}=e;return{duration:o?Cn(o):0,name:n,resource:s,service:A.projectName,span_id:null!=i?i:Dn(),start:a?Cn(a):0,trace_id:null!=r?r:Dn(),parent_id:P,type:M,meta:Mn({platform:A.platform},re.pageKey?{page_key:re.pageKey}:{},null!=(t=Se.ujs)&&t.length?{last_ujs:Se.ujs[Se.ujs.length-1]}:{},null!=c?c:{})}}function Un(e){return[Ln(e)]}function Rn(e,t){Oe()&&function(e){return e.length>0}(e)&&(t&&function(e,t){e.forEach((e=>function(e,t){const n=Mn({},e.meta,t.meta),r={start:t.start?Cn(t.start):e.start,duration:t.duration?Cn(t.duration):e.duration};Object.assign(e,t,Mn({meta:n},r))}(e,t)))}(e,t),je.tracesQueue.push(e),wt(Pn)&&(Pn(je.tracesQueue),je.tracesQueue=[]))}function qn(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}function Fn(){return Fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fn.apply(this,arguments)}function zn(){return void 0!==typeof window&&"performance"in window&&"mark"in performance&&"getEntriesByName"in performance}function Kn(e,t){return\`perf_\${e}\${null!=t&&t.label?\`_\${t.label}\`:""}\`}function $n(e,t,n){return\`\${Kn(e,n)}__\${t}\`}let Qn={};function Wn(e,t,n){if(!zn())return;const r=$n(e,t,n);if(performance.mark(r),"end"===t){const t=Kn(e,n);!function(e,t,n){try{performance.measure(e,t,n)}catch(e){A.onError(e)}}(t,$n(e,"start",n),r);const i=performance.getEntriesByName(t).pop();i&&Ht(Fn({metricName:e,metricType:d.distribution,value:i.duration},null!=n&&n.tags?{tags:n.tags}:{}))}}function Hn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]||(Wn(e,"start",t),Qn[n]=!0)}function Vn(e,t){const n=$n(e,"start",t),r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(Qn,[n].map(qn));Qn=r}function Jn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]&&(Wn(e,"end",t),Vn(e,t))}function Xn(){zn()&&(performance.clearMarks(),Qn={})}var Gn=n(784);function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zn.apply(this,arguments)}function Yn(e,t,n=l.low){const r=(0,Gn.useRef)(t);return(0,Gn.useEffect)((()=>{r.current=t}),[t]),(0,Gn.useCallback)((t=>{$t(e,Zn({},r.current,t),n)}),[e,n])}function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}function tr(e,t,n=l.low){(0,Gn.useEffect)((()=>{const r=er({},t,{action:f.render});$t(e,r,n)}),[])}function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const rr=function(e,t){return{markStartPerf:(0,Gn.useCallback)((()=>Hn(e,t)),[e,t]),markEndPerf:(0,Gn.useCallback)((n=>Jn(e,nr({},t,n))),[e,t])}};function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}function ar(){return Object.entries(ir({},Se,zt(),{sessionUUID:oe.sessionUUID,userId:oe.userId})).reduce(((e,t)=>{return null!=(n=t[1])&&""!==n?ir({},e,{[t[0]]:t[1]}):e;var n}),{})}async function or(){return new Promise((e=>{Mt(vt(je.eventsQueue)),Qt(bt(je.metricsQueue),!0),Pn(je.tracesQueue,!0),Ne({eventsQueue:[],metricsQueue:[],tracesQueue:[]}),e()}))}function sr(){return{"X-CB-Device-ID":H.deviceId||"unknown","X-CB-Is-Logged-In":H.userId?"true":"false","X-CB-Pagekey":re.pageKey||"unknown","X-CB-UJS":(e=Se.ujs,void 0===e||0===e.length?"":e.join(",")),"X-CB-Platform":A.platform||"unknown","X-CB-Project-Name":A.projectName||"unknown","X-CB-Session-UUID":oe.sessionUUID||"unknown","X-CB-Version-Name":A.version?String(A.version):"unknown"};var e}})(),r})()}));`;
const loadTelemetryScript = () => {
	return new Promise((resolve, reject) => {
		if (window.ClientAnalytics) return resolve();
		try {
			const script = document.createElement("script");
			script.textContent = TELEMETRY_SCRIPT_CONTENT;
			script.type = "text/javascript";
			document.head.appendChild(script);
			initCCA();
			document.head.removeChild(script);
			resolve();
		} catch (_a) {
			console.error("Failed to execute inlined telemetry script");
			reject();
		}
	});
};
var initCCA = () => {
	var _a, _b, _c;
	if (typeof window !== "undefined") {
		const deviceId = (_c = (_a = store.config.get().deviceId) !== null && _a !== void 0 ? _a : (_b = window.crypto) === null || _b === void 0 ? void 0 : _b.randomUUID()) !== null && _c !== void 0 ? _c : "";
		if (window.ClientAnalytics) {
			const { init, identify, PlatformName } = window.ClientAnalytics;
			init({
				isProd: true,
				amplitudeApiKey: "c66737ad47ec354ced777935b0af822e",
				platform: PlatformName.web,
				projectName: "base_account_sdk",
				showDebugLogging: false,
				version: "1.0.0",
				apiEndpoint: "https://cca-lite.coinbase.com"
			});
			identify({ deviceId });
			store.config.set({ deviceId });
		}
	}
};
const factoryAddress = "0xba5ed110efdba3d005bfc882d75358acbbb85842";
const spendPermissionManagerAddress = "0xf85210B21cC50302F477BA56686d2019dC9b67Ad";
const abi = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [{
			name: "owner",
			type: "bytes"
		}],
		name: "AlreadyOwner",
		type: "error"
	},
	{
		inputs: [],
		name: "Initialized",
		type: "error"
	},
	{
		inputs: [{
			name: "owner",
			type: "bytes"
		}],
		name: "InvalidEthereumAddressOwner",
		type: "error"
	},
	{
		inputs: [{
			name: "key",
			type: "uint256"
		}],
		name: "InvalidNonceKey",
		type: "error"
	},
	{
		inputs: [{
			name: "owner",
			type: "bytes"
		}],
		name: "InvalidOwnerBytesLength",
		type: "error"
	},
	{
		inputs: [],
		name: "LastOwner",
		type: "error"
	},
	{
		inputs: [{
			name: "index",
			type: "uint256"
		}],
		name: "NoOwnerAtIndex",
		type: "error"
	},
	{
		inputs: [{
			name: "ownersRemaining",
			type: "uint256"
		}],
		name: "NotLastOwner",
		type: "error"
	},
	{
		inputs: [{
			name: "selector",
			type: "bytes4"
		}],
		name: "SelectorNotAllowed",
		type: "error"
	},
	{
		inputs: [],
		name: "Unauthorized",
		type: "error"
	},
	{
		inputs: [],
		name: "UnauthorizedCallContext",
		type: "error"
	},
	{
		inputs: [],
		name: "UpgradeFailed",
		type: "error"
	},
	{
		inputs: [
			{
				name: "index",
				type: "uint256"
			},
			{
				name: "expectedOwner",
				type: "bytes"
			},
			{
				name: "actualOwner",
				type: "bytes"
			}
		],
		name: "WrongOwnerAtIndex",
		type: "error"
	},
	{
		anonymous: false,
		inputs: [{
			indexed: true,
			name: "index",
			type: "uint256"
		}, {
			indexed: false,
			name: "owner",
			type: "bytes"
		}],
		name: "AddOwner",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [{
			indexed: true,
			name: "index",
			type: "uint256"
		}, {
			indexed: false,
			name: "owner",
			type: "bytes"
		}],
		name: "RemoveOwner",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [{
			indexed: true,
			name: "implementation",
			type: "address"
		}],
		name: "Upgraded",
		type: "event"
	},
	{
		stateMutability: "payable",
		type: "fallback"
	},
	{
		inputs: [],
		name: "REPLAYABLE_NONCE_KEY",
		outputs: [{
			name: "",
			type: "uint256"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "owner",
			type: "address"
		}],
		name: "addOwnerAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			name: "x",
			type: "bytes32"
		}, {
			name: "y",
			type: "bytes32"
		}],
		name: "addOwnerPublicKey",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			name: "functionSelector",
			type: "bytes4"
		}],
		name: "canSkipChainIdValidation",
		outputs: [{
			name: "",
			type: "bool"
		}],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [],
		name: "domainSeparator",
		outputs: [{
			name: "",
			type: "bytes32"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "eip712Domain",
		outputs: [
			{
				name: "fields",
				type: "bytes1"
			},
			{
				name: "name",
				type: "string"
			},
			{
				name: "version",
				type: "string"
			},
			{
				name: "chainId",
				type: "uint256"
			},
			{
				name: "verifyingContract",
				type: "address"
			},
			{
				name: "salt",
				type: "bytes32"
			},
			{
				name: "extensions",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "entryPoint",
		outputs: [{
			name: "",
			type: "address"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				name: "target",
				type: "address"
			},
			{
				name: "value",
				type: "uint256"
			},
			{
				name: "data",
				type: "bytes"
			}
		],
		name: "execute",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [{
			components: [
				{
					name: "target",
					type: "address"
				},
				{
					name: "value",
					type: "uint256"
				},
				{
					name: "data",
					type: "bytes"
				}
			],
			name: "calls",
			type: "tuple[]"
		}],
		name: "executeBatch",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [{
			name: "calls",
			type: "bytes[]"
		}],
		name: "executeWithoutChainIdValidation",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [{
			components: [
				{
					name: "sender",
					type: "address"
				},
				{
					name: "nonce",
					type: "uint256"
				},
				{
					name: "initCode",
					type: "bytes"
				},
				{
					name: "callData",
					type: "bytes"
				},
				{
					name: "callGasLimit",
					type: "uint256"
				},
				{
					name: "verificationGasLimit",
					type: "uint256"
				},
				{
					name: "preVerificationGas",
					type: "uint256"
				},
				{
					name: "maxFeePerGas",
					type: "uint256"
				},
				{
					name: "maxPriorityFeePerGas",
					type: "uint256"
				},
				{
					name: "paymasterAndData",
					type: "bytes"
				},
				{
					name: "signature",
					type: "bytes"
				}
			],
			name: "userOp",
			type: "tuple"
		}],
		name: "getUserOpHashWithoutChainId",
		outputs: [{
			name: "",
			type: "bytes32"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "implementation",
		outputs: [{
			name: "$",
			type: "address"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "owners",
			type: "bytes[]"
		}],
		name: "initialize",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [{
			name: "account",
			type: "address"
		}],
		name: "isOwnerAddress",
		outputs: [{
			name: "",
			type: "bool"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "account",
			type: "bytes"
		}],
		name: "isOwnerBytes",
		outputs: [{
			name: "",
			type: "bool"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "x",
			type: "bytes32"
		}, {
			name: "y",
			type: "bytes32"
		}],
		name: "isOwnerPublicKey",
		outputs: [{
			name: "",
			type: "bool"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "hash",
			type: "bytes32"
		}, {
			name: "signature",
			type: "bytes"
		}],
		name: "isValidSignature",
		outputs: [{
			name: "result",
			type: "bytes4"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "nextOwnerIndex",
		outputs: [{
			name: "",
			type: "uint256"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "index",
			type: "uint256"
		}],
		name: "ownerAtIndex",
		outputs: [{
			name: "",
			type: "bytes"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "ownerCount",
		outputs: [{
			name: "",
			type: "uint256"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "proxiableUUID",
		outputs: [{
			name: "",
			type: "bytes32"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "index",
			type: "uint256"
		}, {
			name: "owner",
			type: "bytes"
		}],
		name: "removeLastOwner",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			name: "index",
			type: "uint256"
		}, {
			name: "owner",
			type: "bytes"
		}],
		name: "removeOwnerAtIndex",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [],
		name: "removedOwnersCount",
		outputs: [{
			name: "",
			type: "uint256"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "hash",
			type: "bytes32"
		}],
		name: "replaySafeHash",
		outputs: [{
			name: "",
			type: "bytes32"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "newImplementation",
			type: "address"
		}, {
			name: "data",
			type: "bytes"
		}],
		name: "upgradeToAndCall",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						name: "sender",
						type: "address"
					},
					{
						name: "nonce",
						type: "uint256"
					},
					{
						name: "initCode",
						type: "bytes"
					},
					{
						name: "callData",
						type: "bytes"
					},
					{
						name: "callGasLimit",
						type: "uint256"
					},
					{
						name: "verificationGasLimit",
						type: "uint256"
					},
					{
						name: "preVerificationGas",
						type: "uint256"
					},
					{
						name: "maxFeePerGas",
						type: "uint256"
					},
					{
						name: "maxPriorityFeePerGas",
						type: "uint256"
					},
					{
						name: "paymasterAndData",
						type: "bytes"
					},
					{
						name: "signature",
						type: "bytes"
					}
				],
				name: "userOp",
				type: "tuple"
			},
			{
				name: "userOpHash",
				type: "bytes32"
			},
			{
				name: "missingAccountFunds",
				type: "uint256"
			}
		],
		name: "validateUserOp",
		outputs: [{
			name: "validationData",
			type: "uint256"
		}],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	}
];
const factoryAbi = [
	{
		inputs: [{
			name: "implementation_",
			type: "address"
		}],
		stateMutability: "payable",
		type: "constructor"
	},
	{
		inputs: [],
		name: "OwnerRequired",
		type: "error"
	},
	{
		inputs: [{
			name: "owners",
			type: "bytes[]"
		}, {
			name: "nonce",
			type: "uint256"
		}],
		name: "createAccount",
		outputs: [{
			name: "account",
			type: "address"
		}],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [{
			name: "owners",
			type: "bytes[]"
		}, {
			name: "nonce",
			type: "uint256"
		}],
		name: "getAddress",
		outputs: [{
			name: "",
			type: "address"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "implementation",
		outputs: [{
			name: "",
			type: "address"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "initCodeHash",
		outputs: [{
			name: "",
			type: "bytes32"
		}],
		stateMutability: "view",
		type: "function"
	}
];
const standardErrorCodes = {
	rpc: {
		invalidInput: -32e3,
		resourceNotFound: -32001,
		resourceUnavailable: -32002,
		transactionRejected: -32003,
		methodNotSupported: -32004,
		limitExceeded: -32005,
		parse: -32700,
		invalidRequest: -32600,
		methodNotFound: -32601,
		invalidParams: -32602,
		internal: -32603
	},
	provider: {
		userRejectedRequest: 4001,
		unauthorized: 4100,
		unsupportedMethod: 4200,
		disconnected: 4900,
		chainDisconnected: 4901,
		unsupportedChain: 4902
	}
};
const errorValues = {
	"-32700": {
		standard: "JSON RPC 2.0",
		message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
	},
	"-32600": {
		standard: "JSON RPC 2.0",
		message: "The JSON sent is not a valid Request object."
	},
	"-32601": {
		standard: "JSON RPC 2.0",
		message: "The method does not exist / is not available."
	},
	"-32602": {
		standard: "JSON RPC 2.0",
		message: "Invalid method parameter(s)."
	},
	"-32603": {
		standard: "JSON RPC 2.0",
		message: "Internal JSON-RPC error."
	},
	"-32000": {
		standard: "EIP-1474",
		message: "Invalid input."
	},
	"-32001": {
		standard: "EIP-1474",
		message: "Resource not found."
	},
	"-32002": {
		standard: "EIP-1474",
		message: "Resource unavailable."
	},
	"-32003": {
		standard: "EIP-1474",
		message: "Transaction rejected."
	},
	"-32004": {
		standard: "EIP-1474",
		message: "Method not supported."
	},
	"-32005": {
		standard: "EIP-1474",
		message: "Request limit exceeded."
	},
	"4001": {
		standard: "EIP-1193",
		message: "User rejected the request."
	},
	"4100": {
		standard: "EIP-1193",
		message: "The requested account and/or method has not been authorized by the user."
	},
	"4200": {
		standard: "EIP-1193",
		message: "The requested method is not supported by this Ethereum provider."
	},
	"4900": {
		standard: "EIP-1193",
		message: "The provider is disconnected from all chains."
	},
	"4901": {
		standard: "EIP-1193",
		message: "The provider is disconnected from the specified chain."
	},
	"4902": {
		standard: "EIP-3085",
		message: "Unrecognized chain ID."
	}
};
var FALLBACK_MESSAGE = "Unspecified error message.";
const JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
	if (code && Number.isInteger(code)) {
		const codeString = code.toString();
		if (hasKey(errorValues, codeString)) return errorValues[codeString].message;
		if (isJsonRpcServerError(code)) return JSON_RPC_SERVER_ERROR_MESSAGE;
	}
	return fallbackMessage;
}
function isValidCode(code) {
	if (!Number.isInteger(code)) return false;
	const codeString = code.toString();
	if (errorValues[codeString]) return true;
	if (isJsonRpcServerError(code)) return true;
	return false;
}
function serialize(error, { shouldIncludeStack = false } = {}) {
	const serialized = {};
	if (error && typeof error === "object" && !Array.isArray(error) && hasKey(error, "code") && isValidCode(error.code)) {
		const _error = error;
		serialized.code = _error.code;
		if (_error.message && typeof _error.message === "string") {
			serialized.message = _error.message;
			if (hasKey(_error, "data")) serialized.data = _error.data;
		} else {
			serialized.message = getMessageFromCode(serialized.code);
			serialized.data = { originalError: assignOriginalError(error) };
		}
	} else {
		serialized.code = standardErrorCodes.rpc.internal;
		serialized.message = hasStringProperty(error, "message") ? error.message : FALLBACK_MESSAGE;
		serialized.data = { originalError: assignOriginalError(error) };
	}
	if (shouldIncludeStack) serialized.stack = hasStringProperty(error, "stack") ? error.stack : void 0;
	return serialized;
}
function isJsonRpcServerError(code) {
	return code >= -32099 && code <= -32e3;
}
function assignOriginalError(error) {
	if (error && typeof error === "object" && !Array.isArray(error)) return Object.assign({}, error);
	return error;
}
function hasKey(obj, key) {
	return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasStringProperty(obj, prop) {
	return typeof obj === "object" && obj !== null && prop in obj && typeof obj[prop] === "string";
}
const standardErrors = {
	rpc: {
		parse: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.parse, arg),
		invalidRequest: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidRequest, arg),
		invalidParams: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidParams, arg),
		methodNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotFound, arg),
		internal: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.internal, arg),
		server: (opts) => {
			if (!opts || typeof opts !== "object" || Array.isArray(opts)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
			const { code } = opts;
			if (!Number.isInteger(code) || code > -32005 || code < -32099) throw new Error("\"code\" must be an integer such that: -32099 <= code <= -32005");
			return getEthJsonRpcError(code, opts);
		},
		invalidInput: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidInput, arg),
		resourceNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceNotFound, arg),
		resourceUnavailable: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceUnavailable, arg),
		transactionRejected: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.transactionRejected, arg),
		methodNotSupported: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotSupported, arg),
		limitExceeded: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.limitExceeded, arg)
	},
	provider: {
		userRejectedRequest: (arg) => {
			return getEthProviderError(standardErrorCodes.provider.userRejectedRequest, arg);
		},
		unauthorized: (arg) => {
			return getEthProviderError(standardErrorCodes.provider.unauthorized, arg);
		},
		unsupportedMethod: (arg) => {
			return getEthProviderError(standardErrorCodes.provider.unsupportedMethod, arg);
		},
		disconnected: (arg) => {
			return getEthProviderError(standardErrorCodes.provider.disconnected, arg);
		},
		chainDisconnected: (arg) => {
			return getEthProviderError(standardErrorCodes.provider.chainDisconnected, arg);
		},
		unsupportedChain: (arg) => {
			return getEthProviderError(standardErrorCodes.provider.unsupportedChain, arg);
		},
		custom: (opts) => {
			if (!opts || typeof opts !== "object" || Array.isArray(opts)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
			const { code, message, data } = opts;
			if (!message || typeof message !== "string") throw new Error("\"message\" must be a nonempty string");
			return new EthereumProviderError(code, message, data);
		}
	}
};
function getEthJsonRpcError(code, arg) {
	const [message, data] = parseOpts(arg);
	return new EthereumRpcError(code, message || getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
	const [message, data] = parseOpts(arg);
	return new EthereumProviderError(code, message || getMessageFromCode(code), data);
}
function parseOpts(arg) {
	if (arg) {
		if (typeof arg === "string") return [arg];
		if (typeof arg === "object" && !Array.isArray(arg)) {
			const { message, data } = arg;
			if (message && typeof message !== "string") throw new Error("Must specify string message.");
			return [message || void 0, data];
		}
	}
	return [];
}
var EthereumRpcError = class extends Error {
	constructor(code, message, data) {
		if (!Number.isInteger(code)) throw new Error("\"code\" must be an integer.");
		if (!message || typeof message !== "string") throw new Error("\"message\" must be a nonempty string.");
		super(message);
		this.code = code;
		if (data !== void 0) this.data = data;
	}
};
var EthereumProviderError = class extends EthereumRpcError {
	constructor(code, message, data) {
		if (!isValidEthProviderCode(code)) throw new Error("\"code\" must be an integer such that: 1000 <= code <= 4999");
		super(code, message, data);
	}
};
function isValidEthProviderCode(code) {
	return Number.isInteger(code) && code >= 1e3 && code <= 4999;
}
function isActionableHttpRequestError(errorObject) {
	return typeof errorObject === "object" && errorObject !== null && "code" in errorObject && "data" in errorObject && errorObject.code === -32090 && typeof errorObject.data === "object" && errorObject.data !== null && "type" in errorObject.data && errorObject.data.type === "INSUFFICIENT_FUNDS";
}
function isViemError(error) {
	return typeof error === "object" && error !== null && "details" in error;
}
function viemHttpErrorToProviderError(error) {
	try {
		const details = JSON.parse(error.details);
		return new EthereumRpcError(details.code, details.message, details.data);
	} catch (_$1) {
		return null;
	}
}
function assertPresence(value, error, message) {
	if (value === null || value === void 0) throw error !== null && error !== void 0 ? error : standardErrors.rpc.invalidParams({
		message: message !== null && message !== void 0 ? message : "value must be present",
		data: value
	});
}
function assertArrayPresence(value, message) {
	if (!Array.isArray(value)) throw standardErrors.rpc.invalidParams({
		message: message !== null && message !== void 0 ? message : "value must be an array",
		data: value
	});
}
var COOP_ERROR_MESSAGE = `Base Account SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Base Account app.

Please see https://docs.base.org/smart-wallet/quickstart#cross-origin-opener-policy for more information.`;
var createCoopChecker = () => {
	let crossOriginOpenerPolicy;
	return {
		getCrossOriginOpenerPolicy: () => {
			if (crossOriginOpenerPolicy === void 0) return "undefined";
			return crossOriginOpenerPolicy;
		},
		checkCrossOriginOpenerPolicy: async () => {
			if (typeof window === "undefined") {
				crossOriginOpenerPolicy = "non-browser-env";
				return;
			}
			try {
				const url = `${window.location.origin}${window.location.pathname}`;
				const response = await fetch(url, { method: "HEAD" });
				if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
				const result = response.headers.get("Cross-Origin-Opener-Policy");
				crossOriginOpenerPolicy = result !== null && result !== void 0 ? result : "null";
				if (crossOriginOpenerPolicy === "same-origin") console.error(COOP_ERROR_MESSAGE);
			} catch (error) {
				console.error("Error checking Cross-Origin-Opener-Policy:", error.message);
				crossOriginOpenerPolicy = "error";
			}
		}
	};
};
const { checkCrossOriginOpenerPolicy, getCrossOriginOpenerPolicy } = createCoopChecker();
function validatePreferences(preference) {
	if (!preference) return;
	if (preference.attribution) {
		if (preference.attribution.auto !== void 0 && preference.attribution.dataSuffix !== void 0) throw new Error(`Attribution cannot contain both auto and dataSuffix properties`);
	}
	if (preference.telemetry) {
		if (typeof preference.telemetry !== "boolean") throw new Error(`Telemetry must be a boolean`);
	}
}
function validateSubAccount(toAccount) {
	if (typeof toAccount !== "function") throw new Error(`toAccount is not a function`);
}
function parseAbiItem(signature) {
	let abiItem;
	if (typeof signature === "string") abiItem = parseSignature$1(signature);
	else {
		const structs = parseStructs(signature);
		const length = signature.length;
		for (let i$1 = 0; i$1 < length; i$1++) {
			const signature_ = signature[i$1];
			if (isStructSignature(signature_)) continue;
			abiItem = parseSignature$1(signature_, structs);
			break;
		}
	}
	if (!abiItem) throw new InvalidAbiItemError({ signature });
	return abiItem;
}
function parseAbiParameters(params) {
	const abiParameters = [];
	if (typeof params === "string") {
		const parameters = splitParameters(params);
		const length = parameters.length;
		for (let i$1 = 0; i$1 < length; i$1++) abiParameters.push(parseAbiParameter(parameters[i$1], { modifiers }));
	} else {
		const structs = parseStructs(params);
		const length = params.length;
		for (let i$1 = 0; i$1 < length; i$1++) {
			const signature = params[i$1];
			if (isStructSignature(signature)) continue;
			const parameters = splitParameters(signature);
			const length$1 = parameters.length;
			for (let k = 0; k < length$1; k++) abiParameters.push(parseAbiParameter(parameters[k], {
				modifiers,
				structs
			}));
		}
	}
	if (abiParameters.length === 0) throw new InvalidAbiParametersError({ params });
	return abiParameters;
}
function getAction(client, actionFn, name$1) {
	const action_implicit = client[actionFn.name];
	if (typeof action_implicit === "function") return action_implicit;
	const action_explicit = client[name$1];
	if (typeof action_explicit === "function") return action_explicit;
	return (params) => actionFn(client, params);
}
var FilterTypeNotSupportedError = class extends BaseError {
	constructor(type$1) {
		super(`Filter type "${type$1}" is not supported.`, { name: "FilterTypeNotSupportedError" });
	}
};
var docsPath$1 = "/docs/contract/encodeEventTopics";
function encodeEventTopics(parameters) {
	const { abi: abi$2, eventName, args } = parameters;
	let abiItem = abi$2[0];
	if (eventName) {
		const item = getAbiItem({
			abi: abi$2,
			name: eventName
		});
		if (!item) throw new AbiEventNotFoundError(eventName, { docsPath: docsPath$1 });
		abiItem = item;
	}
	if (abiItem.type !== "event") throw new AbiEventNotFoundError(void 0, { docsPath: docsPath$1 });
	const definition = formatAbiItem(abiItem);
	const signature = toEventSelector(definition);
	let topics = [];
	if (args && "inputs" in abiItem) {
		const indexedInputs = abiItem.inputs?.filter((param) => "indexed" in param && param.indexed);
		const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? indexedInputs?.map((x) => args[x.name]) ?? [] : [];
		if (args_.length > 0) topics = indexedInputs?.map((param, i$1) => {
			if (Array.isArray(args_[i$1])) return args_[i$1].map((_$1, j) => encodeArg({
				param,
				value: args_[i$1][j]
			}));
			return typeof args_[i$1] !== "undefined" && args_[i$1] !== null ? encodeArg({
				param,
				value: args_[i$1]
			}) : null;
		}) ?? [];
	}
	return [signature, ...topics];
}
function encodeArg({ param, value }) {
	if (param.type === "string" || param.type === "bytes") return keccak256(toBytes$1(value));
	if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/)) throw new FilterTypeNotSupportedError(param.type);
	return encodeAbiParameters([param], [value]);
}
function createFilterRequestScope(client, { method }) {
	const requestMap = {};
	if (client.transport.type === "fallback") client.transport.onResponse?.(({ method: method_, response: id, status, transport }) => {
		if (status === "success" && method === method_) requestMap[id] = transport.request;
	});
	return ((id) => requestMap[id] || client.request);
}
async function createContractEventFilter(client, parameters) {
	const { address, abi: abi$2, args, eventName, fromBlock, strict, toBlock } = parameters;
	const getRequest = createFilterRequestScope(client, { method: "eth_newFilter" });
	const topics = eventName ? encodeEventTopics({
		abi: abi$2,
		args,
		eventName
	}) : void 0;
	const id = await client.request({
		method: "eth_newFilter",
		params: [{
			address,
			fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
			toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
			topics
		}]
	});
	return {
		abi: abi$2,
		args,
		eventName,
		id,
		request: getRequest(id),
		strict: Boolean(strict),
		type: "event"
	};
}
function getContractError$1(err, { abi: abi$2, address, args, docsPath: docsPath$2, functionName, sender }) {
	const error = err instanceof RawContractError ? err : err instanceof BaseError ? err.walk((err$1) => "data" in err$1) || err.walk() : {};
	const { code, data, details, message, shortMessage } = error;
	const cause = (() => {
		if (err instanceof AbiDecodingZeroDataError) return new ContractFunctionZeroDataError({ functionName });
		if ([3, InternalRpcError.code].includes(code) && (data || details || message || shortMessage)) return new ContractFunctionRevertedError({
			abi: abi$2,
			data: typeof data === "object" ? data.data : data,
			functionName,
			message: error instanceof RpcRequestError ? details : shortMessage ?? message
		});
		return err;
	})();
	return new ContractFunctionExecutionError(cause, {
		abi: abi$2,
		args,
		contractAddress: address,
		docsPath: docsPath$2,
		functionName,
		sender
	});
}
function publicKeyToAddress(publicKey) {
	const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
	return checksumAddress(`0x${address}`);
}
async function recoverPublicKey({ hash, signature }) {
	const hashHex = isHex(hash) ? hash : toHex(hash);
	const { secp256k1: secp256k1$1 } = await __vitePreload(async () => {
		const { secp256k1: secp256k1$2 } = await import("./secp256k1-B6ln1GTe.js");
		return { secp256k1: secp256k1$2 };
	}, __vite__mapDeps([0,1,2]));
	return `0x${(() => {
		if (typeof signature === "object" && "r" in signature && "s" in signature) {
			const { r: r$1, s, v, yParity } = signature;
			const recoveryBit$1 = toRecoveryBit(Number(yParity ?? v));
			return new secp256k1$1.Signature(hexToBigInt(r$1), hexToBigInt(s)).addRecoveryBit(recoveryBit$1);
		}
		const signatureHex = isHex(signature) ? signature : toHex(signature);
		if (size(signatureHex) !== 65) throw new Error("invalid signature length");
		const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
		const recoveryBit = toRecoveryBit(yParityOrV);
		return secp256k1$1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
	})().recoverPublicKey(hashHex.substring(2)).toHex(false)}`;
}
function toRecoveryBit(yParityOrV) {
	if (yParityOrV === 0 || yParityOrV === 1) return yParityOrV;
	if (yParityOrV === 27) return 0;
	if (yParityOrV === 28) return 1;
	throw new Error("Invalid yParityOrV value");
}
async function recoverAddress({ hash, signature }) {
	return publicKeyToAddress(await recoverPublicKey({
		hash,
		signature
	}));
}
function toRlp(bytes, to = "hex") {
	const encodable = getEncodable(bytes);
	const cursor = createCursor(new Uint8Array(encodable.length));
	encodable.encode(cursor);
	if (to === "hex") return bytesToHex$1(cursor.bytes);
	return cursor.bytes;
}
function getEncodable(bytes) {
	if (Array.isArray(bytes)) return getEncodableList(bytes.map((x) => getEncodable(x)));
	return getEncodableBytes(bytes);
}
function getEncodableList(list) {
	const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
	const sizeOfBodyLength = getSizeOfLength(bodyLength);
	return {
		length: (() => {
			if (bodyLength <= 55) return 1 + bodyLength;
			return 1 + sizeOfBodyLength + bodyLength;
		})(),
		encode(cursor) {
			if (bodyLength <= 55) cursor.pushByte(192 + bodyLength);
			else {
				cursor.pushByte(247 + sizeOfBodyLength);
				if (sizeOfBodyLength === 1) cursor.pushUint8(bodyLength);
				else if (sizeOfBodyLength === 2) cursor.pushUint16(bodyLength);
				else if (sizeOfBodyLength === 3) cursor.pushUint24(bodyLength);
				else cursor.pushUint32(bodyLength);
			}
			for (const { encode: encode$4 } of list) encode$4(cursor);
		}
	};
}
function getEncodableBytes(bytesOrHex) {
	const bytes = typeof bytesOrHex === "string" ? hexToBytes(bytesOrHex) : bytesOrHex;
	const sizeOfBytesLength = getSizeOfLength(bytes.length);
	return {
		length: (() => {
			if (bytes.length === 1 && bytes[0] < 128) return 1;
			if (bytes.length <= 55) return 1 + bytes.length;
			return 1 + sizeOfBytesLength + bytes.length;
		})(),
		encode(cursor) {
			if (bytes.length === 1 && bytes[0] < 128) cursor.pushBytes(bytes);
			else if (bytes.length <= 55) {
				cursor.pushByte(128 + bytes.length);
				cursor.pushBytes(bytes);
			} else {
				cursor.pushByte(183 + sizeOfBytesLength);
				if (sizeOfBytesLength === 1) cursor.pushUint8(bytes.length);
				else if (sizeOfBytesLength === 2) cursor.pushUint16(bytes.length);
				else if (sizeOfBytesLength === 3) cursor.pushUint24(bytes.length);
				else cursor.pushUint32(bytes.length);
				cursor.pushBytes(bytes);
			}
		}
	};
}
function getSizeOfLength(length) {
	if (length < 2 ** 8) return 1;
	if (length < 2 ** 16) return 2;
	if (length < 2 ** 24) return 3;
	if (length < 2 ** 32) return 4;
	throw new BaseError("Length is too large.");
}
function hashAuthorization(parameters) {
	const { chainId, nonce, to } = parameters;
	const address = parameters.contractAddress ?? parameters.address;
	const hash = keccak256(concatHex(["0x05", toRlp([
		chainId ? numberToHex(chainId) : "0x",
		address,
		nonce ? numberToHex(nonce) : "0x"
	])]));
	if (to === "bytes") return hexToBytes(hash);
	return hash;
}
async function recoverAuthorizationAddress(parameters) {
	const { authorization, signature } = parameters;
	return recoverAddress({
		hash: hashAuthorization(authorization),
		signature: signature ?? authorization
	});
}
var EstimateGasExecutionError = class extends BaseError {
	constructor(cause, { account: account$1, docsPath: docsPath$2, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
		const prettyArgs = prettyPrint({
			from: account$1?.address,
			to,
			value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
			data,
			gas,
			gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
			maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
			maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
			nonce
		});
		super(cause.shortMessage, {
			cause,
			docsPath: docsPath$2,
			metaMessages: [
				...cause.metaMessages ? [...cause.metaMessages, " "] : [],
				"Estimate Gas Arguments:",
				prettyArgs
			].filter(Boolean),
			name: "EstimateGasExecutionError"
		});
		Object.defineProperty(this, "cause", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.cause = cause;
	}
};
function getEstimateGasError(err, { docsPath: docsPath$2,...args }) {
	const cause = (() => {
		const cause$1 = getNodeError(err, args);
		if (cause$1 instanceof UnknownNodeError) return err;
		return cause$1;
	})();
	return new EstimateGasExecutionError(cause, {
		docsPath: docsPath$2,
		...args
	});
}
var BaseFeeScalarError = class extends BaseError {
	constructor() {
		super("`baseFeeMultiplier` must be greater than 1.", { name: "BaseFeeScalarError" });
	}
};
var Eip1559FeesNotSupportedError = class extends BaseError {
	constructor() {
		super("Chain does not support EIP-1559 fees.", { name: "Eip1559FeesNotSupportedError" });
	}
};
var MaxFeePerGasTooLowError = class extends BaseError {
	constructor({ maxPriorityFeePerGas }) {
		super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${formatGwei(maxPriorityFeePerGas)} gwei).`, { name: "MaxFeePerGasTooLowError" });
	}
};
var BlockNotFoundError = class extends BaseError {
	constructor({ blockHash, blockNumber }) {
		let identifier = "Block";
		if (blockHash) identifier = `Block at hash "${blockHash}"`;
		if (blockNumber) identifier = `Block at number "${blockNumber}"`;
		super(`${identifier} could not be found.`, { name: "BlockNotFoundError" });
	}
};
const transactionType = {
	"0x0": "legacy",
	"0x1": "eip2930",
	"0x2": "eip1559",
	"0x3": "eip4844",
	"0x4": "eip7702"
};
function formatTransaction(transaction) {
	const transaction_ = {
		...transaction,
		blockHash: transaction.blockHash ? transaction.blockHash : null,
		blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
		chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
		gas: transaction.gas ? BigInt(transaction.gas) : void 0,
		gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
		maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : void 0,
		maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
		maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
		nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
		to: transaction.to ? transaction.to : null,
		transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
		type: transaction.type ? transactionType[transaction.type] : void 0,
		typeHex: transaction.type ? transaction.type : void 0,
		value: transaction.value ? BigInt(transaction.value) : void 0,
		v: transaction.v ? BigInt(transaction.v) : void 0
	};
	if (transaction.authorizationList) transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
	transaction_.yParity = (() => {
		if (transaction.yParity) return Number(transaction.yParity);
		if (typeof transaction_.v === "bigint") {
			if (transaction_.v === 0n || transaction_.v === 27n) return 0;
			if (transaction_.v === 1n || transaction_.v === 28n) return 1;
			if (transaction_.v >= 35n) return transaction_.v % 2n === 0n ? 1 : 0;
		}
	})();
	if (transaction_.type === "legacy") {
		delete transaction_.accessList;
		delete transaction_.maxFeePerBlobGas;
		delete transaction_.maxFeePerGas;
		delete transaction_.maxPriorityFeePerGas;
		delete transaction_.yParity;
	}
	if (transaction_.type === "eip2930") {
		delete transaction_.maxFeePerBlobGas;
		delete transaction_.maxFeePerGas;
		delete transaction_.maxPriorityFeePerGas;
	}
	if (transaction_.type === "eip1559") delete transaction_.maxFeePerBlobGas;
	return transaction_;
}
function formatAuthorizationList(authorizationList) {
	return authorizationList.map((authorization) => ({
		address: authorization.address,
		chainId: Number(authorization.chainId),
		nonce: Number(authorization.nonce),
		r: authorization.r,
		s: authorization.s,
		yParity: Number(authorization.yParity)
	}));
}
function formatBlock(block) {
	const transactions = (block.transactions ?? []).map((transaction) => {
		if (typeof transaction === "string") return transaction;
		return formatTransaction(transaction);
	});
	return {
		...block,
		baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
		blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
		difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
		excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
		gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
		gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
		hash: block.hash ? block.hash : null,
		logsBloom: block.logsBloom ? block.logsBloom : null,
		nonce: block.nonce ? block.nonce : null,
		number: block.number ? BigInt(block.number) : null,
		size: block.size ? BigInt(block.size) : void 0,
		timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
		transactions,
		totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
	};
}
async function getBlock(client, { blockHash, blockNumber, blockTag = client.experimental_blockTag ?? "latest", includeTransactions: includeTransactions_ } = {}) {
	const includeTransactions = includeTransactions_ ?? false;
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	let block = null;
	if (blockHash) block = await client.request({
		method: "eth_getBlockByHash",
		params: [blockHash, includeTransactions]
	}, { dedupe: true });
	else block = await client.request({
		method: "eth_getBlockByNumber",
		params: [blockNumberHex || blockTag, includeTransactions]
	}, { dedupe: Boolean(blockNumberHex) });
	if (!block) throw new BlockNotFoundError({
		blockHash,
		blockNumber
	});
	return (client.chain?.formatters?.block?.format || formatBlock)(block);
}
async function getGasPrice(client) {
	const gasPrice = await client.request({ method: "eth_gasPrice" });
	return BigInt(gasPrice);
}
async function estimateMaxPriorityFeePerGas(client, args) {
	return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
	const { block: block_, chain = client.chain, request } = args || {};
	try {
		const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
		if (typeof maxPriorityFeePerGas === "function") {
			const block = block_ || await getAction(client, getBlock, "getBlock")({});
			const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
				block,
				client,
				request
			});
			if (maxPriorityFeePerGas_ === null) throw new Error();
			return maxPriorityFeePerGas_;
		}
		if (typeof maxPriorityFeePerGas !== "undefined") return maxPriorityFeePerGas;
		const maxPriorityFeePerGasHex = await client.request({ method: "eth_maxPriorityFeePerGas" });
		return hexToBigInt(maxPriorityFeePerGasHex);
	} catch {
		const [block, gasPrice] = await Promise.all([block_ ? Promise.resolve(block_) : getAction(client, getBlock, "getBlock")({}), getAction(client, getGasPrice, "getGasPrice")({})]);
		if (typeof block.baseFeePerGas !== "bigint") throw new Eip1559FeesNotSupportedError();
		const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
		if (maxPriorityFeePerGas < 0n) return 0n;
		return maxPriorityFeePerGas;
	}
}
async function estimateFeesPerGas(client, args) {
	return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
	const { block: block_, chain = client.chain, request, type: type$1 = "eip1559" } = args || {};
	const baseFeeMultiplier = await (async () => {
		if (typeof chain?.fees?.baseFeeMultiplier === "function") return chain.fees.baseFeeMultiplier({
			block: block_,
			client,
			request
		});
		return chain?.fees?.baseFeeMultiplier ?? 1.2;
	})();
	if (baseFeeMultiplier < 1) throw new BaseFeeScalarError();
	const denominator = 10 ** (baseFeeMultiplier.toString().split(".")[1]?.length ?? 0);
	const multiply = (base$1) => base$1 * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
	const block = block_ ? block_ : await getAction(client, getBlock, "getBlock")({});
	if (typeof chain?.fees?.estimateFeesPerGas === "function") {
		const fees = await chain.fees.estimateFeesPerGas({
			block: block_,
			client,
			multiply,
			request,
			type: type$1
		});
		if (fees !== null) return fees;
	}
	if (type$1 === "eip1559") {
		if (typeof block.baseFeePerGas !== "bigint") throw new Eip1559FeesNotSupportedError();
		const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === "bigint" ? request.maxPriorityFeePerGas : await internal_estimateMaxPriorityFeePerGas(client, {
			block,
			chain,
			request
		});
		const baseFeePerGas = multiply(block.baseFeePerGas);
		return {
			maxFeePerGas: request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas,
			maxPriorityFeePerGas
		};
	}
	return { gasPrice: request?.gasPrice ?? multiply(await getAction(client, getGasPrice, "getGasPrice")({})) };
}
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
	const count = await client.request({
		method: "eth_getTransactionCount",
		params: [address, typeof blockNumber === "bigint" ? numberToHex(blockNumber) : blockTag]
	}, { dedupe: Boolean(blockNumber) });
	return hexToNumber(count);
}
function blobsToCommitments(parameters) {
	const { kzg } = parameters;
	const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
	const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
	const commitments = [];
	for (const blob of blobs) commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
	return to === "bytes" ? commitments : commitments.map((x) => bytesToHex$1(x));
}
function blobsToProofs(parameters) {
	const { kzg } = parameters;
	const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
	const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
	const commitments = typeof parameters.commitments[0] === "string" ? parameters.commitments.map((x) => hexToBytes(x)) : parameters.commitments;
	const proofs = [];
	for (let i$1 = 0; i$1 < blobs.length; i$1++) {
		const blob = blobs[i$1];
		const commitment = commitments[i$1];
		proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
	}
	return to === "bytes" ? proofs : proofs.map((x) => bytesToHex$1(x));
}
function setBigUint64$1(view, byteOffset, value, isLE) {
	if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
	const _32n$1 = BigInt(32);
	const _u32_max = BigInt(4294967295);
	const wh = Number(value >> _32n$1 & _u32_max);
	const wl = Number(value & _u32_max);
	const h$1 = isLE ? 4 : 0;
	const l$1 = isLE ? 0 : 4;
	view.setUint32(byteOffset + h$1, wh, isLE);
	view.setUint32(byteOffset + l$1, wl, isLE);
}
function Chi$1(a, b$1, c) {
	return a & b$1 ^ ~a & c;
}
function Maj$1(a, b$1, c) {
	return a & b$1 ^ a & c ^ b$1 & c;
}
var HashMD$1 = class extends Hash$1 {
	constructor(blockLen, outputLen, padOffset, isLE) {
		super();
		this.finished = false;
		this.length = 0;
		this.pos = 0;
		this.destroyed = false;
		this.blockLen = blockLen;
		this.outputLen = outputLen;
		this.padOffset = padOffset;
		this.isLE = isLE;
		this.buffer = new Uint8Array(blockLen);
		this.view = createView$1(this.buffer);
	}
	update(data) {
		aexists$1(this);
		data = toBytes$2(data);
		abytes$1(data);
		const { view, buffer: buffer$1, blockLen } = this;
		const len = data.length;
		for (let pos = 0; pos < len;) {
			const take = Math.min(blockLen - this.pos, len - pos);
			if (take === blockLen) {
				const dataView = createView$1(data);
				for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
				continue;
			}
			buffer$1.set(data.subarray(pos, pos + take), this.pos);
			this.pos += take;
			pos += take;
			if (this.pos === blockLen) {
				this.process(view, 0);
				this.pos = 0;
			}
		}
		this.length += data.length;
		this.roundClean();
		return this;
	}
	digestInto(out) {
		aexists$1(this);
		aoutput$1(out, this);
		this.finished = true;
		const { buffer: buffer$1, view, blockLen, isLE } = this;
		let { pos } = this;
		buffer$1[pos++] = 128;
		clean$1(this.buffer.subarray(pos));
		if (this.padOffset > blockLen - pos) {
			this.process(view, 0);
			pos = 0;
		}
		for (let i$1 = pos; i$1 < blockLen; i$1++) buffer$1[i$1] = 0;
		setBigUint64$1(view, blockLen - 8, BigInt(this.length * 8), isLE);
		this.process(view, 0);
		const oview = createView$1(out);
		const len = this.outputLen;
		if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
		const outLen = len / 4;
		const state = this.get();
		if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
		for (let i$1 = 0; i$1 < outLen; i$1++) oview.setUint32(4 * i$1, state[i$1], isLE);
	}
	digest() {
		const { buffer: buffer$1, outputLen } = this;
		this.digestInto(buffer$1);
		const res = buffer$1.slice(0, outputLen);
		this.destroy();
		return res;
	}
	_cloneInto(to) {
		to || (to = new this.constructor());
		to.set(...this.get());
		const { blockLen, buffer: buffer$1, length, finished, destroyed, pos } = this;
		to.destroyed = destroyed;
		to.finished = finished;
		to.length = length;
		to.pos = pos;
		if (length % blockLen) to.buffer.set(buffer$1);
		return to;
	}
	clone() {
		return this._cloneInto();
	}
};
const SHA256_IV$1 = /* @__PURE__ */ Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]);
var SHA256_K$1 = /* @__PURE__ */ Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]);
var SHA256_W$1 = /* @__PURE__ */ new Uint32Array(64);
var SHA256$1 = class extends HashMD$1 {
	constructor(outputLen = 32) {
		super(64, outputLen, 8, false);
		this.A = SHA256_IV$1[0] | 0;
		this.B = SHA256_IV$1[1] | 0;
		this.C = SHA256_IV$1[2] | 0;
		this.D = SHA256_IV$1[3] | 0;
		this.E = SHA256_IV$1[4] | 0;
		this.F = SHA256_IV$1[5] | 0;
		this.G = SHA256_IV$1[6] | 0;
		this.H = SHA256_IV$1[7] | 0;
	}
	get() {
		const { A, B: B$1, C, D, E, F, G, H } = this;
		return [
			A,
			B$1,
			C,
			D,
			E,
			F,
			G,
			H
		];
	}
	set(A, B$1, C, D, E, F, G, H) {
		this.A = A | 0;
		this.B = B$1 | 0;
		this.C = C | 0;
		this.D = D | 0;
		this.E = E | 0;
		this.F = F | 0;
		this.G = G | 0;
		this.H = H | 0;
	}
	process(view, offset) {
		for (let i$1 = 0; i$1 < 16; i$1++, offset += 4) SHA256_W$1[i$1] = view.getUint32(offset, false);
		for (let i$1 = 16; i$1 < 64; i$1++) {
			const W15 = SHA256_W$1[i$1 - 15];
			const W2 = SHA256_W$1[i$1 - 2];
			const s0 = rotr$1(W15, 7) ^ rotr$1(W15, 18) ^ W15 >>> 3;
			SHA256_W$1[i$1] = (rotr$1(W2, 17) ^ rotr$1(W2, 19) ^ W2 >>> 10) + SHA256_W$1[i$1 - 7] + s0 + SHA256_W$1[i$1 - 16] | 0;
		}
		let { A, B: B$1, C, D, E, F, G, H } = this;
		for (let i$1 = 0; i$1 < 64; i$1++) {
			const sigma1 = rotr$1(E, 6) ^ rotr$1(E, 11) ^ rotr$1(E, 25);
			const T1 = H + sigma1 + Chi$1(E, F, G) + SHA256_K$1[i$1] + SHA256_W$1[i$1] | 0;
			const T2 = (rotr$1(A, 2) ^ rotr$1(A, 13) ^ rotr$1(A, 22)) + Maj$1(A, B$1, C) | 0;
			H = G;
			G = F;
			F = E;
			E = D + T1 | 0;
			D = C;
			C = B$1;
			B$1 = A;
			A = T1 + T2 | 0;
		}
		A = A + this.A | 0;
		B$1 = B$1 + this.B | 0;
		C = C + this.C | 0;
		D = D + this.D | 0;
		E = E + this.E | 0;
		F = F + this.F | 0;
		G = G + this.G | 0;
		H = H + this.H | 0;
		this.set(A, B$1, C, D, E, F, G, H);
	}
	roundClean() {
		clean$1(SHA256_W$1);
	}
	destroy() {
		this.set(0, 0, 0, 0, 0, 0, 0, 0);
		clean$1(this.buffer);
	}
};
const sha256$4 = /* @__PURE__ */ createHasher$1(() => new SHA256$1());
function sha256$3(value, to_) {
	const to = to_ || "hex";
	const bytes = sha256$4(isHex(value, { strict: false }) ? toBytes$1(value) : value);
	if (to === "bytes") return bytes;
	return toHex(bytes);
}
function commitmentToVersionedHash(parameters) {
	const { commitment, version: version$2 = 1 } = parameters;
	const to = parameters.to ?? (typeof commitment === "string" ? "hex" : "bytes");
	const versionedHash = sha256$3(commitment, "bytes");
	versionedHash.set([version$2], 0);
	return to === "bytes" ? versionedHash : bytesToHex$1(versionedHash);
}
function commitmentsToVersionedHashes(parameters) {
	const { commitments, version: version$2 } = parameters;
	const to = parameters.to ?? (typeof commitments[0] === "string" ? "hex" : "bytes");
	const hashes = [];
	for (const commitment of commitments) hashes.push(commitmentToVersionedHash({
		commitment,
		to,
		version: version$2
	}));
	return hashes;
}
const fieldElementsPerBlob = 4096;
const bytesPerBlob = 32 * fieldElementsPerBlob;
const maxBytesPerTransaction = bytesPerBlob * 6 - 1 - 1 * fieldElementsPerBlob * 6;
var BlobSizeTooLargeError = class extends BaseError {
	constructor({ maxSize, size: size$6 }) {
		super("Blob size is too large.", {
			metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size$6} bytes`],
			name: "BlobSizeTooLargeError"
		});
	}
};
var EmptyBlobError = class extends BaseError {
	constructor() {
		super("Blob data must not be empty.", { name: "EmptyBlobError" });
	}
};
function toBlobs(parameters) {
	const to = parameters.to ?? (typeof parameters.data === "string" ? "hex" : "bytes");
	const data = typeof parameters.data === "string" ? hexToBytes(parameters.data) : parameters.data;
	const size_ = size(data);
	if (!size_) throw new EmptyBlobError();
	if (size_ > 761855) throw new BlobSizeTooLargeError({
		maxSize: maxBytesPerTransaction,
		size: size_
	});
	const blobs = [];
	let active = true;
	let position = 0;
	while (active) {
		const blob = createCursor(new Uint8Array(bytesPerBlob));
		let size$6 = 0;
		while (size$6 < fieldElementsPerBlob) {
			const bytes = data.slice(position, position + 31);
			blob.pushByte(0);
			blob.pushBytes(bytes);
			if (bytes.length < 31) {
				blob.pushByte(128);
				active = false;
				break;
			}
			size$6++;
			position += 31;
		}
		blobs.push(blob);
	}
	return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => bytesToHex$1(x.bytes));
}
function toBlobSidecars(parameters) {
	const { data, kzg, to } = parameters;
	const blobs = parameters.blobs ?? toBlobs({
		data,
		to
	});
	const commitments = parameters.commitments ?? blobsToCommitments({
		blobs,
		kzg,
		to
	});
	const proofs = parameters.proofs ?? blobsToProofs({
		blobs,
		commitments,
		kzg,
		to
	});
	const sidecars = [];
	for (let i$1 = 0; i$1 < blobs.length; i$1++) sidecars.push({
		blob: blobs[i$1],
		commitment: commitments[i$1],
		proof: proofs[i$1]
	});
	return sidecars;
}
function getTransactionType(transaction) {
	if (transaction.type) return transaction.type;
	if (typeof transaction.authorizationList !== "undefined") return "eip7702";
	if (typeof transaction.blobs !== "undefined" || typeof transaction.blobVersionedHashes !== "undefined" || typeof transaction.maxFeePerBlobGas !== "undefined" || typeof transaction.sidecars !== "undefined") return "eip4844";
	if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined") return "eip1559";
	if (typeof transaction.gasPrice !== "undefined") {
		if (typeof transaction.accessList !== "undefined") return "eip2930";
		return "legacy";
	}
	throw new InvalidSerializableTransactionError({ transaction });
}
async function getChainId(client) {
	const chainIdHex = await client.request({ method: "eth_chainId" }, { dedupe: true });
	return hexToNumber(chainIdHex);
}
const defaultParameters$1 = [
	"blobVersionedHashes",
	"chainId",
	"fees",
	"gas",
	"nonce",
	"type"
];
const eip1559NetworkCache = /* @__PURE__ */ new Map();
async function prepareTransactionRequest(client, args) {
	const { account: account_ = client.account, blobs, chain, gas, kzg, nonce, nonceManager: nonceManager$1, parameters = defaultParameters$1, type: type$1 } = args;
	const account$1 = account_ ? parseAccount(account_) : account_;
	const request = {
		...args,
		...account$1 ? { from: account$1?.address } : {}
	};
	let block;
	async function getBlock$1() {
		if (block) return block;
		block = await getAction(client, getBlock, "getBlock")({ blockTag: "latest" });
		return block;
	}
	let chainId;
	async function getChainId$1() {
		if (chainId) return chainId;
		if (chain) return chain.id;
		if (typeof args.chainId !== "undefined") return args.chainId;
		chainId = await getAction(client, getChainId, "getChainId")({});
		return chainId;
	}
	if (parameters.includes("nonce") && typeof nonce === "undefined" && account$1) if (nonceManager$1) {
		const chainId$1 = await getChainId$1();
		request.nonce = await nonceManager$1.consume({
			address: account$1.address,
			chainId: chainId$1,
			client
		});
	} else request.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
		address: account$1.address,
		blockTag: "pending"
	});
	if ((parameters.includes("blobVersionedHashes") || parameters.includes("sidecars")) && blobs && kzg) {
		const commitments = blobsToCommitments({
			blobs,
			kzg
		});
		if (parameters.includes("blobVersionedHashes")) request.blobVersionedHashes = commitmentsToVersionedHashes({
			commitments,
			to: "hex"
		});
		if (parameters.includes("sidecars")) {
			const proofs = blobsToProofs({
				blobs,
				commitments,
				kzg
			});
			request.sidecars = toBlobSidecars({
				blobs,
				commitments,
				proofs,
				to: "hex"
			});
		}
	}
	if (parameters.includes("chainId")) request.chainId = await getChainId$1();
	if ((parameters.includes("fees") || parameters.includes("type")) && typeof type$1 === "undefined") try {
		request.type = getTransactionType(request);
	} catch {
		let isEip1559Network = eip1559NetworkCache.get(client.uid);
		if (typeof isEip1559Network === "undefined") {
			isEip1559Network = typeof (await getBlock$1())?.baseFeePerGas === "bigint";
			eip1559NetworkCache.set(client.uid, isEip1559Network);
		}
		request.type = isEip1559Network ? "eip1559" : "legacy";
	}
	if (parameters.includes("fees")) if (request.type !== "legacy" && request.type !== "eip2930") {
		if (typeof request.maxFeePerGas === "undefined" || typeof request.maxPriorityFeePerGas === "undefined") {
			const block$1 = await getBlock$1();
			const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
				block: block$1,
				chain,
				request
			});
			if (typeof args.maxPriorityFeePerGas === "undefined" && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas) throw new MaxFeePerGasTooLowError({ maxPriorityFeePerGas });
			request.maxPriorityFeePerGas = maxPriorityFeePerGas;
			request.maxFeePerGas = maxFeePerGas;
		}
	} else {
		if (typeof args.maxFeePerGas !== "undefined" || typeof args.maxPriorityFeePerGas !== "undefined") throw new Eip1559FeesNotSupportedError();
		if (typeof args.gasPrice === "undefined") {
			const block$1 = await getBlock$1();
			const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
				block: block$1,
				chain,
				request,
				type: "legacy"
			});
			request.gasPrice = gasPrice_;
		}
	}
	if (parameters.includes("gas") && typeof gas === "undefined") request.gas = await getAction(client, estimateGas, "estimateGas")({
		...request,
		account: account$1 ? {
			address: account$1.address,
			type: "json-rpc"
		} : account$1
	});
	assertRequest(request);
	delete request.parameters;
	return request;
}
async function getBalance(client, { address, blockNumber, blockTag = client.experimental_blockTag ?? "latest" }) {
	const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
	const balance = await client.request({
		method: "eth_getBalance",
		params: [address, blockNumberHex || blockTag]
	});
	return BigInt(balance);
}
async function estimateGas(client, args) {
	const { account: account_ = client.account } = args;
	const account$1 = account_ ? parseAccount(account_) : void 0;
	try {
		const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride,...rest } = await prepareTransactionRequest(client, {
			...args,
			parameters: account$1?.type === "local" ? void 0 : ["blobVersionedHashes"]
		});
		const block = (typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0) || blockTag;
		const rpcStateOverride = serializeStateOverride(stateOverride);
		const to = await (async () => {
			if (rest.to) return rest.to;
			if (authorizationList && authorizationList.length > 0) return await recoverAuthorizationAddress({ authorization: authorizationList[0] }).catch(() => {
				throw new BaseError("`to` is required. Could not infer from `authorizationList`");
			});
		})();
		assertRequest(args);
		const chainFormat = client.chain?.formatters?.transactionRequest?.format;
		const request = (chainFormat || formatTransactionRequest)({
			...extract$1(rest, { format: chainFormat }),
			from: account$1?.address,
			accessList,
			authorizationList,
			blobs,
			blobVersionedHashes,
			data,
			gas,
			gasPrice,
			maxFeePerBlobGas,
			maxFeePerGas,
			maxPriorityFeePerGas,
			nonce,
			to,
			value
		});
		function estimateGas_rpc(parameters) {
			const { block: block$1, request: request$1, rpcStateOverride: rpcStateOverride$1 } = parameters;
			return client.request({
				method: "eth_estimateGas",
				params: rpcStateOverride$1 ? [
					request$1,
					block$1 ?? client.experimental_blockTag ?? "latest",
					rpcStateOverride$1
				] : block$1 ? [request$1, block$1] : [request$1]
			});
		}
		let estimate = BigInt(await estimateGas_rpc({
			block,
			request,
			rpcStateOverride
		}));
		if (authorizationList) {
			const value$1 = await getBalance(client, { address: request.from });
			const estimates = await Promise.all(authorizationList.map(async (authorization) => {
				const { address } = authorization;
				const estimate$1 = await estimateGas_rpc({
					block,
					request: {
						authorizationList: void 0,
						data,
						from: account$1?.address,
						to: address,
						value: numberToHex(value$1)
					},
					rpcStateOverride
				}).catch(() => 100000n);
				return 2n * BigInt(estimate$1);
			}));
			estimate += estimates.reduce((acc, curr) => acc + curr, 0n);
		}
		return estimate;
	} catch (err) {
		throw getEstimateGasError(err, {
			...args,
			account: account$1,
			chain: client.chain
		});
	}
}
async function estimateContractGas(client, parameters) {
	const { abi: abi$2, address, args, functionName, dataSuffix,...request } = parameters;
	const data = encodeFunctionData({
		abi: abi$2,
		args,
		functionName
	});
	try {
		return await getAction(client, estimateGas, "estimateGas")({
			data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
			to: address,
			...request
		});
	} catch (error) {
		const account$1 = request.account ? parseAccount(request.account) : void 0;
		throw getContractError$1(error, {
			abi: abi$2,
			address,
			args,
			docsPath: "/docs/contract/estimateContractGas",
			functionName,
			sender: account$1?.address
		});
	}
}
var docsPath = "/docs/contract/decodeEventLog";
function decodeEventLog(parameters) {
	const { abi: abi$2, data, strict: strict_, topics } = parameters;
	const strict = strict_ ?? true;
	const [signature, ...argTopics] = topics;
	if (!signature) throw new AbiEventSignatureEmptyTopicsError({ docsPath });
	const abiItem = abi$2.find((x) => x.type === "event" && signature === toEventSelector(formatAbiItem(x)));
	if (!(abiItem && "name" in abiItem) || abiItem.type !== "event") throw new AbiEventSignatureNotFoundError(signature, { docsPath });
	const { name: name$1, inputs } = abiItem;
	const isUnnamed = inputs?.some((x) => !("name" in x && x.name));
	const args = isUnnamed ? [] : {};
	const indexedInputs = inputs.map((x, i$1) => [x, i$1]).filter(([x]) => "indexed" in x && x.indexed);
	for (let i$1 = 0; i$1 < indexedInputs.length; i$1++) {
		const [param, argIndex] = indexedInputs[i$1];
		const topic = argTopics[i$1];
		if (!topic) throw new DecodeLogTopicsMismatch({
			abiItem,
			param
		});
		args[isUnnamed ? argIndex : param.name || argIndex] = decodeTopic({
			param,
			value: topic
		});
	}
	const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
	if (nonIndexedInputs.length > 0) {
		if (data && data !== "0x") try {
			const decodedData = decodeAbiParameters(nonIndexedInputs, data);
			if (decodedData) if (isUnnamed) for (let i$1 = 0; i$1 < inputs.length; i$1++) args[i$1] = args[i$1] ?? decodedData.shift();
			else for (let i$1 = 0; i$1 < nonIndexedInputs.length; i$1++) args[nonIndexedInputs[i$1].name] = decodedData[i$1];
		} catch (err) {
			if (strict) {
				if (err instanceof AbiDecodingDataSizeTooSmallError || err instanceof PositionOutOfBoundsError$1) throw new DecodeLogDataMismatch({
					abiItem,
					data,
					params: nonIndexedInputs,
					size: size(data)
				});
				throw err;
			}
		}
		else if (strict) throw new DecodeLogDataMismatch({
			abiItem,
			data: "0x",
			params: nonIndexedInputs,
			size: 0
		});
	}
	return {
		eventName: name$1,
		args: Object.values(args).length > 0 ? args : void 0
	};
}
function decodeTopic({ param, value }) {
	if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/)) return value;
	return (decodeAbiParameters([param], value) || [])[0];
}
function parseEventLogs(parameters) {
	const { abi: abi$2, args, logs, strict = true } = parameters;
	const eventName = (() => {
		if (!parameters.eventName) return void 0;
		if (Array.isArray(parameters.eventName)) return parameters.eventName;
		return [parameters.eventName];
	})();
	return logs.map((log) => {
		try {
			const abiItem = abi$2.find((abiItem$1) => abiItem$1.type === "event" && log.topics[0] === toEventSelector(abiItem$1));
			if (!abiItem) return null;
			const event = decodeEventLog({
				...log,
				abi: [abiItem],
				strict
			});
			if (eventName && !eventName.includes(event.eventName)) return null;
			if (!includesArgs({
				args: event.args,
				inputs: abiItem.inputs,
				matchArgs: args
			})) return null;
			return {
				...event,
				...log
			};
		} catch (err) {
			let eventName$1;
			let isUnnamed;
			if (err instanceof AbiEventSignatureNotFoundError) return null;
			if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
				if (strict) return null;
				eventName$1 = err.abiItem.name;
				isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
			}
			return {
				...log,
				args: isUnnamed ? [] : {},
				eventName: eventName$1
			};
		}
	}).filter(Boolean);
}
function includesArgs(parameters) {
	const { args, inputs, matchArgs } = parameters;
	if (!matchArgs) return true;
	if (!args) return false;
	function isEqual(input, value, arg) {
		try {
			if (input.type === "address") return isAddressEqual(value, arg);
			if (input.type === "string" || input.type === "bytes") return keccak256(toBytes$1(value)) === arg;
			return value === arg;
		} catch {
			return false;
		}
	}
	if (Array.isArray(args) && Array.isArray(matchArgs)) return matchArgs.every((value, index$1) => {
		if (value === null || value === void 0) return true;
		const input = inputs[index$1];
		if (!input) return false;
		return (Array.isArray(value) ? value : [value]).some((value$1) => isEqual(input, value$1, args[index$1]));
	});
	if (typeof args === "object" && !Array.isArray(args) && typeof matchArgs === "object" && !Array.isArray(matchArgs)) return Object.entries(matchArgs).every(([key, value]) => {
		if (value === null || value === void 0) return true;
		const input = inputs.find((input$1) => input$1.name === key);
		if (!input) return false;
		return (Array.isArray(value) ? value : [value]).some((value$1) => isEqual(input, value$1, args[key]));
	});
	return false;
}
function formatLog(log, { args, eventName } = {}) {
	return {
		...log,
		blockHash: log.blockHash ? log.blockHash : null,
		blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
		logIndex: log.logIndex ? Number(log.logIndex) : null,
		transactionHash: log.transactionHash ? log.transactionHash : null,
		transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
		...eventName ? {
			args,
			eventName
		} : {}
	};
}
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
	const strict = strict_ ?? false;
	const events = events_ ?? (event ? [event] : void 0);
	let topics = [];
	if (events) {
		topics = [events.flatMap((event$1) => encodeEventTopics({
			abi: [event$1],
			eventName: event$1.name,
			args: events_ ? void 0 : args
		}))];
		if (event) topics = topics[0];
	}
	let logs;
	if (blockHash) logs = await client.request({
		method: "eth_getLogs",
		params: [{
			address,
			topics,
			blockHash
		}]
	});
	else logs = await client.request({
		method: "eth_getLogs",
		params: [{
			address,
			topics,
			fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
			toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock
		}]
	});
	const formattedLogs = logs.map((log) => formatLog(log));
	if (!events) return formattedLogs;
	return parseEventLogs({
		abi: events,
		args,
		logs: formattedLogs,
		strict
	});
}
async function getContractEvents(client, parameters) {
	const { abi: abi$2, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
	const event = eventName ? getAbiItem({
		abi: abi$2,
		name: eventName
	}) : void 0;
	const events = !event ? abi$2.filter((x) => x.type === "event") : void 0;
	return getAction(client, getLogs, "getLogs")({
		address,
		args,
		blockHash,
		event,
		events,
		fromBlock,
		toBlock,
		strict
	});
}
async function readContract(client, parameters) {
	const { abi: abi$2, address, args, functionName,...rest } = parameters;
	const calldata = encodeFunctionData({
		abi: abi$2,
		args,
		functionName
	});
	try {
		const { data } = await getAction(client, call, "call")({
			...rest,
			data: calldata,
			to: address
		});
		return decodeFunctionResult({
			abi: abi$2,
			args,
			functionName,
			data: data || "0x"
		});
	} catch (error) {
		throw getContractError$1(error, {
			abi: abi$2,
			address,
			args,
			docsPath: "/docs/contract/readContract",
			functionName
		});
	}
}
async function simulateContract(client, parameters) {
	const { abi: abi$2, address, args, dataSuffix, functionName,...callRequest } = parameters;
	const account$1 = callRequest.account ? parseAccount(callRequest.account) : client.account;
	const calldata = encodeFunctionData({
		abi: abi$2,
		args,
		functionName
	});
	try {
		const { data } = await getAction(client, call, "call")({
			batch: false,
			data: `${calldata}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
			to: address,
			...callRequest,
			account: account$1
		});
		const result = decodeFunctionResult({
			abi: abi$2,
			args,
			functionName,
			data: data || "0x"
		});
		const minimizedAbi = abi$2.filter((abiItem) => "name" in abiItem && abiItem.name === parameters.functionName);
		return {
			result,
			request: {
				abi: minimizedAbi,
				address,
				args,
				dataSuffix,
				functionName,
				...callRequest,
				account: account$1
			}
		};
	} catch (error) {
		throw getContractError$1(error, {
			abi: abi$2,
			address,
			args,
			docsPath: "/docs/contract/simulateContract",
			functionName,
			sender: account$1?.address
		});
	}
}
const listenersCache = /* @__PURE__ */ new Map();
const cleanupCache = /* @__PURE__ */ new Map();
var callbackCount = 0;
function observe(observerId, callbacks, fn) {
	const callbackId = ++callbackCount;
	const getListeners = () => listenersCache.get(observerId) || [];
	const unsubscribe = () => {
		const listeners$1 = getListeners();
		listenersCache.set(observerId, listeners$1.filter((cb) => cb.id !== callbackId));
	};
	const unwatch = () => {
		const listeners$1 = getListeners();
		if (!listeners$1.some((cb) => cb.id === callbackId)) return;
		const cleanup$1 = cleanupCache.get(observerId);
		if (listeners$1.length === 1 && cleanup$1) {
			const p = cleanup$1();
			if (p instanceof Promise) p.catch(() => {});
		}
		unsubscribe();
	};
	const listeners = getListeners();
	listenersCache.set(observerId, [...listeners, {
		id: callbackId,
		fns: callbacks
	}]);
	if (listeners && listeners.length > 0) return unwatch;
	const emit = {};
	for (const key in callbacks) emit[key] = ((...args) => {
		const listeners$1 = getListeners();
		if (listeners$1.length === 0) return;
		for (const listener of listeners$1) listener.fns[key]?.(...args);
	});
	const cleanup = fn(emit);
	if (typeof cleanup === "function") cleanupCache.set(observerId, cleanup);
	return unwatch;
}
async function wait(time) {
	return new Promise((res) => setTimeout(res, time));
}
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
	let active = true;
	const unwatch = () => active = false;
	const watch = async () => {
		let data;
		if (emitOnBegin) data = await fn({ unpoll: unwatch });
		const initialWait = await initialWaitTime?.(data) ?? interval;
		await wait(initialWait);
		const poll$1 = async () => {
			if (!active) return;
			await fn({ unpoll: unwatch });
			await wait(interval);
			poll$1();
		};
		poll$1();
	};
	watch();
	return unwatch;
}
const promiseCache$1 = /* @__PURE__ */ new Map();
const responseCache = /* @__PURE__ */ new Map();
function getCache(cacheKey$1) {
	const buildCache = (cacheKey$2, cache) => ({
		clear: () => cache.delete(cacheKey$2),
		get: () => cache.get(cacheKey$2),
		set: (data) => cache.set(cacheKey$2, data)
	});
	const promise = buildCache(cacheKey$1, promiseCache$1);
	const response = buildCache(cacheKey$1, responseCache);
	return {
		clear: () => {
			promise.clear();
			response.clear();
		},
		promise,
		response
	};
}
async function withCache(fn, { cacheKey: cacheKey$1, cacheTime = Number.POSITIVE_INFINITY }) {
	const cache = getCache(cacheKey$1);
	const response = cache.response.get();
	if (response && cacheTime > 0) {
		if (Date.now() - response.created.getTime() < cacheTime) return response.data;
	}
	let promise = cache.promise.get();
	if (!promise) {
		promise = fn();
		cache.promise.set(promise);
	}
	try {
		const data = await promise;
		cache.response.set({
			created: /* @__PURE__ */ new Date(),
			data
		});
		return data;
	} finally {
		cache.promise.clear();
	}
}
var cacheKey = (id) => `blockNumber.${id}`;
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
	const blockNumberHex = await withCache(() => client.request({ method: "eth_blockNumber" }), {
		cacheKey: cacheKey(client.uid),
		cacheTime
	});
	return BigInt(blockNumberHex);
}
async function getFilterChanges(_client, { filter }) {
	const strict = "strict" in filter && filter.strict;
	const logs = await filter.request({
		method: "eth_getFilterChanges",
		params: [filter.id]
	});
	if (typeof logs[0] === "string") return logs;
	const formattedLogs = logs.map((log) => formatLog(log));
	if (!("abi" in filter) || !filter.abi) return formattedLogs;
	return parseEventLogs({
		abi: filter.abi,
		logs: formattedLogs,
		strict
	});
}
async function uninstallFilter(_client, { filter }) {
	return filter.request({
		method: "eth_uninstallFilter",
		params: [filter.id]
	});
}
function watchContractEvent(client, parameters) {
	const { abi: abi$2, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
	const enablePolling = (() => {
		if (typeof poll_ !== "undefined") return poll_;
		if (typeof fromBlock === "bigint") return true;
		if (client.transport.type === "webSocket" || client.transport.type === "ipc") return false;
		if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc")) return false;
		return true;
	})();
	const pollContractEvent = () => {
		const strict = strict_ ?? false;
		const observerId = stringify$1([
			"watchContractEvent",
			address,
			args,
			batch,
			client.uid,
			eventName,
			pollingInterval,
			strict,
			fromBlock
		]);
		return observe(observerId, {
			onLogs,
			onError
		}, (emit) => {
			let previousBlockNumber;
			if (fromBlock !== void 0) previousBlockNumber = fromBlock - 1n;
			let filter;
			let initialized = false;
			const unwatch = poll(async () => {
				if (!initialized) {
					try {
						filter = await getAction(client, createContractEventFilter, "createContractEventFilter")({
							abi: abi$2,
							address,
							args,
							eventName,
							strict,
							fromBlock
						});
					} catch {}
					initialized = true;
					return;
				}
				try {
					let logs;
					if (filter) logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
					else {
						const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
						if (previousBlockNumber && previousBlockNumber < blockNumber) logs = await getAction(client, getContractEvents, "getContractEvents")({
							abi: abi$2,
							address,
							args,
							eventName,
							fromBlock: previousBlockNumber + 1n,
							toBlock: blockNumber,
							strict
						});
						else logs = [];
						previousBlockNumber = blockNumber;
					}
					if (logs.length === 0) return;
					if (batch) emit.onLogs(logs);
					else for (const log of logs) emit.onLogs([log]);
				} catch (err) {
					if (filter && err instanceof InvalidInputRpcError) initialized = false;
					emit.onError?.(err);
				}
			}, {
				emitOnBegin: true,
				interval: pollingInterval
			});
			return async () => {
				if (filter) await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
				unwatch();
			};
		});
	};
	const subscribeContractEvent = () => {
		const strict = strict_ ?? false;
		const observerId = stringify$1([
			"watchContractEvent",
			address,
			args,
			batch,
			client.uid,
			eventName,
			pollingInterval,
			strict
		]);
		let active = true;
		let unsubscribe = () => active = false;
		return observe(observerId, {
			onLogs,
			onError
		}, (emit) => {
			(async () => {
				try {
					const transport = (() => {
						if (client.transport.type === "fallback") {
							const transport$1 = client.transport.transports.find((transport$2) => transport$2.config.type === "webSocket" || transport$2.config.type === "ipc");
							if (!transport$1) return client.transport;
							return transport$1.value;
						}
						return client.transport;
					})();
					const topics = eventName ? encodeEventTopics({
						abi: abi$2,
						eventName,
						args
					}) : [];
					const { unsubscribe: unsubscribe_ } = await transport.subscribe({
						params: ["logs", {
							address,
							topics
						}],
						onData(data) {
							if (!active) return;
							const log = data.result;
							try {
								const { eventName: eventName$1, args: args$1 } = decodeEventLog({
									abi: abi$2,
									data: log.data,
									topics: log.topics,
									strict: strict_
								});
								const formatted = formatLog(log, {
									args: args$1,
									eventName: eventName$1
								});
								emit.onLogs([formatted]);
							} catch (err) {
								let eventName$1;
								let isUnnamed;
								if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
									if (strict_) return;
									eventName$1 = err.abiItem.name;
									isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
								}
								const formatted = formatLog(log, {
									args: isUnnamed ? [] : {},
									eventName: eventName$1
								});
								emit.onLogs([formatted]);
							}
						},
						onError(error) {
							emit.onError?.(error);
						}
					});
					unsubscribe = unsubscribe_;
					if (!active) unsubscribe();
				} catch (err) {
					onError?.(err);
				}
			})();
			return () => unsubscribe();
		});
	};
	return enablePolling ? pollContractEvent() : subscribeContractEvent();
}
var AccountNotFoundError = class extends BaseError {
	constructor({ docsPath: docsPath$2 } = {}) {
		super(["Could not find an Account to execute with this Action.", "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join("\n"), {
			docsPath: docsPath$2,
			docsSlug: "account",
			name: "AccountNotFoundError"
		});
	}
};
async function sendRawTransaction(client, { serializedTransaction }) {
	return client.request({
		method: "eth_sendRawTransaction",
		params: [serializedTransaction]
	}, { retryCount: 0 });
}
var BundleFailedError = class extends BaseError {
	constructor(result) {
		super(`Call bundle failed with status: ${result.statusCode}`, { name: "BundleFailedError" });
		Object.defineProperty(this, "result", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.result = result;
	}
};
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry: shouldRetry$1 = () => true } = {}) {
	return new Promise((resolve, reject) => {
		const attemptRetry = async ({ count = 0 } = {}) => {
			const retry = async ({ error }) => {
				const delay = typeof delay_ === "function" ? delay_({
					count,
					error
				}) : delay_;
				if (delay) await wait(delay);
				attemptRetry({ count: count + 1 });
			};
			try {
				const data = await fn();
				resolve(data);
			} catch (err) {
				if (count < retryCount && await shouldRetry$1({
					count,
					error: err
				})) return retry({ error: err });
				reject(err);
			}
		};
		attemptRetry();
	});
}
const receiptStatuses = {
	"0x0": "reverted",
	"0x1": "success"
};
function formatTransactionReceipt(transactionReceipt) {
	const receipt = {
		...transactionReceipt,
		blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
		contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
		cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
		effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
		gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
		logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
		to: transactionReceipt.to ? transactionReceipt.to : null,
		transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
		status: transactionReceipt.status ? receiptStatuses[transactionReceipt.status] : null,
		type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
	};
	if (transactionReceipt.blobGasPrice) receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
	if (transactionReceipt.blobGasUsed) receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
	return receipt;
}
const fallbackTransactionErrorMagicIdentifier = numberToHex(0, { size: 32 });
async function getCallsStatus(client, parameters) {
	async function getStatus(id) {
		if (id.endsWith("0x5792579257925792579257925792579257925792579257925792579257925792".slice(2))) {
			const chainId$1 = trim(sliceHex(id, -64, -32));
			const hashes = sliceHex(id, 0, -64).slice(2).match(/.{1,64}/g);
			const receipts$1 = await Promise.all(hashes.map((hash) => fallbackTransactionErrorMagicIdentifier.slice(2) !== hash ? client.request({
				method: "eth_getTransactionReceipt",
				params: [`0x${hash}`]
			}, { dedupe: true }) : void 0));
			const status$1 = (() => {
				if (receipts$1.some((r$1) => r$1 === null)) return 100;
				if (receipts$1.every((r$1) => r$1?.status === "0x1")) return 200;
				if (receipts$1.every((r$1) => r$1?.status === "0x0")) return 500;
				return 600;
			})();
			return {
				atomic: false,
				chainId: hexToNumber(chainId$1),
				receipts: receipts$1.filter(Boolean),
				status: status$1,
				version: "2.0.0"
			};
		}
		return client.request({
			method: "wallet_getCallsStatus",
			params: [id]
		});
	}
	const { atomic = false, chainId, receipts, version: version$2 = "2.0.0",...response } = await getStatus(parameters.id);
	const [status, statusCode] = (() => {
		const statusCode$1 = response.status;
		if (statusCode$1 >= 100 && statusCode$1 < 200) return ["pending", statusCode$1];
		if (statusCode$1 >= 200 && statusCode$1 < 300) return ["success", statusCode$1];
		if (statusCode$1 >= 300 && statusCode$1 < 700) return ["failure", statusCode$1];
		if (statusCode$1 === "CONFIRMED") return ["success", 200];
		if (statusCode$1 === "PENDING") return ["pending", 100];
		return [void 0, statusCode$1];
	})();
	return {
		...response,
		atomic,
		chainId: chainId ? hexToNumber(chainId) : void 0,
		receipts: receipts?.map((receipt) => ({
			...receipt,
			blockNumber: hexToBigInt(receipt.blockNumber),
			gasUsed: hexToBigInt(receipt.gasUsed),
			status: receiptStatuses[receipt.status]
		})) ?? [],
		statusCode,
		status,
		version: version$2
	};
}
async function waitForCallsStatus(client, parameters) {
	const { id, pollingInterval = client.pollingInterval, status = ({ statusCode }) => statusCode === 200 || statusCode >= 300, retryCount = 4, retryDelay = ({ count }) => ~~(1 << count) * 200, timeout = 6e4, throwOnFailure = false } = parameters;
	const observerId = stringify$1([
		"waitForCallsStatus",
		client.uid,
		id
	]);
	const { promise, resolve, reject } = withResolvers();
	let timer;
	const unobserve = observe(observerId, {
		resolve,
		reject
	}, (emit) => {
		const unpoll = poll(async () => {
			const done = (fn) => {
				clearTimeout(timer);
				unpoll();
				fn();
				unobserve();
			};
			try {
				const result = await withRetry(async () => {
					const result$1 = await getAction(client, getCallsStatus, "getCallsStatus")({ id });
					if (throwOnFailure && result$1.status === "failure") throw new BundleFailedError(result$1);
					return result$1;
				}, {
					retryCount,
					delay: retryDelay
				});
				if (!status(result)) return;
				done(() => emit.resolve(result));
			} catch (error) {
				done(() => emit.reject(error));
			}
		}, {
			interval: pollingInterval,
			emitOnBegin: true
		});
		return unpoll;
	});
	timer = timeout ? setTimeout(() => {
		unobserve();
		clearTimeout(timer);
		reject(new WaitForCallsStatusTimeoutError({ id }));
	}, timeout) : void 0;
	return await promise;
}
var WaitForCallsStatusTimeoutError = class extends BaseError {
	constructor({ id }) {
		super(`Timed out while waiting for call bundle with id "${id}" to be confirmed.`, { name: "WaitForCallsStatusTimeoutError" });
	}
};
var index = 256;
var buffer;
function uid(length = 11) {
	if (!buffer || index + length > 256 * 2) {
		buffer = "";
		index = 0;
		for (let i$1 = 0; i$1 < 256; i$1++) buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
	}
	return buffer.substring(index, index++ + length);
}
function createClient(parameters) {
	const { batch, chain, ccipRead, key = "base", name: name$1 = "Base Client", type: type$1 = "base" } = parameters;
	const experimental_blockTag = parameters.experimental_blockTag ?? (typeof chain?.experimental_preconfirmationTime === "number" ? "pending" : void 0);
	const blockTime = chain?.blockTime ?? 12e3;
	const defaultPollingInterval = Math.min(Math.max(Math.floor(blockTime / 2), 500), 4e3);
	const pollingInterval = parameters.pollingInterval ?? defaultPollingInterval;
	const cacheTime = parameters.cacheTime ?? pollingInterval;
	const account$1 = parameters.account ? parseAccount(parameters.account) : void 0;
	const { config: config$1, request, value } = parameters.transport({
		chain,
		pollingInterval
	});
	const transport = {
		...config$1,
		...value
	};
	const client = {
		account: account$1,
		batch,
		cacheTime,
		ccipRead,
		chain,
		key,
		name: name$1,
		pollingInterval,
		request,
		transport,
		type: type$1,
		uid: uid(),
		...experimental_blockTag ? { experimental_blockTag } : {}
	};
	function extend(base$1) {
		return (extendFn) => {
			const extended = extendFn(base$1);
			for (const key$1 in client) delete extended[key$1];
			const combined = {
				...base$1,
				...extended
			};
			return Object.assign(combined, { extend: extend(combined) });
		};
	}
	return Object.assign(client, { extend: extend(client) });
}
function isNullUniversalResolverError(err) {
	if (!(err instanceof BaseError)) return false;
	const cause = err.walk((e) => e instanceof ContractFunctionRevertedError);
	if (!(cause instanceof ContractFunctionRevertedError)) return false;
	if (cause.data?.errorName === "HttpError") return true;
	if (cause.data?.errorName === "ResolverError") return true;
	if (cause.data?.errorName === "ResolverNotContract") return true;
	if (cause.data?.errorName === "ResolverNotFound") return true;
	if (cause.data?.errorName === "ReverseAddressMismatch") return true;
	if (cause.data?.errorName === "UnsupportedResolverProfile") return true;
	return false;
}
function encodedLabelToLabelhash(label) {
	if (label.length !== 66) return null;
	if (label.indexOf("[") !== 0) return null;
	if (label.indexOf("]") !== 65) return null;
	const hash = `0x${label.slice(1, 65)}`;
	if (!isHex(hash)) return null;
	return hash;
}
function namehash(name$1) {
	let result = new Uint8Array(32).fill(0);
	if (!name$1) return bytesToHex$1(result);
	const labels = name$1.split(".");
	for (let i$1 = labels.length - 1; i$1 >= 0; i$1 -= 1) {
		const hashFromEncodedLabel = encodedLabelToLabelhash(labels[i$1]);
		const hashed = hashFromEncodedLabel ? toBytes$1(hashFromEncodedLabel) : keccak256(stringToBytes(labels[i$1]), "bytes");
		result = keccak256(concat$1([result, hashed]), "bytes");
	}
	return bytesToHex$1(result);
}
function encodeLabelhash(hash) {
	return `[${hash.slice(2)}]`;
}
function labelhash(label) {
	const result = new Uint8Array(32).fill(0);
	if (!label) return bytesToHex$1(result);
	return encodedLabelToLabelhash(label) || keccak256(stringToBytes(label));
}
function packetToBytes(packet) {
	const value = packet.replace(/^\.|\.$/gm, "");
	if (value.length === 0) return new Uint8Array(1);
	const bytes = new Uint8Array(stringToBytes(value).byteLength + 2);
	let offset = 0;
	const list = value.split(".");
	for (let i$1 = 0; i$1 < list.length; i$1++) {
		let encoded = stringToBytes(list[i$1]);
		if (encoded.byteLength > 255) encoded = stringToBytes(encodeLabelhash(labelhash(list[i$1])));
		bytes[offset] = encoded.length;
		bytes.set(encoded, offset + 1);
		offset += encoded.length + 1;
	}
	if (bytes.byteLength !== offset + 1) return bytes.slice(0, offset + 1);
	return bytes;
}
async function getEnsAddress(client, parameters) {
	const { blockNumber, blockTag, coinType, name: name$1, gatewayUrls, strict } = parameters;
	const { chain } = client;
	const universalResolverAddress = (() => {
		if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
		if (!chain) throw new Error("client chain not configured. universalResolverAddress is required.");
		return getChainContractAddress({
			blockNumber,
			chain,
			contract: "ensUniversalResolver"
		});
	})();
	const tlds = chain?.ensTlds;
	if (tlds && !tlds.some((tld) => name$1.endsWith(tld))) return null;
	const args = (() => {
		if (coinType != null) return [namehash(name$1), BigInt(coinType)];
		return [namehash(name$1)];
	})();
	try {
		const functionData = encodeFunctionData({
			abi: addressResolverAbi,
			functionName: "addr",
			args
		});
		const readContractParameters = {
			address: universalResolverAddress,
			abi: universalResolverResolveAbi,
			functionName: "resolveWithGateways",
			args: [
				toHex(packetToBytes(name$1)),
				functionData,
				gatewayUrls ?? ["x-batch-gateway:true"]
			],
			blockNumber,
			blockTag
		};
		const res = await getAction(client, readContract, "readContract")(readContractParameters);
		if (res[0] === "0x") return null;
		const address = decodeFunctionResult({
			abi: addressResolverAbi,
			args,
			functionName: "addr",
			data: res[0]
		});
		if (address === "0x") return null;
		if (trim(address) === "0x00") return null;
		return address;
	} catch (err) {
		if (strict) throw err;
		if (isNullUniversalResolverError(err)) return null;
		throw err;
	}
}
var EnsAvatarInvalidMetadataError = class extends BaseError {
	constructor({ data }) {
		super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
			metaMessages: [
				"- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
				"",
				`Provided data: ${JSON.stringify(data)}`
			],
			name: "EnsAvatarInvalidMetadataError"
		});
	}
};
var EnsAvatarInvalidNftUriError = class extends BaseError {
	constructor({ reason }) {
		super(`ENS NFT avatar URI is invalid. ${reason}`, { name: "EnsAvatarInvalidNftUriError" });
	}
};
var EnsAvatarUriResolutionError = class extends BaseError {
	constructor({ uri }) {
		super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
	}
};
var EnsAvatarUnsupportedNamespaceError = class extends BaseError {
	constructor({ namespace }) {
		super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
	}
};
var networkRegex = /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
var ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
var base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
var dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
	try {
		const res = await fetch(uri, { method: "HEAD" });
		if (res.status === 200) return res.headers.get("content-type")?.startsWith("image/");
		return false;
	} catch (error) {
		if (typeof error === "object" && typeof error.response !== "undefined") return false;
		if (!Object.hasOwn(globalThis, "Image")) return false;
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => {
				resolve(true);
			};
			img.onerror = () => {
				resolve(false);
			};
			img.src = uri;
		});
	}
}
function getGateway(custom, defaultGateway) {
	if (!custom) return defaultGateway;
	if (custom.endsWith("/")) return custom.slice(0, -1);
	return custom;
}
function resolveAvatarUri({ uri, gatewayUrls }) {
	const isEncoded = base64Regex.test(uri);
	if (isEncoded) return {
		uri,
		isOnChain: true,
		isEncoded
	};
	const ipfsGateway = getGateway(gatewayUrls?.ipfs, "https://ipfs.io");
	const arweaveGateway = getGateway(gatewayUrls?.arweave, "https://arweave.net");
	const { protocol, subpath, target, subtarget = "" } = uri.match(networkRegex)?.groups || {};
	const isIPNS = protocol === "ipns:/" || subpath === "ipns/";
	const isIPFS = protocol === "ipfs:/" || subpath === "ipfs/" || ipfsHashRegex.test(uri);
	if (uri.startsWith("http") && !isIPNS && !isIPFS) {
		let replacedUri = uri;
		if (gatewayUrls?.arweave) replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
		return {
			uri: replacedUri,
			isOnChain: false,
			isEncoded: false
		};
	}
	if ((isIPNS || isIPFS) && target) return {
		uri: `${ipfsGateway}/${isIPNS ? "ipns" : "ipfs"}/${target}${subtarget}`,
		isOnChain: false,
		isEncoded: false
	};
	if (protocol === "ar:/" && target) return {
		uri: `${arweaveGateway}/${target}${subtarget || ""}`,
		isOnChain: false,
		isEncoded: false
	};
	let parsedUri = uri.replace(dataURIRegex, "");
	if (parsedUri.startsWith("<svg")) parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
	if (parsedUri.startsWith("data:") || parsedUri.startsWith("{")) return {
		uri: parsedUri,
		isOnChain: true,
		isEncoded: false
	};
	throw new EnsAvatarUriResolutionError({ uri });
}
function getJsonImage(data) {
	if (typeof data !== "object" || !("image" in data) && !("image_url" in data) && !("image_data" in data)) throw new EnsAvatarInvalidMetadataError({ data });
	return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
	try {
		const res = await fetch(uri).then((res$1) => res$1.json());
		return await parseAvatarUri({
			gatewayUrls,
			uri: getJsonImage(res)
		});
	} catch {
		throw new EnsAvatarUriResolutionError({ uri });
	}
}
async function parseAvatarUri({ gatewayUrls, uri }) {
	const { uri: resolvedURI, isOnChain } = resolveAvatarUri({
		uri,
		gatewayUrls
	});
	if (isOnChain) return resolvedURI;
	if (await isImageUri(resolvedURI)) return resolvedURI;
	throw new EnsAvatarUriResolutionError({ uri });
}
function parseNftUri(uri_) {
	let uri = uri_;
	if (uri.startsWith("did:nft:")) uri = uri.replace("did:nft:", "").replace(/_/g, "/");
	const [reference, asset_namespace, tokenID] = uri.split("/");
	const [eip_namespace, chainID] = reference.split(":");
	const [erc_namespace, contractAddress] = asset_namespace.split(":");
	if (!eip_namespace || eip_namespace.toLowerCase() !== "eip155") throw new EnsAvatarInvalidNftUriError({ reason: "Only EIP-155 supported" });
	if (!chainID) throw new EnsAvatarInvalidNftUriError({ reason: "Chain ID not found" });
	if (!contractAddress) throw new EnsAvatarInvalidNftUriError({ reason: "Contract address not found" });
	if (!tokenID) throw new EnsAvatarInvalidNftUriError({ reason: "Token ID not found" });
	if (!erc_namespace) throw new EnsAvatarInvalidNftUriError({ reason: "ERC namespace not found" });
	return {
		chainID: Number.parseInt(chainID, 10),
		namespace: erc_namespace.toLowerCase(),
		contractAddress,
		tokenID
	};
}
async function getNftTokenUri(client, { nft }) {
	if (nft.namespace === "erc721") return readContract(client, {
		address: nft.contractAddress,
		abi: [{
			name: "tokenURI",
			type: "function",
			stateMutability: "view",
			inputs: [{
				name: "tokenId",
				type: "uint256"
			}],
			outputs: [{
				name: "",
				type: "string"
			}]
		}],
		functionName: "tokenURI",
		args: [BigInt(nft.tokenID)]
	});
	if (nft.namespace === "erc1155") return readContract(client, {
		address: nft.contractAddress,
		abi: [{
			name: "uri",
			type: "function",
			stateMutability: "view",
			inputs: [{
				name: "_id",
				type: "uint256"
			}],
			outputs: [{
				name: "",
				type: "string"
			}]
		}],
		functionName: "uri",
		args: [BigInt(nft.tokenID)]
	});
	throw new EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}
async function parseAvatarRecord(client, { gatewayUrls, record }) {
	if (/eip155:/i.test(record)) return parseNftAvatarUri(client, {
		gatewayUrls,
		record
	});
	return parseAvatarUri({
		uri: record,
		gatewayUrls
	});
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
	const nft = parseNftUri(record);
	const nftUri = await getNftTokenUri(client, { nft });
	const { uri: resolvedNftUri, isOnChain, isEncoded } = resolveAvatarUri({
		uri: nftUri,
		gatewayUrls
	});
	if (isOnChain && (resolvedNftUri.includes("data:application/json;base64,") || resolvedNftUri.startsWith("{"))) {
		const encodedJson = isEncoded ? atob(resolvedNftUri.replace("data:application/json;base64,", "")) : resolvedNftUri;
		const decoded = JSON.parse(encodedJson);
		return parseAvatarUri({
			uri: getJsonImage(decoded),
			gatewayUrls
		});
	}
	let uriTokenId = nft.tokenID;
	if (nft.namespace === "erc1155") uriTokenId = uriTokenId.replace("0x", "").padStart(64, "0");
	return getMetadataAvatarUri({
		gatewayUrls,
		uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
	});
}
async function getEnsText(client, parameters) {
	const { blockNumber, blockTag, key, name: name$1, gatewayUrls, strict } = parameters;
	const { chain } = client;
	const universalResolverAddress = (() => {
		if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
		if (!chain) throw new Error("client chain not configured. universalResolverAddress is required.");
		return getChainContractAddress({
			blockNumber,
			chain,
			contract: "ensUniversalResolver"
		});
	})();
	const tlds = chain?.ensTlds;
	if (tlds && !tlds.some((tld) => name$1.endsWith(tld))) return null;
	try {
		const readContractParameters = {
			address: universalResolverAddress,
			abi: universalResolverResolveAbi,
			args: [
				toHex(packetToBytes(name$1)),
				encodeFunctionData({
					abi: textResolverAbi,
					functionName: "text",
					args: [namehash(name$1), key]
				}),
				gatewayUrls ?? ["x-batch-gateway:true"]
			],
			functionName: "resolveWithGateways",
			blockNumber,
			blockTag
		};
		const res = await getAction(client, readContract, "readContract")(readContractParameters);
		if (res[0] === "0x") return null;
		const record = decodeFunctionResult({
			abi: textResolverAbi,
			functionName: "text",
			data: res[0]
		});
		return record === "" ? null : record;
	} catch (err) {
		if (strict) throw err;
		if (isNullUniversalResolverError(err)) return null;
		throw err;
	}
}
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name: name$1, gatewayUrls, strict, universalResolverAddress }) {
	const record = await getAction(client, getEnsText, "getEnsText")({
		blockNumber,
		blockTag,
		key: "avatar",
		name: name$1,
		universalResolverAddress,
		gatewayUrls,
		strict
	});
	if (!record) return null;
	try {
		return await parseAvatarRecord(client, {
			record,
			gatewayUrls: assetGatewayUrls
		});
	} catch {
		return null;
	}
}
async function getEnsName(client, parameters) {
	const { address, blockNumber, blockTag, coinType = 60n, gatewayUrls, strict } = parameters;
	const { chain } = client;
	const universalResolverAddress = (() => {
		if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
		if (!chain) throw new Error("client chain not configured. universalResolverAddress is required.");
		return getChainContractAddress({
			blockNumber,
			chain,
			contract: "ensUniversalResolver"
		});
	})();
	try {
		const readContractParameters = {
			address: universalResolverAddress,
			abi: universalResolverReverseAbi,
			args: [
				address,
				coinType,
				gatewayUrls ?? ["x-batch-gateway:true"]
			],
			functionName: "reverseWithGateways",
			blockNumber,
			blockTag
		};
		const [name$1] = await getAction(client, readContract, "readContract")(readContractParameters);
		return name$1 || null;
	} catch (err) {
		if (strict) throw err;
		if (isNullUniversalResolverError(err)) return null;
		throw err;
	}
}
async function getEnsResolver(client, parameters) {
	const { blockNumber, blockTag, name: name$1 } = parameters;
	const { chain } = client;
	const universalResolverAddress = (() => {
		if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
		if (!chain) throw new Error("client chain not configured. universalResolverAddress is required.");
		return getChainContractAddress({
			blockNumber,
			chain,
			contract: "ensUniversalResolver"
		});
	})();
	const tlds = chain?.ensTlds;
	if (tlds && !tlds.some((tld) => name$1.endsWith(tld))) throw new Error(`${name$1} is not a valid ENS TLD (${tlds?.join(", ")}) for chain "${chain.name}" (id: ${chain.id}).`);
	const [resolverAddress] = await getAction(client, readContract, "readContract")({
		address: universalResolverAddress,
		abi: [{
			inputs: [{ type: "bytes" }],
			name: "findResolver",
			outputs: [
				{ type: "address" },
				{ type: "bytes32" },
				{ type: "uint256" }
			],
			stateMutability: "view",
			type: "function"
		}],
		functionName: "findResolver",
		args: [toHex(packetToBytes(name$1))],
		blockNumber,
		blockTag
	});
	return resolverAddress;
}
async function createAccessList(client, args) {
	const { account: account_ = client.account, blockNumber, blockTag = "latest", blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value,...rest } = args;
	const account$1 = account_ ? parseAccount(account_) : void 0;
	try {
		assertRequest(args);
		const block = (typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0) || blockTag;
		const chainFormat = client.chain?.formatters?.transactionRequest?.format;
		const request = (chainFormat || formatTransactionRequest)({
			...extract$1(rest, { format: chainFormat }),
			from: account$1?.address,
			blobs,
			data,
			gas,
			gasPrice,
			maxFeePerBlobGas,
			maxFeePerGas,
			maxPriorityFeePerGas,
			to,
			value
		});
		const response = await client.request({
			method: "eth_createAccessList",
			params: [request, block]
		});
		return {
			accessList: response.accessList,
			gasUsed: BigInt(response.gasUsed)
		};
	} catch (err) {
		throw getCallError(err, {
			...args,
			account: account$1,
			chain: client.chain
		});
	}
}
async function createBlockFilter(client) {
	const getRequest = createFilterRequestScope(client, { method: "eth_newBlockFilter" });
	const id = await client.request({ method: "eth_newBlockFilter" });
	return {
		id,
		request: getRequest(id),
		type: "block"
	};
}
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
	const events = events_ ?? (event ? [event] : void 0);
	const getRequest = createFilterRequestScope(client, { method: "eth_newFilter" });
	let topics = [];
	if (events) {
		topics = [events.flatMap((event$1) => encodeEventTopics({
			abi: [event$1],
			eventName: event$1.name,
			args
		}))];
		if (event) topics = topics[0];
	}
	const id = await client.request({
		method: "eth_newFilter",
		params: [{
			address,
			fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
			toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
			...topics.length ? { topics } : {}
		}]
	});
	return {
		abi: events,
		args,
		eventName: event ? event.name : void 0,
		fromBlock,
		id,
		request: getRequest(id),
		strict: Boolean(strict),
		toBlock,
		type: "event"
	};
}
async function createPendingTransactionFilter(client) {
	const getRequest = createFilterRequestScope(client, { method: "eth_newPendingTransactionFilter" });
	const id = await client.request({ method: "eth_newPendingTransactionFilter" });
	return {
		id,
		request: getRequest(id),
		type: "transaction"
	};
}
async function getBlobBaseFee(client) {
	const baseFee = await client.request({ method: "eth_blobBaseFee" });
	return BigInt(baseFee);
}
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = "latest" } = {}) {
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	let count;
	if (blockHash) count = await client.request({
		method: "eth_getBlockTransactionCountByHash",
		params: [blockHash]
	}, { dedupe: true });
	else count = await client.request({
		method: "eth_getBlockTransactionCountByNumber",
		params: [blockNumberHex || blockTag]
	}, { dedupe: Boolean(blockNumberHex) });
	return hexToNumber(count);
}
async function getCode(client, { address, blockNumber, blockTag = "latest" }) {
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	const hex = await client.request({
		method: "eth_getCode",
		params: [address, blockNumberHex || blockTag]
	}, { dedupe: Boolean(blockNumberHex) });
	if (hex === "0x") return void 0;
	return hex;
}
var Eip712DomainNotFoundError = class extends BaseError {
	constructor({ address }) {
		super(`No EIP-712 domain found on contract "${address}".`, {
			metaMessages: [
				"Ensure that:",
				`- The contract is deployed at the address "${address}".`,
				"- `eip712Domain()` function exists on the contract.",
				"- `eip712Domain()` function matches signature to ERC-5267 specification."
			],
			name: "Eip712DomainNotFoundError"
		});
	}
};
async function getEip712Domain(client, parameters) {
	const { address, factory, factoryData } = parameters;
	try {
		const [fields, name$1, version$2, chainId, verifyingContract, salt, extensions] = await getAction(client, readContract, "readContract")({
			abi: abi$1,
			address,
			functionName: "eip712Domain",
			factory,
			factoryData
		});
		return {
			domain: {
				name: name$1,
				version: version$2,
				chainId: Number(chainId),
				verifyingContract,
				salt
			},
			extensions,
			fields
		};
	} catch (e) {
		const error = e;
		if (error.name === "ContractFunctionExecutionError" && error.cause.name === "ContractFunctionZeroDataError") throw new Eip712DomainNotFoundError({ address });
		throw error;
	}
}
var abi$1 = [{
	inputs: [],
	name: "eip712Domain",
	outputs: [
		{
			name: "fields",
			type: "bytes1"
		},
		{
			name: "name",
			type: "string"
		},
		{
			name: "version",
			type: "string"
		},
		{
			name: "chainId",
			type: "uint256"
		},
		{
			name: "verifyingContract",
			type: "address"
		},
		{
			name: "salt",
			type: "bytes32"
		},
		{
			name: "extensions",
			type: "uint256[]"
		}
	],
	stateMutability: "view",
	type: "function"
}];
function formatFeeHistory(feeHistory) {
	return {
		baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
		gasUsedRatio: feeHistory.gasUsedRatio,
		oldestBlock: BigInt(feeHistory.oldestBlock),
		reward: feeHistory.reward?.map((reward) => reward.map((value) => BigInt(value)))
	};
}
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = "latest", rewardPercentiles }) {
	const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
	const feeHistory = await client.request({
		method: "eth_feeHistory",
		params: [
			numberToHex(blockCount),
			blockNumberHex || blockTag,
			rewardPercentiles
		]
	}, { dedupe: Boolean(blockNumberHex) });
	return formatFeeHistory(feeHistory);
}
async function getFilterLogs(_client, { filter }) {
	const strict = filter.strict ?? false;
	const formattedLogs = (await filter.request({
		method: "eth_getFilterLogs",
		params: [filter.id]
	})).map((log) => formatLog(log));
	if (!filter.abi) return formattedLogs;
	return parseEventLogs({
		abi: filter.abi,
		logs: formattedLogs,
		strict
	});
}
function encodePacked(types$2, values) {
	if (types$2.length !== values.length) throw new AbiEncodingLengthMismatchError({
		expectedLength: types$2.length,
		givenLength: values.length
	});
	const data = [];
	for (let i$1 = 0; i$1 < types$2.length; i$1++) {
		const type$1 = types$2[i$1];
		const value = values[i$1];
		data.push(encode$3(type$1, value));
	}
	return concatHex(data);
}
function encode$3(type$1, value, isArray = false) {
	if (type$1 === "address") {
		const address = value;
		if (!isAddress(address)) throw new InvalidAddressError$1({ address });
		return pad(address.toLowerCase(), { size: isArray ? 32 : null });
	}
	if (type$1 === "string") return stringToHex(value);
	if (type$1 === "bytes") return value;
	if (type$1 === "bool") return pad(boolToHex(value), { size: isArray ? 32 : 1 });
	const intMatch = type$1.match(integerRegex$1);
	if (intMatch) {
		const [_type, baseType, bits = "256"] = intMatch;
		const size$6 = Number.parseInt(bits, 10) / 8;
		return numberToHex(value, {
			size: isArray ? 32 : size$6,
			signed: baseType === "int"
		});
	}
	const bytesMatch = type$1.match(bytesRegex$1);
	if (bytesMatch) {
		const [_type, size$6] = bytesMatch;
		if (Number.parseInt(size$6, 10) !== (value.length - 2) / 2) throw new BytesSizeMismatchError$1({
			expectedSize: Number.parseInt(size$6, 10),
			givenSize: (value.length - 2) / 2
		});
		return pad(value, {
			dir: "right",
			size: isArray ? 32 : null
		});
	}
	const arrayMatch = type$1.match(arrayRegex$1);
	if (arrayMatch && Array.isArray(value)) {
		const [_type, childType] = arrayMatch;
		const data = [];
		for (let i$1 = 0; i$1 < value.length; i$1++) data.push(encode$3(childType, value[i$1], true));
		if (data.length === 0) return "0x";
		return concatHex(data);
	}
	throw new UnsupportedPackedAbiType(type$1);
}
async function verifyAuthorization({ address, authorization, signature }) {
	return isAddressEqual(getAddress(address), await recoverAuthorizationAddress({
		authorization,
		signature
	}));
}
const promiseCache = /* @__PURE__ */ new LruMap$1(8192);
function withDedupe(fn, { enabled = true, id }) {
	if (!enabled || !id) return fn();
	if (promiseCache.get(id)) return promiseCache.get(id);
	const promise = fn().finally(() => promiseCache.delete(id));
	promiseCache.set(id, promise);
	return promise;
}
function buildRequest(request, options = {}) {
	return async (args, overrideOptions = {}) => {
		const { dedupe = false, methods, retryDelay = 150, retryCount = 3, uid: uid$1 } = {
			...options,
			...overrideOptions
		};
		const { method } = args;
		if (methods?.exclude?.includes(method)) throw new MethodNotSupportedRpcError(/* @__PURE__ */ new Error("method not supported"), { method });
		if (methods?.include && !methods.include.includes(method)) throw new MethodNotSupportedRpcError(/* @__PURE__ */ new Error("method not supported"), { method });
		const requestId = dedupe ? stringToHex(`${uid$1}.${stringify$1(args)}`) : void 0;
		return withDedupe(() => withRetry(async () => {
			try {
				return await request(args);
			} catch (err_) {
				const err = err_;
				switch (err.code) {
					case ParseRpcError.code: throw new ParseRpcError(err);
					case InvalidRequestRpcError.code: throw new InvalidRequestRpcError(err);
					case MethodNotFoundRpcError.code: throw new MethodNotFoundRpcError(err, { method: args.method });
					case InvalidParamsRpcError.code: throw new InvalidParamsRpcError(err);
					case InternalRpcError.code: throw new InternalRpcError(err);
					case InvalidInputRpcError.code: throw new InvalidInputRpcError(err);
					case ResourceNotFoundRpcError.code: throw new ResourceNotFoundRpcError(err);
					case ResourceUnavailableRpcError.code: throw new ResourceUnavailableRpcError(err);
					case TransactionRejectedRpcError.code: throw new TransactionRejectedRpcError(err);
					case MethodNotSupportedRpcError.code: throw new MethodNotSupportedRpcError(err, { method: args.method });
					case LimitExceededRpcError.code: throw new LimitExceededRpcError(err);
					case JsonRpcVersionUnsupportedError.code: throw new JsonRpcVersionUnsupportedError(err);
					case UserRejectedRequestError.code: throw new UserRejectedRequestError(err);
					case UnauthorizedProviderError.code: throw new UnauthorizedProviderError(err);
					case UnsupportedProviderMethodError.code: throw new UnsupportedProviderMethodError(err);
					case ProviderDisconnectedError.code: throw new ProviderDisconnectedError(err);
					case ChainDisconnectedError.code: throw new ChainDisconnectedError(err);
					case SwitchChainError.code: throw new SwitchChainError(err);
					case UnsupportedNonOptionalCapabilityError.code: throw new UnsupportedNonOptionalCapabilityError(err);
					case UnsupportedChainIdError.code: throw new UnsupportedChainIdError(err);
					case DuplicateIdError.code: throw new DuplicateIdError(err);
					case UnknownBundleIdError.code: throw new UnknownBundleIdError(err);
					case BundleTooLargeError.code: throw new BundleTooLargeError(err);
					case AtomicReadyWalletRejectedUpgradeError.code: throw new AtomicReadyWalletRejectedUpgradeError(err);
					case AtomicityNotSupportedError.code: throw new AtomicityNotSupportedError(err);
					case 5e3: throw new UserRejectedRequestError(err);
					default:
						if (err_ instanceof BaseError) throw err_;
						throw new UnknownRpcError(err);
				}
			}
		}, {
			delay: ({ count, error }) => {
				if (error && error instanceof HttpRequestError) {
					const retryAfter = error?.headers?.get("Retry-After");
					if (retryAfter?.match(/\d/)) return Number.parseInt(retryAfter, 10) * 1e3;
				}
				return ~~(1 << count) * retryDelay;
			},
			retryCount,
			shouldRetry: ({ error }) => shouldRetry(error)
		}), {
			enabled: dedupe,
			id: requestId
		});
	};
}
function shouldRetry(error) {
	if ("code" in error && typeof error.code === "number") {
		if (error.code === -1) return true;
		if (error.code === LimitExceededRpcError.code) return true;
		if (error.code === InternalRpcError.code) return true;
		return false;
	}
	if (error instanceof HttpRequestError && error.status) {
		if (error.status === 403) return true;
		if (error.status === 408) return true;
		if (error.status === 413) return true;
		if (error.status === 429) return true;
		if (error.status === 500) return true;
		if (error.status === 502) return true;
		if (error.status === 503) return true;
		if (error.status === 504) return true;
		return false;
	}
	return true;
}
function defineChain(chain) {
	return {
		formatters: void 0,
		fees: void 0,
		serializers: void 0,
		...chain
	};
}
function createNonceManager(parameters) {
	const { source } = parameters;
	const deltaMap = /* @__PURE__ */ new Map();
	const nonceMap = new LruMap$1(8192);
	const promiseMap = /* @__PURE__ */ new Map();
	const getKey = ({ address, chainId }) => `${address}.${chainId}`;
	return {
		async consume({ address, chainId, client }) {
			const key = getKey({
				address,
				chainId
			});
			const promise = this.get({
				address,
				chainId,
				client
			});
			this.increment({
				address,
				chainId
			});
			const nonce = await promise;
			await source.set({
				address,
				chainId
			}, nonce);
			nonceMap.set(key, nonce);
			return nonce;
		},
		async increment({ address, chainId }) {
			const key = getKey({
				address,
				chainId
			});
			const delta = deltaMap.get(key) ?? 0;
			deltaMap.set(key, delta + 1);
		},
		async get({ address, chainId, client }) {
			const key = getKey({
				address,
				chainId
			});
			let promise = promiseMap.get(key);
			if (!promise) {
				promise = (async () => {
					try {
						const nonce = await source.get({
							address,
							chainId,
							client
						});
						const previousNonce = nonceMap.get(key) ?? 0;
						if (previousNonce > 0 && nonce <= previousNonce) return previousNonce + 1;
						nonceMap.delete(key);
						return nonce;
					} finally {
						this.reset({
							address,
							chainId
						});
					}
				})();
				promiseMap.set(key, promise);
			}
			return (deltaMap.get(key) ?? 0) + await promise;
		},
		reset({ address, chainId }) {
			const key = getKey({
				address,
				chainId
			});
			deltaMap.delete(key);
			promiseMap.delete(key);
		}
	};
}
function jsonRpc() {
	return {
		async get(parameters) {
			const { address, client } = parameters;
			return getTransactionCount(client, {
				address,
				blockTag: "pending"
			});
		},
		set() {}
	};
}
jsonRpc();
function withTimeout(fn, { errorInstance = /* @__PURE__ */ new Error("timed out"), timeout, signal }) {
	return new Promise((resolve, reject) => {
		(async () => {
			let timeoutId;
			try {
				const controller = new AbortController();
				if (timeout > 0) timeoutId = setTimeout(() => {
					if (signal) controller.abort();
					else reject(errorInstance);
				}, timeout);
				resolve(await fn({ signal: controller?.signal || null }));
			} catch (err) {
				if (err?.name === "AbortError") reject(errorInstance);
				reject(err);
			} finally {
				clearTimeout(timeoutId);
			}
		})();
	});
}
function createIdStore() {
	return {
		current: 0,
		take() {
			return this.current++;
		},
		reset() {
			this.current = 0;
		}
	};
}
const idCache = /* @__PURE__ */ createIdStore();
function getHttpRpcClient(url, options = {}) {
	return { async request(params) {
		const { body, fetchFn = options.fetchFn ?? fetch, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 1e4 } = params;
		const fetchOptions = {
			...options.fetchOptions ?? {},
			...params.fetchOptions ?? {}
		};
		const { headers, method, signal: signal_ } = fetchOptions;
		try {
			const response = await withTimeout(async ({ signal }) => {
				const init = {
					...fetchOptions,
					body: Array.isArray(body) ? stringify$1(body.map((body$1) => ({
						jsonrpc: "2.0",
						id: body$1.id ?? idCache.take(),
						...body$1
					}))) : stringify$1({
						jsonrpc: "2.0",
						id: body.id ?? idCache.take(),
						...body
					}),
					headers: {
						"Content-Type": "application/json",
						...headers
					},
					method: method || "POST",
					signal: signal_ || (timeout > 0 ? signal : null)
				};
				const request = new Request(url, init);
				const args = await onRequest?.(request, init) ?? {
					...init,
					url
				};
				return await fetchFn(args.url ?? url, args);
			}, {
				errorInstance: new TimeoutError({
					body,
					url
				}),
				timeout,
				signal: true
			});
			if (onResponse) await onResponse(response);
			let data;
			if (response.headers.get("Content-Type")?.startsWith("application/json")) data = await response.json();
			else {
				data = await response.text();
				try {
					data = JSON.parse(data || "{}");
				} catch (err) {
					if (response.ok) throw err;
					data = { error: data };
				}
			}
			if (!response.ok) throw new HttpRequestError({
				body,
				details: stringify$1(data.error) || response.statusText,
				headers: response.headers,
				status: response.status,
				url
			});
			return data;
		} catch (err) {
			if (err instanceof HttpRequestError) throw err;
			if (err instanceof TimeoutError) throw err;
			throw new HttpRequestError({
				body,
				cause: err,
				url
			});
		}
	} };
}
const presignMessagePrefix = "Ethereum Signed Message:\n";
function toPrefixedMessage(message_) {
	const message = (() => {
		if (typeof message_ === "string") return stringToHex(message_);
		if (typeof message_.raw === "string") return message_.raw;
		return bytesToHex$1(message_.raw);
	})();
	const prefix = stringToHex(`${presignMessagePrefix}${size(message)}`);
	return concat$1([prefix, message]);
}
function hashMessage(message, to_) {
	return keccak256(toPrefixedMessage(message), to_);
}
var InvalidDomainError = class extends BaseError {
	constructor({ domain }) {
		super(`Invalid domain "${stringify$1(domain)}".`, { metaMessages: ["Must be a valid EIP-712 domain."] });
	}
};
var InvalidPrimaryTypeError = class extends BaseError {
	constructor({ primaryType, types: types$2 }) {
		super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types$2))}\`.`, {
			docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
			metaMessages: ["Check that the primary type is a key in `types`."]
		});
	}
};
var InvalidStructTypeError = class extends BaseError {
	constructor({ type: type$1 }) {
		super(`Struct type "${type$1}" is invalid.`, {
			metaMessages: ["Struct type must not be a Solidity type."],
			name: "InvalidStructTypeError"
		});
	}
};
function validateTypedData(parameters) {
	const { domain, message, primaryType, types: types$2 } = parameters;
	const validateData = (struct, data) => {
		for (const param of struct) {
			const { name: name$1, type: type$1 } = param;
			const value = data[name$1];
			const integerMatch = type$1.match(integerRegex$1);
			if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
				const [_type, base$1, size_] = integerMatch;
				numberToHex(value, {
					signed: base$1 === "int",
					size: Number.parseInt(size_, 10) / 8
				});
			}
			if (type$1 === "address" && typeof value === "string" && !isAddress(value)) throw new InvalidAddressError$1({ address: value });
			const bytesMatch = type$1.match(bytesRegex$1);
			if (bytesMatch) {
				const [_type, size_] = bytesMatch;
				if (size_ && size(value) !== Number.parseInt(size_, 10)) throw new BytesSizeMismatchError$1({
					expectedSize: Number.parseInt(size_, 10),
					givenSize: size(value)
				});
			}
			const struct$1 = types$2[type$1];
			if (struct$1) {
				validateReference(type$1);
				validateData(struct$1, value);
			}
		}
	};
	if (types$2.EIP712Domain && domain) {
		if (typeof domain !== "object") throw new InvalidDomainError({ domain });
		validateData(types$2.EIP712Domain, domain);
	}
	if (primaryType !== "EIP712Domain") if (types$2[primaryType]) validateData(types$2[primaryType], message);
	else throw new InvalidPrimaryTypeError({
		primaryType,
		types: types$2
	});
}
function getTypesForEIP712Domain({ domain }) {
	return [
		typeof domain?.name === "string" && {
			name: "name",
			type: "string"
		},
		domain?.version && {
			name: "version",
			type: "string"
		},
		(typeof domain?.chainId === "number" || typeof domain?.chainId === "bigint") && {
			name: "chainId",
			type: "uint256"
		},
		domain?.verifyingContract && {
			name: "verifyingContract",
			type: "address"
		},
		domain?.salt && {
			name: "salt",
			type: "bytes32"
		}
	].filter(Boolean);
}
function validateReference(type$1) {
	if (type$1 === "address" || type$1 === "bool" || type$1 === "string" || type$1.startsWith("bytes") || type$1.startsWith("uint") || type$1.startsWith("int")) throw new InvalidStructTypeError({ type: type$1 });
}
function hashTypedData(parameters) {
	const { domain = {}, message, primaryType } = parameters;
	const types$2 = {
		EIP712Domain: getTypesForEIP712Domain({ domain }),
		...parameters.types
	};
	validateTypedData({
		domain,
		message,
		primaryType,
		types: types$2
	});
	const parts = ["0x1901"];
	if (domain) parts.push(hashDomain({
		domain,
		types: types$2
	}));
	if (primaryType !== "EIP712Domain") parts.push(hashStruct({
		data: message,
		primaryType,
		types: types$2
	}));
	return keccak256(concat$1(parts));
}
function hashDomain({ domain, types: types$2 }) {
	return hashStruct({
		data: domain,
		primaryType: "EIP712Domain",
		types: types$2
	});
}
function hashStruct({ data, primaryType, types: types$2 }) {
	const encoded = encodeData$1({
		data,
		primaryType,
		types: types$2
	});
	return keccak256(encoded);
}
function encodeData$1({ data, primaryType, types: types$2 }) {
	const encodedTypes = [{ type: "bytes32" }];
	const encodedValues = [hashType({
		primaryType,
		types: types$2
	})];
	for (const field of types$2[primaryType]) {
		const [type$1, value] = encodeField({
			types: types$2,
			name: field.name,
			type: field.type,
			value: data[field.name]
		});
		encodedTypes.push(type$1);
		encodedValues.push(value);
	}
	return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types: types$2 }) {
	const encodedHashType = toHex(encodeType({
		primaryType,
		types: types$2
	}));
	return keccak256(encodedHashType);
}
function encodeType({ primaryType, types: types$2 }) {
	let result = "";
	const unsortedDeps = findTypeDependencies({
		primaryType,
		types: types$2
	});
	unsortedDeps.delete(primaryType);
	const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
	for (const type$1 of deps) result += `${type$1}(${types$2[type$1].map(({ name: name$1, type: t }) => `${t} ${name$1}`).join(",")})`;
	return result;
}
function findTypeDependencies({ primaryType: primaryType_, types: types$2 }, results = /* @__PURE__ */ new Set()) {
	const primaryType = primaryType_.match(/^\w*/u)?.[0];
	if (results.has(primaryType) || types$2[primaryType] === void 0) return results;
	results.add(primaryType);
	for (const field of types$2[primaryType]) findTypeDependencies({
		primaryType: field.type,
		types: types$2
	}, results);
	return results;
}
function encodeField({ types: types$2, name: name$1, type: type$1, value }) {
	if (types$2[type$1] !== void 0) return [{ type: "bytes32" }, keccak256(encodeData$1({
		data: value,
		primaryType: type$1,
		types: types$2
	}))];
	if (type$1 === "bytes") {
		value = `0x${(value.length % 2 ? "0" : "") + value.slice(2)}`;
		return [{ type: "bytes32" }, keccak256(value)];
	}
	if (type$1 === "string") return [{ type: "bytes32" }, keccak256(toHex(value))];
	if (type$1.lastIndexOf("]") === type$1.length - 1) {
		const parsedType = type$1.slice(0, type$1.lastIndexOf("["));
		const typeValuePairs = value.map((item) => encodeField({
			name: name$1,
			type: parsedType,
			types: types$2,
			value: item
		}));
		return [{ type: "bytes32" }, keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))];
	}
	return [{ type: type$1 }, value];
}
const erc6492MagicBytes = "0x6492649264926492649264926492649264926492649264926492649264926492";
var LruMap = class extends Map {
	constructor(size$6) {
		super();
		Object.defineProperty(this, "maxSize", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.maxSize = size$6;
	}
	get(key) {
		const value = super.get(key);
		if (super.has(key) && value !== void 0) {
			this.delete(key);
			super.set(key, value);
		}
		return value;
	}
	set(key, value) {
		super.set(key, value);
		if (this.maxSize && this.size > this.maxSize) {
			const firstKey = this.keys().next().value;
			if (firstKey) this.delete(firstKey);
		}
		return this;
	}
};
const checksum$1 = { checksum: /* @__PURE__ */ new LruMap(8192) }.checksum;
function keccak256$1(value, options = {}) {
	const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
	const bytes = keccak_256(from$9(value));
	if (as === "Bytes") return bytes;
	return fromBytes$4(bytes);
}
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert$7(value, options = {}) {
	const { strict = true } = options;
	if (!addressRegex.test(value)) throw new InvalidAddressError({
		address: value,
		cause: new InvalidInputError()
	});
	if (strict) {
		if (value.toLowerCase() === value) return;
		if (checksum(value) !== value) throw new InvalidAddressError({
			address: value,
			cause: new InvalidChecksumError()
		});
	}
}
function checksum(address) {
	if (checksum$1.has(address)) return checksum$1.get(address);
	assert$7(address, { strict: false });
	const hexAddress = address.substring(2).toLowerCase();
	const hash = keccak256$1(fromString$1(hexAddress), { as: "Bytes" });
	const characters = hexAddress.split("");
	for (let i$1 = 0; i$1 < 40; i$1 += 2) {
		if (hash[i$1 >> 1] >> 4 >= 8 && characters[i$1]) characters[i$1] = characters[i$1].toUpperCase();
		if ((hash[i$1 >> 1] & 15) >= 8 && characters[i$1 + 1]) characters[i$1 + 1] = characters[i$1 + 1].toUpperCase();
	}
	const result = `0x${characters.join("")}`;
	checksum$1.set(address, result);
	return result;
}
function validate$4(address, options = {}) {
	const { strict = true } = options ?? {};
	try {
		assert$7(address, { strict });
		return true;
	} catch {
		return false;
	}
}
var InvalidAddressError = class extends BaseError$2 {
	constructor({ address, cause }) {
		super(`Address "${address}" is invalid.`, { cause });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Address.InvalidAddressError"
		});
	}
};
var InvalidInputError = class extends BaseError$2 {
	constructor() {
		super("Address is not a 20 byte (40 hexadecimal character) value.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Address.InvalidInputError"
		});
	}
};
var InvalidChecksumError = class extends BaseError$2 {
	constructor() {
		super("Address does not match its checksum counterpart.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Address.InvalidChecksumError"
		});
	}
};
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
2n ** (8n - 1n) - 1n;
2n ** (16n - 1n) - 1n;
2n ** (24n - 1n) - 1n;
2n ** (32n - 1n) - 1n;
2n ** (40n - 1n) - 1n;
2n ** (48n - 1n) - 1n;
2n ** (56n - 1n) - 1n;
2n ** (64n - 1n) - 1n;
2n ** (72n - 1n) - 1n;
2n ** (80n - 1n) - 1n;
2n ** (88n - 1n) - 1n;
2n ** (96n - 1n) - 1n;
2n ** (104n - 1n) - 1n;
2n ** (112n - 1n) - 1n;
2n ** (120n - 1n) - 1n;
2n ** (128n - 1n) - 1n;
2n ** (136n - 1n) - 1n;
2n ** (144n - 1n) - 1n;
2n ** (152n - 1n) - 1n;
2n ** (160n - 1n) - 1n;
2n ** (168n - 1n) - 1n;
2n ** (176n - 1n) - 1n;
2n ** (184n - 1n) - 1n;
2n ** (192n - 1n) - 1n;
2n ** (200n - 1n) - 1n;
2n ** (208n - 1n) - 1n;
2n ** (216n - 1n) - 1n;
2n ** (224n - 1n) - 1n;
2n ** (232n - 1n) - 1n;
2n ** (240n - 1n) - 1n;
2n ** (248n - 1n) - 1n;
2n ** (256n - 1n) - 1n;
-(2n ** (8n - 1n));
-(2n ** (16n - 1n));
-(2n ** (24n - 1n));
-(2n ** (32n - 1n));
-(2n ** (40n - 1n));
-(2n ** (48n - 1n));
-(2n ** (56n - 1n));
-(2n ** (64n - 1n));
-(2n ** (72n - 1n));
-(2n ** (80n - 1n));
-(2n ** (88n - 1n));
-(2n ** (96n - 1n));
-(2n ** (104n - 1n));
-(2n ** (112n - 1n));
-(2n ** (120n - 1n));
-(2n ** (128n - 1n));
-(2n ** (136n - 1n));
-(2n ** (144n - 1n));
-(2n ** (152n - 1n));
-(2n ** (160n - 1n));
-(2n ** (168n - 1n));
-(2n ** (176n - 1n));
-(2n ** (184n - 1n));
-(2n ** (192n - 1n));
-(2n ** (200n - 1n));
-(2n ** (208n - 1n));
-(2n ** (216n - 1n));
-(2n ** (224n - 1n));
-(2n ** (232n - 1n));
-(2n ** (240n - 1n));
-(2n ** (248n - 1n));
-(2n ** (256n - 1n));
const maxUint256$1 = 2n ** 256n - 1n;
function decodeParameter(cursor, param, options) {
	const { checksumAddress: checksumAddress$1, staticPosition } = options;
	const arrayComponents = getArrayComponents(param.type);
	if (arrayComponents) {
		const [length, type$1] = arrayComponents;
		return decodeArray(cursor, {
			...param,
			type: type$1
		}, {
			checksumAddress: checksumAddress$1,
			length,
			staticPosition
		});
	}
	if (param.type === "tuple") return decodeTuple(cursor, param, {
		checksumAddress: checksumAddress$1,
		staticPosition
	});
	if (param.type === "address") return decodeAddress(cursor, { checksum: checksumAddress$1 });
	if (param.type === "bool") return decodeBool(cursor);
	if (param.type.startsWith("bytes")) return decodeBytes(cursor, param, { staticPosition });
	if (param.type.startsWith("uint") || param.type.startsWith("int")) return decodeNumber(cursor, param);
	if (param.type === "string") return decodeString(cursor, { staticPosition });
	throw new InvalidTypeError(param.type);
}
function decodeAddress(cursor, options = {}) {
	const { checksum: checksum$2 = false } = options;
	const value = cursor.readBytes(32);
	const wrap$1 = (address) => checksum$2 ? checksum(address) : address;
	return [wrap$1(fromBytes$4(slice$3(value, -20))), 32];
}
function decodeArray(cursor, param, options) {
	const { checksumAddress: checksumAddress$1, length, staticPosition } = options;
	if (!length) {
		const offset = toNumber(cursor.readBytes(32));
		const start = staticPosition + offset;
		const startOfData = start + 32;
		cursor.setPosition(start);
		const length$1 = toNumber(cursor.readBytes(32));
		const dynamicChild = hasDynamicChild(param);
		let consumed$1 = 0;
		const value$1 = [];
		for (let i$1 = 0; i$1 < length$1; ++i$1) {
			cursor.setPosition(startOfData + (dynamicChild ? i$1 * 32 : consumed$1));
			const [data, consumed_] = decodeParameter(cursor, param, {
				checksumAddress: checksumAddress$1,
				staticPosition: startOfData
			});
			consumed$1 += consumed_;
			value$1.push(data);
		}
		cursor.setPosition(staticPosition + 32);
		return [value$1, 32];
	}
	if (hasDynamicChild(param)) {
		const offset = toNumber(cursor.readBytes(32));
		const start = staticPosition + offset;
		const value$1 = [];
		for (let i$1 = 0; i$1 < length; ++i$1) {
			cursor.setPosition(start + i$1 * 32);
			const [data] = decodeParameter(cursor, param, {
				checksumAddress: checksumAddress$1,
				staticPosition: start
			});
			value$1.push(data);
		}
		cursor.setPosition(staticPosition + 32);
		return [value$1, 32];
	}
	let consumed = 0;
	const value = [];
	for (let i$1 = 0; i$1 < length; ++i$1) {
		const [data, consumed_] = decodeParameter(cursor, param, {
			checksumAddress: checksumAddress$1,
			staticPosition: staticPosition + consumed
		});
		consumed += consumed_;
		value.push(data);
	}
	return [value, consumed];
}
function decodeBool(cursor) {
	return [toBoolean(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
	const [_$1, size$6] = param.type.split("bytes");
	if (!size$6) {
		const offset = toNumber(cursor.readBytes(32));
		cursor.setPosition(staticPosition + offset);
		const length = toNumber(cursor.readBytes(32));
		if (length === 0) {
			cursor.setPosition(staticPosition + 32);
			return ["0x", 32];
		}
		const data = cursor.readBytes(length);
		cursor.setPosition(staticPosition + 32);
		return [fromBytes$4(data), 32];
	}
	return [fromBytes$4(cursor.readBytes(Number.parseInt(size$6, 10), 32)), 32];
}
function decodeNumber(cursor, param) {
	const signed = param.type.startsWith("int");
	const size$6 = Number.parseInt(param.type.split("int")[1] || "256", 10);
	const value = cursor.readBytes(32);
	return [size$6 > 48 ? toBigInt$2(value, { signed }) : toNumber(value, { signed }), 32];
}
function decodeTuple(cursor, param, options) {
	const { checksumAddress: checksumAddress$1, staticPosition } = options;
	const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name: name$1 }) => !name$1);
	const value = hasUnnamedChild ? [] : {};
	let consumed = 0;
	if (hasDynamicChild(param)) {
		const offset = toNumber(cursor.readBytes(32));
		const start = staticPosition + offset;
		for (let i$1 = 0; i$1 < param.components.length; ++i$1) {
			const component = param.components[i$1];
			cursor.setPosition(start + consumed);
			const [data, consumed_] = decodeParameter(cursor, component, {
				checksumAddress: checksumAddress$1,
				staticPosition: start
			});
			consumed += consumed_;
			value[hasUnnamedChild ? i$1 : component?.name] = data;
		}
		cursor.setPosition(staticPosition + 32);
		return [value, 32];
	}
	for (let i$1 = 0; i$1 < param.components.length; ++i$1) {
		const component = param.components[i$1];
		const [data, consumed_] = decodeParameter(cursor, component, {
			checksumAddress: checksumAddress$1,
			staticPosition
		});
		value[hasUnnamedChild ? i$1 : component?.name] = data;
		consumed += consumed_;
	}
	return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
	const offset = toNumber(cursor.readBytes(32));
	const start = staticPosition + offset;
	cursor.setPosition(start);
	const length = toNumber(cursor.readBytes(32));
	if (length === 0) {
		cursor.setPosition(staticPosition + 32);
		return ["", 32];
	}
	const data = cursor.readBytes(length, 32);
	const value = toString(trimLeft(data));
	cursor.setPosition(staticPosition + 32);
	return [value, 32];
}
function prepareParameters({ checksumAddress: checksumAddress$1, parameters, values }) {
	const preparedParameters = [];
	for (let i$1 = 0; i$1 < parameters.length; i$1++) preparedParameters.push(prepareParameter({
		checksumAddress: checksumAddress$1,
		parameter: parameters[i$1],
		value: values[i$1]
	}));
	return preparedParameters;
}
function prepareParameter({ checksumAddress: checksumAddress$1 = false, parameter: parameter_, value }) {
	const parameter = parameter_;
	const arrayComponents = getArrayComponents(parameter.type);
	if (arrayComponents) {
		const [length, type$1] = arrayComponents;
		return encodeArray(value, {
			checksumAddress: checksumAddress$1,
			length,
			parameter: {
				...parameter,
				type: type$1
			}
		});
	}
	if (parameter.type === "tuple") return encodeTuple(value, {
		checksumAddress: checksumAddress$1,
		parameter
	});
	if (parameter.type === "address") return encodeAddress(value, { checksum: checksumAddress$1 });
	if (parameter.type === "bool") return encodeBoolean(value);
	if (parameter.type.startsWith("uint") || parameter.type.startsWith("int")) {
		const signed = parameter.type.startsWith("int");
		const [, , size$6 = "256"] = integerRegex.exec(parameter.type) ?? [];
		return encodeNumber(value, {
			signed,
			size: Number(size$6)
		});
	}
	if (parameter.type.startsWith("bytes")) return encodeBytes(value, { type: parameter.type });
	if (parameter.type === "string") return encodeString(value);
	throw new InvalidTypeError(parameter.type);
}
function encode$2(preparedParameters) {
	let staticSize = 0;
	for (let i$1 = 0; i$1 < preparedParameters.length; i$1++) {
		const { dynamic, encoded } = preparedParameters[i$1];
		if (dynamic) staticSize += 32;
		else staticSize += size$4(encoded);
	}
	const staticParameters = [];
	const dynamicParameters = [];
	let dynamicSize = 0;
	for (let i$1 = 0; i$1 < preparedParameters.length; i$1++) {
		const { dynamic, encoded } = preparedParameters[i$1];
		if (dynamic) {
			staticParameters.push(fromNumber$1(staticSize + dynamicSize, { size: 32 }));
			dynamicParameters.push(encoded);
			dynamicSize += size$4(encoded);
		} else staticParameters.push(encoded);
	}
	return concat$2(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
	const { checksum: checksum$2 = false } = options;
	assert$7(value, { strict: checksum$2 });
	return {
		dynamic: false,
		encoded: padLeft$1(value.toLowerCase())
	};
}
function encodeArray(value, options) {
	const { checksumAddress: checksumAddress$1, length, parameter } = options;
	const dynamic = length === null;
	if (!Array.isArray(value)) throw new InvalidArrayError(value);
	if (!dynamic && value.length !== length) throw new ArrayLengthMismatchError({
		expectedLength: length,
		givenLength: value.length,
		type: `${parameter.type}[${length}]`
	});
	let dynamicChild = false;
	const preparedParameters = [];
	for (let i$1 = 0; i$1 < value.length; i$1++) {
		const preparedParam = prepareParameter({
			checksumAddress: checksumAddress$1,
			parameter,
			value: value[i$1]
		});
		if (preparedParam.dynamic) dynamicChild = true;
		preparedParameters.push(preparedParam);
	}
	if (dynamic || dynamicChild) {
		const data = encode$2(preparedParameters);
		if (dynamic) {
			const length$1 = fromNumber$1(preparedParameters.length, { size: 32 });
			return {
				dynamic: true,
				encoded: preparedParameters.length > 0 ? concat$2(length$1, data) : length$1
			};
		}
		if (dynamicChild) return {
			dynamic: true,
			encoded: data
		};
	}
	return {
		dynamic: false,
		encoded: concat$2(...preparedParameters.map(({ encoded }) => encoded))
	};
}
function encodeBytes(value, { type: type$1 }) {
	const [, parametersize] = type$1.split("bytes");
	const bytesSize = size$4(value);
	if (!parametersize) {
		let value_ = value;
		if (bytesSize % 32 !== 0) value_ = padRight$1(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
		return {
			dynamic: true,
			encoded: concat$2(padLeft$1(fromNumber$1(bytesSize, { size: 32 })), value_)
		};
	}
	if (bytesSize !== Number.parseInt(parametersize, 10)) throw new BytesSizeMismatchError({
		expectedSize: Number.parseInt(parametersize, 10),
		value
	});
	return {
		dynamic: false,
		encoded: padRight$1(value)
	};
}
function encodeBoolean(value) {
	if (typeof value !== "boolean") throw new BaseError$2(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
	return {
		dynamic: false,
		encoded: padLeft$1(fromBoolean(value))
	};
}
function encodeNumber(value, { signed, size: size$6 }) {
	if (typeof size$6 === "number") {
		const max = 2n ** (BigInt(size$6) - (signed ? 1n : 0n)) - 1n;
		const min = signed ? -max - 1n : 0n;
		if (value > max || value < min) throw new IntegerOutOfRangeError$1({
			max: max.toString(),
			min: min.toString(),
			signed,
			size: size$6 / 8,
			value: value.toString()
		});
	}
	return {
		dynamic: false,
		encoded: fromNumber$1(value, {
			size: 32,
			signed
		})
	};
}
function encodeString(value) {
	const hexValue = fromString$2(value);
	const partsLength = Math.ceil(size$4(hexValue) / 32);
	const parts = [];
	for (let i$1 = 0; i$1 < partsLength; i$1++) parts.push(padRight$1(slice$4(hexValue, i$1 * 32, (i$1 + 1) * 32)));
	return {
		dynamic: true,
		encoded: concat$2(padRight$1(fromNumber$1(size$4(hexValue), { size: 32 })), ...parts)
	};
}
function encodeTuple(value, options) {
	const { checksumAddress: checksumAddress$1, parameter } = options;
	let dynamic = false;
	const preparedParameters = [];
	for (let i$1 = 0; i$1 < parameter.components.length; i$1++) {
		const param_ = parameter.components[i$1];
		const index$1 = Array.isArray(value) ? i$1 : param_.name;
		const preparedParam = prepareParameter({
			checksumAddress: checksumAddress$1,
			parameter: param_,
			value: value[index$1]
		});
		preparedParameters.push(preparedParam);
		if (preparedParam.dynamic) dynamic = true;
	}
	return {
		dynamic,
		encoded: dynamic ? encode$2(preparedParameters) : concat$2(...preparedParameters.map(({ encoded }) => encoded))
	};
}
function getArrayComponents(type$1) {
	const matches = type$1.match(/^(.*)\[(\d+)?\]$/);
	return matches ? [matches[2] ? Number(matches[2]) : null, matches[1]] : void 0;
}
function hasDynamicChild(param) {
	const { type: type$1 } = param;
	if (type$1 === "string") return true;
	if (type$1 === "bytes") return true;
	if (type$1.endsWith("[]")) return true;
	if (type$1 === "tuple") return param.components?.some(hasDynamicChild);
	const arrayComponents = getArrayComponents(param.type);
	if (arrayComponents && hasDynamicChild({
		...param,
		type: arrayComponents[1]
	})) return true;
	return false;
}
var staticCursor = {
	bytes: new Uint8Array(),
	dataView: /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(0)),
	position: 0,
	positionReadCount: /* @__PURE__ */ new Map(),
	recursiveReadCount: 0,
	recursiveReadLimit: Number.POSITIVE_INFINITY,
	assertReadLimit() {
		if (this.recursiveReadCount >= this.recursiveReadLimit) throw new RecursiveReadLimitExceededError({
			count: this.recursiveReadCount + 1,
			limit: this.recursiveReadLimit
		});
	},
	assertPosition(position) {
		if (position < 0 || position > this.bytes.length - 1) throw new PositionOutOfBoundsError({
			length: this.bytes.length,
			position
		});
	},
	decrementPosition(offset) {
		if (offset < 0) throw new NegativeOffsetError({ offset });
		const position = this.position - offset;
		this.assertPosition(position);
		this.position = position;
	},
	getReadCount(position) {
		return this.positionReadCount.get(position || this.position) || 0;
	},
	incrementPosition(offset) {
		if (offset < 0) throw new NegativeOffsetError({ offset });
		const position = this.position + offset;
		this.assertPosition(position);
		this.position = position;
	},
	inspectByte(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position);
		return this.bytes[position];
	},
	inspectBytes(length, position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position + length - 1);
		return this.bytes.subarray(position, position + length);
	},
	inspectUint8(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position);
		return this.bytes[position];
	},
	inspectUint16(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position + 1);
		return this.dataView.getUint16(position);
	},
	inspectUint24(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position + 2);
		return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
	},
	inspectUint32(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position + 3);
		return this.dataView.getUint32(position);
	},
	pushByte(byte) {
		this.assertPosition(this.position);
		this.bytes[this.position] = byte;
		this.position++;
	},
	pushBytes(bytes) {
		this.assertPosition(this.position + bytes.length - 1);
		this.bytes.set(bytes, this.position);
		this.position += bytes.length;
	},
	pushUint8(value) {
		this.assertPosition(this.position);
		this.bytes[this.position] = value;
		this.position++;
	},
	pushUint16(value) {
		this.assertPosition(this.position + 1);
		this.dataView.setUint16(this.position, value);
		this.position += 2;
	},
	pushUint24(value) {
		this.assertPosition(this.position + 2);
		this.dataView.setUint16(this.position, value >> 8);
		this.dataView.setUint8(this.position + 2, value & 255);
		this.position += 3;
	},
	pushUint32(value) {
		this.assertPosition(this.position + 3);
		this.dataView.setUint32(this.position, value);
		this.position += 4;
	},
	readByte() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectByte();
		this.position++;
		return value;
	},
	readBytes(length, size$6) {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectBytes(length);
		this.position += size$6 ?? length;
		return value;
	},
	readUint8() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectUint8();
		this.position += 1;
		return value;
	},
	readUint16() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectUint16();
		this.position += 2;
		return value;
	},
	readUint24() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectUint24();
		this.position += 3;
		return value;
	},
	readUint32() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectUint32();
		this.position += 4;
		return value;
	},
	get remaining() {
		return this.bytes.length - this.position;
	},
	setPosition(position) {
		const oldPosition = this.position;
		this.assertPosition(position);
		this.position = position;
		return () => this.position = oldPosition;
	},
	_touch() {
		if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
		const count = this.getReadCount();
		this.positionReadCount.set(this.position, count + 1);
		if (count > 0) this.recursiveReadCount++;
	}
};
function create(bytes, { recursiveReadLimit = 8192 } = {}) {
	const cursor = Object.create(staticCursor);
	cursor.bytes = bytes;
	cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
	cursor.positionReadCount = /* @__PURE__ */ new Map();
	cursor.recursiveReadLimit = recursiveReadLimit;
	return cursor;
}
var NegativeOffsetError = class extends BaseError$2 {
	constructor({ offset }) {
		super(`Offset \`${offset}\` cannot be negative.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Cursor.NegativeOffsetError"
		});
	}
};
var PositionOutOfBoundsError = class extends BaseError$2 {
	constructor({ length, position }) {
		super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Cursor.PositionOutOfBoundsError"
		});
	}
};
var RecursiveReadLimitExceededError = class extends BaseError$2 {
	constructor({ count, limit }) {
		super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Cursor.RecursiveReadLimitExceededError"
		});
	}
};
function decode(parameters, data, options = {}) {
	const { as = "Array", checksumAddress: checksumAddress$1 = false } = options;
	const bytes = typeof data === "string" ? fromHex$5(data) : data;
	const cursor = create(bytes);
	if (size$5(bytes) === 0 && parameters.length > 0) throw new ZeroDataError();
	if (size$5(bytes) && size$5(bytes) < 32) throw new DataSizeTooSmallError({
		data: typeof data === "string" ? data : fromBytes$4(data),
		parameters,
		size: size$5(bytes)
	});
	let consumed = 0;
	const values = as === "Array" ? [] : {};
	for (let i$1 = 0; i$1 < parameters.length; ++i$1) {
		const param = parameters[i$1];
		cursor.setPosition(consumed);
		const [data$1, consumed_] = decodeParameter(cursor, param, {
			checksumAddress: checksumAddress$1,
			staticPosition: 0
		});
		consumed += consumed_;
		if (as === "Array") values.push(data$1);
		else values[param.name ?? i$1] = data$1;
	}
	return values;
}
function encode$1(parameters, values, options) {
	const { checksumAddress: checksumAddress$1 = false } = options ?? {};
	if (parameters.length !== values.length) throw new LengthMismatchError({
		expectedLength: parameters.length,
		givenLength: values.length
	});
	const preparedParameters = prepareParameters({
		checksumAddress: checksumAddress$1,
		parameters,
		values
	});
	const data = encode$2(preparedParameters);
	if (data.length === 0) return "0x";
	return data;
}
function encodePacked$1(types$2, values) {
	if (types$2.length !== values.length) throw new LengthMismatchError({
		expectedLength: types$2.length,
		givenLength: values.length
	});
	const data = [];
	for (let i$1 = 0; i$1 < types$2.length; i$1++) {
		const type$1 = types$2[i$1];
		const value = values[i$1];
		data.push(encodePacked$1.encode(type$1, value));
	}
	return concat$2(...data);
}
(function(encodePacked$2) {
	function encode$4(type$1, value, isArray = false) {
		if (type$1 === "address") {
			const address = value;
			assert$7(address);
			return padLeft$1(address.toLowerCase(), isArray ? 32 : 0);
		}
		if (type$1 === "string") return fromString$2(value);
		if (type$1 === "bytes") return value;
		if (type$1 === "bool") return padLeft$1(fromBoolean(value), isArray ? 32 : 1);
		const intMatch = type$1.match(integerRegex);
		if (intMatch) {
			const [_type, baseType, bits = "256"] = intMatch;
			const size$6 = Number.parseInt(bits, 10) / 8;
			return fromNumber$1(value, {
				size: isArray ? 32 : size$6,
				signed: baseType === "int"
			});
		}
		const bytesMatch = type$1.match(bytesRegex);
		if (bytesMatch) {
			const [_type, size$6] = bytesMatch;
			if (Number.parseInt(size$6, 10) !== (value.length - 2) / 2) throw new BytesSizeMismatchError({
				expectedSize: Number.parseInt(size$6, 10),
				value
			});
			return padRight$1(value, isArray ? 32 : 0);
		}
		const arrayMatch = type$1.match(arrayRegex);
		if (arrayMatch && Array.isArray(value)) {
			const [_type, childType] = arrayMatch;
			const data = [];
			for (let i$1 = 0; i$1 < value.length; i$1++) data.push(encode$4(childType, value[i$1], true));
			if (data.length === 0) return "0x";
			return concat$2(...data);
		}
		throw new InvalidTypeError(type$1);
	}
	encodePacked$2.encode = encode$4;
})(encodePacked$1 || (encodePacked$1 = {}));
function from$8(parameters) {
	if (Array.isArray(parameters) && typeof parameters[0] === "string") return parseAbiParameters(parameters);
	if (typeof parameters === "string") return parseAbiParameters(parameters);
	return parameters;
}
var DataSizeTooSmallError = class extends BaseError$2 {
	constructor({ data, parameters, size: size$6 }) {
		super(`Data size of ${size$6} bytes is too small for given parameters.`, { metaMessages: [`Params: (${formatAbiParameters(parameters)})`, `Data:   ${data} (${size$6} bytes)`] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.DataSizeTooSmallError"
		});
	}
};
var ZeroDataError = class extends BaseError$2 {
	constructor() {
		super("Cannot decode zero data (\"0x\") with ABI parameters.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.ZeroDataError"
		});
	}
};
var ArrayLengthMismatchError = class extends BaseError$2 {
	constructor({ expectedLength, givenLength, type: type$1 }) {
		super(`Array length mismatch for type \`${type$1}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.ArrayLengthMismatchError"
		});
	}
};
var BytesSizeMismatchError = class extends BaseError$2 {
	constructor({ expectedSize, value }) {
		super(`Size of bytes "${value}" (bytes${size$4(value)}) does not match expected size (bytes${expectedSize}).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.BytesSizeMismatchError"
		});
	}
};
var LengthMismatchError = class extends BaseError$2 {
	constructor({ expectedLength, givenLength }) {
		super([
			"ABI encoding parameters/values length mismatch.",
			`Expected length (parameters): ${expectedLength}`,
			`Given length (values): ${givenLength}`
		].join("\n"));
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.LengthMismatchError"
		});
	}
};
var InvalidArrayError = class extends BaseError$2 {
	constructor(value) {
		super(`Value \`${value}\` is not a valid array.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.InvalidArrayError"
		});
	}
};
var InvalidTypeError = class extends BaseError$2 {
	constructor(type$1) {
		super(`Type \`${type$1}\` is not a valid ABI Type.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.InvalidTypeError"
		});
	}
};
function assert$6(signature, options = {}) {
	const { recovered } = options;
	if (typeof signature.r === "undefined") throw new MissingPropertiesError$1({ signature });
	if (typeof signature.s === "undefined") throw new MissingPropertiesError$1({ signature });
	if (recovered && typeof signature.yParity === "undefined") throw new MissingPropertiesError$1({ signature });
	if (signature.r < 0n || signature.r > maxUint256$1) throw new InvalidRError$1({ value: signature.r });
	if (signature.s < 0n || signature.s > maxUint256$1) throw new InvalidSError$1({ value: signature.s });
	if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1) throw new InvalidYParityError$1({ value: signature.yParity });
}
function fromBytes$3(signature) {
	return fromHex$4(fromBytes$4(signature));
}
function fromHex$4(signature) {
	if (signature.length !== 130 && signature.length !== 132) throw new InvalidSerializedSizeError$2({ signature });
	const r$1 = BigInt(slice$4(signature, 0, 32));
	const s = BigInt(slice$4(signature, 32, 64));
	const yParity = (() => {
		const yParity$1 = Number(`0x${signature.slice(130)}`);
		if (Number.isNaN(yParity$1)) return void 0;
		try {
			return vToYParity$1(yParity$1);
		} catch {
			throw new InvalidYParityError$1({ value: yParity$1 });
		}
	})();
	if (typeof yParity === "undefined") return {
		r: r$1,
		s
	};
	return {
		r: r$1,
		s,
		yParity
	};
}
function extract(value) {
	if (typeof value.r === "undefined") return void 0;
	if (typeof value.s === "undefined") return void 0;
	return from$7(value);
}
function from$7(signature) {
	const signature_ = (() => {
		if (typeof signature === "string") return fromHex$4(signature);
		if (signature instanceof Uint8Array) return fromBytes$3(signature);
		if (typeof signature.r === "string") return fromRpc$1(signature);
		if (signature.v) return fromLegacy(signature);
		return {
			r: signature.r,
			s: signature.s,
			...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
		};
	})();
	assert$6(signature_);
	return signature_;
}
function fromLegacy(signature) {
	return {
		r: signature.r,
		s: signature.s,
		yParity: vToYParity$1(signature.v)
	};
}
function fromRpc$1(signature) {
	const yParity = (() => {
		const v = signature.v ? Number(signature.v) : void 0;
		let yParity$1 = signature.yParity ? Number(signature.yParity) : void 0;
		if (typeof v === "number" && typeof yParity$1 !== "number") yParity$1 = vToYParity$1(v);
		if (typeof yParity$1 !== "number") throw new InvalidYParityError$1({ value: signature.yParity });
		return yParity$1;
	})();
	return {
		r: BigInt(signature.r),
		s: BigInt(signature.s),
		yParity
	};
}
function vToYParity$1(v) {
	if (v === 0 || v === 27) return 0;
	if (v === 1 || v === 28) return 1;
	if (v >= 35) return v % 2 === 0 ? 1 : 0;
	throw new InvalidVError$1({ value: v });
}
var InvalidSerializedSizeError$2 = class extends BaseError$2 {
	constructor({ signature }) {
		super(`Value \`${signature}\` is an invalid signature size.`, { metaMessages: ["Expected: 64 bytes or 65 bytes.", `Received ${size$4(from$10(signature))} bytes.`] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidSerializedSizeError"
		});
	}
};
var MissingPropertiesError$1 = class extends BaseError$2 {
	constructor({ signature }) {
		super(`Signature \`${stringify$2(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.MissingPropertiesError"
		});
	}
};
var InvalidRError$1 = class extends BaseError$2 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidRError"
		});
	}
};
var InvalidSError$1 = class extends BaseError$2 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidSError"
		});
	}
};
var InvalidYParityError$1 = class extends BaseError$2 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidYParityError"
		});
	}
};
var InvalidVError$1 = class extends BaseError$2 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidVError"
		});
	}
};
function from$6(authorization, options = {}) {
	if (typeof authorization.chainId === "string") return fromRpc(authorization);
	return {
		...authorization,
		...options.signature
	};
}
function fromRpc(authorization) {
	const { address, chainId, nonce } = authorization;
	const signature = extract(authorization);
	return {
		address,
		chainId: Number(chainId),
		nonce: BigInt(nonce),
		...signature
	};
}
const suffixParameters = from$8("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");
function assert$5(value) {
	if (typeof value === "string") {
		if (slice$4(value, -32) !== "0x8010801080108010801080108010801080108010801080108010801080108010") throw new InvalidWrappedSignatureError$1(value);
	} else assert$6(value.authorization);
}
function unwrap(wrapped) {
	assert$5(wrapped);
	const suffixLength = toNumber$1(slice$4(wrapped, -64, -32));
	const suffix = slice$4(wrapped, -suffixLength - 64, -64);
	const signature = slice$4(wrapped, 0, -suffixLength - 64);
	const [auth, to, data] = decode(suffixParameters, suffix);
	return {
		authorization: from$6({
			address: auth.delegation,
			chainId: Number(auth.chainId),
			nonce: auth.nonce,
			yParity: auth.yParity,
			r: auth.r,
			s: auth.s
		}),
		signature,
		...data && data !== "0x" ? {
			data,
			to
		} : {}
	};
}
function validate$3(value) {
	try {
		assert$5(value);
		return true;
	} catch {
		return false;
	}
}
var InvalidWrappedSignatureError$1 = class extends BaseError$2 {
	constructor(wrapped) {
		super(`Value \`${wrapped}\` is an invalid ERC-8010 wrapped signature.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "SignatureErc8010.InvalidWrappedSignatureError"
		});
	}
};
function serializeErc6492Signature(parameters) {
	const { address, data, signature, to = "hex" } = parameters;
	const signature_ = concatHex([encodeAbiParameters([
		{ type: "address" },
		{ type: "bytes" },
		{ type: "bytes" }
	], [
		address,
		data,
		signature
	]), erc6492MagicBytes]);
	if (to === "hex") return signature_;
	return hexToBytes(signature_);
}
var InvalidDecimalNumberError = class extends BaseError {
	constructor({ value }) {
		super(`Number \`${value}\` is not a valid decimal number.`, { name: "InvalidDecimalNumberError" });
	}
};
function parseUnits(value, decimals) {
	if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value)) throw new InvalidDecimalNumberError({ value });
	let [integer, fraction = "0"] = value.split(".");
	const negative = integer.startsWith("-");
	if (negative) integer = integer.slice(1);
	fraction = fraction.replace(/(0+)$/, "");
	if (decimals === 0) {
		if (Math.round(Number(`.${fraction}`)) === 1) integer = `${BigInt(integer) + 1n}`;
		fraction = "";
	} else if (fraction.length > decimals) {
		const [left, unit, right] = [
			fraction.slice(0, decimals - 1),
			fraction.slice(decimals - 1, decimals),
			fraction.slice(decimals)
		];
		const rounded = Math.round(Number(`${unit}.${right}`));
		if (rounded > 9) fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
		else fraction = `${left}${rounded}`;
		if (fraction.length > decimals) {
			fraction = fraction.slice(1);
			integer = `${BigInt(integer) + 1n}`;
		}
		fraction = fraction.slice(0, decimals);
	} else fraction = fraction.padEnd(decimals, "0");
	return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}
function formatStorageProof(storageProof) {
	return storageProof.map((proof) => ({
		...proof,
		value: BigInt(proof.value)
	}));
}
function formatProof(proof) {
	return {
		...proof,
		balance: proof.balance ? BigInt(proof.balance) : void 0,
		nonce: proof.nonce ? hexToNumber(proof.nonce) : void 0,
		storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : void 0
	};
}
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
	const blockTag = blockTag_ ?? "latest";
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	const proof = await client.request({
		method: "eth_getProof",
		params: [
			address,
			storageKeys,
			blockNumberHex || blockTag
		]
	});
	return formatProof(proof);
}
async function getStorageAt(client, { address, blockNumber, blockTag = "latest", slot }) {
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	return await client.request({
		method: "eth_getStorageAt",
		params: [
			address,
			slot,
			blockNumberHex || blockTag
		]
	});
}
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index: index$1 }) {
	const blockTag = blockTag_ || "latest";
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	let transaction = null;
	if (hash) transaction = await client.request({
		method: "eth_getTransactionByHash",
		params: [hash]
	}, { dedupe: true });
	else if (blockHash) transaction = await client.request({
		method: "eth_getTransactionByBlockHashAndIndex",
		params: [blockHash, numberToHex(index$1)]
	}, { dedupe: true });
	else if (blockNumberHex || blockTag) transaction = await client.request({
		method: "eth_getTransactionByBlockNumberAndIndex",
		params: [blockNumberHex || blockTag, numberToHex(index$1)]
	}, { dedupe: Boolean(blockNumberHex) });
	if (!transaction) throw new TransactionNotFoundError({
		blockHash,
		blockNumber,
		blockTag,
		hash,
		index: index$1
	});
	return (client.chain?.formatters?.transaction?.format || formatTransaction)(transaction);
}
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
	const [blockNumber, transaction] = await Promise.all([getAction(client, getBlockNumber, "getBlockNumber")({}), hash ? getAction(client, getTransaction, "getTransaction")({ hash }) : void 0]);
	const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
	if (!transactionBlockNumber) return 0n;
	return blockNumber - transactionBlockNumber + 1n;
}
async function getTransactionReceipt(client, { hash }) {
	const receipt = await client.request({
		method: "eth_getTransactionReceipt",
		params: [hash]
	}, { dedupe: true });
	if (!receipt) throw new TransactionReceiptNotFoundError({ hash });
	return (client.chain?.formatters?.transactionReceipt?.format || formatTransactionReceipt)(receipt);
}
async function multicall(client, parameters) {
	const { account: account$1, authorizationList, allowFailure = true, blockNumber, blockOverrides, blockTag, stateOverride } = parameters;
	const contracts = parameters.contracts;
	const { batchSize = parameters.batchSize ?? 1024, deployless = parameters.deployless ?? false } = typeof client.batch?.multicall === "object" ? client.batch.multicall : {};
	const multicallAddress = (() => {
		if (parameters.multicallAddress) return parameters.multicallAddress;
		if (deployless) return null;
		if (client.chain) return getChainContractAddress({
			blockNumber,
			chain: client.chain,
			contract: "multicall3"
		});
		throw new Error("client chain not configured. multicallAddress is required.");
	})();
	const chunkedCalls = [[]];
	let currentChunk = 0;
	let currentChunkSize = 0;
	for (let i$1 = 0; i$1 < contracts.length; i$1++) {
		const { abi: abi$2, address, args, functionName } = contracts[i$1];
		try {
			const callData = encodeFunctionData({
				abi: abi$2,
				args,
				functionName
			});
			currentChunkSize += (callData.length - 2) / 2;
			if (batchSize > 0 && currentChunkSize > batchSize && chunkedCalls[currentChunk].length > 0) {
				currentChunk++;
				currentChunkSize = (callData.length - 2) / 2;
				chunkedCalls[currentChunk] = [];
			}
			chunkedCalls[currentChunk] = [...chunkedCalls[currentChunk], {
				allowFailure: true,
				callData,
				target: address
			}];
		} catch (err) {
			const error = getContractError$1(err, {
				abi: abi$2,
				address,
				args,
				docsPath: "/docs/contract/multicall",
				functionName,
				sender: account$1
			});
			if (!allowFailure) throw error;
			chunkedCalls[currentChunk] = [...chunkedCalls[currentChunk], {
				allowFailure: true,
				callData: "0x",
				target: address
			}];
		}
	}
	const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => getAction(client, readContract, "readContract")({
		...multicallAddress === null ? { code: multicall3Bytecode } : { address: multicallAddress },
		abi: multicall3Abi,
		account: account$1,
		args: [calls],
		authorizationList,
		blockNumber,
		blockOverrides,
		blockTag,
		functionName: "aggregate3",
		stateOverride
	})));
	const results = [];
	for (let i$1 = 0; i$1 < aggregate3Results.length; i$1++) {
		const result = aggregate3Results[i$1];
		if (result.status === "rejected") {
			if (!allowFailure) throw result.reason;
			for (let j = 0; j < chunkedCalls[i$1].length; j++) results.push({
				status: "failure",
				error: result.reason,
				result: void 0
			});
			continue;
		}
		const aggregate3Result = result.value;
		for (let j = 0; j < aggregate3Result.length; j++) {
			const { returnData, success } = aggregate3Result[j];
			const { callData } = chunkedCalls[i$1][j];
			const { abi: abi$2, address, functionName, args } = contracts[results.length];
			try {
				if (callData === "0x") throw new AbiDecodingZeroDataError();
				if (!success) throw new RawContractError({ data: returnData });
				const result$1 = decodeFunctionResult({
					abi: abi$2,
					args,
					data: returnData,
					functionName
				});
				results.push(allowFailure ? {
					result: result$1,
					status: "success"
				} : result$1);
			} catch (err) {
				const error = getContractError$1(err, {
					abi: abi$2,
					address,
					args,
					docsPath: "/docs/contract/multicall",
					functionName
				});
				if (!allowFailure) throw error;
				results.push({
					error,
					result: void 0,
					status: "failure"
				});
			}
		}
	}
	if (results.length !== contracts.length) throw new BaseError("multicall results mismatch");
	return results;
}
async function simulateBlocks(client, parameters) {
	const { blockNumber, blockTag = client.experimental_blockTag ?? "latest", blocks, returnFullTransactions, traceTransfers, validation } = parameters;
	try {
		const blockStateCalls = [];
		for (const block$1 of blocks) {
			const blockOverrides = block$1.blockOverrides ? toRpc(block$1.blockOverrides) : void 0;
			const calls = block$1.calls.map((call_) => {
				const call$1 = call_;
				const account$1 = call$1.account ? parseAccount(call$1.account) : void 0;
				const data = call$1.abi ? encodeFunctionData(call$1) : call$1.data;
				const request = {
					...call$1,
					data: call$1.dataSuffix ? concat$1([data || "0x", call$1.dataSuffix]) : data,
					from: call$1.from ?? account$1?.address
				};
				assertRequest(request);
				return formatTransactionRequest(request);
			});
			const stateOverrides = block$1.stateOverrides ? serializeStateOverride(block$1.stateOverrides) : void 0;
			blockStateCalls.push({
				blockOverrides,
				calls,
				stateOverrides
			});
		}
		const block = (typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0) || blockTag;
		return (await client.request({
			method: "eth_simulateV1",
			params: [{
				blockStateCalls,
				returnFullTransactions,
				traceTransfers,
				validation
			}, block]
		})).map((block$1, i$1) => ({
			...formatBlock(block$1),
			calls: block$1.calls.map((call$1, j) => {
				const { abi: abi$2, args, functionName, to } = blocks[i$1].calls[j];
				const data = call$1.error?.data ?? call$1.returnData;
				const gasUsed = BigInt(call$1.gasUsed);
				const logs = call$1.logs?.map((log) => formatLog(log));
				const status = call$1.status === "0x1" ? "success" : "failure";
				const result = abi$2 && status === "success" && data !== "0x" ? decodeFunctionResult({
					abi: abi$2,
					data,
					functionName
				}) : null;
				const error = (() => {
					if (status === "success") return void 0;
					let error$1;
					if (call$1.error?.data === "0x") error$1 = new AbiDecodingZeroDataError();
					else if (call$1.error) error$1 = new RawContractError(call$1.error);
					if (!error$1) return void 0;
					return getContractError$1(error$1, {
						abi: abi$2 ?? [],
						address: to ?? "0x",
						args,
						functionName: functionName ?? "<unknown>"
					});
				})();
				return {
					data,
					gasUsed,
					logs,
					status,
					...status === "success" ? { result } : { error }
				};
			})
		}));
	} catch (e) {
		const cause = e;
		const error = getNodeError(cause, {});
		if (error instanceof UnknownNodeError) throw cause;
		throw error;
	}
}
function normalizeSignature(signature) {
	let active = true;
	let current = "";
	let level = 0;
	let result = "";
	let valid = false;
	for (let i$1 = 0; i$1 < signature.length; i$1++) {
		const char = signature[i$1];
		if ([
			"(",
			")",
			","
		].includes(char)) active = true;
		if (char === "(") level++;
		if (char === ")") level--;
		if (!active) continue;
		if (level === 0) {
			if (char === " " && [
				"event",
				"function",
				"error",
				""
			].includes(result)) result = "";
			else {
				result += char;
				if (char === ")") {
					valid = true;
					break;
				}
			}
			continue;
		}
		if (char === " ") {
			if (signature[i$1 - 1] !== "," && current !== "," && current !== ",(") {
				current = "";
				active = false;
			}
			continue;
		}
		result += char;
		current += char;
	}
	if (!valid) throw new BaseError$2("Unable to normalize signature.");
	return result;
}
function isArgOfType(arg, abiParameter) {
	const argType = typeof arg;
	const abiParameterType = abiParameter.type;
	switch (abiParameterType) {
		case "address": return validate$4(arg, { strict: false });
		case "bool": return argType === "boolean";
		case "function": return argType === "string";
		case "string": return argType === "string";
		default:
			if (abiParameterType === "tuple" && "components" in abiParameter) return Object.values(abiParameter.components).every((component, index$1) => {
				return isArgOfType(Object.values(arg)[index$1], component);
			});
			if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === "number" || argType === "bigint";
			if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === "string" || arg instanceof Uint8Array;
			if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
				...abiParameter,
				type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
			}));
			return false;
	}
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
	for (const parameterIndex in sourceParameters) {
		const sourceParameter = sourceParameters[parameterIndex];
		const targetParameter = targetParameters[parameterIndex];
		if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter) return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
		const types$2 = [sourceParameter.type, targetParameter.type];
		if ((() => {
			if (types$2.includes("address") && types$2.includes("bytes20")) return true;
			if (types$2.includes("address") && types$2.includes("string")) return validate$4(args[parameterIndex], { strict: false });
			if (types$2.includes("address") && types$2.includes("bytes")) return validate$4(args[parameterIndex], { strict: false });
			return false;
		})()) return types$2;
	}
}
function from$5(abiItem, options = {}) {
	const { prepare = true } = options;
	const item = (() => {
		if (Array.isArray(abiItem)) return parseAbiItem(abiItem);
		if (typeof abiItem === "string") return parseAbiItem(abiItem);
		return abiItem;
	})();
	return {
		...item,
		...prepare ? { hash: getSignatureHash(item) } : {}
	};
}
function fromAbi$1(abi$2, name$1, options) {
	const { args = [], prepare = true } = options ?? {};
	const isSelector = validate$5(name$1, { strict: false });
	const abiItems = abi$2.filter((abiItem$1) => {
		if (isSelector) {
			if (abiItem$1.type === "function" || abiItem$1.type === "error") return getSelector$1(abiItem$1) === slice$4(name$1, 0, 4);
			if (abiItem$1.type === "event") return getSignatureHash(abiItem$1) === name$1;
			return false;
		}
		return "name" in abiItem$1 && abiItem$1.name === name$1;
	});
	if (abiItems.length === 0) throw new NotFoundError({ name: name$1 });
	if (abiItems.length === 1) return {
		...abiItems[0],
		...prepare ? { hash: getSignatureHash(abiItems[0]) } : {}
	};
	let matchedAbiItem;
	for (const abiItem$1 of abiItems) {
		if (!("inputs" in abiItem$1)) continue;
		if (!args || args.length === 0) {
			if (!abiItem$1.inputs || abiItem$1.inputs.length === 0) return {
				...abiItem$1,
				...prepare ? { hash: getSignatureHash(abiItem$1) } : {}
			};
			continue;
		}
		if (!abiItem$1.inputs) continue;
		if (abiItem$1.inputs.length === 0) continue;
		if (abiItem$1.inputs.length !== args.length) continue;
		if (args.every((arg, index$1) => {
			const abiParameter = "inputs" in abiItem$1 && abiItem$1.inputs[index$1];
			if (!abiParameter) return false;
			return isArgOfType(arg, abiParameter);
		})) {
			if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
				const ambiguousTypes = getAmbiguousTypes(abiItem$1.inputs, matchedAbiItem.inputs, args);
				if (ambiguousTypes) throw new AmbiguityError({
					abiItem: abiItem$1,
					type: ambiguousTypes[0]
				}, {
					abiItem: matchedAbiItem,
					type: ambiguousTypes[1]
				});
			}
			matchedAbiItem = abiItem$1;
		}
	}
	const abiItem = (() => {
		if (matchedAbiItem) return matchedAbiItem;
		const [abiItem$1, ...overloads] = abiItems;
		return {
			...abiItem$1,
			overloads
		};
	})();
	if (!abiItem) throw new NotFoundError({ name: name$1 });
	return {
		...abiItem,
		...prepare ? { hash: getSignatureHash(abiItem) } : {}
	};
}
function getSelector$1(abiItem) {
	return slice$4(getSignatureHash(abiItem), 0, 4);
}
function getSignature(abiItem) {
	const signature = (() => {
		if (typeof abiItem === "string") return abiItem;
		return formatAbiItem$1(abiItem);
	})();
	return normalizeSignature(signature);
}
function getSignatureHash(abiItem) {
	if (typeof abiItem !== "string" && "hash" in abiItem && abiItem.hash) return abiItem.hash;
	return keccak256$1(fromString$2(getSignature(abiItem)));
}
var AmbiguityError = class extends BaseError$2 {
	constructor(x, y$1) {
		super("Found ambiguous types in overloaded ABI Items.", { metaMessages: [
			`\`${x.type}\` in \`${normalizeSignature(formatAbiItem$1(x.abiItem))}\`, and`,
			`\`${y$1.type}\` in \`${normalizeSignature(formatAbiItem$1(y$1.abiItem))}\``,
			"",
			"These types encode differently and cannot be distinguished at runtime.",
			"Remove one of the ambiguous items in the ABI."
		] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiItem.AmbiguityError"
		});
	}
};
var NotFoundError = class extends BaseError$2 {
	constructor({ name: name$1, data, type: type$1 = "item" }) {
		const selector = (() => {
			if (name$1) return ` with name "${name$1}"`;
			if (data) return ` with data "${data}"`;
			return "";
		})();
		super(`ABI ${type$1}${selector} not found.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiItem.NotFoundError"
		});
	}
};
function encode(abiConstructor, options) {
	const { bytecode, args } = options;
	return concat$2(bytecode, abiConstructor.inputs?.length && args?.length ? encode$1(abiConstructor.inputs, args) : "0x");
}
function from$4(abiConstructor) {
	return from$5(abiConstructor);
}
function encodeData(abiFunction, ...args) {
	const { overloads } = abiFunction;
	const item = overloads ? fromAbi([abiFunction, ...overloads], abiFunction.name, { args: args[0] }) : abiFunction;
	const selector = getSelector(item);
	const data = args.length > 0 ? encode$1(item.inputs, args[0]) : void 0;
	return data ? concat$2(selector, data) : selector;
}
function from$3(abiFunction, options = {}) {
	return from$5(abiFunction, options);
}
function fromAbi(abi$2, name$1, options) {
	const item = fromAbi$1(abi$2, name$1, options);
	if (item.type !== "function") throw new NotFoundError({
		name: name$1,
		type: "function"
	});
	return item;
}
function getSelector(abiItem) {
	return getSelector$1(abiItem);
}
const ethAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const zeroAddress = "0x0000000000000000000000000000000000000000";
var getBalanceCode = "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033";
async function simulateCalls(client, parameters) {
	const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation } = parameters;
	const account$1 = parameters.account ? parseAccount(parameters.account) : void 0;
	if (traceAssetChanges && !account$1) throw new BaseError("`account` is required when `traceAssetChanges` is true");
	const getBalanceData = account$1 ? encode(from$4("constructor(bytes, bytes)"), {
		bytecode: deploylessCallViaBytecodeBytecode,
		args: [getBalanceCode, encodeData(from$3("function getBalance(address)"), [account$1.address])]
	}) : void 0;
	const assetAddresses = traceAssetChanges ? await Promise.all(parameters.calls.map(async (call$1) => {
		if (!call$1.data && !call$1.abi) return;
		const { accessList } = await createAccessList(client, {
			account: account$1.address,
			...call$1,
			data: call$1.abi ? encodeFunctionData(call$1) : call$1.data
		});
		return accessList.map(({ address, storageKeys }) => storageKeys.length > 0 ? address : null);
	})).then((x) => x.flat().filter(Boolean)) : [];
	const blocks = await simulateBlocks(client, {
		blockNumber,
		blockTag,
		blocks: [
			...traceAssetChanges ? [{
				calls: [{ data: getBalanceData }],
				stateOverrides
			}, {
				calls: assetAddresses.map((address, i$1) => ({
					abi: [from$3("function balanceOf(address) returns (uint256)")],
					functionName: "balanceOf",
					args: [account$1.address],
					to: address,
					from: zeroAddress,
					nonce: i$1
				})),
				stateOverrides: [{
					address: zeroAddress,
					nonce: 0
				}]
			}] : [],
			{
				calls: [...calls, {}].map((call$1) => ({
					...call$1,
					from: account$1?.address
				})),
				stateOverrides
			},
			...traceAssetChanges ? [
				{ calls: [{ data: getBalanceData }] },
				{
					calls: assetAddresses.map((address, i$1) => ({
						abi: [from$3("function balanceOf(address) returns (uint256)")],
						functionName: "balanceOf",
						args: [account$1.address],
						to: address,
						from: zeroAddress,
						nonce: i$1
					})),
					stateOverrides: [{
						address: zeroAddress,
						nonce: 0
					}]
				},
				{
					calls: assetAddresses.map((address, i$1) => ({
						to: address,
						abi: [from$3("function decimals() returns (uint256)")],
						functionName: "decimals",
						from: zeroAddress,
						nonce: i$1
					})),
					stateOverrides: [{
						address: zeroAddress,
						nonce: 0
					}]
				},
				{
					calls: assetAddresses.map((address, i$1) => ({
						to: address,
						abi: [from$3("function tokenURI(uint256) returns (string)")],
						functionName: "tokenURI",
						args: [0n],
						from: zeroAddress,
						nonce: i$1
					})),
					stateOverrides: [{
						address: zeroAddress,
						nonce: 0
					}]
				},
				{
					calls: assetAddresses.map((address, i$1) => ({
						to: address,
						abi: [from$3("function symbol() returns (string)")],
						functionName: "symbol",
						from: zeroAddress,
						nonce: i$1
					})),
					stateOverrides: [{
						address: zeroAddress,
						nonce: 0
					}]
				}
			] : []
		],
		traceTransfers,
		validation
	});
	const block_results = traceAssetChanges ? blocks[2] : blocks[0];
	const [block_ethPre, block_assetsPre, , block_ethPost, block_assetsPost, block_decimals, block_tokenURI, block_symbols] = traceAssetChanges ? blocks : [];
	const { calls: block_calls,...block } = block_results;
	const results = block_calls.slice(0, -1) ?? [];
	const ethPre = block_ethPre?.calls ?? [];
	const assetsPre = block_assetsPre?.calls ?? [];
	const balancesPre = [...ethPre, ...assetsPre].map((call$1) => call$1.status === "success" ? hexToBigInt(call$1.data) : null);
	const ethPost = block_ethPost?.calls ?? [];
	const assetsPost = block_assetsPost?.calls ?? [];
	const balancesPost = [...ethPost, ...assetsPost].map((call$1) => call$1.status === "success" ? hexToBigInt(call$1.data) : null);
	const decimals = (block_decimals?.calls ?? []).map((x) => x.status === "success" ? x.result : null);
	const symbols = (block_symbols?.calls ?? []).map((x) => x.status === "success" ? x.result : null);
	const tokenURI = (block_tokenURI?.calls ?? []).map((x) => x.status === "success" ? x.result : null);
	const changes = [];
	for (const [i$1, balancePost] of balancesPost.entries()) {
		const balancePre = balancesPre[i$1];
		if (typeof balancePost !== "bigint") continue;
		if (typeof balancePre !== "bigint") continue;
		const decimals_ = decimals[i$1 - 1];
		const symbol_ = symbols[i$1 - 1];
		const tokenURI_ = tokenURI[i$1 - 1];
		const token = (() => {
			if (i$1 === 0) return {
				address: ethAddress,
				decimals: 18,
				symbol: "ETH"
			};
			return {
				address: assetAddresses[i$1 - 1],
				decimals: tokenURI_ || decimals_ ? Number(decimals_ ?? 1) : void 0,
				symbol: symbol_ ?? void 0
			};
		})();
		if (changes.some((change) => change.token.address === token.address)) continue;
		changes.push({
			token,
			value: {
				pre: balancePre,
				post: balancePost,
				diff: balancePost - balancePre
			}
		});
	}
	return {
		assetChanges: changes,
		block,
		results
	};
}
const magicBytes = "0x6492649264926492649264926492649264926492649264926492649264926492";
function assert$4(wrapped) {
	if (slice$4(wrapped, -32) !== "0x6492649264926492649264926492649264926492649264926492649264926492") throw new InvalidWrappedSignatureError(wrapped);
}
function wrap(value) {
	const { data, signature, to } = value;
	return concat$2(encode$1(from$8("address, bytes, bytes"), [
		to,
		data,
		signature
	]), magicBytes);
}
function validate$2(wrapped) {
	try {
		assert$4(wrapped);
		return true;
	} catch {
		return false;
	}
}
var InvalidWrappedSignatureError = class extends BaseError$2 {
	constructor(wrapped) {
		super(`Value \`${wrapped}\` is an invalid ERC-6492 wrapped signature.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "SignatureErc6492.InvalidWrappedSignatureError"
		});
	}
};
function serializeSignature({ r: r$1, s, to = "hex", v, yParity }) {
	const yParity_ = (() => {
		if (yParity === 0 || yParity === 1) return yParity;
		if (v && (v === 27n || v === 28n || v >= 35n)) return v % 2n === 0n ? 1 : 0;
		throw new Error("Invalid `v` or `yParity` value");
	})();
	const signature = `0x${new secp256k1.Signature(hexToBigInt(r$1), hexToBigInt(s)).toCompactHex()}${yParity_ === 0 ? "1b" : "1c"}`;
	if (to === "hex") return signature;
	return hexToBytes(signature);
}
async function verifyHash(client, parameters) {
	const { address, hash, erc6492VerifierAddress: verifierAddress = parameters.universalSignatureVerifierAddress ?? client.chain?.contracts?.erc6492Verifier?.address, multicallAddress = parameters.multicallAddress ?? client.chain?.contracts?.multicall3?.address } = parameters;
	const signature = (() => {
		const signature$1 = parameters.signature;
		if (isHex(signature$1)) return signature$1;
		if (typeof signature$1 === "object" && "r" in signature$1 && "s" in signature$1) return serializeSignature(signature$1);
		return bytesToHex$1(signature$1);
	})();
	try {
		if (validate$3(signature)) return await verifyErc8010(client, {
			...parameters,
			multicallAddress,
			signature
		});
		return await verifyErc6492(client, {
			...parameters,
			verifierAddress,
			signature
		});
	} catch (error) {
		try {
			if (isAddressEqual(getAddress(address), await recoverAddress({
				hash,
				signature
			}))) return true;
		} catch {}
		if (error instanceof VerificationError) return false;
		throw error;
	}
}
async function verifyErc8010(client, parameters) {
	const { address, blockNumber, blockTag, hash, multicallAddress } = parameters;
	const { authorization: authorization_ox, data: initData, signature, to } = unwrap(parameters.signature);
	if (await getCode(client, {
		address,
		blockNumber,
		blockTag
	}) === concatHex(["0xef0100", authorization_ox.address])) return await verifyErc1271(client, {
		address,
		blockNumber,
		blockTag,
		hash,
		signature
	});
	const authorization = {
		address: authorization_ox.address,
		chainId: Number(authorization_ox.chainId),
		nonce: Number(authorization_ox.nonce),
		r: numberToHex(authorization_ox.r, { size: 32 }),
		s: numberToHex(authorization_ox.s, { size: 32 }),
		yParity: authorization_ox.yParity
	};
	if (!await verifyAuthorization({
		address,
		authorization
	})) throw new VerificationError();
	const results = await getAction(client, readContract, "readContract")({
		...multicallAddress ? { address: multicallAddress } : { code: multicall3Bytecode },
		authorizationList: [authorization],
		abi: multicall3Abi,
		blockNumber,
		blockTag: "pending",
		functionName: "aggregate3",
		args: [[...initData ? [{
			allowFailure: true,
			target: to ?? address,
			callData: initData
		}] : [], {
			allowFailure: true,
			target: address,
			callData: encodeFunctionData({
				abi: erc1271Abi,
				functionName: "isValidSignature",
				args: [hash, signature]
			})
		}]]
	});
	if ((results[results.length - 1]?.returnData)?.startsWith("0x1626ba7e")) return true;
	throw new VerificationError();
}
async function verifyErc6492(client, parameters) {
	const { address, factory, factoryData, hash, signature, verifierAddress,...rest } = parameters;
	const wrappedSignature = await (async () => {
		if (!factory && !factoryData) return signature;
		if (validate$2(signature)) return signature;
		return wrap({
			data: factoryData,
			signature,
			to: factory
		});
	})();
	const args = verifierAddress ? {
		to: verifierAddress,
		data: encodeFunctionData({
			abi: erc6492SignatureValidatorAbi,
			functionName: "isValidSig",
			args: [
				address,
				hash,
				wrappedSignature
			]
		}),
		...rest
	} : {
		data: encodeDeployData({
			abi: erc6492SignatureValidatorAbi,
			args: [
				address,
				hash,
				wrappedSignature
			],
			bytecode: erc6492SignatureValidatorByteCode
		}),
		...rest
	};
	const { data } = await getAction(client, call, "call")(args).catch((error) => {
		if (error instanceof CallExecutionError) throw new VerificationError();
		throw error;
	});
	if (hexToBool(data ?? "0x0")) return true;
	throw new VerificationError();
}
async function verifyErc1271(client, parameters) {
	const { address, blockNumber, blockTag, hash, signature } = parameters;
	if ((await getAction(client, readContract, "readContract")({
		address,
		abi: erc1271Abi,
		args: [hash, signature],
		blockNumber,
		blockTag,
		functionName: "isValidSignature"
	}).catch((error) => {
		if (error instanceof ContractFunctionExecutionError) throw new VerificationError();
		throw error;
	})).startsWith("0x1626ba7e")) return true;
	throw new VerificationError();
}
var VerificationError = class extends Error {};
async function verifyMessage(client, { address, message, factory, factoryData, signature,...callRequest }) {
	const hash = hashMessage(message);
	return verifyHash(client, {
		address,
		factory,
		factoryData,
		hash,
		signature,
		...callRequest
	});
}
async function verifyTypedData(client, parameters) {
	const { address, factory, factoryData, signature, message, primaryType, types: types$2, domain,...callRequest } = parameters;
	const hash = hashTypedData({
		message,
		primaryType,
		types: types$2,
		domain
	});
	return verifyHash(client, {
		address,
		factory,
		factoryData,
		hash,
		signature,
		...callRequest
	});
}
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
	const enablePolling = (() => {
		if (typeof poll_ !== "undefined") return poll_;
		if (client.transport.type === "webSocket" || client.transport.type === "ipc") return false;
		if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc")) return false;
		return true;
	})();
	let prevBlockNumber;
	const pollBlockNumber = () => {
		const observerId = stringify$1([
			"watchBlockNumber",
			client.uid,
			emitOnBegin,
			emitMissed,
			pollingInterval
		]);
		return observe(observerId, {
			onBlockNumber,
			onError
		}, (emit) => poll(async () => {
			try {
				const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
				if (prevBlockNumber !== void 0) {
					if (blockNumber === prevBlockNumber) return;
					if (blockNumber - prevBlockNumber > 1 && emitMissed) for (let i$1 = prevBlockNumber + 1n; i$1 < blockNumber; i$1++) {
						emit.onBlockNumber(i$1, prevBlockNumber);
						prevBlockNumber = i$1;
					}
				}
				if (prevBlockNumber === void 0 || blockNumber > prevBlockNumber) {
					emit.onBlockNumber(blockNumber, prevBlockNumber);
					prevBlockNumber = blockNumber;
				}
			} catch (err) {
				emit.onError?.(err);
			}
		}, {
			emitOnBegin,
			interval: pollingInterval
		}));
	};
	const subscribeBlockNumber = () => {
		const observerId = stringify$1([
			"watchBlockNumber",
			client.uid,
			emitOnBegin,
			emitMissed
		]);
		return observe(observerId, {
			onBlockNumber,
			onError
		}, (emit) => {
			let active = true;
			let unsubscribe = () => active = false;
			(async () => {
				try {
					const { unsubscribe: unsubscribe_ } = await (() => {
						if (client.transport.type === "fallback") {
							const transport = client.transport.transports.find((transport$1) => transport$1.config.type === "webSocket" || transport$1.config.type === "ipc");
							if (!transport) return client.transport;
							return transport.value;
						}
						return client.transport;
					})().subscribe({
						params: ["newHeads"],
						onData(data) {
							if (!active) return;
							const blockNumber = hexToBigInt(data.result?.number);
							emit.onBlockNumber(blockNumber, prevBlockNumber);
							prevBlockNumber = blockNumber;
						},
						onError(error) {
							emit.onError?.(error);
						}
					});
					unsubscribe = unsubscribe_;
					if (!active) unsubscribe();
				} catch (err) {
					onError?.(err);
				}
			})();
			return () => unsubscribe();
		});
	};
	return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}
async function waitForTransactionReceipt(client, parameters) {
	const { checkReplacement = true, confirmations = 1, hash, onReplaced, retryCount = 6, retryDelay = ({ count }) => ~~(1 << count) * 200, timeout = 18e4 } = parameters;
	const observerId = stringify$1([
		"waitForTransactionReceipt",
		client.uid,
		hash
	]);
	const pollingInterval = (() => {
		if (parameters.pollingInterval) return parameters.pollingInterval;
		if (client.chain?.experimental_preconfirmationTime) return client.chain.experimental_preconfirmationTime;
		return client.pollingInterval;
	})();
	let transaction;
	let replacedTransaction;
	let receipt;
	let retrying = false;
	let _unobserve;
	let _unwatch;
	const { promise, resolve, reject } = withResolvers();
	const timer = timeout ? setTimeout(() => {
		_unwatch?.();
		_unobserve?.();
		reject(new WaitForTransactionReceiptTimeoutError({ hash }));
	}, timeout) : void 0;
	_unobserve = observe(observerId, {
		onReplaced,
		resolve,
		reject
	}, async (emit) => {
		receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash }).catch(() => void 0);
		if (receipt && confirmations <= 1) {
			clearTimeout(timer);
			emit.resolve(receipt);
			_unobserve?.();
			return;
		}
		_unwatch = getAction(client, watchBlockNumber, "watchBlockNumber")({
			emitMissed: true,
			emitOnBegin: true,
			poll: true,
			pollingInterval,
			async onBlockNumber(blockNumber_) {
				const done = (fn) => {
					clearTimeout(timer);
					_unwatch?.();
					fn();
					_unobserve?.();
				};
				let blockNumber = blockNumber_;
				if (retrying) return;
				try {
					if (receipt) {
						if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
						done(() => emit.resolve(receipt));
						return;
					}
					if (checkReplacement && !transaction) {
						retrying = true;
						await withRetry(async () => {
							transaction = await getAction(client, getTransaction, "getTransaction")({ hash });
							if (transaction.blockNumber) blockNumber = transaction.blockNumber;
						}, {
							delay: retryDelay,
							retryCount
						});
						retrying = false;
					}
					receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash });
					if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
					done(() => emit.resolve(receipt));
				} catch (err) {
					if (err instanceof TransactionNotFoundError || err instanceof TransactionReceiptNotFoundError) {
						if (!transaction) {
							retrying = false;
							return;
						}
						try {
							replacedTransaction = transaction;
							retrying = true;
							const block = await withRetry(() => getAction(client, getBlock, "getBlock")({
								blockNumber,
								includeTransactions: true
							}), {
								delay: retryDelay,
								retryCount,
								shouldRetry: ({ error }) => error instanceof BlockNotFoundError
							});
							retrying = false;
							const replacementTransaction = block.transactions.find(({ from: from$11, nonce }) => from$11 === replacedTransaction.from && nonce === replacedTransaction.nonce);
							if (!replacementTransaction) return;
							receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash: replacementTransaction.hash });
							if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
							let reason = "replaced";
							if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value && replacementTransaction.input === replacedTransaction.input) reason = "repriced";
							else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) reason = "cancelled";
							done(() => {
								emit.onReplaced?.({
									reason,
									replacedTransaction,
									transaction: replacementTransaction,
									transactionReceipt: receipt
								});
								emit.resolve(receipt);
							});
						} catch (err_) {
							done(() => emit.reject(err_));
						}
					} else done(() => emit.reject(err));
				}
			}
		});
	});
	return promise;
}
function watchBlocks(client, { blockTag = client.experimental_blockTag ?? "latest", emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
	const enablePolling = (() => {
		if (typeof poll_ !== "undefined") return poll_;
		if (client.transport.type === "webSocket" || client.transport.type === "ipc") return false;
		if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc")) return false;
		return true;
	})();
	const includeTransactions = includeTransactions_ ?? false;
	let prevBlock;
	const pollBlocks = () => {
		const observerId = stringify$1([
			"watchBlocks",
			client.uid,
			blockTag,
			emitMissed,
			emitOnBegin,
			includeTransactions,
			pollingInterval
		]);
		return observe(observerId, {
			onBlock,
			onError
		}, (emit) => poll(async () => {
			try {
				const block = await getAction(client, getBlock, "getBlock")({
					blockTag,
					includeTransactions
				});
				if (block.number !== null && prevBlock?.number != null) {
					if (block.number === prevBlock.number) return;
					if (block.number - prevBlock.number > 1 && emitMissed) for (let i$1 = prevBlock?.number + 1n; i$1 < block.number; i$1++) {
						const block$1 = await getAction(client, getBlock, "getBlock")({
							blockNumber: i$1,
							includeTransactions
						});
						emit.onBlock(block$1, prevBlock);
						prevBlock = block$1;
					}
				}
				if (prevBlock?.number == null || blockTag === "pending" && block?.number == null || block.number !== null && block.number > prevBlock.number) {
					emit.onBlock(block, prevBlock);
					prevBlock = block;
				}
			} catch (err) {
				emit.onError?.(err);
			}
		}, {
			emitOnBegin,
			interval: pollingInterval
		}));
	};
	const subscribeBlocks = () => {
		let active = true;
		let emitFetched = true;
		let unsubscribe = () => active = false;
		(async () => {
			try {
				if (emitOnBegin) getAction(client, getBlock, "getBlock")({
					blockTag,
					includeTransactions
				}).then((block) => {
					if (!active) return;
					if (!emitFetched) return;
					onBlock(block, void 0);
					emitFetched = false;
				}).catch(onError);
				const { unsubscribe: unsubscribe_ } = await (() => {
					if (client.transport.type === "fallback") {
						const transport = client.transport.transports.find((transport$1) => transport$1.config.type === "webSocket" || transport$1.config.type === "ipc");
						if (!transport) return client.transport;
						return transport.value;
					}
					return client.transport;
				})().subscribe({
					params: ["newHeads"],
					async onData(data) {
						if (!active) return;
						const block = await getAction(client, getBlock, "getBlock")({
							blockNumber: data.result?.number,
							includeTransactions
						}).catch(() => {});
						if (!active) return;
						onBlock(block, prevBlock);
						emitFetched = false;
						prevBlock = block;
					},
					onError(error) {
						onError?.(error);
					}
				});
				unsubscribe = unsubscribe_;
				if (!active) unsubscribe();
			} catch (err) {
				onError?.(err);
			}
		})();
		return () => unsubscribe();
	};
	return enablePolling ? pollBlocks() : subscribeBlocks();
}
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
	const enablePolling = (() => {
		if (typeof poll_ !== "undefined") return poll_;
		if (typeof fromBlock === "bigint") return true;
		if (client.transport.type === "webSocket" || client.transport.type === "ipc") return false;
		if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc")) return false;
		return true;
	})();
	const strict = strict_ ?? false;
	const pollEvent = () => {
		const observerId = stringify$1([
			"watchEvent",
			address,
			args,
			batch,
			client.uid,
			event,
			pollingInterval,
			fromBlock
		]);
		return observe(observerId, {
			onLogs,
			onError
		}, (emit) => {
			let previousBlockNumber;
			if (fromBlock !== void 0) previousBlockNumber = fromBlock - 1n;
			let filter;
			let initialized = false;
			const unwatch = poll(async () => {
				if (!initialized) {
					try {
						filter = await getAction(client, createEventFilter, "createEventFilter")({
							address,
							args,
							event,
							events,
							strict,
							fromBlock
						});
					} catch {}
					initialized = true;
					return;
				}
				try {
					let logs;
					if (filter) logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
					else {
						const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
						if (previousBlockNumber && previousBlockNumber !== blockNumber) logs = await getAction(client, getLogs, "getLogs")({
							address,
							args,
							event,
							events,
							fromBlock: previousBlockNumber + 1n,
							toBlock: blockNumber
						});
						else logs = [];
						previousBlockNumber = blockNumber;
					}
					if (logs.length === 0) return;
					if (batch) emit.onLogs(logs);
					else for (const log of logs) emit.onLogs([log]);
				} catch (err) {
					if (filter && err instanceof InvalidInputRpcError) initialized = false;
					emit.onError?.(err);
				}
			}, {
				emitOnBegin: true,
				interval: pollingInterval
			});
			return async () => {
				if (filter) await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
				unwatch();
			};
		});
	};
	const subscribeEvent = () => {
		let active = true;
		let unsubscribe = () => active = false;
		(async () => {
			try {
				const transport = (() => {
					if (client.transport.type === "fallback") {
						const transport$1 = client.transport.transports.find((transport$2) => transport$2.config.type === "webSocket" || transport$2.config.type === "ipc");
						if (!transport$1) return client.transport;
						return transport$1.value;
					}
					return client.transport;
				})();
				const events_ = events ?? (event ? [event] : void 0);
				let topics = [];
				if (events_) {
					topics = [events_.flatMap((event$1) => encodeEventTopics({
						abi: [event$1],
						eventName: event$1.name,
						args
					}))];
					if (event) topics = topics[0];
				}
				const { unsubscribe: unsubscribe_ } = await transport.subscribe({
					params: ["logs", {
						address,
						topics
					}],
					onData(data) {
						if (!active) return;
						const log = data.result;
						try {
							const { eventName, args: args$1 } = decodeEventLog({
								abi: events_ ?? [],
								data: log.data,
								topics: log.topics,
								strict
							});
							const formatted = formatLog(log, {
								args: args$1,
								eventName
							});
							onLogs([formatted]);
						} catch (err) {
							let eventName;
							let isUnnamed;
							if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
								if (strict_) return;
								eventName = err.abiItem.name;
								isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
							}
							const formatted = formatLog(log, {
								args: isUnnamed ? [] : {},
								eventName
							});
							onLogs([formatted]);
						}
					},
					onError(error) {
						onError?.(error);
					}
				});
				unsubscribe = unsubscribe_;
				if (!active) unsubscribe();
			} catch (err) {
				onError?.(err);
			}
		})();
		return () => unsubscribe();
	};
	return enablePolling ? pollEvent() : subscribeEvent();
}
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
	const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket" && client.transport.type !== "ipc";
	const pollPendingTransactions = () => {
		const observerId = stringify$1([
			"watchPendingTransactions",
			client.uid,
			batch,
			pollingInterval
		]);
		return observe(observerId, {
			onTransactions,
			onError
		}, (emit) => {
			let filter;
			const unwatch = poll(async () => {
				try {
					if (!filter) try {
						filter = await getAction(client, createPendingTransactionFilter, "createPendingTransactionFilter")({});
						return;
					} catch (err) {
						unwatch();
						throw err;
					}
					const hashes = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
					if (hashes.length === 0) return;
					if (batch) emit.onTransactions(hashes);
					else for (const hash of hashes) emit.onTransactions([hash]);
				} catch (err) {
					emit.onError?.(err);
				}
			}, {
				emitOnBegin: true,
				interval: pollingInterval
			});
			return async () => {
				if (filter) await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
				unwatch();
			};
		});
	};
	const subscribePendingTransactions = () => {
		let active = true;
		let unsubscribe = () => active = false;
		(async () => {
			try {
				const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
					params: ["newPendingTransactions"],
					onData(data) {
						if (!active) return;
						const transaction = data.result;
						onTransactions([transaction]);
					},
					onError(error) {
						onError?.(error);
					}
				});
				unsubscribe = unsubscribe_;
				if (!active) unsubscribe();
			} catch (err) {
				onError?.(err);
			}
		})();
		return () => unsubscribe();
	};
	return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}
function parseSiweMessage(message) {
	const { scheme, statement,...prefix } = message.match(prefixRegex)?.groups ?? {};
	const { chainId, expirationTime, issuedAt, notBefore, requestId,...suffix } = message.match(suffixRegex)?.groups ?? {};
	const resources = message.split("Resources:")[1]?.split("\n- ").slice(1);
	return {
		...prefix,
		...suffix,
		...chainId ? { chainId: Number(chainId) } : {},
		...expirationTime ? { expirationTime: new Date(expirationTime) } : {},
		...issuedAt ? { issuedAt: new Date(issuedAt) } : {},
		...notBefore ? { notBefore: new Date(notBefore) } : {},
		...requestId ? { requestId } : {},
		...resources ? { resources } : {},
		...scheme ? { scheme } : {},
		...statement ? { statement } : {}
	};
}
var prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
var suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function validateSiweMessage(parameters) {
	const { address, domain, message, nonce, scheme, time = /* @__PURE__ */ new Date() } = parameters;
	if (domain && message.domain !== domain) return false;
	if (nonce && message.nonce !== nonce) return false;
	if (scheme && message.scheme !== scheme) return false;
	if (message.expirationTime && time >= message.expirationTime) return false;
	if (message.notBefore && time < message.notBefore) return false;
	try {
		if (!message.address) return false;
		if (!isAddress(message.address, { strict: false })) return false;
		if (address && !isAddressEqual(message.address, address)) return false;
	} catch {
		return false;
	}
	return true;
}
async function verifySiweMessage(client, parameters) {
	const { address, domain, message, nonce, scheme, signature, time = /* @__PURE__ */ new Date(),...callRequest } = parameters;
	const parsed = parseSiweMessage(message);
	if (!parsed.address) return false;
	if (!validateSiweMessage({
		address,
		domain,
		message: parsed,
		nonce,
		scheme,
		time
	})) return false;
	const hash = hashMessage(message);
	return verifyHash(client, {
		address: parsed.address,
		hash,
		signature,
		...callRequest
	});
}
function publicActions(client) {
	return {
		call: (args) => call(client, args),
		createAccessList: (args) => createAccessList(client, args),
		createBlockFilter: () => createBlockFilter(client),
		createContractEventFilter: (args) => createContractEventFilter(client, args),
		createEventFilter: (args) => createEventFilter(client, args),
		createPendingTransactionFilter: () => createPendingTransactionFilter(client),
		estimateContractGas: (args) => estimateContractGas(client, args),
		estimateGas: (args) => estimateGas(client, args),
		getBalance: (args) => getBalance(client, args),
		getBlobBaseFee: () => getBlobBaseFee(client),
		getBlock: (args) => getBlock(client, args),
		getBlockNumber: (args) => getBlockNumber(client, args),
		getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
		getBytecode: (args) => getCode(client, args),
		getChainId: () => getChainId(client),
		getCode: (args) => getCode(client, args),
		getContractEvents: (args) => getContractEvents(client, args),
		getEip712Domain: (args) => getEip712Domain(client, args),
		getEnsAddress: (args) => getEnsAddress(client, args),
		getEnsAvatar: (args) => getEnsAvatar(client, args),
		getEnsName: (args) => getEnsName(client, args),
		getEnsResolver: (args) => getEnsResolver(client, args),
		getEnsText: (args) => getEnsText(client, args),
		getFeeHistory: (args) => getFeeHistory(client, args),
		estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
		getFilterChanges: (args) => getFilterChanges(client, args),
		getFilterLogs: (args) => getFilterLogs(client, args),
		getGasPrice: () => getGasPrice(client),
		getLogs: (args) => getLogs(client, args),
		getProof: (args) => getProof(client, args),
		estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
		getStorageAt: (args) => getStorageAt(client, args),
		getTransaction: (args) => getTransaction(client, args),
		getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
		getTransactionCount: (args) => getTransactionCount(client, args),
		getTransactionReceipt: (args) => getTransactionReceipt(client, args),
		multicall: (args) => multicall(client, args),
		prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
		readContract: (args) => readContract(client, args),
		sendRawTransaction: (args) => sendRawTransaction(client, args),
		simulate: (args) => simulateBlocks(client, args),
		simulateBlocks: (args) => simulateBlocks(client, args),
		simulateCalls: (args) => simulateCalls(client, args),
		simulateContract: (args) => simulateContract(client, args),
		verifyHash: (args) => verifyHash(client, args),
		verifyMessage: (args) => verifyMessage(client, args),
		verifySiweMessage: (args) => verifySiweMessage(client, args),
		verifyTypedData: (args) => verifyTypedData(client, args),
		uninstallFilter: (args) => uninstallFilter(client, args),
		waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
		watchBlocks: (args) => watchBlocks(client, args),
		watchBlockNumber: (args) => watchBlockNumber(client, args),
		watchContractEvent: (args) => watchContractEvent(client, args),
		watchEvent: (args) => watchEvent(client, args),
		watchPendingTransactions: (args) => watchPendingTransactions(client, args)
	};
}
function createPublicClient(parameters) {
	const { key = "public", name: name$1 = "Public Client" } = parameters;
	return createClient({
		...parameters,
		key,
		name: name$1,
		type: "publicClient"
	}).extend(publicActions);
}
async function prepareAuthorization(client, parameters) {
	const { account: account_ = client.account, chainId, nonce } = parameters;
	if (!account_) throw new AccountNotFoundError({ docsPath: "/docs/eip7702/prepareAuthorization" });
	const account$1 = parseAccount(account_);
	const executor = (() => {
		if (!parameters.executor) return void 0;
		if (parameters.executor === "self") return parameters.executor;
		return parseAccount(parameters.executor);
	})();
	const authorization = {
		address: parameters.contractAddress ?? parameters.address,
		chainId,
		nonce
	};
	if (typeof authorization.chainId === "undefined") authorization.chainId = client.chain?.id ?? await getAction(client, getChainId, "getChainId")({});
	if (typeof authorization.nonce === "undefined") {
		authorization.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
			address: account$1.address,
			blockTag: "pending"
		});
		if (executor === "self" || executor?.address && isAddressEqual(executor.address, account$1.address)) authorization.nonce += 1;
	}
	return authorization;
}
function createTransport({ key, methods, name: name$1, request, retryCount = 3, retryDelay = 150, timeout, type: type$1 }, value) {
	const uid$1 = uid();
	return {
		config: {
			key,
			methods,
			name: name$1,
			request,
			retryCount,
			retryDelay,
			timeout,
			type: type$1
		},
		request: buildRequest(request, {
			methods,
			retryCount,
			retryDelay,
			uid: uid$1
		}),
		value
	};
}
var UrlRequiredError = class extends BaseError {
	constructor() {
		super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
			docsPath: "/docs/clients/intro",
			name: "UrlRequiredError"
		});
	}
};
function http(url, config$1 = {}) {
	const { batch, fetchFn, fetchOptions, key = "http", methods, name: name$1 = "HTTP JSON-RPC", onFetchRequest, onFetchResponse, retryDelay, raw } = config$1;
	return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
		const { batchSize = 1e3, wait: wait$1 = 0 } = typeof batch === "object" ? batch : {};
		const retryCount = config$1.retryCount ?? retryCount_;
		const timeout = timeout_ ?? config$1.timeout ?? 1e4;
		const url_ = url || chain?.rpcUrls.default.http[0];
		if (!url_) throw new UrlRequiredError();
		const rpcClient = getHttpRpcClient(url_, {
			fetchFn,
			fetchOptions,
			onRequest: onFetchRequest,
			onResponse: onFetchResponse,
			timeout
		});
		return createTransport({
			key,
			methods,
			name: name$1,
			async request({ method, params }) {
				const body = {
					method,
					params
				};
				const { schedule } = createBatchScheduler({
					id: url_,
					wait: wait$1,
					shouldSplitBatch(requests) {
						return requests.length > batchSize;
					},
					fn: (body$1) => rpcClient.request({ body: body$1 }),
					sort: (a, b$1) => a.id - b$1.id
				});
				const fn = async (body$1) => batch ? schedule(body$1) : [await rpcClient.request({ body: body$1 })];
				const [{ error, result }] = await fn(body);
				if (raw) return {
					error,
					result
				};
				if (error) throw new RpcRequestError({
					body,
					error,
					url: url_
				});
				return result;
			},
			retryCount,
			retryDelay,
			timeout,
			type: "http"
		}, {
			fetchOptions,
			url: url_
		});
	};
}
function parseSignature(signatureHex) {
	const { r: r$1, s } = secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
	const yParityOrV = Number(`0x${signatureHex.slice(130)}`);
	const [v, yParity] = (() => {
		if (yParityOrV === 0 || yParityOrV === 1) return [void 0, yParityOrV];
		if (yParityOrV === 27) return [BigInt(yParityOrV), 0];
		if (yParityOrV === 28) return [BigInt(yParityOrV), 1];
		throw new Error("Invalid yParityOrV value");
	})();
	if (typeof v !== "undefined") return {
		r: numberToHex(r$1, { size: 32 }),
		s: numberToHex(s, { size: 32 }),
		v,
		yParity
	};
	return {
		r: numberToHex(r$1, { size: 32 }),
		s: numberToHex(s, { size: 32 }),
		yParity
	};
}
var ComponentType;
(function(ComponentType$1) {
	ComponentType$1["unknown"] = "unknown";
	ComponentType$1["banner"] = "banner";
	ComponentType$1["button"] = "button";
	ComponentType$1["card"] = "card";
	ComponentType$1["chart"] = "chart";
	ComponentType$1["content_script"] = "content_script";
	ComponentType$1["dropdown"] = "dropdown";
	ComponentType$1["link"] = "link";
	ComponentType$1["page"] = "page";
	ComponentType$1["modal"] = "modal";
	ComponentType$1["table"] = "table";
	ComponentType$1["search_bar"] = "search_bar";
	ComponentType$1["service_worker"] = "service_worker";
	ComponentType$1["text"] = "text";
	ComponentType$1["text_input"] = "text_input";
	ComponentType$1["tray"] = "tray";
	ComponentType$1["checkbox"] = "checkbox";
	ComponentType$1["icon"] = "icon";
})(ComponentType || (ComponentType = {}));
var ActionType;
(function(ActionType$1) {
	ActionType$1["unknown"] = "unknown";
	ActionType$1["blur"] = "blur";
	ActionType$1["click"] = "click";
	ActionType$1["change"] = "change";
	ActionType$1["dismiss"] = "dismiss";
	ActionType$1["focus"] = "focus";
	ActionType$1["hover"] = "hover";
	ActionType$1["select"] = "select";
	ActionType$1["measurement"] = "measurement";
	ActionType$1["move"] = "move";
	ActionType$1["process"] = "process";
	ActionType$1["render"] = "render";
	ActionType$1["scroll"] = "scroll";
	ActionType$1["view"] = "view";
	ActionType$1["search"] = "search";
	ActionType$1["keyPress"] = "keyPress";
	ActionType$1["error"] = "error";
})(ActionType || (ActionType = {}));
var AnalyticsEventImportance;
(function(AnalyticsEventImportance$1) {
	AnalyticsEventImportance$1["low"] = "low";
	AnalyticsEventImportance$1["high"] = "high";
})(AnalyticsEventImportance || (AnalyticsEventImportance = {}));
function logEvent(name$1, event, importance) {
	var _a, _b, _c;
	if (window.ClientAnalytics) (_a = window.ClientAnalytics) === null || _a === void 0 || _a.logEvent(name$1, Object.assign(Object.assign({}, event), {
		sdkVersion: PACKAGE_VERSION,
		sdkName: PACKAGE_NAME,
		appName: (_c = (_b = store.config.get().metadata) === null || _b === void 0 ? void 0 : _b.appName) !== null && _c !== void 0 ? _c : "",
		appOrigin: window.location.origin
	}), importance);
}
const logPopupSetupStarted = () => {
	logEvent("communicator.popup_setup.started", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown
	}, AnalyticsEventImportance.high);
};
const logPopupSetupCompleted = () => {
	logEvent("communicator.popup_setup.completed", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown
	}, AnalyticsEventImportance.high);
};
const logPopupUnloadReceived = () => {
	logEvent("communicator.popup_unload.received", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown
	}, AnalyticsEventImportance.high);
};
const logDialogShown = ({ dialogContext }) => {
	logEvent(`dialog.${dialogContext}.shown`, {
		action: ActionType.render,
		componentType: ComponentType.modal,
		dialogContext
	}, AnalyticsEventImportance.high);
};
const logDialogDismissed = ({ dialogContext }) => {
	logEvent(`dialog.${dialogContext}.dismissed`, {
		action: ActionType.dismiss,
		componentType: ComponentType.modal,
		dialogContext
	}, AnalyticsEventImportance.high);
};
const logDialogActionClicked = ({ dialogContext, dialogAction }) => {
	logEvent(`dialog.${dialogContext}.action_clicked`, {
		action: ActionType.click,
		componentType: ComponentType.button,
		dialogContext,
		dialogAction
	}, AnalyticsEventImportance.high);
};
const FONT_FACE_CSS = `
@font-face {
  font-family: "BaseSans-Regular";
  src: url("data:font/woff2;charset=utf-8;base64,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")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;
var FONT_NAME = "BaseSans-Regular";
function injectFontStyle() {
	if (document.head.querySelector(`style[base-sdk-font="BaseSans-Regular"]`)) return;
	const style = document.createElement("style");
	style.setAttribute("base-sdk-font", FONT_NAME);
	style.textContent = FONT_FACE_CSS;
	document.head.appendChild(style);
}
init_preact_module();
var f = 0;
Array.isArray;
function u(e, t, n, o$1, i$1, u$1) {
	t || (t = {});
	var a, c, l$1 = t;
	"ref" in t && (a = t.ref, delete t.ref);
	var p = {
		type: e,
		props: l$1,
		key: n,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		constructor: void 0,
		__v: --f,
		__i: -1,
		__u: 0,
		__source: i$1,
		__self: u$1
	};
	if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === l$1[c] && (l$1[c] = a[c]);
	return l.vnode && l.vnode(p), p;
}
function r(e) {
	var t, f$1, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f$1 = r(e[t])) && (n && (n += " "), n += f$1);
	else for (t in e) e[t] && (n && (n += " "), n += t);
	return n;
}
function clsx() {
	for (var e, t, f$1 = 0, n = ""; f$1 < arguments.length;) (e = arguments[f$1++]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
async function getDisplayableUsername(address) {
	return truncateAddress(address);
}
function truncateAddress(address, length = 4) {
	return `${address.slice(0, 2 + length)}...${address.slice(-length)}`;
}
const WHITE = "#FFF";
const BRAND_BLUE = "#0000FF";
const BaseLogo = ({ fill }) => {
	return u("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: u("path", {
			d: "M0 2.014C0 1.58105 0 1.36457 0.0815779 1.19805C0.159686 1.03861 0.288611 0.909686 0.448049 0.831578C0.61457 0.75 0.831047 0.75 1.264 0.75H14.736C15.169 0.75 15.3854 0.75 15.552 0.831578C15.7114 0.909686 15.8403 1.03861 15.9184 1.19805C16 1.36457 16 1.58105 16 2.014V15.486C16 15.919 16 16.1354 15.9184 16.302C15.8403 16.4614 15.7114 16.5903 15.552 16.6684C15.3854 16.75 15.169 16.75 14.736 16.75H1.264C0.831047 16.75 0.61457 16.75 0.448049 16.6684C0.288611 16.5903 0.159686 16.4614 0.0815779 16.302C0 16.1354 0 15.919 0 15.486V2.014Z",
			fill: fill === "blue" ? BRAND_BLUE : WHITE
		})
	});
};
init_hooks_module();
var Dialog_css_default = (() => `.-base-acc-sdk-css-reset{-webkit-font-smoothing:antialiased;pointer-events:auto !important}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-container *{user-select:none;box-sizing:border-box}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:20px}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-backdrop{align-items:flex-end;justify-content:stretch;padding:0}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog{position:relative;z-index:2147483648}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog{width:100%}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance{background:#fff;border-radius:12px;box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);width:380px;max-height:90vh;overflow:hidden;transform:scale(0.95);opacity:0;transition:all .2s ease-in-out}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance{touch-action:pan-y;user-select:none}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-hidden{transform:scale(0.9);opacity:0}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-hidden{transform:translateY(100%)}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance:not(.-base-acc-sdk-dialog-instance-hidden){transform:scale(1);opacity:1}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance:not(.-base-acc-sdk-dialog-instance-hidden){transform:translateY(0)}}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance{width:100%;max-width:100%;border-radius:20px 20px 0 0;box-shadow:0 -10px 25px rgba(0,0,0,.15);max-height:80vh;transform:translateY(0)}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-hidden{transform:translateY(100%);opacity:1}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance:not(.-base-acc-sdk-dialog-instance-hidden){transform:translateY(0);opacity:1}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 0 20px}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header{padding:16px 20px 12px 20px}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-icon-and-title{display:flex;align-items:center;gap:8px}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-icon-and-title-title{font-family:"BaseSans-Regular",sans-serif;font-size:14px;font-weight:400;color:#5b616e}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-cblogo{width:32px;height:32px}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-close{display:flex;align-items:center;justify-content:center;width:32px;height:32px;cursor:pointer;border-radius:6px;transition:background-color .2s}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-close:hover{background-color:#f5f7f8}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-close-icon{width:14px;height:14px}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-header-close-icon{display:none}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-content{padding:20px 20px 16px 20px;font-family:"BaseSans-Regular",sans-serif}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-content{padding:8px 20px 12px 20px}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-content-title{font-size:20px;font-weight:600;line-height:28px;color:#0a0b0d;margin-bottom:10px}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-content-message{font-size:16px;font-weight:400;line-height:24px;color:#5b616e;margin-bottom:0}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-actions{display:flex;padding:16px 20px 20px 20px;flex-direction:column}@media(max-width: 600px)and (orientation: portrait){.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-actions{padding:16px 20px calc(20px + env(safe-area-inset-bottom)) 20px;gap:6px}}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button{font-family:"BaseSans-Regular",sans-serif;font-size:16px;font-weight:500;line-height:24px;border:none;border-radius:12px;padding:16px 24px;cursor:pointer;transition:all .2s ease-in-out;width:100%;margin:4px 0}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button:disabled{opacity:.5;cursor:not-allowed}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-primary{background-color:#0a0b0d;color:#fff}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-primary:hover:not(:disabled){background-color:#1c1e20}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-primary:active:not(:disabled){background-color:#2a2d31}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-secondary{background-color:#eef0f3;color:#0a0b0d}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-secondary:hover:not(:disabled){background-color:#e1e4e8}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-instance-button-secondary:active:not(:disabled){background-color:#d4d8dd}.-base-acc-sdk-css-reset .-base-acc-sdk-dialog-handle-bar{position:absolute;top:-16px;left:50%;transform:translateX(-50%);width:64px;height:4px;background-color:#d1d5db;border-radius:2px;opacity:0;animation:handleBarFadeIn .2s ease-in-out .2s forwards}@keyframes handleBarFadeIn{from{opacity:0}to{opacity:1}}`)();
init_preact_module();
var closeIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzIDFMMSAxM20wLTEyTDEzIDEzIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+`;
function isPhonePortrait() {
	return window.innerWidth <= 600 && window.innerHeight > window.innerWidth;
}
var DialogHandleBar = () => {
	const [showHandleBar, setShowHandleBar] = h(false);
	y(() => {
		const checkOrientation = () => {
			setShowHandleBar(isPhonePortrait());
		};
		checkOrientation();
		window.addEventListener("resize", checkOrientation);
		window.addEventListener("orientationchange", checkOrientation);
		return () => {
			window.removeEventListener("resize", checkOrientation);
			window.removeEventListener("orientationchange", checkOrientation);
		};
	}, []);
	if (!showHandleBar) return null;
	return u("div", { class: "-base-acc-sdk-dialog-handle-bar" });
};
var Dialog = class {
	constructor() {
		this.items = /* @__PURE__ */ new Map();
		this.nextItemKey = 0;
		this.root = null;
	}
	attach(el) {
		this.root = document.createElement("div");
		this.root.className = "-base-acc-sdk-dialog-root";
		el.appendChild(this.root);
		this.render();
	}
	presentItem(itemProps) {
		const key = this.nextItemKey++;
		this.items.set(key, itemProps);
		this.render();
	}
	clear() {
		this.items.clear();
		if (this.root) B(null, this.root);
	}
	render() {
		if (this.root) B(u("div", { children: u(DialogContainer, { children: Array.from(this.items.entries()).map(([key, itemProps]) => _(DialogInstance, Object.assign({}, itemProps, {
			key,
			handleClose: () => {
				var _a;
				this.clear();
				(_a = itemProps.onClose) === null || _a === void 0 || _a.call(itemProps);
			}
		}))) }) }), this.root);
	}
};
const DialogContainer = (props) => {
	const [dragY, setDragY] = h(0);
	const [isDragging, setIsDragging] = h(false);
	const [startY, setStartY] = h(0);
	const handleTouchStart = (e) => {
		if (!isPhonePortrait()) return;
		const touch = e.touches[0];
		setStartY(touch.clientY);
		setIsDragging(true);
	};
	const handleTouchMove = (e) => {
		if (!isDragging) return;
		const deltaY = e.touches[0].clientY - startY;
		if (deltaY > 0) {
			setDragY(deltaY);
			e.preventDefault();
		}
	};
	const handleTouchEnd = () => {
		if (!isDragging) return;
		setIsDragging(false);
		if (dragY > 100) {
			const closeButton = document.querySelector(".-base-acc-sdk-dialog-instance-header-close");
			if (closeButton) closeButton.click();
		} else setDragY(0);
	};
	return u("div", {
		class: clsx("-base-acc-sdk-dialog-container"),
		children: [u("style", { children: Dialog_css_default }), u("div", {
			class: "-base-acc-sdk-dialog-backdrop",
			onTouchStart: handleTouchStart,
			onTouchMove: handleTouchMove,
			onTouchEnd: handleTouchEnd,
			children: u("div", {
				class: "-base-acc-sdk-dialog",
				style: {
					transform: `translateY(${dragY}px)`,
					transition: isDragging ? "none" : "transform 0.2s ease-out"
				},
				children: [u(DialogHandleBar, {}), props.children]
			})
		})]
	});
};
const DialogInstance = ({ title, message, actionItems, handleClose }) => {
	const [hidden, setHidden] = h(true);
	const [isLoadingUsername, setIsLoadingUsername] = h(true);
	const [username, setUsername] = h(null);
	y(() => {
		const timer = window.setTimeout(() => {
			setHidden(false);
		}, 1);
		return () => {
			window.clearTimeout(timer);
		};
	}, []);
	y(() => {
		const fetchEnsName = async () => {
			var _a;
			const address = (_a = store.account.get().accounts) === null || _a === void 0 ? void 0 : _a[0];
			if (address) {
				const username$1 = await getDisplayableUsername(address);
				setUsername(username$1);
			}
			setIsLoadingUsername(false);
		};
		fetchEnsName();
	}, []);
	const headerTitle = T(() => {
		return username ? `Signed in as ${username}` : "Base Account";
	}, [username]);
	const shouldShowHeaderTitle = !isLoadingUsername;
	return u("div", {
		class: clsx("-base-acc-sdk-dialog-instance", hidden && "-base-acc-sdk-dialog-instance-hidden"),
		children: [
			u("div", {
				class: "-base-acc-sdk-dialog-instance-header",
				children: [u("div", {
					class: "-base-acc-sdk-dialog-instance-header-icon-and-title",
					children: [u(BaseLogo, { fill: "blue" }), shouldShowHeaderTitle && u("div", {
						class: "-base-acc-sdk-dialog-instance-header-icon-and-title-title",
						children: headerTitle
					})]
				}), u("div", {
					class: "-base-acc-sdk-dialog-instance-header-close",
					onClick: handleClose,
					children: u("img", {
						src: closeIcon,
						class: "-base-acc-sdk-dialog-instance-header-close-icon"
					})
				})]
			}),
			u("div", {
				class: "-base-acc-sdk-dialog-instance-content",
				children: [u("div", {
					class: "-base-acc-sdk-dialog-instance-content-title",
					children: title
				}), u("div", {
					class: "-base-acc-sdk-dialog-instance-content-message",
					children: message
				})]
			}),
			actionItems && actionItems.length > 0 && u("div", {
				class: "-base-acc-sdk-dialog-instance-actions",
				children: actionItems.map((action, i$1) => u("button", {
					class: clsx("-base-acc-sdk-dialog-instance-button", action.variant === "primary" && "-base-acc-sdk-dialog-instance-button-primary", action.variant === "secondary" && "-base-acc-sdk-dialog-instance-button-secondary"),
					onClick: action.onClick,
					children: action.text
				}, i$1))
			})
		]
	});
};
var dialog = null;
function initDialog() {
	if (!dialog) {
		const root = document.createElement("div");
		root.className = "-base-acc-sdk-css-reset";
		document.body.appendChild(root);
		dialog = new Dialog();
		dialog.attach(root);
	}
	injectFontStyle();
	return dialog;
}
var POPUP_BLOCKED_TITLE = "{app} wants to continue in Base Account";
var POPUP_BLOCKED_MESSAGE = "This action requires your permission to open a new window.";
function openPopup(url) {
	const left = (window.innerWidth - 420) / 2 + window.screenX;
	const top = (window.innerHeight - 700) / 2 + window.screenY;
	appendAppInfoQueryParams(url);
	function tryOpenPopup() {
		const popupId = `wallet_${crypto.randomUUID()}`;
		const popup$1 = window.open(url, popupId, `width=420, height=700, left=${left}, top=${top}`);
		popup$1 === null || popup$1 === void 0 || popup$1.focus();
		if (!popup$1) return null;
		return popup$1;
	}
	const popup = tryOpenPopup();
	if (!popup) return openPopupWithDialog(tryOpenPopup);
	return Promise.resolve(popup);
}
function closePopup(popup) {
	if (popup && !popup.closed) popup.close();
}
function appendAppInfoQueryParams(url) {
	const params = {
		sdkName: PACKAGE_NAME,
		sdkVersion: PACKAGE_VERSION,
		origin: window.location.origin,
		coop: getCrossOriginOpenerPolicy()
	};
	for (const [key, value] of Object.entries(params)) if (!url.searchParams.has(key)) url.searchParams.append(key, value.toString());
}
function openPopupWithDialog(tryOpenPopup) {
	var _a, _b;
	const dappName = (_b = (_a = store.config.get().metadata) === null || _a === void 0 ? void 0 : _a.appName) !== null && _b !== void 0 ? _b : "App";
	const dialog$1 = initDialog();
	return new Promise((resolve, reject) => {
		logDialogShown({ dialogContext: "popup_blocked" });
		dialog$1.presentItem({
			title: POPUP_BLOCKED_TITLE.replace("{app}", dappName),
			message: POPUP_BLOCKED_MESSAGE,
			onClose: () => {
				logDialogActionClicked({
					dialogContext: "popup_blocked",
					dialogAction: "cancel"
				});
				reject(standardErrors.rpc.internal("Popup window was blocked"));
			},
			actionItems: [{
				text: "Try again",
				variant: "primary",
				onClick: () => {
					logDialogActionClicked({
						dialogContext: "popup_blocked",
						dialogAction: "confirm"
					});
					const popup = tryOpenPopup();
					if (popup) resolve(popup);
					else reject(standardErrors.rpc.internal("Popup window was blocked"));
					dialog$1.clear();
				}
			}, {
				text: "Cancel",
				variant: "secondary",
				onClick: () => {
					logDialogActionClicked({
						dialogContext: "popup_blocked",
						dialogAction: "cancel"
					});
					reject(standardErrors.rpc.internal("Popup window was blocked"));
					dialog$1.clear();
				}
			}]
		});
	});
}
var Communicator = class {
	constructor({ url = CB_KEYS_URL, metadata, preference }) {
		this.popup = null;
		this.listeners = /* @__PURE__ */ new Map();
		this.postMessage = async (message) => {
			(await this.waitForPopupLoaded()).postMessage(message, this.url.origin);
		};
		this.postRequestAndWaitForResponse = async (request) => {
			const responsePromise = this.onMessage(({ requestId }) => requestId === request.id);
			this.postMessage(request);
			return await responsePromise;
		};
		this.onMessage = async (predicate) => {
			return new Promise((resolve, reject) => {
				const listener = (event) => {
					if (event.origin !== this.url.origin) return;
					const message = event.data;
					if (predicate(message)) {
						resolve(message);
						window.removeEventListener("message", listener);
						this.listeners.delete(listener);
					}
				};
				window.addEventListener("message", listener);
				this.listeners.set(listener, { reject });
			});
		};
		this.disconnect = () => {
			closePopup(this.popup);
			this.popup = null;
			this.listeners.forEach(({ reject }, listener) => {
				reject(standardErrors.provider.userRejectedRequest("Request rejected"));
				window.removeEventListener("message", listener);
			});
			this.listeners.clear();
		};
		this.waitForPopupLoaded = async () => {
			if (this.popup && !this.popup.closed) {
				this.popup.focus();
				return this.popup;
			}
			logPopupSetupStarted();
			this.popup = await openPopup(this.url);
			this.onMessage(({ event }) => event === "PopupUnload").then(() => {
				this.disconnect();
				logPopupUnloadReceived();
			}).catch(() => {});
			return this.onMessage(({ event }) => event === "PopupLoaded").then((message) => {
				this.postMessage({
					requestId: message.id,
					data: {
						version: PACKAGE_VERSION,
						sdkName: PACKAGE_NAME,
						metadata: this.metadata,
						preference: this.preference,
						location: window.location.toString()
					}
				});
			}).then(() => {
				if (!this.popup) throw standardErrors.rpc.internal();
				logPopupSetupCompleted();
				return this.popup;
			});
		};
		this.url = new URL(url);
		this.metadata = metadata;
		this.preference = preference;
	}
};
function serializeError(error) {
	const serialized = serialize(getErrorObject(error), { shouldIncludeStack: true });
	const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
	docUrl.searchParams.set("version", PACKAGE_VERSION);
	docUrl.searchParams.set("code", serialized.code.toString());
	docUrl.searchParams.set("message", serialized.message);
	return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
}
function isErrorResponse(response) {
	return response.errorMessage !== void 0;
}
function getErrorObject(error) {
	var _a;
	if (typeof error === "string") return {
		message: error,
		code: standardErrorCodes.rpc.internal
	};
	if (isErrorResponse(error)) {
		const message = error.errorMessage;
		const code = (_a = error.errorCode) !== null && _a !== void 0 ? _a : message.match(/(denied|rejected)/i) ? standardErrorCodes.provider.userRejectedRequest : void 0;
		return Object.assign(Object.assign({}, error), {
			message,
			code,
			data: { method: error.method }
		});
	}
	return error;
}
var ProviderEventEmitter = class extends import_eventemitter3.default {};
const logRequestStarted = ({ method, correlationId }) => {
	logEvent("provider.request.started", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		signerType: "base-account",
		correlationId
	}, AnalyticsEventImportance.high);
};
const logRequestError = ({ method, correlationId, errorMessage }) => {
	logEvent("provider.request.error", {
		action: ActionType.error,
		componentType: ComponentType.unknown,
		method,
		signerType: "base-account",
		correlationId,
		errorMessage
	}, AnalyticsEventImportance.high);
};
const logRequestResponded = ({ method, correlationId }) => {
	logEvent("provider.request.responded", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		signerType: "base-account",
		correlationId
	}, AnalyticsEventImportance.high);
};
function OpaqueType() {
	return (value) => value;
}
const HexString = OpaqueType();
OpaqueType();
function IntNumber(num) {
	return Math.floor(num);
}
OpaqueType();
var INT_STRING_REGEX = /^[0-9]*$/;
var HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
function uint8ArrayToHex(value) {
	return [...value].map((b$1) => b$1.toString(16).padStart(2, "0")).join("");
}
function hexStringToUint8Array(hexString) {
	return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16)));
}
function hexStringFromNumber(num) {
	return HexString(`0x${BigInt(num).toString(16)}`);
}
function has0xPrefix(str) {
	return str.startsWith("0x") || str.startsWith("0X");
}
function strip0x(hex) {
	if (has0xPrefix(hex)) return hex.slice(2);
	return hex;
}
function isHexString(hex) {
	if (typeof hex !== "string") return false;
	const s = strip0x(hex).toLowerCase();
	return HEXADECIMAL_STRING_REGEX.test(s);
}
function ensureHexString(hex, includePrefix = false) {
	if (typeof hex === "string") {
		const s = strip0x(hex).toLowerCase();
		if (HEXADECIMAL_STRING_REGEX.test(s)) return HexString(includePrefix ? `0x${s}` : s);
	}
	throw standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
function ensureEvenLengthHexString(hex, includePrefix = false) {
	let h$1 = ensureHexString(hex, false);
	if (h$1.length % 2 === 1) h$1 = HexString(`0${h$1}`);
	return includePrefix ? HexString(`0x${h$1}`) : h$1;
}
function ensureIntNumber(num) {
	if (typeof num === "number" && Number.isInteger(num)) return IntNumber(num);
	if (typeof num === "string") {
		if (INT_STRING_REGEX.test(num)) return IntNumber(Number(num));
		if (isHexString(num)) return IntNumber(Number(BigInt(ensureEvenLengthHexString(num, true))));
	}
	throw standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
const logHandshakeStarted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_signer.handshake.started", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logHandshakeError = ({ method, correlationId, errorMessage }) => {
	var _a;
	logEvent("scw_signer.handshake.error", {
		action: ActionType.error,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		errorMessage,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logHandshakeCompleted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_signer.handshake.completed", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logRequestStarted$1 = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_signer.request.started", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logRequestError$1 = ({ method, correlationId, errorMessage }) => {
	var _a;
	logEvent("scw_signer.request.error", {
		action: ActionType.error,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		errorMessage,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logRequestCompleted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_signer.request.completed", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logSubAccountRequestStarted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_sub_account.request.started", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logSubAccountRequestCompleted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_sub_account.request.completed", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logSubAccountRequestError = ({ method, correlationId, errorMessage }) => {
	var _a;
	logEvent("scw_sub_account.request.error", {
		action: ActionType.error,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		errorMessage,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logAddOwnerStarted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_sub_account.add_owner.started", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logAddOwnerCompleted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_sub_account.add_owner.completed", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logAddOwnerError = ({ method, correlationId, errorMessage }) => {
	var _a;
	logEvent("scw_sub_account.add_owner.error", {
		action: ActionType.error,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		errorMessage,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingStarted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_sub_account.insufficient_balance.error_handling.started", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingCompleted = ({ method, correlationId }) => {
	var _a;
	logEvent("scw_sub_account.insufficient_balance.error_handling.completed", {
		action: ActionType.unknown,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingError = ({ method, correlationId, errorMessage }) => {
	var _a;
	logEvent("scw_sub_account.insufficient_balance.error_handling.error", {
		action: ActionType.error,
		componentType: ComponentType.unknown,
		method,
		correlationId,
		errorMessage,
		enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
	}, AnalyticsEventImportance.high);
};
const parseErrorMessageFromAny = (errorOrAny) => {
	return "message" in errorOrAny && typeof errorOrAny.message === "string" ? errorOrAny.message : "";
};
const entryPoint06Abi = [
	{
		inputs: [
			{
				name: "preOpGas",
				type: "uint256"
			},
			{
				name: "paid",
				type: "uint256"
			},
			{
				name: "validAfter",
				type: "uint48"
			},
			{
				name: "validUntil",
				type: "uint48"
			},
			{
				name: "targetSuccess",
				type: "bool"
			},
			{
				name: "targetResult",
				type: "bytes"
			}
		],
		name: "ExecutionResult",
		type: "error"
	},
	{
		inputs: [{
			name: "opIndex",
			type: "uint256"
		}, {
			name: "reason",
			type: "string"
		}],
		name: "FailedOp",
		type: "error"
	},
	{
		inputs: [{
			name: "sender",
			type: "address"
		}],
		name: "SenderAddressResult",
		type: "error"
	},
	{
		inputs: [{
			name: "aggregator",
			type: "address"
		}],
		name: "SignatureValidationFailed",
		type: "error"
	},
	{
		inputs: [
			{
				components: [
					{
						name: "preOpGas",
						type: "uint256"
					},
					{
						name: "prefund",
						type: "uint256"
					},
					{
						name: "sigFailed",
						type: "bool"
					},
					{
						name: "validAfter",
						type: "uint48"
					},
					{
						name: "validUntil",
						type: "uint48"
					},
					{
						name: "paymasterContext",
						type: "bytes"
					}
				],
				name: "returnInfo",
				type: "tuple"
			},
			{
				components: [{
					name: "stake",
					type: "uint256"
				}, {
					name: "unstakeDelaySec",
					type: "uint256"
				}],
				name: "senderInfo",
				type: "tuple"
			},
			{
				components: [{
					name: "stake",
					type: "uint256"
				}, {
					name: "unstakeDelaySec",
					type: "uint256"
				}],
				name: "factoryInfo",
				type: "tuple"
			},
			{
				components: [{
					name: "stake",
					type: "uint256"
				}, {
					name: "unstakeDelaySec",
					type: "uint256"
				}],
				name: "paymasterInfo",
				type: "tuple"
			}
		],
		name: "ValidationResult",
		type: "error"
	},
	{
		inputs: [
			{
				components: [
					{
						name: "preOpGas",
						type: "uint256"
					},
					{
						name: "prefund",
						type: "uint256"
					},
					{
						name: "sigFailed",
						type: "bool"
					},
					{
						name: "validAfter",
						type: "uint48"
					},
					{
						name: "validUntil",
						type: "uint48"
					},
					{
						name: "paymasterContext",
						type: "bytes"
					}
				],
				name: "returnInfo",
				type: "tuple"
			},
			{
				components: [{
					name: "stake",
					type: "uint256"
				}, {
					name: "unstakeDelaySec",
					type: "uint256"
				}],
				name: "senderInfo",
				type: "tuple"
			},
			{
				components: [{
					name: "stake",
					type: "uint256"
				}, {
					name: "unstakeDelaySec",
					type: "uint256"
				}],
				name: "factoryInfo",
				type: "tuple"
			},
			{
				components: [{
					name: "stake",
					type: "uint256"
				}, {
					name: "unstakeDelaySec",
					type: "uint256"
				}],
				name: "paymasterInfo",
				type: "tuple"
			},
			{
				components: [{
					name: "aggregator",
					type: "address"
				}, {
					components: [{
						name: "stake",
						type: "uint256"
					}, {
						name: "unstakeDelaySec",
						type: "uint256"
					}],
					name: "stakeInfo",
					type: "tuple"
				}],
				name: "aggregatorInfo",
				type: "tuple"
			}
		],
		name: "ValidationResultWithAggregation",
		type: "error"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "userOpHash",
				type: "bytes32"
			},
			{
				indexed: true,
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				name: "factory",
				type: "address"
			},
			{
				indexed: false,
				name: "paymaster",
				type: "address"
			}
		],
		name: "AccountDeployed",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [],
		name: "BeforeExecution",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [{
			indexed: true,
			name: "account",
			type: "address"
		}, {
			indexed: false,
			name: "totalDeposit",
			type: "uint256"
		}],
		name: "Deposited",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [{
			indexed: true,
			name: "aggregator",
			type: "address"
		}],
		name: "SignatureAggregatorChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "account",
				type: "address"
			},
			{
				indexed: false,
				name: "totalStaked",
				type: "uint256"
			},
			{
				indexed: false,
				name: "unstakeDelaySec",
				type: "uint256"
			}
		],
		name: "StakeLocked",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [{
			indexed: true,
			name: "account",
			type: "address"
		}, {
			indexed: false,
			name: "withdrawTime",
			type: "uint256"
		}],
		name: "StakeUnlocked",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "account",
				type: "address"
			},
			{
				indexed: false,
				name: "withdrawAddress",
				type: "address"
			},
			{
				indexed: false,
				name: "amount",
				type: "uint256"
			}
		],
		name: "StakeWithdrawn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "userOpHash",
				type: "bytes32"
			},
			{
				indexed: true,
				name: "sender",
				type: "address"
			},
			{
				indexed: true,
				name: "paymaster",
				type: "address"
			},
			{
				indexed: false,
				name: "nonce",
				type: "uint256"
			},
			{
				indexed: false,
				name: "success",
				type: "bool"
			},
			{
				indexed: false,
				name: "actualGasCost",
				type: "uint256"
			},
			{
				indexed: false,
				name: "actualGasUsed",
				type: "uint256"
			}
		],
		name: "UserOperationEvent",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "userOpHash",
				type: "bytes32"
			},
			{
				indexed: true,
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				name: "nonce",
				type: "uint256"
			},
			{
				indexed: false,
				name: "revertReason",
				type: "bytes"
			}
		],
		name: "UserOperationRevertReason",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "account",
				type: "address"
			},
			{
				indexed: false,
				name: "withdrawAddress",
				type: "address"
			},
			{
				indexed: false,
				name: "amount",
				type: "uint256"
			}
		],
		name: "Withdrawn",
		type: "event"
	},
	{
		inputs: [],
		name: "SIG_VALIDATION_FAILED",
		outputs: [{
			name: "",
			type: "uint256"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				name: "initCode",
				type: "bytes"
			},
			{
				name: "sender",
				type: "address"
			},
			{
				name: "paymasterAndData",
				type: "bytes"
			}
		],
		name: "_validateSenderAndPaymaster",
		outputs: [],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "unstakeDelaySec",
			type: "uint32"
		}],
		name: "addStake",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [{
			name: "account",
			type: "address"
		}],
		name: "balanceOf",
		outputs: [{
			name: "",
			type: "uint256"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "account",
			type: "address"
		}],
		name: "depositTo",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [{
			name: "",
			type: "address"
		}],
		name: "deposits",
		outputs: [
			{
				name: "deposit",
				type: "uint112"
			},
			{
				name: "staked",
				type: "bool"
			},
			{
				name: "stake",
				type: "uint112"
			},
			{
				name: "unstakeDelaySec",
				type: "uint32"
			},
			{
				name: "withdrawTime",
				type: "uint48"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "account",
			type: "address"
		}],
		name: "getDepositInfo",
		outputs: [{
			components: [
				{
					name: "deposit",
					type: "uint112"
				},
				{
					name: "staked",
					type: "bool"
				},
				{
					name: "stake",
					type: "uint112"
				},
				{
					name: "unstakeDelaySec",
					type: "uint32"
				},
				{
					name: "withdrawTime",
					type: "uint48"
				}
			],
			name: "info",
			type: "tuple"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "sender",
			type: "address"
		}, {
			name: "key",
			type: "uint192"
		}],
		name: "getNonce",
		outputs: [{
			name: "nonce",
			type: "uint256"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			name: "initCode",
			type: "bytes"
		}],
		name: "getSenderAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			components: [
				{
					name: "sender",
					type: "address"
				},
				{
					name: "nonce",
					type: "uint256"
				},
				{
					name: "initCode",
					type: "bytes"
				},
				{
					name: "callData",
					type: "bytes"
				},
				{
					name: "callGasLimit",
					type: "uint256"
				},
				{
					name: "verificationGasLimit",
					type: "uint256"
				},
				{
					name: "preVerificationGas",
					type: "uint256"
				},
				{
					name: "maxFeePerGas",
					type: "uint256"
				},
				{
					name: "maxPriorityFeePerGas",
					type: "uint256"
				},
				{
					name: "paymasterAndData",
					type: "bytes"
				},
				{
					name: "signature",
					type: "bytes"
				}
			],
			name: "userOp",
			type: "tuple"
		}],
		name: "getUserOpHash",
		outputs: [{
			name: "",
			type: "bytes32"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{
			components: [
				{
					components: [
						{
							name: "sender",
							type: "address"
						},
						{
							name: "nonce",
							type: "uint256"
						},
						{
							name: "initCode",
							type: "bytes"
						},
						{
							name: "callData",
							type: "bytes"
						},
						{
							name: "callGasLimit",
							type: "uint256"
						},
						{
							name: "verificationGasLimit",
							type: "uint256"
						},
						{
							name: "preVerificationGas",
							type: "uint256"
						},
						{
							name: "maxFeePerGas",
							type: "uint256"
						},
						{
							name: "maxPriorityFeePerGas",
							type: "uint256"
						},
						{
							name: "paymasterAndData",
							type: "bytes"
						},
						{
							name: "signature",
							type: "bytes"
						}
					],
					name: "userOps",
					type: "tuple[]"
				},
				{
					name: "aggregator",
					type: "address"
				},
				{
					name: "signature",
					type: "bytes"
				}
			],
			name: "opsPerAggregator",
			type: "tuple[]"
		}, {
			name: "beneficiary",
			type: "address"
		}],
		name: "handleAggregatedOps",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			components: [
				{
					name: "sender",
					type: "address"
				},
				{
					name: "nonce",
					type: "uint256"
				},
				{
					name: "initCode",
					type: "bytes"
				},
				{
					name: "callData",
					type: "bytes"
				},
				{
					name: "callGasLimit",
					type: "uint256"
				},
				{
					name: "verificationGasLimit",
					type: "uint256"
				},
				{
					name: "preVerificationGas",
					type: "uint256"
				},
				{
					name: "maxFeePerGas",
					type: "uint256"
				},
				{
					name: "maxPriorityFeePerGas",
					type: "uint256"
				},
				{
					name: "paymasterAndData",
					type: "bytes"
				},
				{
					name: "signature",
					type: "bytes"
				}
			],
			name: "ops",
			type: "tuple[]"
		}, {
			name: "beneficiary",
			type: "address"
		}],
		name: "handleOps",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			name: "key",
			type: "uint192"
		}],
		name: "incrementNonce",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				name: "callData",
				type: "bytes"
			},
			{
				components: [
					{
						components: [
							{
								name: "sender",
								type: "address"
							},
							{
								name: "nonce",
								type: "uint256"
							},
							{
								name: "callGasLimit",
								type: "uint256"
							},
							{
								name: "verificationGasLimit",
								type: "uint256"
							},
							{
								name: "preVerificationGas",
								type: "uint256"
							},
							{
								name: "paymaster",
								type: "address"
							},
							{
								name: "maxFeePerGas",
								type: "uint256"
							},
							{
								name: "maxPriorityFeePerGas",
								type: "uint256"
							}
						],
						name: "mUserOp",
						type: "tuple"
					},
					{
						name: "userOpHash",
						type: "bytes32"
					},
					{
						name: "prefund",
						type: "uint256"
					},
					{
						name: "contextOffset",
						type: "uint256"
					},
					{
						name: "preOpGas",
						type: "uint256"
					}
				],
				name: "opInfo",
				type: "tuple"
			},
			{
				name: "context",
				type: "bytes"
			}
		],
		name: "innerHandleOp",
		outputs: [{
			name: "actualGasCost",
			type: "uint256"
		}],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			name: "",
			type: "address"
		}, {
			name: "",
			type: "uint192"
		}],
		name: "nonceSequenceNumber",
		outputs: [{
			name: "",
			type: "uint256"
		}],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						name: "sender",
						type: "address"
					},
					{
						name: "nonce",
						type: "uint256"
					},
					{
						name: "initCode",
						type: "bytes"
					},
					{
						name: "callData",
						type: "bytes"
					},
					{
						name: "callGasLimit",
						type: "uint256"
					},
					{
						name: "verificationGasLimit",
						type: "uint256"
					},
					{
						name: "preVerificationGas",
						type: "uint256"
					},
					{
						name: "maxFeePerGas",
						type: "uint256"
					},
					{
						name: "maxPriorityFeePerGas",
						type: "uint256"
					},
					{
						name: "paymasterAndData",
						type: "bytes"
					},
					{
						name: "signature",
						type: "bytes"
					}
				],
				name: "op",
				type: "tuple"
			},
			{
				name: "target",
				type: "address"
			},
			{
				name: "targetCallData",
				type: "bytes"
			}
		],
		name: "simulateHandleOp",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			components: [
				{
					name: "sender",
					type: "address"
				},
				{
					name: "nonce",
					type: "uint256"
				},
				{
					name: "initCode",
					type: "bytes"
				},
				{
					name: "callData",
					type: "bytes"
				},
				{
					name: "callGasLimit",
					type: "uint256"
				},
				{
					name: "verificationGasLimit",
					type: "uint256"
				},
				{
					name: "preVerificationGas",
					type: "uint256"
				},
				{
					name: "maxFeePerGas",
					type: "uint256"
				},
				{
					name: "maxPriorityFeePerGas",
					type: "uint256"
				},
				{
					name: "paymasterAndData",
					type: "bytes"
				},
				{
					name: "signature",
					type: "bytes"
				}
			],
			name: "userOp",
			type: "tuple"
		}],
		name: "simulateValidation",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [],
		name: "unlockStake",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			name: "withdrawAddress",
			type: "address"
		}],
		name: "withdrawStake",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [{
			name: "withdrawAddress",
			type: "address"
		}, {
			name: "withdrawAmount",
			type: "uint256"
		}],
		name: "withdrawTo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	}
];
function getInitCode(userOperation) {
	const { authorization, factory, factoryData } = userOperation;
	if (factory === "0x7702" || factory === "0x7702000000000000000000000000000000000000") {
		if (!authorization) return "0x7702000000000000000000000000000000000000";
		const delegation = authorization.address;
		return concat$1([delegation, factoryData ?? "0x"]);
	}
	if (!factory) return "0x";
	return concat$1([factory, factoryData ?? "0x"]);
}
function toPackedUserOperation(userOperation) {
	const { callGasLimit, callData, maxPriorityFeePerGas, maxFeePerGas, paymaster, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, sender, signature = "0x", verificationGasLimit } = userOperation;
	const accountGasLimits = concat$1([pad(numberToHex(verificationGasLimit || 0n), { size: 16 }), pad(numberToHex(callGasLimit || 0n), { size: 16 })]);
	const initCode = getInitCode(userOperation);
	const gasFees = concat$1([pad(numberToHex(maxPriorityFeePerGas || 0n), { size: 16 }), pad(numberToHex(maxFeePerGas || 0n), { size: 16 })]);
	const nonce = userOperation.nonce ?? 0n;
	const paymasterAndData = paymaster ? concat$1([
		paymaster,
		pad(numberToHex(paymasterVerificationGasLimit || 0n), { size: 16 }),
		pad(numberToHex(paymasterPostOpGasLimit || 0n), { size: 16 }),
		paymasterData || "0x"
	]) : "0x";
	const preVerificationGas = userOperation.preVerificationGas ?? 0n;
	return {
		accountGasLimits,
		callData,
		initCode,
		gasFees,
		nonce,
		paymasterAndData,
		preVerificationGas,
		sender,
		signature
	};
}
var types = { PackedUserOperation: [
	{
		type: "address",
		name: "sender"
	},
	{
		type: "uint256",
		name: "nonce"
	},
	{
		type: "bytes",
		name: "initCode"
	},
	{
		type: "bytes",
		name: "callData"
	},
	{
		type: "bytes32",
		name: "accountGasLimits"
	},
	{
		type: "uint256",
		name: "preVerificationGas"
	},
	{
		type: "bytes32",
		name: "gasFees"
	},
	{
		type: "bytes",
		name: "paymasterAndData"
	}
] };
function getUserOperationTypedData(parameters) {
	const { chainId, entryPointAddress, userOperation } = parameters;
	const packedUserOp = toPackedUserOperation(userOperation);
	return {
		types,
		primaryType: "PackedUserOperation",
		domain: {
			name: "ERC4337",
			version: "1",
			chainId,
			verifyingContract: entryPointAddress
		},
		message: packedUserOp
	};
}
function getUserOperationHash(parameters) {
	const { chainId, entryPointAddress, entryPointVersion } = parameters;
	const userOperation = parameters.userOperation;
	const { authorization, callData = "0x", callGasLimit, maxFeePerGas, maxPriorityFeePerGas, nonce, paymasterAndData = "0x", preVerificationGas, sender, verificationGasLimit } = userOperation;
	if (entryPointVersion === "0.8") return hashTypedData(getUserOperationTypedData({
		chainId,
		entryPointAddress,
		userOperation
	}));
	const packedUserOp = (() => {
		if (entryPointVersion === "0.6") {
			const factory = userOperation.initCode?.slice(0, 42);
			const factoryData = userOperation.initCode?.slice(42);
			const initCode = getInitCode({
				authorization,
				factory,
				factoryData
			});
			return encodeAbiParameters([
				{ type: "address" },
				{ type: "uint256" },
				{ type: "bytes32" },
				{ type: "bytes32" },
				{ type: "uint256" },
				{ type: "uint256" },
				{ type: "uint256" },
				{ type: "uint256" },
				{ type: "uint256" },
				{ type: "bytes32" }
			], [
				sender,
				nonce,
				keccak256(initCode),
				keccak256(callData),
				callGasLimit,
				verificationGasLimit,
				preVerificationGas,
				maxFeePerGas,
				maxPriorityFeePerGas,
				keccak256(paymasterAndData)
			]);
		}
		if (entryPointVersion === "0.7") {
			const packedUserOp$1 = toPackedUserOperation(userOperation);
			return encodeAbiParameters([
				{ type: "address" },
				{ type: "uint256" },
				{ type: "bytes32" },
				{ type: "bytes32" },
				{ type: "bytes32" },
				{ type: "uint256" },
				{ type: "bytes32" },
				{ type: "bytes32" }
			], [
				packedUserOp$1.sender,
				packedUserOp$1.nonce,
				keccak256(packedUserOp$1.initCode),
				keccak256(packedUserOp$1.callData),
				packedUserOp$1.accountGasLimits,
				packedUserOp$1.preVerificationGas,
				packedUserOp$1.gasFees,
				keccak256(packedUserOp$1.paymasterAndData)
			]);
		}
		throw new Error(`entryPointVersion "${entryPointVersion}" not supported.`);
	})();
	return keccak256(encodeAbiParameters([
		{ type: "bytes32" },
		{ type: "address" },
		{ type: "uint256" }
	], [
		keccak256(packedUserOp),
		entryPointAddress,
		BigInt(chainId)
	]));
}
async function toSmartAccount(implementation) {
	const { extend, nonceKeyManager = createNonceManager({ source: {
		get() {
			return Date.now();
		},
		set() {}
	} }),...rest } = implementation;
	let deployed = false;
	const address = await implementation.getAddress();
	return {
		...extend,
		...rest,
		address,
		async getFactoryArgs() {
			if ("isDeployed" in this && await this.isDeployed()) return {
				factory: void 0,
				factoryData: void 0
			};
			return implementation.getFactoryArgs();
		},
		async getNonce(parameters) {
			const key = parameters?.key ?? BigInt(await nonceKeyManager.consume({
				address,
				chainId: implementation.client.chain.id,
				client: implementation.client
			}));
			if (implementation.getNonce) return await implementation.getNonce({
				...parameters,
				key
			});
			return await readContract(implementation.client, {
				abi: parseAbi(["function getNonce(address, uint192) pure returns (uint256)"]),
				address: implementation.entryPoint.address,
				functionName: "getNonce",
				args: [address, key]
			});
		},
		async isDeployed() {
			if (deployed) return true;
			const code = await getAction(implementation.client, getCode, "getCode")({ address });
			deployed = Boolean(code);
			return deployed;
		},
		...implementation.sign ? { async sign(parameters) {
			const [{ factory, factoryData }, signature] = await Promise.all([this.getFactoryArgs(), implementation.sign(parameters)]);
			if (factory && factoryData) return serializeErc6492Signature({
				address: factory,
				data: factoryData,
				signature
			});
			return signature;
		} } : {},
		async signMessage(parameters) {
			const [{ factory, factoryData }, signature] = await Promise.all([this.getFactoryArgs(), implementation.signMessage(parameters)]);
			if (factory && factoryData && factory !== "0x7702") return serializeErc6492Signature({
				address: factory,
				data: factoryData,
				signature
			});
			return signature;
		},
		async signTypedData(parameters) {
			const [{ factory, factoryData }, signature] = await Promise.all([this.getFactoryArgs(), implementation.signTypedData(parameters)]);
			if (factory && factoryData && factory !== "0x7702") return serializeErc6492Signature({
				address: factory,
				data: factoryData,
				signature
			});
			return signature;
		},
		type: "smart"
	};
}
var AccountNotDeployedError = class extends BaseError {
	constructor({ cause }) {
		super("Smart Account is not deployed.", {
			cause,
			metaMessages: [
				"This could arise when:",
				"- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.",
				"- An incorrect `sender` address is provided."
			],
			name: "AccountNotDeployedError"
		});
	}
};
Object.defineProperty(AccountNotDeployedError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa20/
});
var ExecutionRevertedError = class extends BaseError {
	constructor({ cause, data, message } = {}) {
		const reason = message?.replace("execution reverted: ", "")?.replace("execution reverted", "");
		super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
			cause,
			name: "ExecutionRevertedError"
		});
		Object.defineProperty(this, "data", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.data = data;
	}
};
Object.defineProperty(ExecutionRevertedError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32521
});
Object.defineProperty(ExecutionRevertedError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /execution reverted/
});
var FailedToSendToBeneficiaryError = class extends BaseError {
	constructor({ cause }) {
		super("Failed to send funds to beneficiary.", {
			cause,
			name: "FailedToSendToBeneficiaryError"
		});
	}
};
Object.defineProperty(FailedToSendToBeneficiaryError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa91/
});
var GasValuesOverflowError = class extends BaseError {
	constructor({ cause }) {
		super("Gas value overflowed.", {
			cause,
			metaMessages: ["This could arise when:", "- one of the gas values exceeded 2**120 (uint120)"].filter(Boolean),
			name: "GasValuesOverflowError"
		});
	}
};
Object.defineProperty(GasValuesOverflowError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa94/
});
var HandleOpsOutOfGasError = class extends BaseError {
	constructor({ cause }) {
		super("The `handleOps` function was called by the Bundler with a gas limit too low.", {
			cause,
			name: "HandleOpsOutOfGasError"
		});
	}
};
Object.defineProperty(HandleOpsOutOfGasError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa95/
});
var InitCodeFailedError = class extends BaseError {
	constructor({ cause, factory, factoryData, initCode }) {
		super("Failed to simulate deployment for Smart Account.", {
			cause,
			metaMessages: [
				"This could arise when:",
				"- Invalid `factory`/`factoryData` or `initCode` properties are present",
				"- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)",
				"- Smart Account deployment execution reverted with an error\n",
				factory && `factory: ${factory}`,
				factoryData && `factoryData: ${factoryData}`,
				initCode && `initCode: ${initCode}`
			].filter(Boolean),
			name: "InitCodeFailedError"
		});
	}
};
Object.defineProperty(InitCodeFailedError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa13/
});
var InitCodeMustCreateSenderError = class extends BaseError {
	constructor({ cause, factory, factoryData, initCode }) {
		super("Smart Account initialization implementation did not create an account.", {
			cause,
			metaMessages: [
				"This could arise when:",
				"- `factory`/`factoryData` or `initCode` properties are invalid",
				"- Smart Account initialization implementation is incorrect\n",
				factory && `factory: ${factory}`,
				factoryData && `factoryData: ${factoryData}`,
				initCode && `initCode: ${initCode}`
			].filter(Boolean),
			name: "InitCodeMustCreateSenderError"
		});
	}
};
Object.defineProperty(InitCodeMustCreateSenderError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa15/
});
var InitCodeMustReturnSenderError = class extends BaseError {
	constructor({ cause, factory, factoryData, initCode, sender }) {
		super("Smart Account initialization implementation does not return the expected sender.", {
			cause,
			metaMessages: [
				"This could arise when:",
				"Smart Account initialization implementation does not return a sender address\n",
				factory && `factory: ${factory}`,
				factoryData && `factoryData: ${factoryData}`,
				initCode && `initCode: ${initCode}`,
				sender && `sender: ${sender}`
			].filter(Boolean),
			name: "InitCodeMustReturnSenderError"
		});
	}
};
Object.defineProperty(InitCodeMustReturnSenderError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa14/
});
var InsufficientPrefundError = class extends BaseError {
	constructor({ cause }) {
		super("Smart Account does not have sufficient funds to execute the User Operation.", {
			cause,
			metaMessages: [
				"This could arise when:",
				"- the Smart Account does not have sufficient funds to cover the required prefund, or",
				"- a Paymaster was not provided"
			].filter(Boolean),
			name: "InsufficientPrefundError"
		});
	}
};
Object.defineProperty(InsufficientPrefundError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa21/
});
var InternalCallOnlyError = class extends BaseError {
	constructor({ cause }) {
		super("Bundler attempted to call an invalid function on the EntryPoint.", {
			cause,
			name: "InternalCallOnlyError"
		});
	}
};
Object.defineProperty(InternalCallOnlyError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa92/
});
var InvalidAggregatorError = class extends BaseError {
	constructor({ cause }) {
		super("Bundler used an invalid aggregator for handling aggregated User Operations.", {
			cause,
			name: "InvalidAggregatorError"
		});
	}
};
Object.defineProperty(InvalidAggregatorError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa96/
});
var InvalidAccountNonceError = class extends BaseError {
	constructor({ cause, nonce }) {
		super("Invalid Smart Account nonce used for User Operation.", {
			cause,
			metaMessages: [nonce && `nonce: ${nonce}`].filter(Boolean),
			name: "InvalidAccountNonceError"
		});
	}
};
Object.defineProperty(InvalidAccountNonceError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa25/
});
var InvalidBeneficiaryError = class extends BaseError {
	constructor({ cause }) {
		super("Bundler has not set a beneficiary address.", {
			cause,
			name: "InvalidBeneficiaryError"
		});
	}
};
Object.defineProperty(InvalidBeneficiaryError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa90/
});
var InvalidFieldsError = class extends BaseError {
	constructor({ cause }) {
		super("Invalid fields set on User Operation.", {
			cause,
			name: "InvalidFieldsError"
		});
	}
};
Object.defineProperty(InvalidFieldsError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32602
});
var InvalidPaymasterAndDataError = class extends BaseError {
	constructor({ cause, paymasterAndData }) {
		super("Paymaster properties provided are invalid.", {
			cause,
			metaMessages: [
				"This could arise when:",
				"- the `paymasterAndData` property is of an incorrect length\n",
				paymasterAndData && `paymasterAndData: ${paymasterAndData}`
			].filter(Boolean),
			name: "InvalidPaymasterAndDataError"
		});
	}
};
Object.defineProperty(InvalidPaymasterAndDataError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa93/
});
var PaymasterDepositTooLowError = class extends BaseError {
	constructor({ cause }) {
		super("Paymaster deposit for the User Operation is too low.", {
			cause,
			metaMessages: ["This could arise when:", "- the Paymaster has deposited less than the expected amount via the `deposit` function"].filter(Boolean),
			name: "PaymasterDepositTooLowError"
		});
	}
};
Object.defineProperty(PaymasterDepositTooLowError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32508
});
Object.defineProperty(PaymasterDepositTooLowError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa31/
});
var PaymasterFunctionRevertedError = class extends BaseError {
	constructor({ cause }) {
		super("The `validatePaymasterUserOp` function on the Paymaster reverted.", {
			cause,
			name: "PaymasterFunctionRevertedError"
		});
	}
};
Object.defineProperty(PaymasterFunctionRevertedError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa33/
});
var PaymasterNotDeployedError = class extends BaseError {
	constructor({ cause }) {
		super("The Paymaster contract has not been deployed.", {
			cause,
			name: "PaymasterNotDeployedError"
		});
	}
};
Object.defineProperty(PaymasterNotDeployedError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa30/
});
var PaymasterRateLimitError = class extends BaseError {
	constructor({ cause }) {
		super("UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.", {
			cause,
			name: "PaymasterRateLimitError"
		});
	}
};
Object.defineProperty(PaymasterRateLimitError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32504
});
var PaymasterStakeTooLowError = class extends BaseError {
	constructor({ cause }) {
		super("UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.", {
			cause,
			name: "PaymasterStakeTooLowError"
		});
	}
};
Object.defineProperty(PaymasterStakeTooLowError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32505
});
var PaymasterPostOpFunctionRevertedError = class extends BaseError {
	constructor({ cause }) {
		super("Paymaster `postOp` function reverted.", {
			cause,
			name: "PaymasterPostOpFunctionRevertedError"
		});
	}
};
Object.defineProperty(PaymasterPostOpFunctionRevertedError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa50/
});
var SenderAlreadyConstructedError = class extends BaseError {
	constructor({ cause, factory, factoryData, initCode }) {
		super("Smart Account has already been deployed.", {
			cause,
			metaMessages: [
				"Remove the following properties and try again:",
				factory && "`factory`",
				factoryData && "`factoryData`",
				initCode && "`initCode`"
			].filter(Boolean),
			name: "SenderAlreadyConstructedError"
		});
	}
};
Object.defineProperty(SenderAlreadyConstructedError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa10/
});
var SignatureCheckFailedError = class extends BaseError {
	constructor({ cause }) {
		super("UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).", {
			cause,
			name: "SignatureCheckFailedError"
		});
	}
};
Object.defineProperty(SignatureCheckFailedError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32507
});
var SmartAccountFunctionRevertedError = class extends BaseError {
	constructor({ cause }) {
		super("The `validateUserOp` function on the Smart Account reverted.", {
			cause,
			name: "SmartAccountFunctionRevertedError"
		});
	}
};
Object.defineProperty(SmartAccountFunctionRevertedError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa23/
});
var UnsupportedSignatureAggregatorError = class extends BaseError {
	constructor({ cause }) {
		super("UserOperation rejected because account specified unsupported signature aggregator.", {
			cause,
			name: "UnsupportedSignatureAggregatorError"
		});
	}
};
Object.defineProperty(UnsupportedSignatureAggregatorError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32506
});
var UserOperationExpiredError = class extends BaseError {
	constructor({ cause }) {
		super("User Operation expired.", {
			cause,
			metaMessages: ["This could arise when:", "- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied"].filter(Boolean),
			name: "UserOperationExpiredError"
		});
	}
};
Object.defineProperty(UserOperationExpiredError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa22/
});
var UserOperationPaymasterExpiredError = class extends BaseError {
	constructor({ cause }) {
		super("Paymaster for User Operation expired.", {
			cause,
			metaMessages: ["This could arise when:", "- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied"].filter(Boolean),
			name: "UserOperationPaymasterExpiredError"
		});
	}
};
Object.defineProperty(UserOperationPaymasterExpiredError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa32/
});
var UserOperationSignatureError = class extends BaseError {
	constructor({ cause }) {
		super("Signature provided for the User Operation is invalid.", {
			cause,
			metaMessages: ["This could arise when:", "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account"].filter(Boolean),
			name: "UserOperationSignatureError"
		});
	}
};
Object.defineProperty(UserOperationSignatureError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa24/
});
var UserOperationPaymasterSignatureError = class extends BaseError {
	constructor({ cause }) {
		super("Signature provided for the User Operation is invalid.", {
			cause,
			metaMessages: ["This could arise when:", "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster"].filter(Boolean),
			name: "UserOperationPaymasterSignatureError"
		});
	}
};
Object.defineProperty(UserOperationPaymasterSignatureError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa34/
});
var UserOperationRejectedByEntryPointError = class extends BaseError {
	constructor({ cause }) {
		super("User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.", {
			cause,
			name: "UserOperationRejectedByEntryPointError"
		});
	}
};
Object.defineProperty(UserOperationRejectedByEntryPointError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32500
});
var UserOperationRejectedByPaymasterError = class extends BaseError {
	constructor({ cause }) {
		super("User Operation rejected by Paymaster's `validatePaymasterUserOp`.", {
			cause,
			name: "UserOperationRejectedByPaymasterError"
		});
	}
};
Object.defineProperty(UserOperationRejectedByPaymasterError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32501
});
var UserOperationRejectedByOpCodeError = class extends BaseError {
	constructor({ cause }) {
		super("User Operation rejected with op code validation error.", {
			cause,
			name: "UserOperationRejectedByOpCodeError"
		});
	}
};
Object.defineProperty(UserOperationRejectedByOpCodeError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32502
});
var UserOperationOutOfTimeRangeError = class extends BaseError {
	constructor({ cause }) {
		super("UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).", {
			cause,
			name: "UserOperationOutOfTimeRangeError"
		});
	}
};
Object.defineProperty(UserOperationOutOfTimeRangeError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32503
});
var UnknownBundlerError = class extends BaseError {
	constructor({ cause }) {
		super(`An error occurred while executing user operation: ${cause?.shortMessage}`, {
			cause,
			name: "UnknownBundlerError"
		});
	}
};
var VerificationGasLimitExceededError = class extends BaseError {
	constructor({ cause }) {
		super("User Operation verification gas limit exceeded.", {
			cause,
			metaMessages: ["This could arise when:", "- the gas used for verification exceeded the `verificationGasLimit`"].filter(Boolean),
			name: "VerificationGasLimitExceededError"
		});
	}
};
Object.defineProperty(VerificationGasLimitExceededError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa40/
});
var VerificationGasLimitTooLowError = class extends BaseError {
	constructor({ cause }) {
		super("User Operation verification gas limit is too low.", {
			cause,
			metaMessages: ["This could arise when:", "- the `verificationGasLimit` is too low to verify the User Operation"].filter(Boolean),
			name: "VerificationGasLimitTooLowError"
		});
	}
};
Object.defineProperty(VerificationGasLimitTooLowError, "message", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /aa41/
});
var UserOperationExecutionError = class extends BaseError {
	constructor(cause, { callData, callGasLimit, docsPath: docsPath$2, factory, factoryData, initCode, maxFeePerGas, maxPriorityFeePerGas, nonce, paymaster, paymasterAndData, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, preVerificationGas, sender, signature, verificationGasLimit }) {
		const prettyArgs = prettyPrint({
			callData,
			callGasLimit,
			factory,
			factoryData,
			initCode,
			maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
			maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
			nonce,
			paymaster,
			paymasterAndData,
			paymasterData,
			paymasterPostOpGasLimit,
			paymasterVerificationGasLimit,
			preVerificationGas,
			sender,
			signature,
			verificationGasLimit
		});
		super(cause.shortMessage, {
			cause,
			docsPath: docsPath$2,
			metaMessages: [
				...cause.metaMessages ? [...cause.metaMessages, " "] : [],
				"Request Arguments:",
				prettyArgs
			].filter(Boolean),
			name: "UserOperationExecutionError"
		});
		Object.defineProperty(this, "cause", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.cause = cause;
	}
};
var UserOperationReceiptNotFoundError = class extends BaseError {
	constructor({ hash }) {
		super(`User Operation receipt with hash "${hash}" could not be found. The User Operation may not have been processed yet.`, { name: "UserOperationReceiptNotFoundError" });
	}
};
var UserOperationNotFoundError = class extends BaseError {
	constructor({ hash }) {
		super(`User Operation with hash "${hash}" could not be found.`, { name: "UserOperationNotFoundError" });
	}
};
var WaitForUserOperationReceiptTimeoutError = class extends BaseError {
	constructor({ hash }) {
		super(`Timed out while waiting for User Operation with hash "${hash}" to be confirmed.`, { name: "WaitForUserOperationReceiptTimeoutError" });
	}
};
var bundlerErrors = [
	ExecutionRevertedError,
	InvalidFieldsError,
	PaymasterDepositTooLowError,
	PaymasterRateLimitError,
	PaymasterStakeTooLowError,
	SignatureCheckFailedError,
	UnsupportedSignatureAggregatorError,
	UserOperationOutOfTimeRangeError,
	UserOperationRejectedByEntryPointError,
	UserOperationRejectedByPaymasterError,
	UserOperationRejectedByOpCodeError
];
function getBundlerError(err, args) {
	const message = (err.details || "").toLowerCase();
	if (AccountNotDeployedError.message.test(message)) return new AccountNotDeployedError({ cause: err });
	if (FailedToSendToBeneficiaryError.message.test(message)) return new FailedToSendToBeneficiaryError({ cause: err });
	if (GasValuesOverflowError.message.test(message)) return new GasValuesOverflowError({ cause: err });
	if (HandleOpsOutOfGasError.message.test(message)) return new HandleOpsOutOfGasError({ cause: err });
	if (InitCodeFailedError.message.test(message)) return new InitCodeFailedError({
		cause: err,
		factory: args.factory,
		factoryData: args.factoryData,
		initCode: args.initCode
	});
	if (InitCodeMustCreateSenderError.message.test(message)) return new InitCodeMustCreateSenderError({
		cause: err,
		factory: args.factory,
		factoryData: args.factoryData,
		initCode: args.initCode
	});
	if (InitCodeMustReturnSenderError.message.test(message)) return new InitCodeMustReturnSenderError({
		cause: err,
		factory: args.factory,
		factoryData: args.factoryData,
		initCode: args.initCode,
		sender: args.sender
	});
	if (InsufficientPrefundError.message.test(message)) return new InsufficientPrefundError({ cause: err });
	if (InternalCallOnlyError.message.test(message)) return new InternalCallOnlyError({ cause: err });
	if (InvalidAccountNonceError.message.test(message)) return new InvalidAccountNonceError({
		cause: err,
		nonce: args.nonce
	});
	if (InvalidAggregatorError.message.test(message)) return new InvalidAggregatorError({ cause: err });
	if (InvalidBeneficiaryError.message.test(message)) return new InvalidBeneficiaryError({ cause: err });
	if (InvalidPaymasterAndDataError.message.test(message)) return new InvalidPaymasterAndDataError({ cause: err });
	if (PaymasterDepositTooLowError.message.test(message)) return new PaymasterDepositTooLowError({ cause: err });
	if (PaymasterFunctionRevertedError.message.test(message)) return new PaymasterFunctionRevertedError({ cause: err });
	if (PaymasterNotDeployedError.message.test(message)) return new PaymasterNotDeployedError({ cause: err });
	if (PaymasterPostOpFunctionRevertedError.message.test(message)) return new PaymasterPostOpFunctionRevertedError({ cause: err });
	if (SmartAccountFunctionRevertedError.message.test(message)) return new SmartAccountFunctionRevertedError({ cause: err });
	if (SenderAlreadyConstructedError.message.test(message)) return new SenderAlreadyConstructedError({
		cause: err,
		factory: args.factory,
		factoryData: args.factoryData,
		initCode: args.initCode
	});
	if (UserOperationExpiredError.message.test(message)) return new UserOperationExpiredError({ cause: err });
	if (UserOperationPaymasterExpiredError.message.test(message)) return new UserOperationPaymasterExpiredError({ cause: err });
	if (UserOperationPaymasterSignatureError.message.test(message)) return new UserOperationPaymasterSignatureError({ cause: err });
	if (UserOperationSignatureError.message.test(message)) return new UserOperationSignatureError({ cause: err });
	if (VerificationGasLimitExceededError.message.test(message)) return new VerificationGasLimitExceededError({ cause: err });
	if (VerificationGasLimitTooLowError.message.test(message)) return new VerificationGasLimitTooLowError({ cause: err });
	const error = err.walk((e) => bundlerErrors.some((error$1) => error$1.code === e.code));
	if (error) {
		if (error.code === ExecutionRevertedError.code) return new ExecutionRevertedError({
			cause: err,
			data: error.data,
			message: error.details
		});
		if (error.code === InvalidFieldsError.code) return new InvalidFieldsError({ cause: err });
		if (error.code === PaymasterDepositTooLowError.code) return new PaymasterDepositTooLowError({ cause: err });
		if (error.code === PaymasterRateLimitError.code) return new PaymasterRateLimitError({ cause: err });
		if (error.code === PaymasterStakeTooLowError.code) return new PaymasterStakeTooLowError({ cause: err });
		if (error.code === SignatureCheckFailedError.code) return new SignatureCheckFailedError({ cause: err });
		if (error.code === UnsupportedSignatureAggregatorError.code) return new UnsupportedSignatureAggregatorError({ cause: err });
		if (error.code === UserOperationOutOfTimeRangeError.code) return new UserOperationOutOfTimeRangeError({ cause: err });
		if (error.code === UserOperationRejectedByEntryPointError.code) return new UserOperationRejectedByEntryPointError({ cause: err });
		if (error.code === UserOperationRejectedByPaymasterError.code) return new UserOperationRejectedByPaymasterError({ cause: err });
		if (error.code === UserOperationRejectedByOpCodeError.code) return new UserOperationRejectedByOpCodeError({ cause: err });
	}
	return new UnknownBundlerError({ cause: err });
}
function getUserOperationError(err, { calls, docsPath: docsPath$2,...args }) {
	const cause = (() => {
		const cause$1 = getBundlerError(err, args);
		if (calls && cause$1 instanceof ExecutionRevertedError) {
			const revertData = getRevertData(cause$1);
			const contractCalls = calls?.filter((call$1) => call$1.abi);
			if (revertData && contractCalls.length > 0) return getContractError({
				calls: contractCalls,
				revertData
			});
		}
		return cause$1;
	})();
	return new UserOperationExecutionError(cause, {
		docsPath: docsPath$2,
		...args
	});
}
function getRevertData(error) {
	let revertData;
	error.walk((e) => {
		const error$1 = e;
		if (typeof error$1.data === "string" || typeof error$1.data?.revertData === "string" || !(error$1 instanceof BaseError) && typeof error$1.message === "string") {
			const match = (error$1.data?.revertData || error$1.data || error$1.message).match?.(/(0x[A-Za-z0-9]*)/);
			if (match) {
				revertData = match[1];
				return true;
			}
		}
		return false;
	});
	return revertData;
}
function getContractError(parameters) {
	const { calls, revertData } = parameters;
	const { abi: abi$2, functionName, args, to } = (() => {
		const contractCalls = calls?.filter((call$1) => Boolean(call$1.abi));
		if (contractCalls.length === 1) return contractCalls[0];
		const compatContractCalls = contractCalls.filter((call$1) => {
			try {
				return Boolean(decodeErrorResult({
					abi: call$1.abi,
					data: revertData
				}));
			} catch {
				return false;
			}
		});
		if (compatContractCalls.length === 1) return compatContractCalls[0];
		return {
			abi: [],
			functionName: contractCalls.reduce((acc, call$1) => `${acc ? `${acc} | ` : ""}${call$1.functionName}`, ""),
			args: void 0,
			to: void 0
		};
	})();
	const cause = (() => {
		if (revertData === "0x") return new ContractFunctionZeroDataError({ functionName });
		return new ContractFunctionRevertedError({
			abi: abi$2,
			data: revertData,
			functionName
		});
	})();
	return new ContractFunctionExecutionError(cause, {
		abi: abi$2,
		args,
		contractAddress: to,
		functionName
	});
}
function formatUserOperationGas(parameters) {
	const gas = {};
	if (parameters.callGasLimit) gas.callGasLimit = BigInt(parameters.callGasLimit);
	if (parameters.preVerificationGas) gas.preVerificationGas = BigInt(parameters.preVerificationGas);
	if (parameters.verificationGasLimit) gas.verificationGasLimit = BigInt(parameters.verificationGasLimit);
	if (parameters.paymasterPostOpGasLimit) gas.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
	if (parameters.paymasterVerificationGasLimit) gas.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
	return gas;
}
function formatUserOperationRequest(request) {
	const rpcRequest = {};
	if (typeof request.callData !== "undefined") rpcRequest.callData = request.callData;
	if (typeof request.callGasLimit !== "undefined") rpcRequest.callGasLimit = numberToHex(request.callGasLimit);
	if (typeof request.factory !== "undefined") rpcRequest.factory = request.factory;
	if (typeof request.factoryData !== "undefined") rpcRequest.factoryData = request.factoryData;
	if (typeof request.initCode !== "undefined") rpcRequest.initCode = request.initCode;
	if (typeof request.maxFeePerGas !== "undefined") rpcRequest.maxFeePerGas = numberToHex(request.maxFeePerGas);
	if (typeof request.maxPriorityFeePerGas !== "undefined") rpcRequest.maxPriorityFeePerGas = numberToHex(request.maxPriorityFeePerGas);
	if (typeof request.nonce !== "undefined") rpcRequest.nonce = numberToHex(request.nonce);
	if (typeof request.paymaster !== "undefined") rpcRequest.paymaster = request.paymaster;
	if (typeof request.paymasterAndData !== "undefined") rpcRequest.paymasterAndData = request.paymasterAndData || "0x";
	if (typeof request.paymasterData !== "undefined") rpcRequest.paymasterData = request.paymasterData;
	if (typeof request.paymasterPostOpGasLimit !== "undefined") rpcRequest.paymasterPostOpGasLimit = numberToHex(request.paymasterPostOpGasLimit);
	if (typeof request.paymasterVerificationGasLimit !== "undefined") rpcRequest.paymasterVerificationGasLimit = numberToHex(request.paymasterVerificationGasLimit);
	if (typeof request.preVerificationGas !== "undefined") rpcRequest.preVerificationGas = numberToHex(request.preVerificationGas);
	if (typeof request.sender !== "undefined") rpcRequest.sender = request.sender;
	if (typeof request.signature !== "undefined") rpcRequest.signature = request.signature;
	if (typeof request.verificationGasLimit !== "undefined") rpcRequest.verificationGasLimit = numberToHex(request.verificationGasLimit);
	if (typeof request.authorization !== "undefined") rpcRequest.eip7702Auth = formatAuthorization(request.authorization);
	return rpcRequest;
}
function formatAuthorization(authorization) {
	return {
		address: authorization.address,
		chainId: numberToHex(authorization.chainId),
		nonce: numberToHex(authorization.nonce),
		r: authorization.r ? numberToHex(BigInt(authorization.r), { size: 32 }) : pad("0x", { size: 32 }),
		s: authorization.s ? numberToHex(BigInt(authorization.s), { size: 32 }) : pad("0x", { size: 32 }),
		yParity: authorization.yParity ? numberToHex(authorization.yParity, { size: 1 }) : pad("0x", { size: 32 })
	};
}
async function getPaymasterData(client, parameters) {
	const { chainId, entryPointAddress, context,...userOperation } = parameters;
	const request = formatUserOperationRequest(userOperation);
	const { paymasterPostOpGasLimit, paymasterVerificationGasLimit,...rest } = await client.request({
		method: "pm_getPaymasterData",
		params: [
			{
				...request,
				callGasLimit: request.callGasLimit ?? "0x0",
				verificationGasLimit: request.verificationGasLimit ?? "0x0",
				preVerificationGas: request.preVerificationGas ?? "0x0"
			},
			entryPointAddress,
			numberToHex(chainId),
			context
		]
	});
	return {
		...rest,
		...paymasterPostOpGasLimit && { paymasterPostOpGasLimit: hexToBigInt(paymasterPostOpGasLimit) },
		...paymasterVerificationGasLimit && { paymasterVerificationGasLimit: hexToBigInt(paymasterVerificationGasLimit) }
	};
}
async function getPaymasterStubData(client, parameters) {
	const { chainId, entryPointAddress, context,...userOperation } = parameters;
	const request = formatUserOperationRequest(userOperation);
	const { paymasterPostOpGasLimit, paymasterVerificationGasLimit,...rest } = await client.request({
		method: "pm_getPaymasterStubData",
		params: [
			{
				...request,
				callGasLimit: request.callGasLimit ?? "0x0",
				verificationGasLimit: request.verificationGasLimit ?? "0x0",
				preVerificationGas: request.preVerificationGas ?? "0x0"
			},
			entryPointAddress,
			numberToHex(chainId),
			context
		]
	});
	return {
		...rest,
		...paymasterPostOpGasLimit && { paymasterPostOpGasLimit: hexToBigInt(paymasterPostOpGasLimit) },
		...paymasterVerificationGasLimit && { paymasterVerificationGasLimit: hexToBigInt(paymasterVerificationGasLimit) }
	};
}
var defaultParameters = [
	"factory",
	"fees",
	"gas",
	"paymaster",
	"nonce",
	"signature",
	"authorization"
];
async function prepareUserOperation(client, parameters_) {
	const parameters = parameters_;
	const { account: account_ = client.account, parameters: properties = defaultParameters, stateOverride } = parameters;
	if (!account_) throw new AccountNotFoundError();
	const account$1 = parseAccount(account_);
	const bundlerClient = client;
	const paymaster = parameters.paymaster ?? bundlerClient?.paymaster;
	const paymasterAddress = typeof paymaster === "string" ? paymaster : void 0;
	const { getPaymasterStubData: getPaymasterStubData$1, getPaymasterData: getPaymasterData$1 } = (() => {
		if (paymaster === true) return {
			getPaymasterStubData: (parameters$1) => getAction(bundlerClient, getPaymasterStubData, "getPaymasterStubData")(parameters$1),
			getPaymasterData: (parameters$1) => getAction(bundlerClient, getPaymasterData, "getPaymasterData")(parameters$1)
		};
		if (typeof paymaster === "object") {
			const { getPaymasterStubData: getPaymasterStubData$2, getPaymasterData: getPaymasterData$2 } = paymaster;
			return {
				getPaymasterStubData: getPaymasterData$2 && getPaymasterStubData$2 ? getPaymasterStubData$2 : getPaymasterData$2,
				getPaymasterData: getPaymasterData$2 && getPaymasterStubData$2 ? getPaymasterData$2 : void 0
			};
		}
		return {
			getPaymasterStubData: void 0,
			getPaymasterData: void 0
		};
	})();
	const paymasterContext = parameters.paymasterContext ? parameters.paymasterContext : bundlerClient?.paymasterContext;
	let request = {
		...parameters,
		paymaster: paymasterAddress,
		sender: account$1.address
	};
	const [callData, factory, fees, nonce, authorization] = await Promise.all([
		(async () => {
			if (parameters.calls) return account$1.encodeCalls(parameters.calls.map((call_) => {
				const call$1 = call_;
				if (call$1.abi) return {
					data: encodeFunctionData(call$1),
					to: call$1.to,
					value: call$1.value
				};
				return call$1;
			}));
			return parameters.callData;
		})(),
		(async () => {
			if (!properties.includes("factory")) return void 0;
			if (parameters.initCode) return { initCode: parameters.initCode };
			if (parameters.factory && parameters.factoryData) return {
				factory: parameters.factory,
				factoryData: parameters.factoryData
			};
			const { factory: factory$1, factoryData } = await account$1.getFactoryArgs();
			if (account$1.entryPoint.version === "0.6") return { initCode: factory$1 && factoryData ? concat$1([factory$1, factoryData]) : void 0 };
			return {
				factory: factory$1,
				factoryData
			};
		})(),
		(async () => {
			if (!properties.includes("fees")) return void 0;
			if (typeof parameters.maxFeePerGas === "bigint" && typeof parameters.maxPriorityFeePerGas === "bigint") return request;
			if (bundlerClient?.userOperation?.estimateFeesPerGas) {
				const fees$1 = await bundlerClient.userOperation.estimateFeesPerGas({
					account: account$1,
					bundlerClient,
					userOperation: request
				});
				return {
					...request,
					...fees$1
				};
			}
			try {
				const client_ = bundlerClient.client ?? client;
				const fees$1 = await getAction(client_, estimateFeesPerGas, "estimateFeesPerGas")({
					chain: client_.chain,
					type: "eip1559"
				});
				return {
					maxFeePerGas: typeof parameters.maxFeePerGas === "bigint" ? parameters.maxFeePerGas : BigInt(2n * fees$1.maxFeePerGas),
					maxPriorityFeePerGas: typeof parameters.maxPriorityFeePerGas === "bigint" ? parameters.maxPriorityFeePerGas : BigInt(2n * fees$1.maxPriorityFeePerGas)
				};
			} catch {
				return;
			}
		})(),
		(async () => {
			if (!properties.includes("nonce")) return void 0;
			if (typeof parameters.nonce === "bigint") return parameters.nonce;
			return account$1.getNonce();
		})(),
		(async () => {
			if (!properties.includes("authorization")) return void 0;
			if (typeof parameters.authorization === "object") return parameters.authorization;
			if (account$1.authorization && !await account$1.isDeployed()) return {
				...await prepareAuthorization(account$1.client, account$1.authorization),
				r: "0xfffffffffffffffffffffffffffffff000000000000000000000000000000000",
				s: "0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				yParity: 1
			};
		})()
	]);
	if (typeof callData !== "undefined") request.callData = callData;
	if (typeof factory !== "undefined") request = {
		...request,
		...factory
	};
	if (typeof fees !== "undefined") request = {
		...request,
		...fees
	};
	if (typeof nonce !== "undefined") request.nonce = nonce;
	if (typeof authorization !== "undefined") request.authorization = authorization;
	if (properties.includes("signature")) if (typeof parameters.signature !== "undefined") request.signature = parameters.signature;
	else request.signature = await account$1.getStubSignature(request);
	if (account$1.entryPoint.version === "0.6" && !request.initCode) request.initCode = "0x";
	let chainId;
	async function getChainId$1() {
		if (chainId) return chainId;
		if (client.chain) return client.chain.id;
		chainId = await getAction(client, getChainId, "getChainId")({});
		return chainId;
	}
	let isPaymasterPopulated = false;
	if (properties.includes("paymaster") && getPaymasterStubData$1 && !paymasterAddress && !parameters.paymasterAndData) {
		const { isFinal = false, sponsor: _$1,...paymasterArgs } = await getPaymasterStubData$1({
			chainId: await getChainId$1(),
			entryPointAddress: account$1.entryPoint.address,
			context: paymasterContext,
			...request
		});
		isPaymasterPopulated = isFinal;
		request = {
			...request,
			...paymasterArgs
		};
	}
	if (account$1.entryPoint.version === "0.6" && !request.paymasterAndData) request.paymasterAndData = "0x";
	if (properties.includes("gas")) {
		if (account$1.userOperation?.estimateGas) {
			const gas = await account$1.userOperation.estimateGas(request);
			request = {
				...request,
				...gas
			};
		}
		if (typeof request.callGasLimit === "undefined" || typeof request.preVerificationGas === "undefined" || typeof request.verificationGasLimit === "undefined" || request.paymaster && typeof request.paymasterPostOpGasLimit === "undefined" || request.paymaster && typeof request.paymasterVerificationGasLimit === "undefined") {
			const gas = await getAction(bundlerClient, estimateUserOperationGas, "estimateUserOperationGas")({
				account: account$1,
				callGasLimit: 0n,
				preVerificationGas: 0n,
				verificationGasLimit: 0n,
				stateOverride,
				...request.paymaster ? {
					paymasterPostOpGasLimit: 0n,
					paymasterVerificationGasLimit: 0n
				} : {},
				...request
			});
			request = {
				...request,
				callGasLimit: request.callGasLimit ?? gas.callGasLimit,
				preVerificationGas: request.preVerificationGas ?? gas.preVerificationGas,
				verificationGasLimit: request.verificationGasLimit ?? gas.verificationGasLimit,
				paymasterPostOpGasLimit: request.paymasterPostOpGasLimit ?? gas.paymasterPostOpGasLimit,
				paymasterVerificationGasLimit: request.paymasterVerificationGasLimit ?? gas.paymasterVerificationGasLimit
			};
		}
	}
	if (properties.includes("paymaster") && getPaymasterData$1 && !paymasterAddress && !parameters.paymasterAndData && !isPaymasterPopulated) {
		const paymaster$1 = await getPaymasterData$1({
			chainId: await getChainId$1(),
			entryPointAddress: account$1.entryPoint.address,
			context: paymasterContext,
			...request
		});
		request = {
			...request,
			...paymaster$1
		};
	}
	delete request.calls;
	delete request.parameters;
	delete request.paymasterContext;
	if (typeof request.paymaster !== "string") delete request.paymaster;
	return request;
}
async function estimateUserOperationGas(client, parameters) {
	const { account: account_ = client.account, entryPointAddress, stateOverride } = parameters;
	if (!account_ && !parameters.sender) throw new AccountNotFoundError();
	const account$1 = account_ ? parseAccount(account_) : void 0;
	const rpcStateOverride = serializeStateOverride(stateOverride);
	const request = account$1 ? await getAction(client, prepareUserOperation, "prepareUserOperation")({
		...parameters,
		parameters: [
			"authorization",
			"factory",
			"nonce",
			"paymaster",
			"signature"
		]
	}) : parameters;
	try {
		const params = [formatUserOperationRequest(request), entryPointAddress ?? account$1?.entryPoint?.address];
		const result = await client.request({
			method: "eth_estimateUserOperationGas",
			params: rpcStateOverride ? [...params, rpcStateOverride] : [...params]
		});
		return formatUserOperationGas(result);
	} catch (error) {
		const calls = parameters.calls;
		throw getUserOperationError(error, {
			...request,
			...calls ? { calls } : {}
		});
	}
}
function getSupportedEntryPoints(client) {
	return client.request({ method: "eth_supportedEntryPoints" });
}
function formatUserOperation(parameters) {
	const userOperation = { ...parameters };
	if (parameters.callGasLimit) userOperation.callGasLimit = BigInt(parameters.callGasLimit);
	if (parameters.maxFeePerGas) userOperation.maxFeePerGas = BigInt(parameters.maxFeePerGas);
	if (parameters.maxPriorityFeePerGas) userOperation.maxPriorityFeePerGas = BigInt(parameters.maxPriorityFeePerGas);
	if (parameters.nonce) userOperation.nonce = BigInt(parameters.nonce);
	if (parameters.paymasterPostOpGasLimit) userOperation.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
	if (parameters.paymasterVerificationGasLimit) userOperation.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
	if (parameters.preVerificationGas) userOperation.preVerificationGas = BigInt(parameters.preVerificationGas);
	if (parameters.verificationGasLimit) userOperation.verificationGasLimit = BigInt(parameters.verificationGasLimit);
	return userOperation;
}
async function getUserOperation(client, { hash }) {
	const result = await client.request({
		method: "eth_getUserOperationByHash",
		params: [hash]
	}, { dedupe: true });
	if (!result) throw new UserOperationNotFoundError({ hash });
	const { blockHash, blockNumber, entryPoint, transactionHash, userOperation } = result;
	return {
		blockHash,
		blockNumber: BigInt(blockNumber),
		entryPoint,
		transactionHash,
		userOperation: formatUserOperation(userOperation)
	};
}
function formatUserOperationReceipt(parameters) {
	const receipt = { ...parameters };
	if (parameters.actualGasCost) receipt.actualGasCost = BigInt(parameters.actualGasCost);
	if (parameters.actualGasUsed) receipt.actualGasUsed = BigInt(parameters.actualGasUsed);
	if (parameters.logs) receipt.logs = parameters.logs.map((log) => formatLog(log));
	if (parameters.receipt) receipt.receipt = formatTransactionReceipt(receipt.receipt);
	return receipt;
}
async function getUserOperationReceipt(client, { hash }) {
	const receipt = await client.request({
		method: "eth_getUserOperationReceipt",
		params: [hash]
	}, { dedupe: true });
	if (!receipt) throw new UserOperationReceiptNotFoundError({ hash });
	return formatUserOperationReceipt(receipt);
}
async function sendUserOperation(client, parameters) {
	const { account: account_ = client.account, entryPointAddress } = parameters;
	if (!account_ && !parameters.sender) throw new AccountNotFoundError();
	const account$1 = account_ ? parseAccount(account_) : void 0;
	const request = account$1 ? await getAction(client, prepareUserOperation, "prepareUserOperation")(parameters) : parameters;
	const signature = parameters.signature || await account$1?.signUserOperation?.(request);
	const rpcParameters = formatUserOperationRequest({
		...request,
		signature
	});
	try {
		return await client.request({
			method: "eth_sendUserOperation",
			params: [rpcParameters, entryPointAddress ?? account$1?.entryPoint?.address]
		}, { retryCount: 0 });
	} catch (error) {
		const calls = parameters.calls;
		throw getUserOperationError(error, {
			...request,
			...calls ? { calls } : {},
			signature
		});
	}
}
function waitForUserOperationReceipt(client, parameters) {
	const { hash, pollingInterval = client.pollingInterval, retryCount, timeout = 12e4 } = parameters;
	let count = 0;
	const observerId = stringify$1([
		"waitForUserOperationReceipt",
		client.uid,
		hash
	]);
	return new Promise((resolve, reject) => {
		const unobserve = observe(observerId, {
			resolve,
			reject
		}, (emit) => {
			const done = (fn) => {
				unpoll();
				fn();
				unobserve();
			};
			const unpoll = poll(async () => {
				if (retryCount && count >= retryCount) done(() => emit.reject(new WaitForUserOperationReceiptTimeoutError({ hash })));
				try {
					const receipt = await getAction(client, getUserOperationReceipt, "getUserOperationReceipt")({ hash });
					done(() => emit.resolve(receipt));
				} catch (err) {
					const error = err;
					if (error.name !== "UserOperationReceiptNotFoundError") done(() => emit.reject(error));
				}
				count++;
			}, {
				emitOnBegin: true,
				interval: pollingInterval
			});
			if (timeout) setTimeout(() => done(() => emit.reject(new WaitForUserOperationReceiptTimeoutError({ hash }))), timeout);
			return unpoll;
		});
	});
}
function bundlerActions(client) {
	return {
		estimateUserOperationGas: (parameters) => estimateUserOperationGas(client, parameters),
		getChainId: () => getChainId(client),
		getSupportedEntryPoints: () => getSupportedEntryPoints(client),
		getUserOperation: (parameters) => getUserOperation(client, parameters),
		getUserOperationReceipt: (parameters) => getUserOperationReceipt(client, parameters),
		prepareUserOperation: (parameters) => prepareUserOperation(client, parameters),
		sendUserOperation: (parameters) => sendUserOperation(client, parameters),
		waitForUserOperationReceipt: (parameters) => waitForUserOperationReceipt(client, parameters)
	};
}
function createBundlerClient(parameters) {
	const { client: client_, key = "bundler", name: name$1 = "Bundler Client", paymaster, paymasterContext, transport, userOperation } = parameters;
	return Object.assign(createClient({
		...parameters,
		chain: parameters.chain ?? client_?.chain,
		key,
		name: name$1,
		transport,
		type: "bundlerClient"
	}), {
		client: client_,
		paymaster,
		paymasterContext,
		userOperation
	}).extend(bundlerActions);
}
const entryPoint06Address = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
const ChainClients = createStore$1(() => ({}));
function createClients(chains$1) {
	chains$1.forEach((c) => {
		var _a, _b, _c, _d, _e, _f, _g, _h;
		if (!c.rpcUrl) return;
		const viemchain = defineChain({
			id: c.id,
			rpcUrls: { default: { http: [c.rpcUrl] } },
			name: (_b = (_a = c.nativeCurrency) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "",
			nativeCurrency: {
				name: (_d = (_c = c.nativeCurrency) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : "",
				symbol: (_f = (_e = c.nativeCurrency) === null || _e === void 0 ? void 0 : _e.symbol) !== null && _f !== void 0 ? _f : "",
				decimals: (_h = (_g = c.nativeCurrency) === null || _g === void 0 ? void 0 : _g.decimal) !== null && _h !== void 0 ? _h : 18
			}
		});
		const client = createPublicClient({
			chain: viemchain,
			transport: http(c.rpcUrl)
		});
		const bundlerClient = createBundlerClient({
			client,
			transport: http(c.rpcUrl)
		});
		ChainClients.setState({ [c.id]: {
			client,
			bundlerClient
		} });
	});
}
function getClient(chainId) {
	var _a;
	return (_a = ChainClients.getState()[chainId]) === null || _a === void 0 ? void 0 : _a.client;
}
var correlationIdsStore = createStore$1(() => ({ correlationIds: /* @__PURE__ */ new Map() }));
const correlationIds = {
	get: (key) => {
		return correlationIdsStore.getState().correlationIds.get(key);
	},
	set: (key, correlationId) => {
		correlationIdsStore.setState((state) => {
			const newMap = new Map(state.correlationIds);
			newMap.set(key, correlationId);
			return { correlationIds: newMap };
		});
	},
	delete: (key) => {
		correlationIdsStore.setState((state) => {
			const newMap = new Map(state.correlationIds);
			newMap.delete(key);
			return { correlationIds: newMap };
		});
	},
	clear: () => {
		correlationIdsStore.setState({ correlationIds: /* @__PURE__ */ new Map() });
	}
};
function assertSubAccount(info) {
	if (typeof info !== "object" || info === null) throw standardErrors.rpc.internal("sub account info is not an object");
	if (!("address" in info)) throw standardErrors.rpc.internal("sub account is invalid");
	if ("address" in info && typeof info.address === "string" && !isAddress(info.address)) throw standardErrors.rpc.internal("sub account address is invalid");
	if ("factory" in info && typeof info.factory === "string" && !isAddress(info.factory)) throw standardErrors.rpc.internal("sub account factory address is invalid");
	if ("factoryData" in info && typeof info.factoryData === "string" && !isHex(info.factoryData)) throw standardErrors.rpc.internal("sub account factory data is invalid");
}
async function generateKeyPair() {
	return crypto.subtle.generateKey({
		name: "ECDH",
		namedCurve: "P-256"
	}, true, ["deriveKey"]);
}
async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
	return crypto.subtle.deriveKey({
		name: "ECDH",
		public: peerPublicKey
	}, ownPrivateKey, {
		name: "AES-GCM",
		length: 256
	}, false, ["encrypt", "decrypt"]);
}
async function encrypt(sharedSecret, plainText) {
	const iv = crypto.getRandomValues(new Uint8Array(12));
	const cipherText = await crypto.subtle.encrypt({
		name: "AES-GCM",
		iv
	}, sharedSecret, new TextEncoder().encode(plainText));
	return {
		iv,
		cipherText
	};
}
async function decrypt(sharedSecret, { iv, cipherText }) {
	const plainText = await crypto.subtle.decrypt({
		name: "AES-GCM",
		iv
	}, sharedSecret, cipherText);
	return new TextDecoder().decode(plainText);
}
function getFormat(keyType) {
	switch (keyType) {
		case "public": return "spki";
		case "private": return "pkcs8";
	}
}
async function exportKeyToHexString(type$1, key) {
	const format = getFormat(type$1);
	const exported = await crypto.subtle.exportKey(format, key);
	return uint8ArrayToHex(new Uint8Array(exported));
}
async function importKeyFromHexString(type$1, hexString) {
	const format = getFormat(type$1);
	const arrayBuffer = hexStringToUint8Array(hexString).buffer;
	return await crypto.subtle.importKey(format, new Uint8Array(arrayBuffer), {
		name: "ECDH",
		namedCurve: "P-256"
	}, true, type$1 === "private" ? ["deriveKey"] : []);
}
async function encryptContent(content, sharedSecret) {
	const serialized = JSON.stringify(content, (_$1, value) => {
		if (!(value instanceof Error)) return value;
		const error = value;
		return Object.assign(Object.assign({}, error.code ? { code: error.code } : {}), { message: error.message });
	});
	return encrypt(sharedSecret, serialized);
}
async function decryptContent(encryptedData, sharedSecret) {
	return JSON.parse(await decrypt(sharedSecret, encryptedData));
}
async function fetchRPCRequest(request, rpcUrl) {
	const requestBody = Object.assign(Object.assign({}, request), {
		jsonrpc: "2.0",
		id: crypto.randomUUID()
	});
	const { result, error } = await (await window.fetch(rpcUrl, {
		method: "POST",
		body: JSON.stringify(requestBody),
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"X-Cbw-Sdk-Version": PACKAGE_VERSION,
			"X-Cbw-Sdk-Platform": PACKAGE_NAME
		}
	})).json();
	if (error) throw error;
	return result;
}
function checkErrorForInvalidRequestArgs(args) {
	if (!args || typeof args !== "object" || Array.isArray(args)) throw standardErrors.rpc.invalidParams({
		message: "Expected a single, non-array, object argument.",
		data: args
	});
	const { method, params } = args;
	if (typeof method !== "string" || method.length === 0) throw standardErrors.rpc.invalidParams({
		message: "'args.method' must be a non-empty string.",
		data: args
	});
	if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) throw standardErrors.rpc.invalidParams({
		message: "'args.params' must be an object or array if provided.",
		data: args
	});
	switch (method) {
		case "eth_sign":
		case "eth_signTypedData_v2":
		case "eth_subscribe":
		case "eth_unsubscribe": throw standardErrors.provider.unsupportedMethod();
	}
}
const version = "0.1.1";
function getVersion() {
	return version;
}
var BaseError$1 = class BaseError$1 extends Error {
	constructor(shortMessage, options = {}) {
		const details = (() => {
			if (options.cause instanceof BaseError$1) {
				if (options.cause.details) return options.cause.details;
				if (options.cause.shortMessage) return options.cause.shortMessage;
			}
			if (options.cause?.message) return options.cause.message;
			return options.details;
		})();
		const docsPath$2 = (() => {
			if (options.cause instanceof BaseError$1) return options.cause.docsPath || options.docsPath;
			return options.docsPath;
		})();
		const docs = `https://oxlib.sh${docsPath$2 ?? ""}`;
		const message = [
			shortMessage || "An error occurred.",
			...options.metaMessages ? ["", ...options.metaMessages] : [],
			...details || docsPath$2 ? [
				"",
				details ? `Details: ${details}` : void 0,
				docsPath$2 ? `See: ${docs}` : void 0
			] : []
		].filter((x) => typeof x === "string").join("\n");
		super(message, options.cause ? { cause: options.cause } : void 0);
		Object.defineProperty(this, "details", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "docs", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "docsPath", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "shortMessage", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "cause", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "BaseError"
		});
		Object.defineProperty(this, "version", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: `ox@${getVersion()}`
		});
		this.cause = options.cause;
		this.details = details;
		this.docs = docs;
		this.docsPath = docsPath$2;
		this.shortMessage = shortMessage;
	}
	walk(fn) {
		return walk(this, fn);
	}
};
function walk(err, fn) {
	if (fn?.(err)) return err;
	if (err && typeof err === "object" && "cause" in err && err.cause) return walk(err.cause, fn);
	return fn ? null : err;
}
const crypto$1 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function isBytes(a) {
	return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function anumber(n) {
	if (!Number.isSafeInteger(n) || n < 0) throw new Error("positive integer expected, got " + n);
}
function abytes(b$1, ...lengths) {
	if (!isBytes(b$1)) throw new Error("Uint8Array expected");
	if (lengths.length > 0 && !lengths.includes(b$1.length)) throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b$1.length);
}
function ahash(h$1) {
	if (typeof h$1 !== "function" || typeof h$1.create !== "function") throw new Error("Hash should be wrapped by utils.createHasher");
	anumber(h$1.outputLen);
	anumber(h$1.blockLen);
}
function aexists(instance, checkFinished = true) {
	if (instance.destroyed) throw new Error("Hash instance has been destroyed");
	if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
	abytes(out);
	const min = instance.outputLen;
	if (out.length < min) throw new Error("digestInto() expects output buffer of length at least " + min);
}
function clean(...arrays) {
	for (let i$1 = 0; i$1 < arrays.length; i$1++) arrays[i$1].fill(0);
}
function createView(arr) {
	return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
	return word << 32 - shift | word >>> shift;
}
var hasHexBuiltin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function")();
var hexes$1 = /* @__PURE__ */ Array.from({ length: 256 }, (_$1, i$1) => i$1.toString(16).padStart(2, "0"));
function bytesToHex(bytes) {
	abytes(bytes);
	if (hasHexBuiltin) return bytes.toHex();
	let hex = "";
	for (let i$1 = 0; i$1 < bytes.length; i$1++) hex += hexes$1[bytes[i$1]];
	return hex;
}
var asciis = {
	_0: 48,
	_9: 57,
	A: 65,
	F: 70,
	a: 97,
	f: 102
};
function asciiToBase16(ch) {
	if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0;
	if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10);
	if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10);
}
function hexToBytes$1(hex) {
	if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
	if (hasHexBuiltin) return Uint8Array.fromHex(hex);
	const hl = hex.length;
	const al = hl / 2;
	if (hl % 2) throw new Error("hex string expected, got unpadded hex of length " + hl);
	const array = new Uint8Array(al);
	for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
		const n1 = asciiToBase16(hex.charCodeAt(hi));
		const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
		if (n1 === void 0 || n2 === void 0) {
			const char = hex[hi] + hex[hi + 1];
			throw new Error("hex string expected, got non-hex character \"" + char + "\" at index " + hi);
		}
		array[ai] = n1 * 16 + n2;
	}
	return array;
}
function utf8ToBytes(str) {
	if (typeof str !== "string") throw new Error("string expected");
	return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes(data) {
	if (typeof data === "string") data = utf8ToBytes(data);
	abytes(data);
	return data;
}
function concatBytes(...arrays) {
	let sum = 0;
	for (let i$1 = 0; i$1 < arrays.length; i$1++) {
		const a = arrays[i$1];
		abytes(a);
		sum += a.length;
	}
	const res = new Uint8Array(sum);
	for (let i$1 = 0, pad$2 = 0; i$1 < arrays.length; i$1++) {
		const a = arrays[i$1];
		res.set(a, pad$2);
		pad$2 += a.length;
	}
	return res;
}
var Hash = class {};
function createHasher(hashCons) {
	const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
	const tmp = hashCons();
	hashC.outputLen = tmp.outputLen;
	hashC.blockLen = tmp.blockLen;
	hashC.create = () => hashCons();
	return hashC;
}
function randomBytes(bytesLength = 32) {
	if (crypto$1 && typeof crypto$1.getRandomValues === "function") return crypto$1.getRandomValues(new Uint8Array(bytesLength));
	if (crypto$1 && typeof crypto$1.randomBytes === "function") return Uint8Array.from(crypto$1.randomBytes(bytesLength));
	throw new Error("crypto.getRandomValues must be defined");
}
function setBigUint64(view, byteOffset, value, isLE) {
	if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
	const _32n$1 = BigInt(32);
	const _u32_max = BigInt(4294967295);
	const wh = Number(value >> _32n$1 & _u32_max);
	const wl = Number(value & _u32_max);
	const h$1 = isLE ? 4 : 0;
	const l$1 = isLE ? 0 : 4;
	view.setUint32(byteOffset + h$1, wh, isLE);
	view.setUint32(byteOffset + l$1, wl, isLE);
}
function Chi(a, b$1, c) {
	return a & b$1 ^ ~a & c;
}
function Maj(a, b$1, c) {
	return a & b$1 ^ a & c ^ b$1 & c;
}
var HashMD = class extends Hash {
	constructor(blockLen, outputLen, padOffset, isLE) {
		super();
		this.finished = false;
		this.length = 0;
		this.pos = 0;
		this.destroyed = false;
		this.blockLen = blockLen;
		this.outputLen = outputLen;
		this.padOffset = padOffset;
		this.isLE = isLE;
		this.buffer = new Uint8Array(blockLen);
		this.view = createView(this.buffer);
	}
	update(data) {
		aexists(this);
		data = toBytes(data);
		abytes(data);
		const { view, buffer: buffer$1, blockLen } = this;
		const len = data.length;
		for (let pos = 0; pos < len;) {
			const take = Math.min(blockLen - this.pos, len - pos);
			if (take === blockLen) {
				const dataView = createView(data);
				for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
				continue;
			}
			buffer$1.set(data.subarray(pos, pos + take), this.pos);
			this.pos += take;
			pos += take;
			if (this.pos === blockLen) {
				this.process(view, 0);
				this.pos = 0;
			}
		}
		this.length += data.length;
		this.roundClean();
		return this;
	}
	digestInto(out) {
		aexists(this);
		aoutput(out, this);
		this.finished = true;
		const { buffer: buffer$1, view, blockLen, isLE } = this;
		let { pos } = this;
		buffer$1[pos++] = 128;
		clean(this.buffer.subarray(pos));
		if (this.padOffset > blockLen - pos) {
			this.process(view, 0);
			pos = 0;
		}
		for (let i$1 = pos; i$1 < blockLen; i$1++) buffer$1[i$1] = 0;
		setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
		this.process(view, 0);
		const oview = createView(out);
		const len = this.outputLen;
		if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
		const outLen = len / 4;
		const state = this.get();
		if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
		for (let i$1 = 0; i$1 < outLen; i$1++) oview.setUint32(4 * i$1, state[i$1], isLE);
	}
	digest() {
		const { buffer: buffer$1, outputLen } = this;
		this.digestInto(buffer$1);
		const res = buffer$1.slice(0, outputLen);
		this.destroy();
		return res;
	}
	_cloneInto(to) {
		to || (to = new this.constructor());
		to.set(...this.get());
		const { blockLen, buffer: buffer$1, length, finished, destroyed, pos } = this;
		to.destroyed = destroyed;
		to.finished = finished;
		to.length = length;
		to.pos = pos;
		if (length % blockLen) to.buffer.set(buffer$1);
		return to;
	}
	clone() {
		return this._cloneInto();
	}
};
const SHA256_IV = /* @__PURE__ */ Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]);
const SHA384_IV = /* @__PURE__ */ Uint32Array.from([
	3418070365,
	3238371032,
	1654270250,
	914150663,
	2438529370,
	812702999,
	355462360,
	4144912697,
	1731405415,
	4290775857,
	2394180231,
	1750603025,
	3675008525,
	1694076839,
	1203062813,
	3204075428
]);
const SHA512_IV = /* @__PURE__ */ Uint32Array.from([
	1779033703,
	4089235720,
	3144134277,
	2227873595,
	1013904242,
	4271175723,
	2773480762,
	1595750129,
	1359893119,
	2917565137,
	2600822924,
	725511199,
	528734635,
	4215389547,
	1541459225,
	327033209
]);
var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
var _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
	if (le) return {
		h: Number(n & U32_MASK64),
		l: Number(n >> _32n & U32_MASK64)
	};
	return {
		h: Number(n >> _32n & U32_MASK64) | 0,
		l: Number(n & U32_MASK64) | 0
	};
}
function split(lst, le = false) {
	const len = lst.length;
	let Ah = new Uint32Array(len);
	let Al = new Uint32Array(len);
	for (let i$1 = 0; i$1 < len; i$1++) {
		const { h: h$1, l: l$1 } = fromBig(lst[i$1], le);
		[Ah[i$1], Al[i$1]] = [h$1, l$1];
	}
	return [Ah, Al];
}
var shrSH = (h$1, _l, s) => h$1 >>> s;
var shrSL = (h$1, l$1, s) => h$1 << 32 - s | l$1 >>> s;
var rotrSH = (h$1, l$1, s) => h$1 >>> s | l$1 << 32 - s;
var rotrSL = (h$1, l$1, s) => h$1 << 32 - s | l$1 >>> s;
var rotrBH = (h$1, l$1, s) => h$1 << 64 - s | l$1 >>> s - 32;
var rotrBL = (h$1, l$1, s) => h$1 >>> s - 32 | l$1 << 64 - s;
function add(Ah, Al, Bh, Bl) {
	const l$1 = (Al >>> 0) + (Bl >>> 0);
	return {
		h: Ah + Bh + (l$1 / 2 ** 32 | 0) | 0,
		l: l$1 | 0
	};
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
var SHA256_K = /* @__PURE__ */ Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var SHA256 = class extends HashMD {
	constructor(outputLen = 32) {
		super(64, outputLen, 8, false);
		this.A = SHA256_IV[0] | 0;
		this.B = SHA256_IV[1] | 0;
		this.C = SHA256_IV[2] | 0;
		this.D = SHA256_IV[3] | 0;
		this.E = SHA256_IV[4] | 0;
		this.F = SHA256_IV[5] | 0;
		this.G = SHA256_IV[6] | 0;
		this.H = SHA256_IV[7] | 0;
	}
	get() {
		const { A, B: B$1, C, D, E, F, G, H } = this;
		return [
			A,
			B$1,
			C,
			D,
			E,
			F,
			G,
			H
		];
	}
	set(A, B$1, C, D, E, F, G, H) {
		this.A = A | 0;
		this.B = B$1 | 0;
		this.C = C | 0;
		this.D = D | 0;
		this.E = E | 0;
		this.F = F | 0;
		this.G = G | 0;
		this.H = H | 0;
	}
	process(view, offset) {
		for (let i$1 = 0; i$1 < 16; i$1++, offset += 4) SHA256_W[i$1] = view.getUint32(offset, false);
		for (let i$1 = 16; i$1 < 64; i$1++) {
			const W15 = SHA256_W[i$1 - 15];
			const W2 = SHA256_W[i$1 - 2];
			const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
			SHA256_W[i$1] = (rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10) + SHA256_W[i$1 - 7] + s0 + SHA256_W[i$1 - 16] | 0;
		}
		let { A, B: B$1, C, D, E, F, G, H } = this;
		for (let i$1 = 0; i$1 < 64; i$1++) {
			const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
			const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i$1] + SHA256_W[i$1] | 0;
			const T2 = (rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22)) + Maj(A, B$1, C) | 0;
			H = G;
			G = F;
			F = E;
			E = D + T1 | 0;
			D = C;
			C = B$1;
			B$1 = A;
			A = T1 + T2 | 0;
		}
		A = A + this.A | 0;
		B$1 = B$1 + this.B | 0;
		C = C + this.C | 0;
		D = D + this.D | 0;
		E = E + this.E | 0;
		F = F + this.F | 0;
		G = G + this.G | 0;
		H = H + this.H | 0;
		this.set(A, B$1, C, D, E, F, G, H);
	}
	roundClean() {
		clean(SHA256_W);
	}
	destroy() {
		this.set(0, 0, 0, 0, 0, 0, 0, 0);
		clean(this.buffer);
	}
};
var K512 = /* @__PURE__ */ (() => split([
	"0x428a2f98d728ae22",
	"0x7137449123ef65cd",
	"0xb5c0fbcfec4d3b2f",
	"0xe9b5dba58189dbbc",
	"0x3956c25bf348b538",
	"0x59f111f1b605d019",
	"0x923f82a4af194f9b",
	"0xab1c5ed5da6d8118",
	"0xd807aa98a3030242",
	"0x12835b0145706fbe",
	"0x243185be4ee4b28c",
	"0x550c7dc3d5ffb4e2",
	"0x72be5d74f27b896f",
	"0x80deb1fe3b1696b1",
	"0x9bdc06a725c71235",
	"0xc19bf174cf692694",
	"0xe49b69c19ef14ad2",
	"0xefbe4786384f25e3",
	"0x0fc19dc68b8cd5b5",
	"0x240ca1cc77ac9c65",
	"0x2de92c6f592b0275",
	"0x4a7484aa6ea6e483",
	"0x5cb0a9dcbd41fbd4",
	"0x76f988da831153b5",
	"0x983e5152ee66dfab",
	"0xa831c66d2db43210",
	"0xb00327c898fb213f",
	"0xbf597fc7beef0ee4",
	"0xc6e00bf33da88fc2",
	"0xd5a79147930aa725",
	"0x06ca6351e003826f",
	"0x142929670a0e6e70",
	"0x27b70a8546d22ffc",
	"0x2e1b21385c26c926",
	"0x4d2c6dfc5ac42aed",
	"0x53380d139d95b3df",
	"0x650a73548baf63de",
	"0x766a0abb3c77b2a8",
	"0x81c2c92e47edaee6",
	"0x92722c851482353b",
	"0xa2bfe8a14cf10364",
	"0xa81a664bbc423001",
	"0xc24b8b70d0f89791",
	"0xc76c51a30654be30",
	"0xd192e819d6ef5218",
	"0xd69906245565a910",
	"0xf40e35855771202a",
	"0x106aa07032bbd1b8",
	"0x19a4c116b8d2d0c8",
	"0x1e376c085141ab53",
	"0x2748774cdf8eeb99",
	"0x34b0bcb5e19b48a8",
	"0x391c0cb3c5c95a63",
	"0x4ed8aa4ae3418acb",
	"0x5b9cca4f7763e373",
	"0x682e6ff3d6b2b8a3",
	"0x748f82ee5defb2fc",
	"0x78a5636f43172f60",
	"0x84c87814a1f0ab72",
	"0x8cc702081a6439ec",
	"0x90befffa23631e28",
	"0xa4506cebde82bde9",
	"0xbef9a3f7b2c67915",
	"0xc67178f2e372532b",
	"0xca273eceea26619c",
	"0xd186b8c721c0c207",
	"0xeada7dd6cde0eb1e",
	"0xf57d4f7fee6ed178",
	"0x06f067aa72176fba",
	"0x0a637dc5a2c898a6",
	"0x113f9804bef90dae",
	"0x1b710b35131c471b",
	"0x28db77f523047d84",
	"0x32caab7b40c72493",
	"0x3c9ebe0a15c9bebc",
	"0x431d67c49c100d4c",
	"0x4cc5d4becb3e42b6",
	"0x597f299cfc657e2a",
	"0x5fcb6fab3ad6faec",
	"0x6c44198c4a475817"
].map((n) => BigInt(n))))();
var SHA512_Kh = /* @__PURE__ */ (() => K512[0])();
var SHA512_Kl = /* @__PURE__ */ (() => K512[1])();
var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
var SHA512 = class extends HashMD {
	constructor(outputLen = 64) {
		super(128, outputLen, 16, false);
		this.Ah = SHA512_IV[0] | 0;
		this.Al = SHA512_IV[1] | 0;
		this.Bh = SHA512_IV[2] | 0;
		this.Bl = SHA512_IV[3] | 0;
		this.Ch = SHA512_IV[4] | 0;
		this.Cl = SHA512_IV[5] | 0;
		this.Dh = SHA512_IV[6] | 0;
		this.Dl = SHA512_IV[7] | 0;
		this.Eh = SHA512_IV[8] | 0;
		this.El = SHA512_IV[9] | 0;
		this.Fh = SHA512_IV[10] | 0;
		this.Fl = SHA512_IV[11] | 0;
		this.Gh = SHA512_IV[12] | 0;
		this.Gl = SHA512_IV[13] | 0;
		this.Hh = SHA512_IV[14] | 0;
		this.Hl = SHA512_IV[15] | 0;
	}
	get() {
		const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
		return [
			Ah,
			Al,
			Bh,
			Bl,
			Ch,
			Cl,
			Dh,
			Dl,
			Eh,
			El,
			Fh,
			Fl,
			Gh,
			Gl,
			Hh,
			Hl
		];
	}
	set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
		this.Ah = Ah | 0;
		this.Al = Al | 0;
		this.Bh = Bh | 0;
		this.Bl = Bl | 0;
		this.Ch = Ch | 0;
		this.Cl = Cl | 0;
		this.Dh = Dh | 0;
		this.Dl = Dl | 0;
		this.Eh = Eh | 0;
		this.El = El | 0;
		this.Fh = Fh | 0;
		this.Fl = Fl | 0;
		this.Gh = Gh | 0;
		this.Gl = Gl | 0;
		this.Hh = Hh | 0;
		this.Hl = Hl | 0;
	}
	process(view, offset) {
		for (let i$1 = 0; i$1 < 16; i$1++, offset += 4) {
			SHA512_W_H[i$1] = view.getUint32(offset);
			SHA512_W_L[i$1] = view.getUint32(offset += 4);
		}
		for (let i$1 = 16; i$1 < 80; i$1++) {
			const W15h = SHA512_W_H[i$1 - 15] | 0;
			const W15l = SHA512_W_L[i$1 - 15] | 0;
			const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
			const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
			const W2h = SHA512_W_H[i$1 - 2] | 0;
			const W2l = SHA512_W_L[i$1 - 2] | 0;
			const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
			const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
			const SUMl = add4L(s0l, s1l, SHA512_W_L[i$1 - 7], SHA512_W_L[i$1 - 16]);
			SHA512_W_H[i$1] = add4H(SUMl, s0h, s1h, SHA512_W_H[i$1 - 7], SHA512_W_H[i$1 - 16]) | 0;
			SHA512_W_L[i$1] = SUMl | 0;
		}
		let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
		for (let i$1 = 0; i$1 < 80; i$1++) {
			const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
			const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
			const CHIh = Eh & Fh ^ ~Eh & Gh;
			const CHIl = El & Fl ^ ~El & Gl;
			const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i$1], SHA512_W_L[i$1]);
			const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i$1], SHA512_W_H[i$1]);
			const T1l = T1ll | 0;
			const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
			const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
			const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
			const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
			Hh = Gh | 0;
			Hl = Gl | 0;
			Gh = Fh | 0;
			Gl = Fl | 0;
			Fh = Eh | 0;
			Fl = El | 0;
			({h: Eh, l: El} = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
			Dh = Ch | 0;
			Dl = Cl | 0;
			Ch = Bh | 0;
			Cl = Bl | 0;
			Bh = Ah | 0;
			Bl = Al | 0;
			const All = add3L(T1l, sigma0l, MAJl);
			Ah = add3H(All, T1h, sigma0h, MAJh);
			Al = All | 0;
		}
		({h: Ah, l: Al} = add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
		({h: Bh, l: Bl} = add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
		({h: Ch, l: Cl} = add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
		({h: Dh, l: Dl} = add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
		({h: Eh, l: El} = add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
		({h: Fh, l: Fl} = add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
		({h: Gh, l: Gl} = add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
		({h: Hh, l: Hl} = add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
		this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
	}
	roundClean() {
		clean(SHA512_W_H, SHA512_W_L);
	}
	destroy() {
		clean(this.buffer);
		this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	}
};
var SHA384 = class extends SHA512 {
	constructor() {
		super(48);
		this.Ah = SHA384_IV[0] | 0;
		this.Al = SHA384_IV[1] | 0;
		this.Bh = SHA384_IV[2] | 0;
		this.Bl = SHA384_IV[3] | 0;
		this.Ch = SHA384_IV[4] | 0;
		this.Cl = SHA384_IV[5] | 0;
		this.Dh = SHA384_IV[6] | 0;
		this.Dl = SHA384_IV[7] | 0;
		this.Eh = SHA384_IV[8] | 0;
		this.El = SHA384_IV[9] | 0;
		this.Fh = SHA384_IV[10] | 0;
		this.Fl = SHA384_IV[11] | 0;
		this.Gh = SHA384_IV[12] | 0;
		this.Gl = SHA384_IV[13] | 0;
		this.Hh = SHA384_IV[14] | 0;
		this.Hl = SHA384_IV[15] | 0;
	}
};
const sha256 = /* @__PURE__ */ createHasher(() => new SHA256());
const sha512 = /* @__PURE__ */ createHasher(() => new SHA512());
const sha384 = /* @__PURE__ */ createHasher(() => new SHA384());
const sha256$1 = sha256;
var _0n$3 = /* @__PURE__ */ BigInt(0);
var _1n$3 = /* @__PURE__ */ BigInt(1);
function _abool2(value, title = "") {
	if (typeof value !== "boolean") {
		const prefix = title && `"${title}"`;
		throw new Error(prefix + "expected boolean, got type=" + typeof value);
	}
	return value;
}
function _abytes2(value, length, title = "") {
	const bytes = isBytes(value);
	const len = value?.length;
	const needsLen = length !== void 0;
	if (!bytes || needsLen && len !== length) {
		const prefix = title && `"${title}" `;
		const ofLen = needsLen ? ` of length ${length}` : "";
		const got = bytes ? `length=${len}` : `type=${typeof value}`;
		throw new Error(prefix + "expected Uint8Array" + ofLen + ", got " + got);
	}
	return value;
}
function numberToHexUnpadded(num) {
	const hex = num.toString(16);
	return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber$1(hex) {
	if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
	return hex === "" ? _0n$3 : BigInt("0x" + hex);
}
function bytesToNumberBE(bytes) {
	return hexToNumber$1(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
	abytes(bytes);
	return hexToNumber$1(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
	return hexToBytes$1(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
	return numberToBytesBE(n, len).reverse();
}
function ensureBytes(title, hex, expectedLength) {
	let res;
	if (typeof hex === "string") try {
		res = hexToBytes$1(hex);
	} catch (e) {
		throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
	}
	else if (isBytes(hex)) res = Uint8Array.from(hex);
	else throw new Error(title + " must be hex string or Uint8Array");
	const len = res.length;
	if (typeof expectedLength === "number" && len !== expectedLength) throw new Error(title + " of length " + expectedLength + " expected, got " + len);
	return res;
}
var isPosBig = (n) => typeof n === "bigint" && _0n$3 <= n;
function inRange(n, min, max) {
	return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
function aInRange(title, n, min, max) {
	if (!inRange(n, min, max)) throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
function bitLen(n) {
	let len;
	for (len = 0; n > _0n$3; n >>= _1n$3, len += 1);
	return len;
}
const bitMask = (n) => (_1n$3 << BigInt(n)) - _1n$3;
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
	if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
	if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
	if (typeof hmacFn !== "function") throw new Error("hmacFn must be a function");
	const u8n = (len) => new Uint8Array(len);
	const u8of = (byte) => Uint8Array.of(byte);
	let v = u8n(hashLen);
	let k = u8n(hashLen);
	let i$1 = 0;
	const reset = () => {
		v.fill(1);
		k.fill(0);
		i$1 = 0;
	};
	const h$1 = (...b$1) => hmacFn(k, v, ...b$1);
	const reseed = (seed = u8n(0)) => {
		k = h$1(u8of(0), seed);
		v = h$1();
		if (seed.length === 0) return;
		k = h$1(u8of(1), seed);
		v = h$1();
	};
	const gen = () => {
		if (i$1++ >= 1e3) throw new Error("drbg: tried 1000 values");
		let len = 0;
		const out = [];
		while (len < qByteLen) {
			v = h$1();
			const sl = v.slice();
			out.push(sl);
			len += v.length;
		}
		return concatBytes(...out);
	};
	const genUntil = (seed, pred) => {
		reset();
		reseed(seed);
		let res = void 0;
		while (!(res = pred(gen()))) reseed();
		reset();
		return res;
	};
	return genUntil;
}
function _validateObject(object, fields, optFields = {}) {
	if (!object || typeof object !== "object") throw new Error("expected valid options object");
	function checkField(fieldName, expectedType, isOpt) {
		const val = object[fieldName];
		if (isOpt && val === void 0) return;
		const current = typeof val;
		if (current !== expectedType || val === null) throw new Error(`param "${fieldName}" is invalid: expected ${expectedType}, got ${current}`);
	}
	Object.entries(fields).forEach(([k, v]) => checkField(k, v, false));
	Object.entries(optFields).forEach(([k, v]) => checkField(k, v, true));
}
function memoized(fn) {
	const map = /* @__PURE__ */ new WeakMap();
	return (arg, ...args) => {
		const val = map.get(arg);
		if (val !== void 0) return val;
		const computed = fn(arg, ...args);
		map.set(arg, computed);
		return computed;
	};
}
var bigIntSuffix = "#__bigint";
function stringify(value, replacer, space) {
	return JSON.stringify(value, (key, value$1) => {
		if (typeof replacer === "function") return replacer(key, value$1);
		if (typeof value$1 === "bigint") return value$1.toString() + bigIntSuffix;
		return value$1;
	}, space);
}
function assertSize$1(bytes, size_) {
	if (size$1(bytes) > size_) throw new SizeOverflowError({
		givenSize: size$1(bytes),
		maxSize: size_
	});
}
function assertStartOffset$1(value, start) {
	if (typeof start === "number" && start > 0 && start > size$1(value) - 1) throw new SliceOffsetOutOfBoundsError({
		offset: start,
		position: "start",
		size: size$1(value)
	});
}
function assertEndOffset$1(value, start, end) {
	if (typeof start === "number" && typeof end === "number" && size$1(value) !== end - start) throw new SliceOffsetOutOfBoundsError({
		offset: end,
		position: "end",
		size: size$1(value)
	});
}
const charCodeMap = {
	zero: 48,
	nine: 57,
	A: 65,
	F: 70,
	a: 97,
	f: 102
};
function charCodeToBase16(char) {
	if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
	if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
	if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
}
function assertSize(hex, size_) {
	if (size$2(hex) > size_) throw new SizeOverflowError$1({
		givenSize: size$2(hex),
		maxSize: size_
	});
}
function assertStartOffset(value, start) {
	if (typeof start === "number" && start > 0 && start > size$2(value) - 1) throw new SliceOffsetOutOfBoundsError$1({
		offset: start,
		position: "start",
		size: size$2(value)
	});
}
function assertEndOffset(value, start, end) {
	if (typeof start === "number" && typeof end === "number" && size$2(value) !== end - start) throw new SliceOffsetOutOfBoundsError$1({
		offset: end,
		position: "end",
		size: size$2(value)
	});
}
function pad$1(hex_, options = {}) {
	const { dir, size: size$6 = 32 } = options;
	if (size$6 === 0) return hex_;
	const hex = hex_.replace("0x", "");
	if (hex.length > size$6 * 2) throw new SizeExceedsPaddingSizeError({
		size: Math.ceil(hex.length / 2),
		targetSize: size$6,
		type: "Hex"
	});
	return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size$6 * 2, "0")}`;
}
var encoder = /* @__PURE__ */ new TextEncoder();
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i$1) => i$1.toString(16).padStart(2, "0"));
function assert$3(value, options = {}) {
	const { strict = false } = options;
	if (!value) throw new InvalidHexTypeError(value);
	if (typeof value !== "string") throw new InvalidHexTypeError(value);
	if (strict) {
		if (!/^0x[0-9a-fA-F]*$/.test(value)) throw new InvalidHexValueError(value);
	}
	if (!value.startsWith("0x")) throw new InvalidHexValueError(value);
}
function concat(...values) {
	return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
function from$2(value) {
	if (value instanceof Uint8Array) return fromBytes$2(value);
	if (Array.isArray(value)) return fromBytes$2(new Uint8Array(value));
	return value;
}
function fromBytes$2(value, options = {}) {
	let string = "";
	for (let i$1 = 0; i$1 < value.length; i$1++) string += hexes[value[i$1]];
	const hex = `0x${string}`;
	if (typeof options.size === "number") {
		assertSize(hex, options.size);
		return padRight(hex, options.size);
	}
	return hex;
}
function fromNumber(value, options = {}) {
	const { signed, size: size$6 } = options;
	const value_ = BigInt(value);
	let maxValue;
	if (size$6) if (signed) maxValue = (1n << BigInt(size$6) * 8n - 1n) - 1n;
	else maxValue = 2n ** (BigInt(size$6) * 8n) - 1n;
	else if (typeof value === "number") maxValue = BigInt(Number.MAX_SAFE_INTEGER);
	const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
	if (maxValue && value_ > maxValue || value_ < minValue) {
		const suffix = typeof value === "bigint" ? "n" : "";
		throw new IntegerOutOfRangeError({
			max: maxValue ? `${maxValue}${suffix}` : void 0,
			min: `${minValue}${suffix}`,
			signed,
			size: size$6,
			value: `${value}${suffix}`
		});
	}
	const hex = `0x${(signed && value_ < 0 ? (1n << BigInt(size$6 * 8)) + BigInt(value_) : value_).toString(16)}`;
	if (size$6) return padLeft(hex, size$6);
	return hex;
}
function fromString(value, options = {}) {
	return fromBytes$2(encoder.encode(value), options);
}
function padLeft(value, size$6) {
	return pad$1(value, {
		dir: "left",
		size: size$6
	});
}
function padRight(value, size$6) {
	return pad$1(value, {
		dir: "right",
		size: size$6
	});
}
function slice$2(value, start, end, options = {}) {
	const { strict } = options;
	assertStartOffset(value, start);
	const value_ = `0x${value.replace("0x", "").slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
	if (strict) assertEndOffset(value_, start, end);
	return value_;
}
function size$2(value) {
	return Math.ceil((value.length - 2) / 2);
}
function toBigInt$1(hex, options = {}) {
	const { signed } = options;
	if (options.size) assertSize(hex, options.size);
	const value = BigInt(hex);
	if (!signed) return value;
	const size$6 = (hex.length - 2) / 2;
	const max_unsigned = (1n << BigInt(size$6) * 8n) - 1n;
	const max_signed = max_unsigned >> 1n;
	if (value <= max_signed) return value;
	return value - max_unsigned - 1n;
}
function validate$1(value, options = {}) {
	const { strict = false } = options;
	try {
		assert$3(value, { strict });
		return true;
	} catch {
		return false;
	}
}
var IntegerOutOfRangeError = class extends BaseError$1 {
	constructor({ max, min, signed, size: size$6, value }) {
		super(`Number \`${value}\` is not in safe${size$6 ? ` ${size$6 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.IntegerOutOfRangeError"
		});
	}
};
var InvalidHexTypeError = class extends BaseError$1 {
	constructor(value) {
		super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, { metaMessages: ["Hex types must be represented as `\"0x${string}\"`."] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.InvalidHexTypeError"
		});
	}
};
var InvalidHexValueError = class extends BaseError$1 {
	constructor(value) {
		super(`Value \`${value}\` is an invalid hex value.`, { metaMessages: ["Hex values must start with `\"0x\"` and contain only hexadecimal characters (0-9, a-f, A-F)."] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.InvalidHexValueError"
		});
	}
};
var SizeOverflowError$1 = class extends BaseError$1 {
	constructor({ givenSize, maxSize }) {
		super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.SizeOverflowError"
		});
	}
};
var SliceOffsetOutOfBoundsError$1 = class extends BaseError$1 {
	constructor({ offset, position, size: size$6 }) {
		super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size$6}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.SliceOffsetOutOfBoundsError"
		});
	}
};
var SizeExceedsPaddingSizeError = class extends BaseError$1 {
	constructor({ size: size$6, targetSize, type: type$1 }) {
		super(`${type$1.charAt(0).toUpperCase()}${type$1.slice(1).toLowerCase()} size (\`${size$6}\`) exceeds padding size (\`${targetSize}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.SizeExceedsPaddingSizeError"
		});
	}
};
function assert$2(value) {
	if (value instanceof Uint8Array) return;
	if (!value) throw new InvalidBytesTypeError(value);
	if (typeof value !== "object") throw new InvalidBytesTypeError(value);
	if (!("BYTES_PER_ELEMENT" in value)) throw new InvalidBytesTypeError(value);
	if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== "Uint8Array") throw new InvalidBytesTypeError(value);
}
function from$1(value) {
	if (value instanceof Uint8Array) return value;
	if (typeof value === "string") return fromHex$3(value);
	return fromArray(value);
}
function fromArray(value) {
	return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromHex$3(value, options = {}) {
	const { size: size$6 } = options;
	let hex = value;
	if (size$6) {
		assertSize(value, size$6);
		hex = padRight(value, size$6);
	}
	let hexString = hex.slice(2);
	if (hexString.length % 2) hexString = `0${hexString}`;
	const length = hexString.length / 2;
	const bytes = new Uint8Array(length);
	for (let index$1 = 0, j = 0; index$1 < length; index$1++) {
		const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
		const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
		if (nibbleLeft === void 0 || nibbleRight === void 0) throw new BaseError$1(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
		bytes[index$1] = nibbleLeft * 16 + nibbleRight;
	}
	return bytes;
}
function size$1(value) {
	return value.length;
}
function slice$1(value, start, end, options = {}) {
	const { strict } = options;
	assertStartOffset$1(value, start);
	const value_ = value.slice(start, end);
	if (strict) assertEndOffset$1(value_, start, end);
	return value_;
}
function toBigInt(bytes, options = {}) {
	const { size: size$6 } = options;
	if (typeof size$6 !== "undefined") assertSize$1(bytes, size$6);
	const hex = fromBytes$2(bytes, options);
	return toBigInt$1(hex, options);
}
function validate(value) {
	try {
		assert$2(value);
		return true;
	} catch {
		return false;
	}
}
var InvalidBytesTypeError = class extends BaseError$1 {
	constructor(value) {
		super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, { metaMessages: ["Bytes values must be of type `Bytes`."] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Bytes.InvalidBytesTypeError"
		});
	}
};
var SizeOverflowError = class extends BaseError$1 {
	constructor({ givenSize, maxSize }) {
		super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Bytes.SizeOverflowError"
		});
	}
};
var SliceOffsetOutOfBoundsError = class extends BaseError$1 {
	constructor({ offset, position, size: size$6 }) {
		super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size$6}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Bytes.SliceOffsetOutOfBoundsError"
		});
	}
};
function sha256$2(value, options = {}) {
	const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
	const bytes = sha256$1(from$1(value));
	if (as === "Bytes") return bytes;
	return fromBytes$2(bytes);
}
function assert$1(publicKey, options = {}) {
	const { compressed } = options;
	const { prefix, x, y: y$1 } = publicKey;
	if (compressed === false || typeof x === "bigint" && typeof y$1 === "bigint") {
		if (prefix !== 4) throw new InvalidPrefixError({
			prefix,
			cause: new InvalidUncompressedPrefixError()
		});
		return;
	}
	if (compressed === true || typeof x === "bigint" && typeof y$1 === "undefined") {
		if (prefix !== 3 && prefix !== 2) throw new InvalidPrefixError({
			prefix,
			cause: new InvalidCompressedPrefixError()
		});
		return;
	}
	throw new InvalidError({ publicKey });
}
function from(value) {
	const publicKey = (() => {
		if (validate$1(value)) return fromHex$2(value);
		if (validate(value)) return fromBytes$1(value);
		const { prefix, x, y: y$1 } = value;
		if (typeof x === "bigint" && typeof y$1 === "bigint") return {
			prefix: prefix ?? 4,
			x,
			y: y$1
		};
		return {
			prefix,
			x
		};
	})();
	assert$1(publicKey);
	return publicKey;
}
function fromBytes$1(publicKey) {
	return fromHex$2(fromBytes$2(publicKey));
}
function fromHex$2(publicKey) {
	if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68) throw new InvalidSerializedSizeError$1({ publicKey });
	if (publicKey.length === 130) {
		const x$1 = BigInt(slice$2(publicKey, 0, 32));
		const y$1 = BigInt(slice$2(publicKey, 32, 64));
		return {
			prefix: 4,
			x: x$1,
			y: y$1
		};
	}
	if (publicKey.length === 132) {
		const prefix$1 = Number(slice$2(publicKey, 0, 1));
		const x$1 = BigInt(slice$2(publicKey, 1, 33));
		const y$1 = BigInt(slice$2(publicKey, 33, 65));
		return {
			prefix: prefix$1,
			x: x$1,
			y: y$1
		};
	}
	const prefix = Number(slice$2(publicKey, 0, 1));
	const x = BigInt(slice$2(publicKey, 1, 33));
	return {
		prefix,
		x
	};
}
function toHex$2(publicKey, options = {}) {
	assert$1(publicKey);
	const { prefix, x, y: y$1 } = publicKey;
	const { includePrefix = true } = options;
	return concat(includePrefix ? fromNumber(prefix, { size: 1 }) : "0x", fromNumber(x, { size: 32 }), typeof y$1 === "bigint" ? fromNumber(y$1, { size: 32 }) : "0x");
}
var InvalidError = class extends BaseError$1 {
	constructor({ publicKey }) {
		super(`Value \`${stringify(publicKey)}\` is not a valid public key.`, { metaMessages: [
			"Public key must contain:",
			"- an `x` and `prefix` value (compressed)",
			"- an `x`, `y`, and `prefix` value (uncompressed)"
		] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidError"
		});
	}
};
var InvalidPrefixError = class extends BaseError$1 {
	constructor({ prefix, cause }) {
		super(`Prefix "${prefix}" is invalid.`, { cause });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidPrefixError"
		});
	}
};
var InvalidCompressedPrefixError = class extends BaseError$1 {
	constructor() {
		super("Prefix must be 2 or 3 for compressed public keys.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidCompressedPrefixError"
		});
	}
};
var InvalidUncompressedPrefixError = class extends BaseError$1 {
	constructor() {
		super("Prefix must be 4 for uncompressed public keys.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidUncompressedPrefixError"
		});
	}
};
var InvalidSerializedSizeError$1 = class extends BaseError$1 {
	constructor({ publicKey }) {
		super(`Value \`${publicKey}\` is an invalid public key size.`, { metaMessages: ["Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).", `Received ${size$2(from$2(publicKey))} bytes.`] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidSerializedSizeError"
		});
	}
};
2n ** (8n - 1n) - 1n;
2n ** (16n - 1n) - 1n;
2n ** (24n - 1n) - 1n;
2n ** (32n - 1n) - 1n;
2n ** (40n - 1n) - 1n;
2n ** (48n - 1n) - 1n;
2n ** (56n - 1n) - 1n;
2n ** (64n - 1n) - 1n;
2n ** (72n - 1n) - 1n;
2n ** (80n - 1n) - 1n;
2n ** (88n - 1n) - 1n;
2n ** (96n - 1n) - 1n;
2n ** (104n - 1n) - 1n;
2n ** (112n - 1n) - 1n;
2n ** (120n - 1n) - 1n;
2n ** (128n - 1n) - 1n;
2n ** (136n - 1n) - 1n;
2n ** (144n - 1n) - 1n;
2n ** (152n - 1n) - 1n;
2n ** (160n - 1n) - 1n;
2n ** (168n - 1n) - 1n;
2n ** (176n - 1n) - 1n;
2n ** (184n - 1n) - 1n;
2n ** (192n - 1n) - 1n;
2n ** (200n - 1n) - 1n;
2n ** (208n - 1n) - 1n;
2n ** (216n - 1n) - 1n;
2n ** (224n - 1n) - 1n;
2n ** (232n - 1n) - 1n;
2n ** (240n - 1n) - 1n;
2n ** (248n - 1n) - 1n;
2n ** (256n - 1n) - 1n;
-(2n ** (8n - 1n));
-(2n ** (16n - 1n));
-(2n ** (24n - 1n));
-(2n ** (32n - 1n));
-(2n ** (40n - 1n));
-(2n ** (48n - 1n));
-(2n ** (56n - 1n));
-(2n ** (64n - 1n));
-(2n ** (72n - 1n));
-(2n ** (80n - 1n));
-(2n ** (88n - 1n));
-(2n ** (96n - 1n));
-(2n ** (104n - 1n));
-(2n ** (112n - 1n));
-(2n ** (120n - 1n));
-(2n ** (128n - 1n));
-(2n ** (136n - 1n));
-(2n ** (144n - 1n));
-(2n ** (152n - 1n));
-(2n ** (160n - 1n));
-(2n ** (168n - 1n));
-(2n ** (176n - 1n));
-(2n ** (184n - 1n));
-(2n ** (192n - 1n));
-(2n ** (200n - 1n));
-(2n ** (208n - 1n));
-(2n ** (216n - 1n));
-(2n ** (224n - 1n));
-(2n ** (232n - 1n));
-(2n ** (240n - 1n));
-(2n ** (248n - 1n));
-(2n ** (256n - 1n));
const maxUint256 = 2n ** 256n - 1n;
var HMAC = class extends Hash {
	constructor(hash, _key) {
		super();
		this.finished = false;
		this.destroyed = false;
		ahash(hash);
		const key = toBytes(_key);
		this.iHash = hash.create();
		if (typeof this.iHash.update !== "function") throw new Error("Expected instance of class which extends utils.Hash");
		this.blockLen = this.iHash.blockLen;
		this.outputLen = this.iHash.outputLen;
		const blockLen = this.blockLen;
		const pad$2 = new Uint8Array(blockLen);
		pad$2.set(key.length > blockLen ? hash.create().update(key).digest() : key);
		for (let i$1 = 0; i$1 < pad$2.length; i$1++) pad$2[i$1] ^= 54;
		this.iHash.update(pad$2);
		this.oHash = hash.create();
		for (let i$1 = 0; i$1 < pad$2.length; i$1++) pad$2[i$1] ^= 106;
		this.oHash.update(pad$2);
		clean(pad$2);
	}
	update(buf) {
		aexists(this);
		this.iHash.update(buf);
		return this;
	}
	digestInto(out) {
		aexists(this);
		abytes(out, this.outputLen);
		this.finished = true;
		this.iHash.digestInto(out);
		this.oHash.update(out);
		this.oHash.digestInto(out);
		this.destroy();
	}
	digest() {
		const out = new Uint8Array(this.oHash.outputLen);
		this.digestInto(out);
		return out;
	}
	_cloneInto(to) {
		to || (to = Object.create(Object.getPrototypeOf(this), {}));
		const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
		to = to;
		to.finished = finished;
		to.destroyed = destroyed;
		to.blockLen = blockLen;
		to.outputLen = outputLen;
		to.oHash = oHash._cloneInto(to.oHash);
		to.iHash = iHash._cloneInto(to.iHash);
		return to;
	}
	clone() {
		return this._cloneInto();
	}
	destroy() {
		this.destroyed = true;
		this.oHash.destroy();
		this.iHash.destroy();
	}
};
const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key) => new HMAC(hash, key);
var _0n$2 = BigInt(0), _1n$2 = BigInt(1), _2n$1 = /* @__PURE__ */ BigInt(2), _3n$1 = /* @__PURE__ */ BigInt(3);
var _4n$1 = /* @__PURE__ */ BigInt(4), _5n = /* @__PURE__ */ BigInt(5), _7n = /* @__PURE__ */ BigInt(7);
var _8n = /* @__PURE__ */ BigInt(8), _9n = /* @__PURE__ */ BigInt(9), _16n = /* @__PURE__ */ BigInt(16);
function mod(a, b$1) {
	const result = a % b$1;
	return result >= _0n$2 ? result : b$1 + result;
}
function invert(number, modulo) {
	if (number === _0n$2) throw new Error("invert: expected non-zero number");
	if (modulo <= _0n$2) throw new Error("invert: expected positive modulus, got " + modulo);
	let a = mod(number, modulo);
	let b$1 = modulo;
	let x = _0n$2, y$1 = _1n$2, u$1 = _1n$2, v = _0n$2;
	while (a !== _0n$2) {
		const q = b$1 / a;
		const r$1 = b$1 % a;
		const m = x - u$1 * q;
		const n = y$1 - v * q;
		b$1 = a, a = r$1, x = u$1, y$1 = v, u$1 = m, v = n;
	}
	if (b$1 !== _1n$2) throw new Error("invert: does not exist");
	return mod(x, modulo);
}
function assertIsSquare(Fp, root, n) {
	if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
}
function sqrt3mod4(Fp, n) {
	const p1div4 = (Fp.ORDER + _1n$2) / _4n$1;
	const root = Fp.pow(n, p1div4);
	assertIsSquare(Fp, root, n);
	return root;
}
function sqrt5mod8(Fp, n) {
	const p5div8 = (Fp.ORDER - _5n) / _8n;
	const n2 = Fp.mul(n, _2n$1);
	const v = Fp.pow(n2, p5div8);
	const nv = Fp.mul(n, v);
	const i$1 = Fp.mul(Fp.mul(nv, _2n$1), v);
	const root = Fp.mul(nv, Fp.sub(i$1, Fp.ONE));
	assertIsSquare(Fp, root, n);
	return root;
}
function sqrt9mod16(P) {
	const Fp_ = Field(P);
	const tn = tonelliShanks(P);
	const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
	const c2 = tn(Fp_, c1);
	const c3 = tn(Fp_, Fp_.neg(c1));
	const c4 = (P + _7n) / _16n;
	return (Fp, n) => {
		let tv1 = Fp.pow(n, c4);
		let tv2 = Fp.mul(tv1, c1);
		const tv3 = Fp.mul(tv1, c2);
		const tv4 = Fp.mul(tv1, c3);
		const e1 = Fp.eql(Fp.sqr(tv2), n);
		const e2 = Fp.eql(Fp.sqr(tv3), n);
		tv1 = Fp.cmov(tv1, tv2, e1);
		tv2 = Fp.cmov(tv4, tv3, e2);
		const e3 = Fp.eql(Fp.sqr(tv2), n);
		const root = Fp.cmov(tv1, tv2, e3);
		assertIsSquare(Fp, root, n);
		return root;
	};
}
function tonelliShanks(P) {
	if (P < _3n$1) throw new Error("sqrt is not defined for small field");
	let Q = P - _1n$2;
	let S = 0;
	while (Q % _2n$1 === _0n$2) {
		Q /= _2n$1;
		S++;
	}
	let Z = _2n$1;
	const _Fp = Field(P);
	while (FpLegendre(_Fp, Z) === 1) if (Z++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
	if (S === 1) return sqrt3mod4;
	let cc = _Fp.pow(Z, Q);
	const Q1div2 = (Q + _1n$2) / _2n$1;
	return function tonelliSlow(Fp, n) {
		if (Fp.is0(n)) return n;
		if (FpLegendre(Fp, n) !== 1) throw new Error("Cannot find square root");
		let M = S;
		let c = Fp.mul(Fp.ONE, cc);
		let t = Fp.pow(n, Q);
		let R = Fp.pow(n, Q1div2);
		while (!Fp.eql(t, Fp.ONE)) {
			if (Fp.is0(t)) return Fp.ZERO;
			let i$1 = 1;
			let t_tmp = Fp.sqr(t);
			while (!Fp.eql(t_tmp, Fp.ONE)) {
				i$1++;
				t_tmp = Fp.sqr(t_tmp);
				if (i$1 === M) throw new Error("Cannot find square root");
			}
			const exponent = _1n$2 << BigInt(M - i$1 - 1);
			const b$1 = Fp.pow(c, exponent);
			M = i$1;
			c = Fp.sqr(b$1);
			t = Fp.mul(t, c);
			R = Fp.mul(R, b$1);
		}
		return R;
	};
}
function FpSqrt(P) {
	if (P % _4n$1 === _3n$1) return sqrt3mod4;
	if (P % _8n === _5n) return sqrt5mod8;
	if (P % _16n === _9n) return sqrt9mod16(P);
	return tonelliShanks(P);
}
var FIELD_FIELDS = [
	"create",
	"isValid",
	"is0",
	"neg",
	"inv",
	"sqrt",
	"sqr",
	"eql",
	"add",
	"sub",
	"mul",
	"pow",
	"div",
	"addN",
	"subN",
	"mulN",
	"sqrN"
];
function validateField(field) {
	const opts = FIELD_FIELDS.reduce((map, val) => {
		map[val] = "function";
		return map;
	}, {
		ORDER: "bigint",
		MASK: "bigint",
		BYTES: "number",
		BITS: "number"
	});
	_validateObject(field, opts);
	return field;
}
function FpPow(Fp, num, power) {
	if (power < _0n$2) throw new Error("invalid exponent, negatives unsupported");
	if (power === _0n$2) return Fp.ONE;
	if (power === _1n$2) return num;
	let p = Fp.ONE;
	let d = num;
	while (power > _0n$2) {
		if (power & _1n$2) p = Fp.mul(p, d);
		d = Fp.sqr(d);
		power >>= _1n$2;
	}
	return p;
}
function FpInvertBatch(Fp, nums, passZero = false) {
	const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
	const multipliedAcc = nums.reduce((acc, num, i$1) => {
		if (Fp.is0(num)) return acc;
		inverted[i$1] = acc;
		return Fp.mul(acc, num);
	}, Fp.ONE);
	const invertedAcc = Fp.inv(multipliedAcc);
	nums.reduceRight((acc, num, i$1) => {
		if (Fp.is0(num)) return acc;
		inverted[i$1] = Fp.mul(acc, inverted[i$1]);
		return Fp.mul(acc, num);
	}, invertedAcc);
	return inverted;
}
function FpLegendre(Fp, n) {
	const p1mod2 = (Fp.ORDER - _1n$2) / _2n$1;
	const powered = Fp.pow(n, p1mod2);
	const yes = Fp.eql(powered, Fp.ONE);
	const zero = Fp.eql(powered, Fp.ZERO);
	const no = Fp.eql(powered, Fp.neg(Fp.ONE));
	if (!yes && !zero && !no) throw new Error("invalid Legendre symbol result");
	return yes ? 1 : zero ? 0 : -1;
}
function nLength(n, nBitLength) {
	if (nBitLength !== void 0) anumber(nBitLength);
	const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
	const nByteLength = Math.ceil(_nBitLength / 8);
	return {
		nBitLength: _nBitLength,
		nByteLength
	};
}
function Field(ORDER, bitLenOrOpts, isLE = false, opts = {}) {
	if (ORDER <= _0n$2) throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
	let _nbitLength = void 0;
	let _sqrt = void 0;
	let modFromBytes = false;
	let allowedLengths = void 0;
	if (typeof bitLenOrOpts === "object" && bitLenOrOpts != null) {
		if (opts.sqrt || isLE) throw new Error("cannot specify opts in two arguments");
		const _opts = bitLenOrOpts;
		if (_opts.BITS) _nbitLength = _opts.BITS;
		if (_opts.sqrt) _sqrt = _opts.sqrt;
		if (typeof _opts.isLE === "boolean") isLE = _opts.isLE;
		if (typeof _opts.modFromBytes === "boolean") modFromBytes = _opts.modFromBytes;
		allowedLengths = _opts.allowedLengths;
	} else {
		if (typeof bitLenOrOpts === "number") _nbitLength = bitLenOrOpts;
		if (opts.sqrt) _sqrt = opts.sqrt;
	}
	const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, _nbitLength);
	if (BYTES > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
	let sqrtP;
	const f$1 = Object.freeze({
		ORDER,
		isLE,
		BITS,
		BYTES,
		MASK: bitMask(BITS),
		ZERO: _0n$2,
		ONE: _1n$2,
		allowedLengths,
		create: (num) => mod(num, ORDER),
		isValid: (num) => {
			if (typeof num !== "bigint") throw new Error("invalid field element: expected bigint, got " + typeof num);
			return _0n$2 <= num && num < ORDER;
		},
		is0: (num) => num === _0n$2,
		isValidNot0: (num) => !f$1.is0(num) && f$1.isValid(num),
		isOdd: (num) => (num & _1n$2) === _1n$2,
		neg: (num) => mod(-num, ORDER),
		eql: (lhs, rhs) => lhs === rhs,
		sqr: (num) => mod(num * num, ORDER),
		add: (lhs, rhs) => mod(lhs + rhs, ORDER),
		sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
		mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
		pow: (num, power) => FpPow(f$1, num, power),
		div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
		sqrN: (num) => num * num,
		addN: (lhs, rhs) => lhs + rhs,
		subN: (lhs, rhs) => lhs - rhs,
		mulN: (lhs, rhs) => lhs * rhs,
		inv: (num) => invert(num, ORDER),
		sqrt: _sqrt || ((n) => {
			if (!sqrtP) sqrtP = FpSqrt(ORDER);
			return sqrtP(f$1, n);
		}),
		toBytes: (num) => isLE ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
		fromBytes: (bytes, skipValidation = true) => {
			if (allowedLengths) {
				if (!allowedLengths.includes(bytes.length) || bytes.length > BYTES) throw new Error("Field.fromBytes: expected " + allowedLengths + " bytes, got " + bytes.length);
				const padded = new Uint8Array(BYTES);
				padded.set(bytes, isLE ? 0 : padded.length - bytes.length);
				bytes = padded;
			}
			if (bytes.length !== BYTES) throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
			let scalar = isLE ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
			if (modFromBytes) scalar = mod(scalar, ORDER);
			if (!skipValidation) {
				if (!f$1.isValid(scalar)) throw new Error("invalid field element: outside of range 0..ORDER");
			}
			return scalar;
		},
		invertBatch: (lst) => FpInvertBatch(f$1, lst),
		cmov: (a, b$1, c) => c ? b$1 : a
	});
	return Object.freeze(f$1);
}
function getFieldBytesLength(fieldOrder) {
	if (typeof fieldOrder !== "bigint") throw new Error("field order must be bigint");
	const bitLength = fieldOrder.toString(2).length;
	return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
	const length = getFieldBytesLength(fieldOrder);
	return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE = false) {
	const len = key.length;
	const fieldLen = getFieldBytesLength(fieldOrder);
	const minLen = getMinHashLength(fieldOrder);
	if (len < 16 || len < minLen || len > 1024) throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
	const num = isLE ? bytesToNumberLE(key) : bytesToNumberBE(key);
	const reduced = mod(num, fieldOrder - _1n$2) + _1n$2;
	return isLE ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}
var _0n$1 = BigInt(0);
var _1n$1 = BigInt(1);
function negateCt(condition, item) {
	const neg = item.negate();
	return condition ? neg : item;
}
function normalizeZ(c, points) {
	const invertedZs = FpInvertBatch(c.Fp, points.map((p) => p.Z));
	return points.map((p, i$1) => c.fromAffine(p.toAffine(invertedZs[i$1])));
}
function validateW(W, bits) {
	if (!Number.isSafeInteger(W) || W <= 0 || W > bits) throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts(W, scalarBits) {
	validateW(W, scalarBits);
	const windows = Math.ceil(scalarBits / W) + 1;
	const windowSize = 2 ** (W - 1);
	const maxNumber = 2 ** W;
	const mask = bitMask(W);
	const shiftBy = BigInt(W);
	return {
		windows,
		windowSize,
		mask,
		maxNumber,
		shiftBy
	};
}
function calcOffsets(n, window$1, wOpts) {
	const { windowSize, mask, maxNumber, shiftBy } = wOpts;
	let wbits = Number(n & mask);
	let nextN = n >> shiftBy;
	if (wbits > windowSize) {
		wbits -= maxNumber;
		nextN += _1n$1;
	}
	const offsetStart = window$1 * windowSize;
	const offset = offsetStart + Math.abs(wbits) - 1;
	const isZero = wbits === 0;
	const isNeg = wbits < 0;
	const isNegF = window$1 % 2 !== 0;
	return {
		nextN,
		offset,
		isZero,
		isNeg,
		isNegF,
		offsetF: offsetStart
	};
}
function validateMSMPoints(points, c) {
	if (!Array.isArray(points)) throw new Error("array expected");
	points.forEach((p, i$1) => {
		if (!(p instanceof c)) throw new Error("invalid point at index " + i$1);
	});
}
function validateMSMScalars(scalars, field) {
	if (!Array.isArray(scalars)) throw new Error("array of scalars expected");
	scalars.forEach((s, i$1) => {
		if (!field.isValid(s)) throw new Error("invalid scalar at index " + i$1);
	});
}
var pointPrecomputes = /* @__PURE__ */ new WeakMap();
var pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getW(P) {
	return pointWindowSizes.get(P) || 1;
}
function assert0(n) {
	if (n !== _0n$1) throw new Error("invalid wNAF");
}
var wNAF = class {
	constructor(Point, bits) {
		this.BASE = Point.BASE;
		this.ZERO = Point.ZERO;
		this.Fn = Point.Fn;
		this.bits = bits;
	}
	_unsafeLadder(elm, n, p = this.ZERO) {
		let d = elm;
		while (n > _0n$1) {
			if (n & _1n$1) p = p.add(d);
			d = d.double();
			n >>= _1n$1;
		}
		return p;
	}
	precomputeWindow(point, W) {
		const { windows, windowSize } = calcWOpts(W, this.bits);
		const points = [];
		let p = point;
		let base$1 = p;
		for (let window$1 = 0; window$1 < windows; window$1++) {
			base$1 = p;
			points.push(base$1);
			for (let i$1 = 1; i$1 < windowSize; i$1++) {
				base$1 = base$1.add(p);
				points.push(base$1);
			}
			p = base$1.double();
		}
		return points;
	}
	wNAF(W, precomputes, n) {
		if (!this.Fn.isValid(n)) throw new Error("invalid scalar");
		let p = this.ZERO;
		let f$1 = this.BASE;
		const wo = calcWOpts(W, this.bits);
		for (let window$1 = 0; window$1 < wo.windows; window$1++) {
			const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window$1, wo);
			n = nextN;
			if (isZero) f$1 = f$1.add(negateCt(isNegF, precomputes[offsetF]));
			else p = p.add(negateCt(isNeg, precomputes[offset]));
		}
		assert0(n);
		return {
			p,
			f: f$1
		};
	}
	wNAFUnsafe(W, precomputes, n, acc = this.ZERO) {
		const wo = calcWOpts(W, this.bits);
		for (let window$1 = 0; window$1 < wo.windows; window$1++) {
			if (n === _0n$1) break;
			const { nextN, offset, isZero, isNeg } = calcOffsets(n, window$1, wo);
			n = nextN;
			if (isZero) continue;
			else {
				const item = precomputes[offset];
				acc = acc.add(isNeg ? item.negate() : item);
			}
		}
		assert0(n);
		return acc;
	}
	getPrecomputes(W, point, transform) {
		let comp = pointPrecomputes.get(point);
		if (!comp) {
			comp = this.precomputeWindow(point, W);
			if (W !== 1) {
				if (typeof transform === "function") comp = transform(comp);
				pointPrecomputes.set(point, comp);
			}
		}
		return comp;
	}
	cached(point, scalar, transform) {
		const W = getW(point);
		return this.wNAF(W, this.getPrecomputes(W, point, transform), scalar);
	}
	unsafe(point, scalar, transform, prev) {
		const W = getW(point);
		if (W === 1) return this._unsafeLadder(point, scalar, prev);
		return this.wNAFUnsafe(W, this.getPrecomputes(W, point, transform), scalar, prev);
	}
	createCache(P, W) {
		validateW(W, this.bits);
		pointWindowSizes.set(P, W);
		pointPrecomputes.delete(P);
	}
	hasCache(elm) {
		return getW(elm) !== 1;
	}
};
function mulEndoUnsafe(Point, point, k1, k2) {
	let acc = point;
	let p1 = Point.ZERO;
	let p2 = Point.ZERO;
	while (k1 > _0n$1 || k2 > _0n$1) {
		if (k1 & _1n$1) p1 = p1.add(acc);
		if (k2 & _1n$1) p2 = p2.add(acc);
		acc = acc.double();
		k1 >>= _1n$1;
		k2 >>= _1n$1;
	}
	return {
		p1,
		p2
	};
}
function pippenger(c, fieldN, points, scalars) {
	validateMSMPoints(points, c);
	validateMSMScalars(scalars, fieldN);
	const plength = points.length;
	const slength = scalars.length;
	if (plength !== slength) throw new Error("arrays of points and scalars must have equal length");
	const zero = c.ZERO;
	const wbits = bitLen(BigInt(plength));
	let windowSize = 1;
	if (wbits > 12) windowSize = wbits - 3;
	else if (wbits > 4) windowSize = wbits - 2;
	else if (wbits > 0) windowSize = 2;
	const MASK = bitMask(windowSize);
	const buckets = new Array(Number(MASK) + 1).fill(zero);
	const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
	let sum = zero;
	for (let i$1 = lastBits; i$1 >= 0; i$1 -= windowSize) {
		buckets.fill(zero);
		for (let j = 0; j < slength; j++) {
			const scalar = scalars[j];
			const wbits$1 = Number(scalar >> BigInt(i$1) & MASK);
			buckets[wbits$1] = buckets[wbits$1].add(points[j]);
		}
		let resI = zero;
		for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
			sumI = sumI.add(buckets[j]);
			resI = resI.add(sumI);
		}
		sum = sum.add(resI);
		if (i$1 !== 0) for (let j = 0; j < windowSize; j++) sum = sum.double();
	}
	return sum;
}
function createField(order, field, isLE) {
	if (field) {
		if (field.ORDER !== order) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
		validateField(field);
		return field;
	} else return Field(order, { isLE });
}
function _createCurveFields(type$1, CURVE, curveOpts = {}, FpFnLE) {
	if (FpFnLE === void 0) FpFnLE = type$1 === "edwards";
	if (!CURVE || typeof CURVE !== "object") throw new Error(`expected valid ${type$1} CURVE object`);
	for (const p of [
		"p",
		"n",
		"h"
	]) {
		const val = CURVE[p];
		if (!(typeof val === "bigint" && val > _0n$1)) throw new Error(`CURVE.${p} must be positive bigint`);
	}
	const Fp = createField(CURVE.p, curveOpts.Fp, FpFnLE);
	const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
	const params = [
		"Gx",
		"Gy",
		"a",
		type$1 === "weierstrass" ? "b" : "d"
	];
	for (const p of params) if (!Fp.isValid(CURVE[p])) throw new Error(`CURVE.${p} must be valid field element of CURVE.Fp`);
	CURVE = Object.freeze(Object.assign({}, CURVE));
	return {
		CURVE,
		Fp,
		Fn
	};
}
var divNearest = (num, den) => (num + (num >= 0 ? den : -den) / _2n) / den;
function _splitEndoScalar(k, basis, n) {
	const [[a1, b1], [a2, b2]] = basis;
	const c1 = divNearest(b2 * k, n);
	const c2 = divNearest(-b1 * k, n);
	let k1 = k - c1 * a1 - c2 * a2;
	let k2 = -c1 * b1 - c2 * b2;
	const k1neg = k1 < _0n;
	const k2neg = k2 < _0n;
	if (k1neg) k1 = -k1;
	if (k2neg) k2 = -k2;
	const MAX_NUM = bitMask(Math.ceil(bitLen(n) / 2)) + _1n;
	if (k1 < _0n || k1 >= MAX_NUM || k2 < _0n || k2 >= MAX_NUM) throw new Error("splitScalar (endomorphism): failed, k=" + k);
	return {
		k1neg,
		k1,
		k2neg,
		k2
	};
}
function validateSigFormat(format) {
	if (![
		"compact",
		"recovered",
		"der"
	].includes(format)) throw new Error("Signature format must be \"compact\", \"recovered\", or \"der\"");
	return format;
}
function validateSigOpts(opts, def) {
	const optsn = {};
	for (let optName of Object.keys(def)) optsn[optName] = opts[optName] === void 0 ? def[optName] : opts[optName];
	_abool2(optsn.lowS, "lowS");
	_abool2(optsn.prehash, "prehash");
	if (optsn.format !== void 0) validateSigFormat(optsn.format);
	return optsn;
}
var DERErr = class extends Error {
	constructor(m = "") {
		super(m);
	}
};
const DER = {
	Err: DERErr,
	_tlv: {
		encode: (tag, data) => {
			const { Err: E } = DER;
			if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
			if (data.length & 1) throw new E("tlv.encode: unpadded data");
			const dataLen = data.length / 2;
			const len = numberToHexUnpadded(dataLen);
			if (len.length / 2 & 128) throw new E("tlv.encode: long form length too big");
			const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
			return numberToHexUnpadded(tag) + lenLen + len + data;
		},
		decode(tag, data) {
			const { Err: E } = DER;
			let pos = 0;
			if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
			if (data.length < 2 || data[pos++] !== tag) throw new E("tlv.decode: wrong tlv");
			const first = data[pos++];
			const isLong = !!(first & 128);
			let length = 0;
			if (!isLong) length = first;
			else {
				const lenLen = first & 127;
				if (!lenLen) throw new E("tlv.decode(long): indefinite length not supported");
				if (lenLen > 4) throw new E("tlv.decode(long): byte length is too big");
				const lengthBytes = data.subarray(pos, pos + lenLen);
				if (lengthBytes.length !== lenLen) throw new E("tlv.decode: length bytes not complete");
				if (lengthBytes[0] === 0) throw new E("tlv.decode(long): zero leftmost byte");
				for (const b$1 of lengthBytes) length = length << 8 | b$1;
				pos += lenLen;
				if (length < 128) throw new E("tlv.decode(long): not minimal encoding");
			}
			const v = data.subarray(pos, pos + length);
			if (v.length !== length) throw new E("tlv.decode: wrong value length");
			return {
				v,
				l: data.subarray(pos + length)
			};
		}
	},
	_int: {
		encode(num) {
			const { Err: E } = DER;
			if (num < _0n) throw new E("integer: negative integers are not allowed");
			let hex = numberToHexUnpadded(num);
			if (Number.parseInt(hex[0], 16) & 8) hex = "00" + hex;
			if (hex.length & 1) throw new E("unexpected DER parsing assertion: unpadded hex");
			return hex;
		},
		decode(data) {
			const { Err: E } = DER;
			if (data[0] & 128) throw new E("invalid signature integer: negative");
			if (data[0] === 0 && !(data[1] & 128)) throw new E("invalid signature integer: unnecessary leading zero");
			return bytesToNumberBE(data);
		}
	},
	toSig(hex) {
		const { Err: E, _int: int, _tlv: tlv } = DER;
		const data = ensureBytes("signature", hex);
		const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
		if (seqLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
		const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
		const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
		if (sLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
		return {
			r: int.decode(rBytes),
			s: int.decode(sBytes)
		};
	},
	hexFromSig(sig) {
		const { _tlv: tlv, _int: int } = DER;
		const rs = tlv.encode(2, int.encode(sig.r));
		const ss = tlv.encode(2, int.encode(sig.s));
		const seq = rs + ss;
		return tlv.encode(48, seq);
	}
};
var _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3), _4n = BigInt(4);
function _normFnElement(Fn, key) {
	const { BYTES: expected } = Fn;
	let num;
	if (typeof key === "bigint") num = key;
	else {
		let bytes = ensureBytes("private key", key);
		try {
			num = Fn.fromBytes(bytes);
		} catch (error) {
			throw new Error(`invalid private key: expected ui8a of size ${expected}, got ${typeof key}`);
		}
	}
	if (!Fn.isValidNot0(num)) throw new Error("invalid private key: out of range [1..N-1]");
	return num;
}
function weierstrassN(params, extraOpts = {}) {
	const validated = _createCurveFields("weierstrass", params, extraOpts);
	const { Fp, Fn } = validated;
	let CURVE = validated.CURVE;
	const { h: cofactor, n: CURVE_ORDER } = CURVE;
	_validateObject(extraOpts, {}, {
		allowInfinityPoint: "boolean",
		clearCofactor: "function",
		isTorsionFree: "function",
		fromBytes: "function",
		toBytes: "function",
		endo: "object",
		wrapPrivateKey: "boolean"
	});
	const { endo } = extraOpts;
	if (endo) {
		if (!Fp.is0(CURVE.a) || typeof endo.beta !== "bigint" || !Array.isArray(endo.basises)) throw new Error("invalid endo: expected \"beta\": bigint and \"basises\": array");
	}
	const lengths = getWLengths(Fp, Fn);
	function assertCompressionIsSupported() {
		if (!Fp.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
	}
	function pointToBytes(_c, point, isCompressed) {
		const { x, y: y$1 } = point.toAffine();
		const bx = Fp.toBytes(x);
		_abool2(isCompressed, "isCompressed");
		if (isCompressed) {
			assertCompressionIsSupported();
			const hasEvenY = !Fp.isOdd(y$1);
			return concatBytes(pprefix(hasEvenY), bx);
		} else return concatBytes(Uint8Array.of(4), bx, Fp.toBytes(y$1));
	}
	function pointFromBytes(bytes) {
		_abytes2(bytes, void 0, "Point");
		const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
		const length = bytes.length;
		const head = bytes[0];
		const tail = bytes.subarray(1);
		if (length === comp && (head === 2 || head === 3)) {
			const x = Fp.fromBytes(tail);
			if (!Fp.isValid(x)) throw new Error("bad point: is not on curve, wrong x");
			const y2 = weierstrassEquation(x);
			let y$1;
			try {
				y$1 = Fp.sqrt(y2);
			} catch (sqrtError) {
				const err = sqrtError instanceof Error ? ": " + sqrtError.message : "";
				throw new Error("bad point: is not on curve, sqrt error" + err);
			}
			assertCompressionIsSupported();
			const isYOdd = Fp.isOdd(y$1);
			if ((head & 1) === 1 !== isYOdd) y$1 = Fp.neg(y$1);
			return {
				x,
				y: y$1
			};
		} else if (length === uncomp && head === 4) {
			const L = Fp.BYTES;
			const x = Fp.fromBytes(tail.subarray(0, L));
			const y$1 = Fp.fromBytes(tail.subarray(L, L * 2));
			if (!isValidXY(x, y$1)) throw new Error("bad point: is not on curve");
			return {
				x,
				y: y$1
			};
		} else throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
	}
	const encodePoint = extraOpts.toBytes || pointToBytes;
	const decodePoint = extraOpts.fromBytes || pointFromBytes;
	function weierstrassEquation(x) {
		const x2 = Fp.sqr(x);
		const x3 = Fp.mul(x2, x);
		return Fp.add(Fp.add(x3, Fp.mul(x, CURVE.a)), CURVE.b);
	}
	function isValidXY(x, y$1) {
		const left = Fp.sqr(y$1);
		const right = weierstrassEquation(x);
		return Fp.eql(left, right);
	}
	if (!isValidXY(CURVE.Gx, CURVE.Gy)) throw new Error("bad curve params: generator point");
	const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n), _4n);
	const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
	if (Fp.is0(Fp.add(_4a3, _27b2))) throw new Error("bad curve params: a or b");
	function acoord(title, n, banZero = false) {
		if (!Fp.isValid(n) || banZero && Fp.is0(n)) throw new Error(`bad point coordinate ${title}`);
		return n;
	}
	function aprjpoint(other) {
		if (!(other instanceof Point)) throw new Error("ProjectivePoint expected");
	}
	function splitEndoScalarN(k) {
		if (!endo || !endo.basises) throw new Error("no endo");
		return _splitEndoScalar(k, endo.basises, Fn.ORDER);
	}
	const toAffineMemo = memoized((p, iz) => {
		const { X, Y, Z } = p;
		if (Fp.eql(Z, Fp.ONE)) return {
			x: X,
			y: Y
		};
		const is0 = p.is0();
		if (iz == null) iz = is0 ? Fp.ONE : Fp.inv(Z);
		const x = Fp.mul(X, iz);
		const y$1 = Fp.mul(Y, iz);
		const zz = Fp.mul(Z, iz);
		if (is0) return {
			x: Fp.ZERO,
			y: Fp.ZERO
		};
		if (!Fp.eql(zz, Fp.ONE)) throw new Error("invZ was invalid");
		return {
			x,
			y: y$1
		};
	});
	const assertValidMemo = memoized((p) => {
		if (p.is0()) {
			if (extraOpts.allowInfinityPoint && !Fp.is0(p.Y)) return;
			throw new Error("bad point: ZERO");
		}
		const { x, y: y$1 } = p.toAffine();
		if (!Fp.isValid(x) || !Fp.isValid(y$1)) throw new Error("bad point: x or y not field elements");
		if (!isValidXY(x, y$1)) throw new Error("bad point: equation left != right");
		if (!p.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
		return true;
	});
	function finishEndo(endoBeta, k1p, k2p, k1neg, k2neg) {
		k2p = new Point(Fp.mul(k2p.X, endoBeta), k2p.Y, k2p.Z);
		k1p = negateCt(k1neg, k1p);
		k2p = negateCt(k2neg, k2p);
		return k1p.add(k2p);
	}
	class Point {
		constructor(X, Y, Z) {
			this.X = acoord("x", X);
			this.Y = acoord("y", Y, true);
			this.Z = acoord("z", Z);
			Object.freeze(this);
		}
		static CURVE() {
			return CURVE;
		}
		static fromAffine(p) {
			const { x, y: y$1 } = p || {};
			if (!p || !Fp.isValid(x) || !Fp.isValid(y$1)) throw new Error("invalid affine point");
			if (p instanceof Point) throw new Error("projective point not allowed");
			if (Fp.is0(x) && Fp.is0(y$1)) return Point.ZERO;
			return new Point(x, y$1, Fp.ONE);
		}
		static fromBytes(bytes) {
			const P = Point.fromAffine(decodePoint(_abytes2(bytes, void 0, "point")));
			P.assertValidity();
			return P;
		}
		static fromHex(hex) {
			return Point.fromBytes(ensureBytes("pointHex", hex));
		}
		get x() {
			return this.toAffine().x;
		}
		get y() {
			return this.toAffine().y;
		}
		precompute(windowSize = 8, isLazy = true) {
			wnaf.createCache(this, windowSize);
			if (!isLazy) this.multiply(_3n);
			return this;
		}
		assertValidity() {
			assertValidMemo(this);
		}
		hasEvenY() {
			const { y: y$1 } = this.toAffine();
			if (!Fp.isOdd) throw new Error("Field doesn't support isOdd");
			return !Fp.isOdd(y$1);
		}
		equals(other) {
			aprjpoint(other);
			const { X: X1, Y: Y1, Z: Z1 } = this;
			const { X: X2, Y: Y2, Z: Z2 } = other;
			const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
			const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
			return U1 && U2;
		}
		negate() {
			return new Point(this.X, Fp.neg(this.Y), this.Z);
		}
		double() {
			const { a, b: b$1 } = CURVE;
			const b3 = Fp.mul(b$1, _3n);
			const { X: X1, Y: Y1, Z: Z1 } = this;
			let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
			let t0 = Fp.mul(X1, X1);
			let t1 = Fp.mul(Y1, Y1);
			let t2 = Fp.mul(Z1, Z1);
			let t3 = Fp.mul(X1, Y1);
			t3 = Fp.add(t3, t3);
			Z3 = Fp.mul(X1, Z1);
			Z3 = Fp.add(Z3, Z3);
			X3 = Fp.mul(a, Z3);
			Y3 = Fp.mul(b3, t2);
			Y3 = Fp.add(X3, Y3);
			X3 = Fp.sub(t1, Y3);
			Y3 = Fp.add(t1, Y3);
			Y3 = Fp.mul(X3, Y3);
			X3 = Fp.mul(t3, X3);
			Z3 = Fp.mul(b3, Z3);
			t2 = Fp.mul(a, t2);
			t3 = Fp.sub(t0, t2);
			t3 = Fp.mul(a, t3);
			t3 = Fp.add(t3, Z3);
			Z3 = Fp.add(t0, t0);
			t0 = Fp.add(Z3, t0);
			t0 = Fp.add(t0, t2);
			t0 = Fp.mul(t0, t3);
			Y3 = Fp.add(Y3, t0);
			t2 = Fp.mul(Y1, Z1);
			t2 = Fp.add(t2, t2);
			t0 = Fp.mul(t2, t3);
			X3 = Fp.sub(X3, t0);
			Z3 = Fp.mul(t2, t1);
			Z3 = Fp.add(Z3, Z3);
			Z3 = Fp.add(Z3, Z3);
			return new Point(X3, Y3, Z3);
		}
		add(other) {
			aprjpoint(other);
			const { X: X1, Y: Y1, Z: Z1 } = this;
			const { X: X2, Y: Y2, Z: Z2 } = other;
			let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
			const a = CURVE.a;
			const b3 = Fp.mul(CURVE.b, _3n);
			let t0 = Fp.mul(X1, X2);
			let t1 = Fp.mul(Y1, Y2);
			let t2 = Fp.mul(Z1, Z2);
			let t3 = Fp.add(X1, Y1);
			let t4 = Fp.add(X2, Y2);
			t3 = Fp.mul(t3, t4);
			t4 = Fp.add(t0, t1);
			t3 = Fp.sub(t3, t4);
			t4 = Fp.add(X1, Z1);
			let t5 = Fp.add(X2, Z2);
			t4 = Fp.mul(t4, t5);
			t5 = Fp.add(t0, t2);
			t4 = Fp.sub(t4, t5);
			t5 = Fp.add(Y1, Z1);
			X3 = Fp.add(Y2, Z2);
			t5 = Fp.mul(t5, X3);
			X3 = Fp.add(t1, t2);
			t5 = Fp.sub(t5, X3);
			Z3 = Fp.mul(a, t4);
			X3 = Fp.mul(b3, t2);
			Z3 = Fp.add(X3, Z3);
			X3 = Fp.sub(t1, Z3);
			Z3 = Fp.add(t1, Z3);
			Y3 = Fp.mul(X3, Z3);
			t1 = Fp.add(t0, t0);
			t1 = Fp.add(t1, t0);
			t2 = Fp.mul(a, t2);
			t4 = Fp.mul(b3, t4);
			t1 = Fp.add(t1, t2);
			t2 = Fp.sub(t0, t2);
			t2 = Fp.mul(a, t2);
			t4 = Fp.add(t4, t2);
			t0 = Fp.mul(t1, t4);
			Y3 = Fp.add(Y3, t0);
			t0 = Fp.mul(t5, t4);
			X3 = Fp.mul(t3, X3);
			X3 = Fp.sub(X3, t0);
			t0 = Fp.mul(t3, t1);
			Z3 = Fp.mul(t5, Z3);
			Z3 = Fp.add(Z3, t0);
			return new Point(X3, Y3, Z3);
		}
		subtract(other) {
			return this.add(other.negate());
		}
		is0() {
			return this.equals(Point.ZERO);
		}
		multiply(scalar) {
			const { endo: endo$1 } = extraOpts;
			if (!Fn.isValidNot0(scalar)) throw new Error("invalid scalar: out of range");
			let point, fake;
			const mul = (n) => wnaf.cached(this, n, (p) => normalizeZ(Point, p));
			if (endo$1) {
				const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(scalar);
				const { p: k1p, f: k1f } = mul(k1);
				const { p: k2p, f: k2f } = mul(k2);
				fake = k1f.add(k2f);
				point = finishEndo(endo$1.beta, k1p, k2p, k1neg, k2neg);
			} else {
				const { p, f: f$1 } = mul(scalar);
				point = p;
				fake = f$1;
			}
			return normalizeZ(Point, [point, fake])[0];
		}
		multiplyUnsafe(sc) {
			const { endo: endo$1 } = extraOpts;
			const p = this;
			if (!Fn.isValid(sc)) throw new Error("invalid scalar: out of range");
			if (sc === _0n || p.is0()) return Point.ZERO;
			if (sc === _1n) return p;
			if (wnaf.hasCache(this)) return this.multiply(sc);
			if (endo$1) {
				const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(sc);
				const { p1, p2 } = mulEndoUnsafe(Point, p, k1, k2);
				return finishEndo(endo$1.beta, p1, p2, k1neg, k2neg);
			} else return wnaf.unsafe(p, sc);
		}
		multiplyAndAddUnsafe(Q, a, b$1) {
			const sum = this.multiplyUnsafe(a).add(Q.multiplyUnsafe(b$1));
			return sum.is0() ? void 0 : sum;
		}
		toAffine(invertedZ) {
			return toAffineMemo(this, invertedZ);
		}
		isTorsionFree() {
			const { isTorsionFree } = extraOpts;
			if (cofactor === _1n) return true;
			if (isTorsionFree) return isTorsionFree(Point, this);
			return wnaf.unsafe(this, CURVE_ORDER).is0();
		}
		clearCofactor() {
			const { clearCofactor } = extraOpts;
			if (cofactor === _1n) return this;
			if (clearCofactor) return clearCofactor(Point, this);
			return this.multiplyUnsafe(cofactor);
		}
		isSmallOrder() {
			return this.multiplyUnsafe(cofactor).is0();
		}
		toBytes(isCompressed = true) {
			_abool2(isCompressed, "isCompressed");
			this.assertValidity();
			return encodePoint(Point, this, isCompressed);
		}
		toHex(isCompressed = true) {
			return bytesToHex(this.toBytes(isCompressed));
		}
		toString() {
			return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
		}
		get px() {
			return this.X;
		}
		get py() {
			return this.X;
		}
		get pz() {
			return this.Z;
		}
		toRawBytes(isCompressed = true) {
			return this.toBytes(isCompressed);
		}
		_setWindowSize(windowSize) {
			this.precompute(windowSize);
		}
		static normalizeZ(points) {
			return normalizeZ(Point, points);
		}
		static msm(points, scalars) {
			return pippenger(Point, Fn, points, scalars);
		}
		static fromPrivateKey(privateKey) {
			return Point.BASE.multiply(_normFnElement(Fn, privateKey));
		}
	}
	Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
	Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
	Point.Fp = Fp;
	Point.Fn = Fn;
	const bits = Fn.BITS;
	const wnaf = new wNAF(Point, extraOpts.endo ? Math.ceil(bits / 2) : bits);
	Point.BASE.precompute(8);
	return Point;
}
function pprefix(hasEvenY) {
	return Uint8Array.of(hasEvenY ? 2 : 3);
}
function getWLengths(Fp, Fn) {
	return {
		secretKey: Fn.BYTES,
		publicKey: 1 + Fp.BYTES,
		publicKeyUncompressed: 1 + 2 * Fp.BYTES,
		publicKeyHasPrefix: true,
		signature: 2 * Fn.BYTES
	};
}
function ecdh(Point, ecdhOpts = {}) {
	const { Fn } = Point;
	const randomBytes_ = ecdhOpts.randomBytes || randomBytes;
	const lengths = Object.assign(getWLengths(Point.Fp, Fn), { seed: getMinHashLength(Fn.ORDER) });
	function isValidSecretKey(secretKey) {
		try {
			return !!_normFnElement(Fn, secretKey);
		} catch (error) {
			return false;
		}
	}
	function isValidPublicKey(publicKey, isCompressed) {
		const { publicKey: comp, publicKeyUncompressed } = lengths;
		try {
			const l$1 = publicKey.length;
			if (isCompressed === true && l$1 !== comp) return false;
			if (isCompressed === false && l$1 !== publicKeyUncompressed) return false;
			return !!Point.fromBytes(publicKey);
		} catch (error) {
			return false;
		}
	}
	function randomSecretKey(seed = randomBytes_(lengths.seed)) {
		return mapHashToField(_abytes2(seed, lengths.seed, "seed"), Fn.ORDER);
	}
	function getPublicKey(secretKey, isCompressed = true) {
		return Point.BASE.multiply(_normFnElement(Fn, secretKey)).toBytes(isCompressed);
	}
	function keygen(seed) {
		const secretKey = randomSecretKey(seed);
		return {
			secretKey,
			publicKey: getPublicKey(secretKey)
		};
	}
	function isProbPub(item) {
		if (typeof item === "bigint") return false;
		if (item instanceof Point) return true;
		const { secretKey, publicKey, publicKeyUncompressed } = lengths;
		if (Fn.allowedLengths || secretKey === publicKey) return void 0;
		const l$1 = ensureBytes("key", item).length;
		return l$1 === publicKey || l$1 === publicKeyUncompressed;
	}
	function getSharedSecret(secretKeyA, publicKeyB, isCompressed = true) {
		if (isProbPub(secretKeyA) === true) throw new Error("first arg must be private key");
		if (isProbPub(publicKeyB) === false) throw new Error("second arg must be public key");
		const s = _normFnElement(Fn, secretKeyA);
		return Point.fromHex(publicKeyB).multiply(s).toBytes(isCompressed);
	}
	const utils = {
		isValidSecretKey,
		isValidPublicKey,
		randomSecretKey,
		isValidPrivateKey: isValidSecretKey,
		randomPrivateKey: randomSecretKey,
		normPrivateKeyToScalar: (key) => _normFnElement(Fn, key),
		precompute(windowSize = 8, point = Point.BASE) {
			return point.precompute(windowSize, false);
		}
	};
	return Object.freeze({
		getPublicKey,
		getSharedSecret,
		keygen,
		Point,
		utils,
		lengths
	});
}
function ecdsa(Point, hash, ecdsaOpts = {}) {
	ahash(hash);
	_validateObject(ecdsaOpts, {}, {
		hmac: "function",
		lowS: "boolean",
		randomBytes: "function",
		bits2int: "function",
		bits2int_modN: "function"
	});
	const randomBytes$1 = ecdsaOpts.randomBytes || randomBytes;
	const hmac$1 = ecdsaOpts.hmac || ((key, ...msgs) => hmac(hash, key, concatBytes(...msgs)));
	const { Fp, Fn } = Point;
	const { ORDER: CURVE_ORDER, BITS: fnBits } = Fn;
	const { keygen, getPublicKey, getSharedSecret, utils, lengths } = ecdh(Point, ecdsaOpts);
	const defaultSigOpts = {
		prehash: false,
		lowS: typeof ecdsaOpts.lowS === "boolean" ? ecdsaOpts.lowS : false,
		format: void 0,
		extraEntropy: false
	};
	const defaultSigOpts_format = "compact";
	function isBiggerThanHalfOrder(number) {
		const HALF = CURVE_ORDER >> _1n;
		return number > HALF;
	}
	function validateRS(title, num) {
		if (!Fn.isValidNot0(num)) throw new Error(`invalid signature ${title}: out of range 1..Point.Fn.ORDER`);
		return num;
	}
	function validateSigLength(bytes, format) {
		validateSigFormat(format);
		const size$6 = lengths.signature;
		const sizer = format === "compact" ? size$6 : format === "recovered" ? size$6 + 1 : void 0;
		return _abytes2(bytes, sizer, `${format} signature`);
	}
	class Signature {
		constructor(r$1, s, recovery) {
			this.r = validateRS("r", r$1);
			this.s = validateRS("s", s);
			if (recovery != null) this.recovery = recovery;
			Object.freeze(this);
		}
		static fromBytes(bytes, format = defaultSigOpts_format) {
			validateSigLength(bytes, format);
			let recid;
			if (format === "der") {
				const { r: r$2, s: s$1 } = DER.toSig(_abytes2(bytes));
				return new Signature(r$2, s$1);
			}
			if (format === "recovered") {
				recid = bytes[0];
				format = "compact";
				bytes = bytes.subarray(1);
			}
			const L = Fn.BYTES;
			const r$1 = bytes.subarray(0, L);
			const s = bytes.subarray(L, L * 2);
			return new Signature(Fn.fromBytes(r$1), Fn.fromBytes(s), recid);
		}
		static fromHex(hex, format) {
			return this.fromBytes(hexToBytes$1(hex), format);
		}
		addRecoveryBit(recovery) {
			return new Signature(this.r, this.s, recovery);
		}
		recoverPublicKey(messageHash) {
			const FIELD_ORDER = Fp.ORDER;
			const { r: r$1, s, recovery: rec } = this;
			if (rec == null || ![
				0,
				1,
				2,
				3
			].includes(rec)) throw new Error("recovery id invalid");
			if (CURVE_ORDER * _2n < FIELD_ORDER && rec > 1) throw new Error("recovery id is ambiguous for h>1 curve");
			const radj = rec === 2 || rec === 3 ? r$1 + CURVE_ORDER : r$1;
			if (!Fp.isValid(radj)) throw new Error("recovery id 2 or 3 invalid");
			const x = Fp.toBytes(radj);
			const R = Point.fromBytes(concatBytes(pprefix((rec & 1) === 0), x));
			const ir = Fn.inv(radj);
			const h$1 = bits2int_modN(ensureBytes("msgHash", messageHash));
			const u1 = Fn.create(-h$1 * ir);
			const u2 = Fn.create(s * ir);
			const Q = Point.BASE.multiplyUnsafe(u1).add(R.multiplyUnsafe(u2));
			if (Q.is0()) throw new Error("point at infinify");
			Q.assertValidity();
			return Q;
		}
		hasHighS() {
			return isBiggerThanHalfOrder(this.s);
		}
		toBytes(format = defaultSigOpts_format) {
			validateSigFormat(format);
			if (format === "der") return hexToBytes$1(DER.hexFromSig(this));
			const r$1 = Fn.toBytes(this.r);
			const s = Fn.toBytes(this.s);
			if (format === "recovered") {
				if (this.recovery == null) throw new Error("recovery bit must be present");
				return concatBytes(Uint8Array.of(this.recovery), r$1, s);
			}
			return concatBytes(r$1, s);
		}
		toHex(format) {
			return bytesToHex(this.toBytes(format));
		}
		assertValidity() {}
		static fromCompact(hex) {
			return Signature.fromBytes(ensureBytes("sig", hex), "compact");
		}
		static fromDER(hex) {
			return Signature.fromBytes(ensureBytes("sig", hex), "der");
		}
		normalizeS() {
			return this.hasHighS() ? new Signature(this.r, Fn.neg(this.s), this.recovery) : this;
		}
		toDERRawBytes() {
			return this.toBytes("der");
		}
		toDERHex() {
			return bytesToHex(this.toBytes("der"));
		}
		toCompactRawBytes() {
			return this.toBytes("compact");
		}
		toCompactHex() {
			return bytesToHex(this.toBytes("compact"));
		}
	}
	const bits2int = ecdsaOpts.bits2int || function bits2int_def(bytes) {
		if (bytes.length > 8192) throw new Error("input is too large");
		const num = bytesToNumberBE(bytes);
		const delta = bytes.length * 8 - fnBits;
		return delta > 0 ? num >> BigInt(delta) : num;
	};
	const bits2int_modN = ecdsaOpts.bits2int_modN || function bits2int_modN_def(bytes) {
		return Fn.create(bits2int(bytes));
	};
	const ORDER_MASK = bitMask(fnBits);
	function int2octets(num) {
		aInRange("num < 2^" + fnBits, num, _0n, ORDER_MASK);
		return Fn.toBytes(num);
	}
	function validateMsgAndHash(message, prehash) {
		_abytes2(message, void 0, "message");
		return prehash ? _abytes2(hash(message), void 0, "prehashed message") : message;
	}
	function prepSig(message, privateKey, opts) {
		if (["recovered", "canonical"].some((k) => k in opts)) throw new Error("sign() legacy options not supported");
		const { lowS, prehash, extraEntropy } = validateSigOpts(opts, defaultSigOpts);
		message = validateMsgAndHash(message, prehash);
		const h1int = bits2int_modN(message);
		const d = _normFnElement(Fn, privateKey);
		const seedArgs = [int2octets(d), int2octets(h1int)];
		if (extraEntropy != null && extraEntropy !== false) {
			const e = extraEntropy === true ? randomBytes$1(lengths.secretKey) : extraEntropy;
			seedArgs.push(ensureBytes("extraEntropy", e));
		}
		const seed = concatBytes(...seedArgs);
		const m = h1int;
		function k2sig(kBytes) {
			const k = bits2int(kBytes);
			if (!Fn.isValidNot0(k)) return;
			const ik = Fn.inv(k);
			const q = Point.BASE.multiply(k).toAffine();
			const r$1 = Fn.create(q.x);
			if (r$1 === _0n) return;
			const s = Fn.create(ik * Fn.create(m + r$1 * d));
			if (s === _0n) return;
			let recovery = (q.x === r$1 ? 0 : 2) | Number(q.y & _1n);
			let normS = s;
			if (lowS && isBiggerThanHalfOrder(s)) {
				normS = Fn.neg(s);
				recovery ^= 1;
			}
			return new Signature(r$1, normS, recovery);
		}
		return {
			seed,
			k2sig
		};
	}
	function sign$2(message, secretKey, opts = {}) {
		message = ensureBytes("message", message);
		const { seed, k2sig } = prepSig(message, secretKey, opts);
		return createHmacDrbg(hash.outputLen, Fn.BYTES, hmac$1)(seed, k2sig);
	}
	function tryParsingSig(sg) {
		let sig = void 0;
		const isHex$1 = typeof sg === "string" || isBytes(sg);
		const isObj = !isHex$1 && sg !== null && typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint";
		if (!isHex$1 && !isObj) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
		if (isObj) sig = new Signature(sg.r, sg.s);
		else if (isHex$1) {
			try {
				sig = Signature.fromBytes(ensureBytes("sig", sg), "der");
			} catch (derError) {
				if (!(derError instanceof DER.Err)) throw derError;
			}
			if (!sig) try {
				sig = Signature.fromBytes(ensureBytes("sig", sg), "compact");
			} catch (error) {
				return false;
			}
		}
		if (!sig) return false;
		return sig;
	}
	function verify(signature, message, publicKey, opts = {}) {
		const { lowS, prehash, format } = validateSigOpts(opts, defaultSigOpts);
		publicKey = ensureBytes("publicKey", publicKey);
		message = validateMsgAndHash(ensureBytes("message", message), prehash);
		if ("strict" in opts) throw new Error("options.strict was renamed to lowS");
		const sig = format === void 0 ? tryParsingSig(signature) : Signature.fromBytes(ensureBytes("sig", signature), format);
		if (sig === false) return false;
		try {
			const P = Point.fromBytes(publicKey);
			if (lowS && sig.hasHighS()) return false;
			const { r: r$1, s } = sig;
			const h$1 = bits2int_modN(message);
			const is = Fn.inv(s);
			const u1 = Fn.create(h$1 * is);
			const u2 = Fn.create(r$1 * is);
			const R = Point.BASE.multiplyUnsafe(u1).add(P.multiplyUnsafe(u2));
			if (R.is0()) return false;
			return Fn.create(R.x) === r$1;
		} catch (e) {
			return false;
		}
	}
	function recoverPublicKey$1(signature, message, opts = {}) {
		const { prehash } = validateSigOpts(opts, defaultSigOpts);
		message = validateMsgAndHash(message, prehash);
		return Signature.fromBytes(signature, "recovered").recoverPublicKey(message).toBytes();
	}
	return Object.freeze({
		keygen,
		getPublicKey,
		getSharedSecret,
		utils,
		lengths,
		Point,
		sign: sign$2,
		verify,
		recoverPublicKey: recoverPublicKey$1,
		Signature,
		hash
	});
}
function _weierstrass_legacy_opts_to_new(c) {
	const CURVE = {
		a: c.a,
		b: c.b,
		p: c.Fp.ORDER,
		n: c.n,
		h: c.h,
		Gx: c.Gx,
		Gy: c.Gy
	};
	const Fp = c.Fp;
	let allowedLengths = c.allowedPrivateKeyLengths ? Array.from(new Set(c.allowedPrivateKeyLengths.map((l$1) => Math.ceil(l$1 / 2)))) : void 0;
	const Fn = Field(CURVE.n, {
		BITS: c.nBitLength,
		allowedLengths,
		modFromBytes: c.wrapPrivateKey
	});
	const curveOpts = {
		Fp,
		Fn,
		allowInfinityPoint: c.allowInfinityPoint,
		endo: c.endo,
		isTorsionFree: c.isTorsionFree,
		clearCofactor: c.clearCofactor,
		fromBytes: c.fromBytes,
		toBytes: c.toBytes
	};
	return {
		CURVE,
		curveOpts
	};
}
function _ecdsa_legacy_opts_to_new(c) {
	const { CURVE, curveOpts } = _weierstrass_legacy_opts_to_new(c);
	const ecdsaOpts = {
		hmac: c.hmac,
		randomBytes: c.randomBytes,
		lowS: c.lowS,
		bits2int: c.bits2int,
		bits2int_modN: c.bits2int_modN
	};
	return {
		CURVE,
		curveOpts,
		hash: c.hash,
		ecdsaOpts
	};
}
function _ecdsa_new_output_to_legacy(c, _ecdsa) {
	const Point = _ecdsa.Point;
	return Object.assign({}, _ecdsa, {
		ProjectivePoint: Point,
		CURVE: Object.assign({}, c, nLength(Point.Fn.ORDER, Point.Fn.BITS))
	});
}
function weierstrass(c) {
	const { CURVE, curveOpts, hash, ecdsaOpts } = _ecdsa_legacy_opts_to_new(c);
	const Point = weierstrassN(CURVE, curveOpts);
	const signs = ecdsa(Point, hash, ecdsaOpts);
	return _ecdsa_new_output_to_legacy(c, signs);
}
function createCurve(curveDef, defHash) {
	const create$1 = (hash) => weierstrass({
		...curveDef,
		hash
	});
	return {
		...create$1(defHash),
		create: create$1
	};
}
function assert(signature, options = {}) {
	const { recovered } = options;
	if (typeof signature.r === "undefined") throw new MissingPropertiesError({ signature });
	if (typeof signature.s === "undefined") throw new MissingPropertiesError({ signature });
	if (recovered && typeof signature.yParity === "undefined") throw new MissingPropertiesError({ signature });
	if (signature.r < 0n || signature.r > maxUint256) throw new InvalidRError({ value: signature.r });
	if (signature.s < 0n || signature.s > maxUint256) throw new InvalidSError({ value: signature.s });
	if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1) throw new InvalidYParityError({ value: signature.yParity });
}
function fromHex$1(signature) {
	if (signature.length !== 130 && signature.length !== 132) throw new InvalidSerializedSizeError({ signature });
	const r$1 = BigInt(slice$2(signature, 0, 32));
	const s = BigInt(slice$2(signature, 32, 64));
	const yParity = (() => {
		const yParity$1 = Number(`0x${signature.slice(130)}`);
		if (Number.isNaN(yParity$1)) return void 0;
		try {
			return vToYParity(yParity$1);
		} catch {
			throw new InvalidYParityError({ value: yParity$1 });
		}
	})();
	if (typeof yParity === "undefined") return {
		r: r$1,
		s
	};
	return {
		r: r$1,
		s,
		yParity
	};
}
function toHex$1(signature) {
	assert(signature);
	const r$1 = signature.r;
	const s = signature.s;
	return concat(fromNumber(r$1, { size: 32 }), fromNumber(s, { size: 32 }), typeof signature.yParity === "number" ? fromNumber(yParityToV(signature.yParity), { size: 1 }) : "0x");
}
function vToYParity(v) {
	if (v === 0 || v === 27) return 0;
	if (v === 1 || v === 28) return 1;
	if (v >= 35) return v % 2 === 0 ? 1 : 0;
	throw new InvalidVError({ value: v });
}
function yParityToV(yParity) {
	if (yParity === 0) return 27;
	if (yParity === 1) return 28;
	throw new InvalidYParityError({ value: yParity });
}
var InvalidSerializedSizeError = class extends BaseError$1 {
	constructor({ signature }) {
		super(`Value \`${signature}\` is an invalid signature size.`, { metaMessages: ["Expected: 64 bytes or 65 bytes.", `Received ${size$2(from$2(signature))} bytes.`] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidSerializedSizeError"
		});
	}
};
var MissingPropertiesError = class extends BaseError$1 {
	constructor({ signature }) {
		super(`Signature \`${stringify(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.MissingPropertiesError"
		});
	}
};
var InvalidRError = class extends BaseError$1 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidRError"
		});
	}
};
var InvalidSError = class extends BaseError$1 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidSError"
		});
	}
};
var InvalidYParityError = class extends BaseError$1 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidYParityError"
		});
	}
};
var InvalidVError = class extends BaseError$1 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidVError"
		});
	}
};
var decoder = /* @__PURE__ */ new TextDecoder();
var integerToCharacter = /* @__PURE__ */ Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i$1) => [i$1, a.charCodeAt(0)]));
({ ...Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i$1) => [a.charCodeAt(0), i$1])) }), "=".charCodeAt(0), "-".charCodeAt(0), "_".charCodeAt(0);
function fromBytes(value, options = {}) {
	const { pad: pad$2 = true, url = false } = options;
	const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
	for (let i$1 = 0, j = 0; j < value.length; i$1 += 4, j += 3) {
		const y$1 = (value[j] << 16) + (value[j + 1] << 8) + (value[j + 2] | 0);
		encoded[i$1] = integerToCharacter[y$1 >> 18];
		encoded[i$1 + 1] = integerToCharacter[y$1 >> 12 & 63];
		encoded[i$1 + 2] = integerToCharacter[y$1 >> 6 & 63];
		encoded[i$1 + 3] = integerToCharacter[y$1 & 63];
	}
	const k = value.length % 3;
	const end = Math.floor(value.length / 3) * 4 + (k && k + 1);
	let base64 = decoder.decode(new Uint8Array(encoded.buffer, 0, end));
	if (pad$2 && k === 1) base64 += "==";
	if (pad$2 && k === 2) base64 += "=";
	if (url) base64 = base64.replaceAll("+", "-").replaceAll("/", "_");
	return base64;
}
function fromHex(value, options = {}) {
	return fromBytes(fromHex$3(value), options);
}
var p256_CURVE = {
	p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
	n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
	h: BigInt(1),
	a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
	b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
	Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
	Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
};
var p384_CURVE = {
	p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
	n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
	h: BigInt(1),
	a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
	b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
	Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
	Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
};
var p521_CURVE = {
	p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
	n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
	h: BigInt(1),
	a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
	b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
	Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
	Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
};
var Fp256 = Field(p256_CURVE.p);
var Fp384 = Field(p384_CURVE.p);
var Fp521 = Field(p521_CURVE.p);
const p256$1 = createCurve({
	...p256_CURVE,
	Fp: Fp256,
	lowS: false
}, sha256);
createCurve({
	...p384_CURVE,
	Fp: Fp384,
	lowS: false
}, sha384);
createCurve({
	...p521_CURVE,
	Fp: Fp521,
	lowS: false,
	allowedPrivateKeyLengths: [
		130,
		131,
		132
	]
}, sha512);
const p256 = p256$1;
Uint8Array.from([
	105,
	171,
	180,
	181,
	160,
	222,
	75,
	198,
	42,
	42,
	32,
	31,
	141,
	37,
	186,
	233
]);
function getAuthenticatorData(options = {}) {
	const { flag = 5, rpId = window.location.hostname, signCount = 0 } = options;
	const rpIdHash = sha256$2(fromString(rpId));
	const flag_bytes = fromNumber(flag, { size: 1 });
	const signCount_bytes = fromNumber(signCount, { size: 4 });
	return concat(rpIdHash, flag_bytes, signCount_bytes);
}
function getClientDataJSON(options) {
	const { challenge, crossOrigin = false, extraClientData, origin = window.location.origin } = options;
	return JSON.stringify({
		type: "webauthn.get",
		challenge: fromHex(challenge, {
			url: true,
			pad: false
		}),
		origin,
		crossOrigin,
		...extraClientData
	});
}
function getSignPayload(options) {
	const { challenge, crossOrigin, extraClientData, flag, origin, rpId, signCount, userVerification = "required" } = options;
	const authenticatorData = getAuthenticatorData({
		flag,
		rpId,
		signCount
	});
	const clientDataJSON = getClientDataJSON({
		challenge,
		crossOrigin,
		extraClientData,
		origin
	});
	const clientDataJSONHash = sha256$2(fromString(clientDataJSON));
	const challengeIndex = clientDataJSON.indexOf("\"challenge\"");
	const typeIndex = clientDataJSON.indexOf("\"type\"");
	const metadata = {
		authenticatorData,
		clientDataJSON,
		challengeIndex,
		typeIndex,
		userVerificationRequired: userVerification === "required"
	};
	const payload = concat(authenticatorData, clientDataJSONHash);
	return {
		metadata,
		payload
	};
}
async function createKeyPair(options = {}) {
	const { extractable = false } = options;
	const keypair = await globalThis.crypto.subtle.generateKey({
		name: "ECDSA",
		namedCurve: "P-256"
	}, extractable, ["sign", "verify"]);
	const publicKey_raw = await globalThis.crypto.subtle.exportKey("raw", keypair.publicKey);
	const publicKey = from(new Uint8Array(publicKey_raw));
	return {
		privateKey: keypair.privateKey,
		publicKey
	};
}
async function sign$1(options) {
	const { payload, privateKey } = options;
	const signature = await globalThis.crypto.subtle.sign({
		name: "ECDSA",
		hash: "SHA-256"
	}, privateKey, from$1(payload));
	const signature_bytes = fromArray(new Uint8Array(signature));
	const r$1 = toBigInt(slice$1(signature_bytes, 0, 32));
	let s = toBigInt(slice$1(signature_bytes, 32, 64));
	if (s > p256.CURVE.n / 2n) s = p256.CURVE.n - s;
	return {
		r: r$1,
		s
	};
}
function createStorage(scope, name$1) {
	const store$1 = typeof indexedDB !== "undefined" ? createStore(scope, name$1) : void 0;
	return {
		getItem: async (key) => {
			const value = await get$1(key, store$1);
			if (!value) return null;
			return value;
		},
		removeItem: async (key) => {
			return del(key, store$1);
		},
		setItem: async (key, value) => {
			return set(key, value, store$1);
		}
	};
}
const STORAGE_SCOPE = "base-acc-sdk";
const STORAGE_NAME = "keys";
const ACTIVE_ID_KEY = "activeId";
const storage = createStorage(STORAGE_SCOPE, STORAGE_NAME);
async function generateKeyPair$1() {
	const keypair = await createKeyPair({ extractable: false });
	const publicKey = slice$2(toHex$2(keypair.publicKey), 1);
	await storage.setItem(publicKey, keypair);
	await storage.setItem(ACTIVE_ID_KEY, publicKey);
	return keypair;
}
async function getKeypair() {
	const id = await storage.getItem(ACTIVE_ID_KEY);
	if (!id) return null;
	const keypair = await storage.getItem(id);
	if (!keypair) return null;
	return keypair;
}
async function getOrCreateKeypair() {
	const keypair = await getKeypair();
	if (!keypair) {
		const kp = await generateKeyPair$1();
		const pubKey = slice$2(toHex$2(kp.publicKey), 1);
		await storage.setItem(pubKey, kp);
		await storage.setItem(ACTIVE_ID_KEY, pubKey);
		return kp;
	}
	return keypair;
}
async function getAccount() {
	const keypair = await getOrCreateKeypair();
	const publicKey = slice$2(toHex$2(keypair.publicKey), 1);
	const sign$2 = async (payload) => {
		const { payload: message, metadata } = getSignPayload({
			challenge: payload,
			origin: "https://keys.coinbase.com",
			userVerification: "preferred"
		});
		const signature = await sign$1({
			payload: message,
			privateKey: keypair.privateKey
		});
		return {
			signature: toHex$1(signature),
			raw: {},
			webauthn: metadata
		};
	};
	return {
		id: publicKey,
		publicKey,
		async sign({ hash }) {
			return sign$2(hash);
		},
		async signMessage({ message }) {
			return sign$2(hashMessage(message));
		},
		async signTypedData(parameters) {
			return sign$2(hashTypedData(parameters));
		},
		type: "webAuthn"
	};
}
async function getCryptoKeyAccount() {
	return { account: await getAccount() };
}
async function removeCryptoKey() {
	const keypair = await getKeypair();
	if (!keypair) return;
	await storage.removeItem(slice$2(toHex$2(keypair.publicKey), 1));
	await storage.removeItem(ACTIVE_ID_KEY);
}
var OWN_PRIVATE_KEY = {
	storageKey: "ownPrivateKey",
	keyType: "private"
};
var OWN_PUBLIC_KEY = {
	storageKey: "ownPublicKey",
	keyType: "public"
};
var PEER_PUBLIC_KEY = {
	storageKey: "peerPublicKey",
	keyType: "public"
};
var SCWKeyManager = class {
	constructor() {
		this.ownPrivateKey = null;
		this.ownPublicKey = null;
		this.peerPublicKey = null;
		this.sharedSecret = null;
	}
	async getOwnPublicKey() {
		await this.loadKeysIfNeeded();
		return this.ownPublicKey;
	}
	async getSharedSecret() {
		await this.loadKeysIfNeeded();
		return this.sharedSecret;
	}
	async setPeerPublicKey(key) {
		this.sharedSecret = null;
		this.peerPublicKey = key;
		await this.storeKey(PEER_PUBLIC_KEY, key);
		await this.loadKeysIfNeeded();
	}
	async clear() {
		this.ownPrivateKey = null;
		this.ownPublicKey = null;
		this.peerPublicKey = null;
		this.sharedSecret = null;
		store.keys.clear();
	}
	async generateKeyPair() {
		const newKeyPair = await generateKeyPair();
		this.ownPrivateKey = newKeyPair.privateKey;
		this.ownPublicKey = newKeyPair.publicKey;
		await this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
		await this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
	}
	async loadKeysIfNeeded() {
		if (this.ownPrivateKey === null) this.ownPrivateKey = await this.loadKey(OWN_PRIVATE_KEY);
		if (this.ownPublicKey === null) this.ownPublicKey = await this.loadKey(OWN_PUBLIC_KEY);
		if (this.ownPrivateKey === null || this.ownPublicKey === null) await this.generateKeyPair();
		if (this.peerPublicKey === null) this.peerPublicKey = await this.loadKey(PEER_PUBLIC_KEY);
		if (this.sharedSecret === null) {
			if (this.ownPrivateKey === null || this.peerPublicKey === null) return;
			this.sharedSecret = await deriveSharedSecret(this.ownPrivateKey, this.peerPublicKey);
		}
	}
	async loadKey(item) {
		const key = store.keys.get(item.storageKey);
		if (!key) return null;
		return importKeyFromHexString(item.keyType, key);
	}
	async storeKey(item, key) {
		const hexString = await exportKeyToHexString(item.keyType, key);
		store.keys.set(item.storageKey, hexString);
	}
};
function get(obj, path) {
	if (typeof obj !== "object" || obj === null) return void 0;
	return path.split(/[.[\]]+/).filter(Boolean).reduce((value, key) => {
		if (typeof value === "object" && value !== null) return value[key];
	}, obj);
}
function getSenderFromRequest(request) {
	var _a;
	if (!Array.isArray(request.params)) return null;
	switch (request.method) {
		case "personal_sign": return request.params[1];
		case "eth_signTypedData_v4": return request.params[0];
		case "eth_signTransaction":
		case "eth_sendTransaction":
		case "wallet_sendCalls": return (_a = request.params[0]) === null || _a === void 0 ? void 0 : _a.from;
		default: return null;
	}
}
function addSenderToRequest(request, sender) {
	if (!Array.isArray(request.params)) throw standardErrors.rpc.invalidParams();
	const params = [...request.params];
	switch (request.method) {
		case "eth_signTransaction":
		case "eth_sendTransaction":
		case "wallet_sendCalls":
			params[0].from = sender;
			break;
		case "eth_signTypedData_v4":
			params[0] = sender;
			break;
		case "personal_sign":
			params[1] = sender;
			break;
		default: break;
	}
	return Object.assign(Object.assign({}, request), { params });
}
function assertParamsChainId(params) {
	var _a;
	if (!params || !Array.isArray(params) || !((_a = params[0]) === null || _a === void 0 ? void 0 : _a.chainId)) throw standardErrors.rpc.invalidParams();
	if (typeof params[0].chainId !== "string" && typeof params[0].chainId !== "number") throw standardErrors.rpc.invalidParams();
}
function assertGetCapabilitiesParams(params) {
	if (!params || !Array.isArray(params) || params.length !== 1 && params.length !== 2) throw standardErrors.rpc.invalidParams();
	if (typeof params[0] !== "string" || !isAddress(params[0])) throw standardErrors.rpc.invalidParams();
	if (params.length === 2) {
		if (!Array.isArray(params[1])) throw standardErrors.rpc.invalidParams();
		for (const param of params[1]) if (typeof param !== "string" || !param.startsWith("0x")) throw standardErrors.rpc.invalidParams();
	}
}
function injectRequestCapabilities(request, capabilities) {
	const modifiedRequest = Object.assign({}, request);
	if (capabilities && request.method.startsWith("wallet_")) {
		let requestCapabilities = get(modifiedRequest, "params.0.capabilities");
		if (typeof requestCapabilities === "undefined") requestCapabilities = {};
		if (typeof requestCapabilities !== "object") throw standardErrors.rpc.invalidParams();
		requestCapabilities = Object.assign(Object.assign({}, capabilities), requestCapabilities);
		if (modifiedRequest.params && Array.isArray(modifiedRequest.params)) modifiedRequest.params[0] = Object.assign(Object.assign({}, modifiedRequest.params[0]), { capabilities: requestCapabilities });
	}
	return modifiedRequest;
}
async function initSubAccountConfig() {
	var _a;
	const config$1 = (_a = store.subAccountsConfig.get()) !== null && _a !== void 0 ? _a : {};
	const capabilities = {};
	if (config$1.enableAutoSubAccounts) {
		const { account: owner } = config$1.toOwnerAccount ? await config$1.toOwnerAccount() : await getCryptoKeyAccount();
		if (!owner) throw standardErrors.provider.unauthorized("No owner account found");
		capabilities.addSubAccount = { account: {
			type: "create",
			keys: [{
				type: owner.address ? "address" : "webauthn-p256",
				publicKey: owner.address || owner.publicKey
			}]
		} };
	}
	store.subAccountsConfig.set({ capabilities });
}
function assertFetchPermissionsRequest(request) {
	if (request.method === "coinbase_fetchPermissions" && request.params === void 0) return;
	if (request.method === "coinbase_fetchPermissions" && Array.isArray(request.params) && request.params.length === 1 && typeof request.params[0] === "object") {
		if (typeof request.params[0].account !== "string" || !request.params[0].chainId.startsWith("0x")) throw standardErrors.rpc.invalidParams("FetchPermissions - Invalid params: params[0].account must be a hex string");
		if (typeof request.params[0].chainId !== "string" || !request.params[0].chainId.startsWith("0x")) throw standardErrors.rpc.invalidParams("FetchPermissions - Invalid params: params[0].chainId must be a hex string");
		if (typeof request.params[0].spender !== "string" || !request.params[0].spender.startsWith("0x")) throw standardErrors.rpc.invalidParams("FetchPermissions - Invalid params: params[0].spender must be a hex string");
		return;
	}
	throw standardErrors.rpc.invalidParams();
}
function fillMissingParamsForFetchPermissions(request) {
	var _a, _b, _c;
	if (request.params !== void 0) return request;
	const accountFromStore = (_a = store.getState().account.accounts) === null || _a === void 0 ? void 0 : _a[0];
	const chainId = (_b = store.getState().account.chain) === null || _b === void 0 ? void 0 : _b.id;
	const subAccountFromStore = (_c = store.getState().subAccount) === null || _c === void 0 ? void 0 : _c.address;
	if (!accountFromStore || !subAccountFromStore || !chainId) throw standardErrors.rpc.invalidParams("FetchPermissions - one or more of account, sub account, or chain id is missing, connect to sub account via wallet_connect first");
	return {
		method: "coinbase_fetchPermissions",
		params: [{
			account: accountFromStore,
			chainId: numberToHex(chainId),
			spender: subAccountFromStore
		}]
	};
}
function createSpendPermissionMessage({ spendPermission, chainId }) {
	return {
		domain: {
			name: "Spend Permission Manager",
			version: "1",
			chainId,
			verifyingContract: spendPermissionManagerAddress
		},
		types: { SpendPermission: [
			{
				name: "account",
				type: "address"
			},
			{
				name: "spender",
				type: "address"
			},
			{
				name: "token",
				type: "address"
			},
			{
				name: "allowance",
				type: "uint160"
			},
			{
				name: "period",
				type: "uint48"
			},
			{
				name: "start",
				type: "uint48"
			},
			{
				name: "end",
				type: "uint48"
			},
			{
				name: "salt",
				type: "uint256"
			},
			{
				name: "extraData",
				type: "bytes"
			}
		] },
		primaryType: "SpendPermission",
		message: {
			account: spendPermission.account,
			spender: spendPermission.spender,
			token: spendPermission.token,
			allowance: spendPermission.allowance,
			period: spendPermission.period,
			start: spendPermission.start,
			end: spendPermission.end,
			salt: spendPermission.salt,
			extraData: spendPermission.extraData
		}
	};
}
function createSpendPermissionBatchMessage({ spendPermissionBatch, chainId }) {
	return {
		domain: {
			name: "Spend Permission Manager",
			version: "1",
			chainId,
			verifyingContract: spendPermissionManagerAddress
		},
		types: {
			SpendPermissionBatch: [
				{
					name: "account",
					type: "address"
				},
				{
					name: "period",
					type: "uint48"
				},
				{
					name: "start",
					type: "uint48"
				},
				{
					name: "end",
					type: "uint48"
				},
				{
					name: "permissions",
					type: "PermissionDetails[]"
				}
			],
			PermissionDetails: [
				{
					name: "spender",
					type: "address"
				},
				{
					name: "token",
					type: "address"
				},
				{
					name: "allowance",
					type: "uint160"
				},
				{
					name: "salt",
					type: "uint256"
				},
				{
					name: "extraData",
					type: "bytes"
				}
			]
		},
		primaryType: "SpendPermissionBatch",
		message: {
			account: spendPermissionBatch.account,
			period: spendPermissionBatch.period,
			start: spendPermissionBatch.start,
			end: spendPermissionBatch.end,
			permissions: spendPermissionBatch.permissions.map((p) => ({
				spender: p.spender,
				token: p.token,
				allowance: p.allowance,
				salt: p.salt,
				extraData: p.extraData
			}))
		}
	};
}
async function waitForCallsTransactionHash({ client, id }) {
	var _a;
	const result = await waitForCallsStatus(client, { id });
	if (result.status === "success") return (_a = result.receipts) === null || _a === void 0 ? void 0 : _a[0].transactionHash;
	throw standardErrors.rpc.internal("failed to send transaction");
}
function createWalletSendCallsRequest({ calls, from: from$11, chainId, capabilities }) {
	const paymasterUrls = config.get().paymasterUrls;
	let request = {
		method: "wallet_sendCalls",
		params: [{
			version: "1.0",
			calls,
			chainId: numberToHex(chainId),
			from: from$11,
			atomicRequired: true,
			capabilities
		}]
	};
	if (paymasterUrls === null || paymasterUrls === void 0 ? void 0 : paymasterUrls[chainId]) request = injectRequestCapabilities(request, { paymasterService: { url: paymasterUrls === null || paymasterUrls === void 0 ? void 0 : paymasterUrls[chainId] } });
	return request;
}
async function presentSubAccountFundingDialog() {
	const dialog$1 = initDialog();
	return await new Promise((resolve) => {
		logDialogShown({ dialogContext: "sub_account_insufficient_balance" });
		dialog$1.presentItem({
			title: "Insufficient spend permission",
			message: "Your spend permission's remaining balance cannot cover this transaction. Please choose how to proceed:",
			onClose: () => {
				logDialogDismissed({ dialogContext: "sub_account_insufficient_balance" });
				dialog$1.clear();
			},
			actionItems: [{
				text: "Edit spend permission",
				variant: "primary",
				onClick: () => {
					logDialogActionClicked({
						dialogContext: "sub_account_insufficient_balance",
						dialogAction: "create_permission"
					});
					dialog$1.clear();
					resolve("update_permission");
				}
			}, {
				text: "Use primary account",
				variant: "secondary",
				onClick: () => {
					logDialogActionClicked({
						dialogContext: "sub_account_insufficient_balance",
						dialogAction: "continue_in_popup"
					});
					dialog$1.clear();
					resolve("continue_popup");
				}
			}]
		});
	});
}
function parseFundingOptions({ errorData, sourceAddress }) {
	var _a;
	const spendPermissionRequests = [];
	for (const [token, { amount, sources }] of Object.entries((_a = errorData === null || errorData === void 0 ? void 0 : errorData.required) !== null && _a !== void 0 ? _a : {})) {
		if (sources.filter((source) => {
			return hexToBigInt(source.balance) >= hexToBigInt(amount) && source.address.toLowerCase() === (sourceAddress === null || sourceAddress === void 0 ? void 0 : sourceAddress.toLowerCase());
		}).length === 0) throw new Error("Source address has insufficient balance for a token");
		spendPermissionRequests.push({
			token,
			requiredAmount: hexToBigInt(amount)
		});
	}
	return spendPermissionRequests;
}
function isSendCallsParams(params) {
	return typeof params === "object" && params !== null && "calls" in params;
}
function isEthSendTransactionParams(params) {
	return Array.isArray(params) && params.length === 1 && typeof params[0] === "object" && params[0] !== null && "to" in params[0];
}
function compute16ByteHash(input) {
	return slice(keccak256(toHex(input)), 0, 16);
}
function makeDataSuffix({ attribution, dappOrigin }) {
	if (!attribution) return;
	if ("auto" in attribution && attribution.auto && dappOrigin) return compute16ByteHash(dappOrigin);
	if ("dataSuffix" in attribution) return attribution.dataSuffix;
}
function requestHasCapability(request, capabilityName) {
	var _a;
	if (!Array.isArray(request === null || request === void 0 ? void 0 : request.params)) return false;
	const capabilities = (_a = request.params[0]) === null || _a === void 0 ? void 0 : _a.capabilities;
	if (!capabilities || typeof capabilities !== "object") return false;
	return capabilityName in capabilities;
}
function prependWithoutDuplicates(array, item) {
	const filtered = array.filter((i$1) => i$1 !== item);
	return [item, ...filtered];
}
function appendWithoutDuplicates(array, item) {
	return [...array.filter((i$1) => i$1 !== item), item];
}
async function getCachedWalletConnectResponse() {
	const spendPermissions$1 = store.spendPermissions.get();
	const subAccount = store.subAccounts.get();
	const accounts = store.account.get().accounts;
	if (!accounts) return null;
	return { accounts: accounts === null || accounts === void 0 ? void 0 : accounts.map((account$1) => ({
		address: account$1,
		capabilities: {
			subAccounts: subAccount ? [subAccount] : void 0,
			spendPermissions: spendPermissions$1.length > 0 ? { permissions: spendPermissions$1 } : void 0
		}
	})) };
}
function base64ToBase64Url(base64) {
	return base64.replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
function arrayBufferToBase64Url(buffer$1) {
	const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer$1)));
	return base64ToBase64Url(base64String);
}
function convertCredentialToJSON({ webauthn, signature, id }) {
	const signatureRaw = fromHex$1(signature);
	return {
		id,
		rawId: arrayBufferToBase64Url(stringToBytes(id)),
		response: {
			authenticatorData: arrayBufferToBase64Url(hexToBytes(webauthn.authenticatorData)),
			clientDataJSON: arrayBufferToBase64Url(stringToBytes(webauthn.clientDataJSON)),
			signature: arrayBufferToBase64Url(asn1EncodeSignature(signatureRaw.r, signatureRaw.s))
		},
		type: JSON.parse(webauthn.clientDataJSON).type
	};
}
function asn1EncodeSignature(r$1, s) {
	const rBytes = hexToBytes(trim(numberToHex(r$1)));
	const sBytes = hexToBytes(trim(numberToHex(s)));
	const rLength = rBytes.length;
	const sLength = sBytes.length;
	const totalLength = rLength + sLength + 4;
	const signature = new Uint8Array(totalLength + 2);
	signature[0] = 48;
	signature[1] = totalLength;
	signature[2] = 2;
	signature[3] = rLength;
	signature.set(rBytes, 4);
	signature[rLength + 4] = 2;
	signature[rLength + 5] = sLength;
	signature.set(sBytes, rLength + 6);
	return signature;
}
var __rest$1 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i$1 = 0, p = Object.getOwnPropertySymbols(s); i$1 < p.length; i$1++) if (e.indexOf(p[i$1]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i$1])) t[p[i$1]] = s[p[i$1]];
	}
	return t;
};
async function createSmartAccount(parameters) {
	const { owner, ownerIndex, address, client, factoryData } = parameters;
	const entryPoint = {
		abi: entryPoint06Abi,
		address: entryPoint06Address,
		version: "0.6"
	};
	const factory = {
		abi: factoryAbi,
		address: factoryAddress
	};
	return toSmartAccount({
		client,
		entryPoint,
		extend: {
			abi,
			factory
		},
		async decodeCalls(data) {
			const result = decodeFunctionData({
				abi,
				data
			});
			if (result.functionName === "execute") return [{
				to: result.args[0],
				value: result.args[1],
				data: result.args[2]
			}];
			if (result.functionName === "executeBatch") return result.args[0].map((arg) => ({
				to: arg.target,
				value: arg.value,
				data: arg.data
			}));
			throw new BaseError(`unable to decode calls for "${result.functionName}"`);
		},
		async encodeCalls(calls) {
			var _a, _b;
			if (calls.length === 1) return encodeFunctionData({
				abi,
				functionName: "execute",
				args: [
					calls[0].to,
					(_a = calls[0].value) !== null && _a !== void 0 ? _a : BigInt(0),
					(_b = calls[0].data) !== null && _b !== void 0 ? _b : "0x"
				]
			});
			return encodeFunctionData({
				abi,
				functionName: "executeBatch",
				args: [calls.map((call$1) => {
					var _a$1, _b$1;
					return {
						data: (_a$1 = call$1.data) !== null && _a$1 !== void 0 ? _a$1 : "0x",
						target: call$1.to,
						value: (_b$1 = call$1.value) !== null && _b$1 !== void 0 ? _b$1 : BigInt(0)
					};
				})]
			});
		},
		async getAddress() {
			return address;
		},
		async getFactoryArgs() {
			if (factoryData) return {
				factory: factory.address,
				factoryData
			};
			return {
				factory: factory.address,
				factoryData
			};
		},
		async getStubSignature() {
			if (owner.type === "webAuthn") return "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000";
			return wrapSignature({
				ownerIndex,
				signature: "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c"
			});
		},
		async sign(parameters$1) {
			const address$1 = await this.getAddress();
			const hash = toReplaySafeHash({
				address: address$1,
				chainId: client.chain.id,
				hash: parameters$1.hash
			});
			const signature = await sign({
				hash,
				owner
			});
			return wrapSignature({
				ownerIndex,
				signature
			});
		},
		async signMessage(parameters$1) {
			const { message } = parameters$1;
			const address$1 = await this.getAddress();
			const hash = toReplaySafeHash({
				address: address$1,
				chainId: client.chain.id,
				hash: hashMessage(message)
			});
			const signature = await sign({
				hash,
				owner
			});
			return wrapSignature({
				ownerIndex,
				signature
			});
		},
		async signTypedData(parameters$1) {
			const { domain, types: types$2, primaryType, message } = parameters$1;
			const address$1 = await this.getAddress();
			const hash = toReplaySafeHash({
				address: address$1,
				chainId: client.chain.id,
				hash: hashTypedData({
					domain,
					message,
					primaryType,
					types: types$2
				})
			});
			const signature = await sign({
				hash,
				owner
			});
			return wrapSignature({
				ownerIndex,
				signature
			});
		},
		async signUserOperation(parameters$1) {
			const { chainId = client.chain.id } = parameters$1, userOperation = __rest$1(parameters$1, ["chainId"]);
			const address$1 = await this.getAddress();
			const hash = getUserOperationHash({
				chainId,
				entryPointAddress: entryPoint.address,
				entryPointVersion: entryPoint.version,
				userOperation: Object.assign(Object.assign({}, userOperation), { sender: address$1 })
			});
			const signature = await sign({
				hash,
				owner
			});
			return wrapSignature({
				ownerIndex,
				signature
			});
		},
		userOperation: { async estimateGas(userOperation) {
			var _a;
			if (owner.type !== "webAuthn") return;
			return { verificationGasLimit: BigInt(Math.max(Number((_a = userOperation.verificationGasLimit) !== null && _a !== void 0 ? _a : BigInt(0)), 8e5)) };
		} }
	});
}
async function sign({ hash, owner }) {
	if (owner.type === "webAuthn") {
		const { signature, webauthn } = await owner.sign({ hash });
		return toWebAuthnSignature({
			signature,
			webauthn
		});
	}
	if (owner.sign) return owner.sign({ hash });
	throw new BaseError("`owner` does not support raw sign.");
}
function toReplaySafeHash({ address, chainId, hash }) {
	return hashTypedData({
		domain: {
			chainId,
			name: "Coinbase Smart Wallet",
			verifyingContract: address,
			version: "1"
		},
		types: { CoinbaseSmartWalletMessage: [{
			name: "hash",
			type: "bytes32"
		}] },
		primaryType: "CoinbaseSmartWalletMessage",
		message: { hash }
	});
}
function toWebAuthnSignature({ webauthn, signature }) {
	const { r: r$1, s } = fromHex$1(signature);
	return encodeAbiParameters([{
		components: [
			{
				name: "authenticatorData",
				type: "bytes"
			},
			{
				name: "clientDataJSON",
				type: "bytes"
			},
			{
				name: "challengeIndex",
				type: "uint256"
			},
			{
				name: "typeIndex",
				type: "uint256"
			},
			{
				name: "r",
				type: "uint256"
			},
			{
				name: "s",
				type: "uint256"
			}
		],
		type: "tuple"
	}], [{
		authenticatorData: webauthn.authenticatorData,
		clientDataJSON: stringToHex(webauthn.clientDataJSON),
		challengeIndex: BigInt(webauthn.challengeIndex),
		typeIndex: BigInt(webauthn.typeIndex),
		r: r$1,
		s
	}]);
}
function wrapSignature(parameters) {
	const { ownerIndex = 0 } = parameters;
	const signatureData = (() => {
		if (size(parameters.signature) !== 65) return parameters.signature;
		const signature = parseSignature(parameters.signature);
		return encodePacked([
			"bytes32",
			"bytes32",
			"uint8"
		], [
			signature.r,
			signature.s,
			signature.yParity === 0 ? 27 : 28
		]);
	})();
	return encodeAbiParameters([{
		components: [{
			name: "ownerIndex",
			type: "uint8"
		}, {
			name: "signatureData",
			type: "bytes"
		}],
		type: "tuple"
	}], [{
		ownerIndex,
		signatureData
	}]);
}
async function createSubAccountSigner({ address, client, factory, factoryData, owner, ownerIndex, parentAddress, attribution }) {
	var _a;
	const subAccount = {
		address,
		factory,
		factoryData
	};
	const chainId = (_a = client.chain) === null || _a === void 0 ? void 0 : _a.id;
	if (!chainId) throw standardErrors.rpc.internal("chainId not found");
	const account$1 = await createSmartAccount({
		owner,
		ownerIndex: ownerIndex !== null && ownerIndex !== void 0 ? ownerIndex : 1,
		address,
		client,
		factoryData
	});
	const request = async (args) => {
		var _a$1, _b, _c, _d, _e, _f;
		try {
			switch (args.method) {
				case "wallet_addSubAccount": return subAccount;
				case "eth_accounts": return [subAccount.address];
				case "eth_coinbase": return subAccount.address;
				case "net_version": return chainId.toString();
				case "eth_chainId": return numberToHex(chainId);
				case "eth_sendTransaction": {
					assertArrayPresence(args.params);
					const rawParams = args.params[0];
					assertPresence(rawParams.to, standardErrors.rpc.invalidParams("to is required"));
					const params = {
						to: rawParams.to,
						data: ensureHexString((_a$1 = rawParams.data) !== null && _a$1 !== void 0 ? _a$1 : "0x", true),
						value: ensureHexString((_b = rawParams.value) !== null && _b !== void 0 ? _b : "0x", true),
						from: (_c = rawParams.from) !== null && _c !== void 0 ? _c : subAccount.address
					};
					const sendCallsRequest = createWalletSendCallsRequest({
						calls: [params],
						chainId,
						from: params.from
					});
					const response = await request(sendCallsRequest);
					return waitForCallsTransactionHash({
						client,
						id: response
					});
				}
				case "wallet_sendCalls": {
					assertArrayPresence(args.params);
					const chainId$1 = get(args.params[0], "chainId");
					if (!chainId$1) throw standardErrors.rpc.invalidParams("chainId is required");
					if (!isHex(chainId$1)) throw standardErrors.rpc.invalidParams("chainId must be a hex encoded integer");
					if (!args.params[0]) throw standardErrors.rpc.invalidParams("params are required");
					if (!("calls" in args.params[0])) throw standardErrors.rpc.invalidParams("calls are required");
					let prepareCallsRequest = {
						method: "wallet_prepareCalls",
						params: [{
							version: "1.0",
							calls: args.params[0].calls,
							chainId: chainId$1,
							from: subAccount.address,
							capabilities: "capabilities" in args.params[0] ? args.params[0].capabilities : {}
						}]
					};
					if (parentAddress) prepareCallsRequest = injectRequestCapabilities(prepareCallsRequest, { funding: [{
						type: "spendPermission",
						data: {
							autoApply: true,
							sources: [parentAddress],
							preference: "PREFER_DIRECT_BALANCE"
						}
					}] });
					let prepareCallsResponse = await request(prepareCallsRequest);
					const signResponse = await ((_e = (_d = owner).sign) === null || _e === void 0 ? void 0 : _e.call(_d, { hash: hexToString(prepareCallsResponse.signatureRequest.hash) }));
					let signatureData;
					if (!signResponse) throw standardErrors.rpc.internal("signature not found");
					if (isHex(signResponse)) signatureData = {
						type: "secp256k1",
						data: {
							address: owner.address,
							signature: signResponse
						}
					};
					else signatureData = {
						type: "webauthn",
						data: {
							signature: JSON.stringify(convertCredentialToJSON(Object.assign({ id: (_f = owner.id) !== null && _f !== void 0 ? _f : "1" }, signResponse))),
							publicKey: owner.publicKey
						}
					};
					return (await request({
						method: "wallet_sendPreparedCalls",
						params: [{
							version: "1.0",
							type: prepareCallsResponse.type,
							data: prepareCallsResponse.userOp,
							chainId: prepareCallsResponse.chainId,
							signature: signatureData
						}]
					}))[0];
				}
				case "wallet_sendPreparedCalls": {
					assertArrayPresence(args.params);
					const chainId$1 = get(args.params[0], "chainId");
					if (!chainId$1) throw standardErrors.rpc.invalidParams("chainId is required");
					if (!isHex(chainId$1)) throw standardErrors.rpc.invalidParams("chainId must be a hex encoded integer");
					return await client.request({
						method: "wallet_sendPreparedCalls",
						params: args.params
					});
				}
				case "wallet_prepareCalls": {
					assertArrayPresence(args.params);
					const chainId$1 = get(args.params[0], "chainId");
					if (!chainId$1) throw standardErrors.rpc.invalidParams("chainId is required");
					if (!isHex(chainId$1)) throw standardErrors.rpc.invalidParams("chainId must be a hex encoded integer");
					if (!args.params[0]) throw standardErrors.rpc.invalidParams("params are required");
					if (!get(args.params[0], "calls")) throw standardErrors.rpc.invalidParams("calls are required");
					const prepareCallsParams = args.params[0];
					if (attribution && prepareCallsParams.capabilities && !("attribution" in prepareCallsParams.capabilities)) prepareCallsParams.capabilities.attribution = attribution;
					return await client.request({
						method: "wallet_prepareCalls",
						params: [Object.assign(Object.assign({}, args.params[0]), { chainId: chainId$1 })]
					});
				}
				case "personal_sign": {
					assertArrayPresence(args.params);
					if (!isHex(args.params[0])) throw standardErrors.rpc.invalidParams("message must be a hex encoded string");
					const message = hexToString(args.params[0]);
					return account$1.signMessage({ message });
				}
				case "eth_signTypedData_v4": {
					assertArrayPresence(args.params);
					const typedData = typeof args.params[1] === "string" ? JSON.parse(args.params[1]) : args.params[1];
					return account$1.signTypedData(typedData);
				}
				case "eth_signTypedData_v1":
				case "eth_signTypedData_v3":
				case "wallet_addEthereumChain":
				case "wallet_switchEthereumChain":
				default: throw standardErrors.rpc.methodNotSupported();
			}
		} catch (error) {
			if (isViemError(error)) {
				const newError = viemHttpErrorToProviderError(error);
				if (newError) throw newError;
			}
			throw error;
		}
	};
	return { request };
}
async function findOwnerIndex({ address, client, publicKey, factory, factoryData }) {
	if (!await getCode(client, { address }) && factory && factoryData) {
		const initData = decodeFunctionData({
			abi: factoryAbi,
			data: factoryData
		});
		if (initData.functionName !== "createAccount") throw standardErrors.rpc.internal("unknown factory function");
		const [owners] = initData.args;
		return owners.findIndex((owner) => {
			return owner.toLowerCase() === formatPublicKey(publicKey).toLowerCase();
		});
	}
	const ownerCount = await readContract(client, {
		address,
		abi,
		functionName: "ownerCount"
	});
	for (let i$1 = Number(ownerCount) - 1; i$1 >= 0; i$1--) {
		const owner = await readContract(client, {
			address,
			abi,
			functionName: "ownerAtIndex",
			args: [BigInt(i$1)]
		});
		const formatted = formatPublicKey(publicKey);
		if (owner.toLowerCase() === formatted.toLowerCase()) return i$1;
	}
	return -1;
}
function formatPublicKey(publicKey) {
	if (isAddress(publicKey)) return pad(publicKey);
	return publicKey;
}
async function presentAddOwnerDialog() {
	var _a, _b;
	const appName = (_b = (_a = store.config.get().metadata) === null || _a === void 0 ? void 0 : _a.appName) !== null && _b !== void 0 ? _b : "App";
	const dialog$1 = initDialog();
	return new Promise((resolve) => {
		logDialogShown({ dialogContext: "sub_account_add_owner" });
		dialog$1.presentItem({
			title: `Re-authorize ${appName}`,
			message: `${appName} has lost access to your account. Please sign at the next step to re-authorize ${appName}`,
			onClose: () => {
				logDialogDismissed({ dialogContext: "sub_account_add_owner" });
				resolve("cancel");
			},
			actionItems: [{
				text: "Continue",
				variant: "primary",
				onClick: () => {
					logDialogActionClicked({
						dialogContext: "sub_account_add_owner",
						dialogAction: "confirm"
					});
					dialog$1.clear();
					resolve("authenticate");
				}
			}, {
				text: "Not now",
				variant: "secondary",
				onClick: () => {
					logDialogActionClicked({
						dialogContext: "sub_account_add_owner",
						dialogAction: "cancel"
					});
					dialog$1.clear();
					resolve("cancel");
				}
			}]
		});
	});
}
async function handleAddSubAccountOwner({ ownerAccount, globalAccountRequest }) {
	var _a, _b;
	const account$1 = store.account.get();
	const subAccount = store.subAccounts.get();
	const globalAccount = (_a = account$1.accounts) === null || _a === void 0 ? void 0 : _a.find((account$2) => account$2.toLowerCase() !== (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address.toLowerCase()));
	assertPresence(globalAccount, standardErrors.provider.unauthorized("no global account"));
	assertPresence((_b = account$1.chain) === null || _b === void 0 ? void 0 : _b.id, standardErrors.provider.unauthorized("no chain id"));
	assertPresence(subAccount === null || subAccount === void 0 ? void 0 : subAccount.address, standardErrors.provider.unauthorized("no sub account"));
	const calls = [];
	if (ownerAccount.type === "local" && ownerAccount.address) calls.push({
		to: subAccount.address,
		data: encodeFunctionData({
			abi,
			functionName: "addOwnerAddress",
			args: [ownerAccount.address]
		}),
		value: toHex(0)
	});
	if (ownerAccount.publicKey) {
		const [x, y$1] = decodeAbiParameters([{ type: "bytes32" }, { type: "bytes32" }], ownerAccount.publicKey);
		calls.push({
			to: subAccount.address,
			data: encodeFunctionData({
				abi,
				functionName: "addOwnerPublicKey",
				args: [x, y$1]
			}),
			value: toHex(0)
		});
	}
	const request = {
		method: "wallet_sendCalls",
		params: [{
			version: "1",
			calls,
			chainId: numberToHex(84532),
			from: globalAccount
		}]
	};
	if (await presentAddOwnerDialog() === "cancel") throw standardErrors.provider.unauthorized("user cancelled");
	const callsId = await globalAccountRequest(request);
	const client = getClient(account$1.chain.id);
	assertPresence(client, standardErrors.rpc.internal(`client not found for chainId ${account$1.chain.id}`));
	if ((await waitForCallsStatus(client, { id: callsId })).status !== "success") throw standardErrors.rpc.internal("add owner call failed");
	const ownerIndex = await findOwnerIndex({
		address: subAccount.address,
		publicKey: ownerAccount.type === "local" && ownerAccount.address ? ownerAccount.address : ownerAccount.publicKey,
		client
	});
	if (ownerIndex === -1) throw standardErrors.rpc.internal("failed to find owner index");
	return ownerIndex;
}
async function handleInsufficientBalanceError({ errorData, globalAccountAddress, subAccountAddress, client, request, subAccountRequest, globalAccountRequest }) {
	var _a;
	const chainId = (_a = client.chain) === null || _a === void 0 ? void 0 : _a.id;
	assertPresence(chainId, standardErrors.rpc.internal(`invalid chainId`));
	const spendPermissionRequests = parseFundingOptions({
		errorData,
		sourceAddress: globalAccountAddress
	});
	const userChoice = await presentSubAccountFundingDialog();
	if (userChoice === "cancel") throw new Error("User cancelled funding");
	let signatureRequest;
	const defaultPeriod = 3600 * 24;
	const defaultMultiplier = 3;
	if (userChoice === "update_permission") {
		if (spendPermissionRequests.length === 1) {
			const spendPermission = spendPermissionRequests[0];
			const message = createSpendPermissionMessage({
				spendPermission: {
					token: spendPermission.token,
					allowance: numberToHex(spendPermission.requiredAmount * BigInt(defaultMultiplier)),
					period: defaultPeriod,
					account: globalAccountAddress,
					spender: subAccountAddress,
					start: 0,
					end: 0xffffffffffff,
					salt: numberToHex(BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))),
					extraData: "0x"
				},
				chainId
			});
			signatureRequest = {
				method: "eth_signTypedData_v4",
				params: [globalAccountAddress, message]
			};
		} else {
			const message = createSpendPermissionBatchMessage({
				spendPermissionBatch: {
					account: globalAccountAddress,
					period: defaultPeriod,
					start: 0,
					end: 0xffffffffffff,
					permissions: spendPermissionRequests.map((spendPermission) => ({
						token: spendPermission.token,
						allowance: numberToHex(spendPermission.requiredAmount * BigInt(defaultMultiplier)),
						period: defaultPeriod,
						account: globalAccountAddress,
						spender: subAccountAddress,
						salt: "0x0",
						extraData: "0x"
					}))
				},
				chainId
			});
			signatureRequest = {
				method: "eth_signTypedData_v4",
				params: [globalAccountAddress, message]
			};
		}
		try {
			await globalAccountRequest(signatureRequest);
		} catch (error) {
			console.error(error);
			throw new Error("User denied spend permission request");
		}
		return subAccountRequest(request);
	}
	const transferCalls = spendPermissionRequests.map((spendPermission) => {
		if (spendPermission.token.toLowerCase() === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()) return {
			to: subAccountAddress,
			value: numberToHex(spendPermission.requiredAmount),
			data: "0x"
		};
		return {
			to: spendPermission.token,
			value: "0x0",
			data: encodeFunctionData({
				abi: erc20Abi,
				functionName: "transfer",
				args: [subAccountAddress, spendPermission.requiredAmount]
			})
		};
	});
	let originalSendCallsParams;
	if (request.method === "wallet_sendCalls" && isSendCallsParams(request.params)) originalSendCallsParams = request.params[0];
	else if (request.method === "eth_sendTransaction" && isEthSendTransactionParams(request.params)) originalSendCallsParams = createWalletSendCallsRequest({
		calls: [request.params[0]],
		chainId,
		from: request.params[0].from
	}).params[0];
	else throw new Error("Could not get original call");
	const subAccountCallData = encodeFunctionData({
		abi,
		functionName: "executeBatch",
		args: [originalSendCallsParams.calls.map((call$1) => {
			var _a$1, _b;
			return {
				target: call$1.to,
				value: hexToBigInt((_a$1 = call$1.value) !== null && _a$1 !== void 0 ? _a$1 : "0x0"),
				data: (_b = call$1.data) !== null && _b !== void 0 ? _b : "0x"
			};
		})]
	});
	const calls = [...transferCalls, {
		data: subAccountCallData,
		to: subAccountAddress,
		value: "0x0"
	}];
	const result = await globalAccountRequest({
		method: "wallet_sendCalls",
		params: [Object.assign(Object.assign({}, originalSendCallsParams), {
			calls,
			from: globalAccountAddress
		})]
	});
	if (request.method === "eth_sendTransaction") return waitForCallsTransactionHash({
		client,
		id: result
	});
	return result;
}
var Signer = class {
	constructor(params) {
		var _a, _b, _c, _d;
		this.communicator = params.communicator;
		this.callback = params.callback;
		this.keyManager = new SCWKeyManager();
		const { account: account$1, chains: chains$1 } = store.getState();
		this.accounts = (_a = account$1.accounts) !== null && _a !== void 0 ? _a : [];
		this.chain = (_b = account$1.chain) !== null && _b !== void 0 ? _b : { id: (_d = (_c = params.metadata.appChainIds) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : 1 };
		if (chains$1) createClients(chains$1);
	}
	get isConnected() {
		return this.accounts.length > 0;
	}
	async handshake(args) {
		var _a, _b, _c;
		const correlationId = correlationIds.get(args);
		logHandshakeStarted({
			method: args.method,
			correlationId
		});
		try {
			await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
			const handshakeMessage = await this.createRequestMessage({ handshake: {
				method: args.method,
				params: (_c = args.params) !== null && _c !== void 0 ? _c : []
			} }, correlationId);
			const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
			if ("failure" in response.content) throw response.content.failure;
			const peerPublicKey = await importKeyFromHexString("public", response.sender);
			await this.keyManager.setPeerPublicKey(peerPublicKey);
			const decrypted = await this.decryptResponseMessage(response);
			this.handleResponse(args, decrypted);
			logHandshakeCompleted({
				method: args.method,
				correlationId
			});
		} catch (error) {
			logHandshakeError({
				method: args.method,
				correlationId,
				errorMessage: parseErrorMessageFromAny(error)
			});
			throw error;
		}
	}
	async request(request) {
		const correlationId = correlationIds.get(request);
		logRequestStarted$1({
			method: request.method,
			correlationId
		});
		try {
			const result = await this._request(request);
			logRequestCompleted({
				method: request.method,
				correlationId
			});
			return result;
		} catch (error) {
			logRequestError$1({
				method: request.method,
				correlationId,
				errorMessage: parseErrorMessageFromAny(error)
			});
			throw error;
		}
	}
	async _request(request) {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
		if (this.accounts.length === 0) switch (request.method) {
			case "wallet_switchEthereumChain":
				assertParamsChainId(request.params);
				this.chain.id = Number(request.params[0].chainId);
				return;
			case "wallet_connect": {
				await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
				await initSubAccountConfig();
				let capabilitiesToInject = {};
				if (requestHasCapability(request, "addSubAccount")) capabilitiesToInject = (_d = (_c = store.subAccountsConfig.get()) === null || _c === void 0 ? void 0 : _c.capabilities) !== null && _d !== void 0 ? _d : {};
				const modifiedRequest = injectRequestCapabilities(request, capabilitiesToInject);
				return this.sendRequestToPopup(modifiedRequest);
			}
			case "wallet_sendCalls":
			case "wallet_sign": return this.sendRequestToPopup(request);
			default: throw standardErrors.provider.unauthorized();
		}
		if (this.shouldRequestUseSubAccountSigner(request)) {
			const correlationId = correlationIds.get(request);
			logSubAccountRequestStarted({
				method: request.method,
				correlationId
			});
			try {
				const result = await this.sendRequestToSubAccountSigner(request);
				logSubAccountRequestCompleted({
					method: request.method,
					correlationId
				});
				return result;
			} catch (error) {
				logSubAccountRequestError({
					method: request.method,
					correlationId,
					errorMessage: parseErrorMessageFromAny(error)
				});
				throw error;
			}
		}
		switch (request.method) {
			case "eth_requestAccounts":
			case "eth_accounts": {
				const subAccount = store.subAccounts.get();
				const subAccountsConfig$1 = store.subAccountsConfig.get();
				if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) this.accounts = (subAccountsConfig$1 === null || subAccountsConfig$1 === void 0 ? void 0 : subAccountsConfig$1.enableAutoSubAccounts) ? prependWithoutDuplicates(this.accounts, subAccount.address) : appendWithoutDuplicates(this.accounts, subAccount.address);
				(_e = this.callback) === null || _e === void 0 || _e.call(this, "connect", { chainId: numberToHex(this.chain.id) });
				return this.accounts;
			}
			case "eth_coinbase": return this.accounts[0];
			case "net_version": return this.chain.id;
			case "eth_chainId": return numberToHex(this.chain.id);
			case "wallet_getCapabilities": return this.handleGetCapabilitiesRequest(request);
			case "wallet_switchEthereumChain": return this.handleSwitchChainRequest(request);
			case "eth_ecRecover":
			case "personal_sign":
			case "wallet_sign":
			case "personal_ecRecover":
			case "eth_signTransaction":
			case "eth_sendTransaction":
			case "eth_signTypedData_v1":
			case "eth_signTypedData_v3":
			case "eth_signTypedData_v4":
			case "eth_signTypedData":
			case "wallet_addEthereumChain":
			case "wallet_watchAsset":
			case "wallet_sendCalls":
			case "wallet_showCallsStatus":
			case "wallet_grantPermissions": return this.sendRequestToPopup(request);
			case "wallet_connect": {
				const cachedResponse = await getCachedWalletConnectResponse();
				if (cachedResponse) return cachedResponse;
				await ((_g = (_f = this.communicator).waitForPopupLoaded) === null || _g === void 0 ? void 0 : _g.call(_f));
				await initSubAccountConfig();
				const subAccountsConfig$1 = store.subAccountsConfig.get();
				const modifiedRequest = injectRequestCapabilities(request, (_h = subAccountsConfig$1 === null || subAccountsConfig$1 === void 0 ? void 0 : subAccountsConfig$1.capabilities) !== null && _h !== void 0 ? _h : {});
				const result = await this.sendRequestToPopup(modifiedRequest);
				(_j = this.callback) === null || _j === void 0 || _j.call(this, "connect", { chainId: numberToHex(this.chain.id) });
				return result;
			}
			case "wallet_getSubAccounts": {
				const subAccount = store.subAccounts.get();
				if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) return { subAccounts: [subAccount] };
				if (!this.chain.rpcUrl) throw standardErrors.rpc.internal("No RPC URL set for chain");
				const response = await fetchRPCRequest(request, this.chain.rpcUrl);
				assertArrayPresence(response.subAccounts, "subAccounts");
				if (response.subAccounts.length > 0) {
					assertSubAccount(response.subAccounts[0]);
					const subAccount$1 = response.subAccounts[0];
					store.subAccounts.set({
						address: subAccount$1.address,
						factory: subAccount$1.factory,
						factoryData: subAccount$1.factoryData
					});
				}
				return response;
			}
			case "wallet_addSubAccount": return this.addSubAccount(request);
			case "coinbase_fetchPermissions": {
				assertFetchPermissionsRequest(request);
				const completeRequest = fillMissingParamsForFetchPermissions(request);
				const permissions = await fetchRPCRequest(completeRequest, CB_WALLET_RPC_URL);
				const requestedChainId = hexToNumber((_k = completeRequest.params) === null || _k === void 0 ? void 0 : _k[0].chainId);
				store.spendPermissions.set(permissions.permissions.map((permission) => Object.assign(Object.assign({}, permission), { chainId: requestedChainId })));
				return permissions;
			}
			default:
				if (!this.chain.rpcUrl) throw standardErrors.rpc.internal("No RPC URL set for chain");
				return fetchRPCRequest(request, this.chain.rpcUrl);
		}
	}
	async sendRequestToPopup(request) {
		var _a, _b;
		await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
		const response = await this.sendEncryptedRequest(request);
		const decrypted = await this.decryptResponseMessage(response);
		return this.handleResponse(request, decrypted);
	}
	async handleResponse(request, decrypted) {
		var _a, _b, _c, _d, _e;
		const result = decrypted.result;
		if ("error" in result) throw result.error;
		switch (request.method) {
			case "eth_requestAccounts": {
				const accounts = result.value;
				this.accounts = accounts;
				store.account.set({
					accounts,
					chain: this.chain
				});
				(_a = this.callback) === null || _a === void 0 || _a.call(this, "accountsChanged", accounts);
				break;
			}
			case "wallet_connect": {
				const response = result.value;
				const accounts = response.accounts.map((account$2) => account$2.address);
				this.accounts = accounts;
				store.account.set({ accounts });
				const account$1 = response.accounts.at(0);
				const capabilities = account$1 === null || account$1 === void 0 ? void 0 : account$1.capabilities;
				if (capabilities === null || capabilities === void 0 ? void 0 : capabilities.subAccounts) {
					const capabilityResponse = capabilities === null || capabilities === void 0 ? void 0 : capabilities.subAccounts;
					assertArrayPresence(capabilityResponse, "subAccounts");
					assertSubAccount(capabilityResponse[0]);
					store.subAccounts.set({
						address: capabilityResponse[0].address,
						factory: capabilityResponse[0].factory,
						factoryData: capabilityResponse[0].factoryData
					});
				}
				let accounts_ = [this.accounts[0]];
				const subAccount = store.subAccounts.get();
				const subAccountsConfig$1 = store.subAccountsConfig.get();
				if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) this.accounts = (subAccountsConfig$1 === null || subAccountsConfig$1 === void 0 ? void 0 : subAccountsConfig$1.enableAutoSubAccounts) ? prependWithoutDuplicates(this.accounts, subAccount.address) : appendWithoutDuplicates(this.accounts, subAccount.address);
				const spendPermissions$1 = (_c = (_b = response === null || response === void 0 ? void 0 : response.accounts) === null || _b === void 0 ? void 0 : _b[0].capabilities) === null || _c === void 0 ? void 0 : _c.spendPermissions;
				if (spendPermissions$1 && "permissions" in spendPermissions$1) store.spendPermissions.set(spendPermissions$1 === null || spendPermissions$1 === void 0 ? void 0 : spendPermissions$1.permissions);
				(_d = this.callback) === null || _d === void 0 || _d.call(this, "accountsChanged", accounts_);
				break;
			}
			case "wallet_addSubAccount": {
				assertSubAccount(result.value);
				const subAccount = result.value;
				store.subAccounts.set(subAccount);
				const subAccountsConfig$1 = store.subAccountsConfig.get();
				this.accounts = (subAccountsConfig$1 === null || subAccountsConfig$1 === void 0 ? void 0 : subAccountsConfig$1.enableAutoSubAccounts) ? prependWithoutDuplicates(this.accounts, subAccount.address) : appendWithoutDuplicates(this.accounts, subAccount.address);
				(_e = this.callback) === null || _e === void 0 || _e.call(this, "accountsChanged", this.accounts);
				break;
			}
			default: break;
		}
		return result.value;
	}
	async cleanup() {
		var _a, _b;
		const metadata = store.config.get().metadata;
		await this.keyManager.clear();
		store.account.clear();
		store.subAccounts.clear();
		store.spendPermissions.clear();
		store.chains.clear();
		this.accounts = [];
		this.chain = { id: (_b = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.appChainIds) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 1 };
	}
	async handleSwitchChainRequest(request) {
		assertParamsChainId(request.params);
		const chainId = ensureIntNumber(request.params[0].chainId);
		if (this.updateChain(chainId)) return null;
		const popupResult = await this.sendRequestToPopup(request);
		if (popupResult === null) this.updateChain(chainId);
		return popupResult;
	}
	async handleGetCapabilitiesRequest(request) {
		assertGetCapabilitiesParams(request.params);
		const requestedAccount = request.params[0];
		const filterChainIds = request.params[1];
		if (!this.accounts.some((account$1) => isAddressEqual(account$1, requestedAccount))) throw standardErrors.provider.unauthorized("no active account found when getting capabilities");
		const capabilities = store.getState().account.capabilities;
		if (!capabilities) return {};
		if (!filterChainIds || filterChainIds.length === 0) return capabilities;
		const filterChainNumbers = new Set(filterChainIds.map((chainId) => hexToNumber(chainId)));
		return Object.fromEntries(Object.entries(capabilities).filter(([capabilityKey]) => {
			try {
				const capabilityChainNumber = hexToNumber(capabilityKey);
				return filterChainNumbers.has(capabilityChainNumber);
			} catch (_a) {
				return false;
			}
		}));
	}
	async sendEncryptedRequest(request) {
		const sharedSecret = await this.keyManager.getSharedSecret();
		if (!sharedSecret) throw standardErrors.provider.unauthorized("No shared secret found when encrypting request");
		const encrypted = await encryptContent({
			action: request,
			chainId: this.chain.id
		}, sharedSecret);
		const correlationId = correlationIds.get(request);
		const message = await this.createRequestMessage({ encrypted }, correlationId);
		return this.communicator.postRequestAndWaitForResponse(message);
	}
	async createRequestMessage(content, correlationId) {
		const publicKey = await exportKeyToHexString("public", await this.keyManager.getOwnPublicKey());
		return {
			id: crypto.randomUUID(),
			correlationId,
			sender: publicKey,
			content,
			timestamp: /* @__PURE__ */ new Date()
		};
	}
	async decryptResponseMessage(message) {
		var _a, _b, _c;
		const content = message.content;
		if ("failure" in content) throw content.failure;
		const sharedSecret = await this.keyManager.getSharedSecret();
		if (!sharedSecret) throw standardErrors.provider.unauthorized("Invalid session: no shared secret found when decrypting response");
		const response = await decryptContent(content.encrypted, sharedSecret);
		const availableChains = (_a = response.data) === null || _a === void 0 ? void 0 : _a.chains;
		if (availableChains) {
			const nativeCurrencies = (_b = response.data) === null || _b === void 0 ? void 0 : _b.nativeCurrencies;
			const chains$1 = Object.entries(availableChains).map(([id, rpcUrl]) => {
				const nativeCurrency = nativeCurrencies === null || nativeCurrencies === void 0 ? void 0 : nativeCurrencies[Number(id)];
				return Object.assign({
					id: Number(id),
					rpcUrl
				}, nativeCurrency ? { nativeCurrency } : {});
			});
			store.chains.set(chains$1);
			this.updateChain(this.chain.id, chains$1);
			createClients(chains$1);
		}
		const walletCapabilities = (_c = response.data) === null || _c === void 0 ? void 0 : _c.capabilities;
		if (walletCapabilities) store.account.set({ capabilities: walletCapabilities });
		return response;
	}
	updateChain(chainId, newAvailableChains) {
		var _a;
		const state = store.getState();
		const chains$1 = newAvailableChains !== null && newAvailableChains !== void 0 ? newAvailableChains : state.chains;
		const chain = chains$1 === null || chains$1 === void 0 ? void 0 : chains$1.find((chain$1) => chain$1.id === chainId);
		if (!chain) return false;
		if (chain !== this.chain) {
			this.chain = chain;
			store.account.set({ chain });
			(_a = this.callback) === null || _a === void 0 || _a.call(this, "chainChanged", hexStringFromNumber(chain.id));
		}
		return true;
	}
	async addSubAccount(request) {
		var _a, _b, _c, _d;
		const subAccount = store.getState().subAccount;
		const subAccountsConfig$1 = store.subAccountsConfig.get();
		if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) {
			this.accounts = (subAccountsConfig$1 === null || subAccountsConfig$1 === void 0 ? void 0 : subAccountsConfig$1.enableAutoSubAccounts) ? prependWithoutDuplicates(this.accounts, subAccount.address) : appendWithoutDuplicates(this.accounts, subAccount.address);
			(_a = this.callback) === null || _a === void 0 || _a.call(this, "accountsChanged", this.accounts);
			return subAccount;
		}
		await ((_c = (_b = this.communicator).waitForPopupLoaded) === null || _c === void 0 ? void 0 : _c.call(_b));
		if (Array.isArray(request.params) && request.params.length > 0 && request.params[0].account && request.params[0].account.type === "create") {
			let keys$1;
			if (request.params[0].account.keys && request.params[0].account.keys.length > 0) keys$1 = request.params[0].account.keys;
			else {
				const config$1 = (_d = store.subAccountsConfig.get()) !== null && _d !== void 0 ? _d : {};
				const { account: ownerAccount } = config$1.toOwnerAccount ? await config$1.toOwnerAccount() : await getCryptoKeyAccount();
				if (!ownerAccount) throw standardErrors.provider.unauthorized("could not get subaccount owner account when adding sub account");
				keys$1 = [{
					type: ownerAccount.address ? "address" : "webauthn-p256",
					publicKey: ownerAccount.address || ownerAccount.publicKey
				}];
			}
			request.params[0].account.keys = keys$1;
		}
		const response = await this.sendRequestToPopup(request);
		assertSubAccount(response);
		return response;
	}
	shouldRequestUseSubAccountSigner(request) {
		const sender = getSenderFromRequest(request);
		const subAccount = store.subAccounts.get();
		if (sender) return sender.toLowerCase() === (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address.toLowerCase());
		return false;
	}
	async sendRequestToSubAccountSigner(request) {
		var _a;
		const subAccount = store.subAccounts.get();
		const subAccountsConfig$1 = store.subAccountsConfig.get();
		const config$1 = store.config.get();
		assertPresence(subAccount === null || subAccount === void 0 ? void 0 : subAccount.address, standardErrors.provider.unauthorized("no active sub account when sending request to sub account signer"));
		const ownerAccount = (subAccountsConfig$1 === null || subAccountsConfig$1 === void 0 ? void 0 : subAccountsConfig$1.toOwnerAccount) ? await subAccountsConfig$1.toOwnerAccount() : await getCryptoKeyAccount();
		assertPresence(ownerAccount === null || ownerAccount === void 0 ? void 0 : ownerAccount.account, standardErrors.provider.unauthorized("no active sub account owner when sending request to sub account signer"));
		if (getSenderFromRequest(request) === void 0) request = addSenderToRequest(request, subAccount.address);
		const client = getClient(this.chain.id);
		assertPresence(client, standardErrors.rpc.internal(`client not found for chainId ${this.chain.id} when sending request to sub account signer`));
		const globalAccountAddress = this.accounts.find((account$1) => account$1.toLowerCase() !== subAccount.address.toLowerCase());
		assertPresence(globalAccountAddress, standardErrors.provider.unauthorized("no global account found when sending request to sub account signer"));
		const dataSuffix = makeDataSuffix({
			attribution: (_a = config$1.preference) === null || _a === void 0 ? void 0 : _a.attribution,
			dappOrigin: window.location.origin
		});
		const publicKey = ownerAccount.account.type === "local" ? ownerAccount.account.address : ownerAccount.account.publicKey;
		let ownerIndex = await findOwnerIndex({
			address: subAccount.address,
			factory: subAccount.factory,
			factoryData: subAccount.factoryData,
			publicKey,
			client
		});
		if (ownerIndex === -1) {
			const correlationId = correlationIds.get(request);
			logAddOwnerStarted({
				method: request.method,
				correlationId
			});
			try {
				ownerIndex = await handleAddSubAccountOwner({
					ownerAccount: ownerAccount.account,
					globalAccountRequest: this.sendRequestToPopup.bind(this)
				});
				logAddOwnerCompleted({
					method: request.method,
					correlationId
				});
			} catch (error) {
				logAddOwnerError({
					method: request.method,
					correlationId,
					errorMessage: parseErrorMessageFromAny(error)
				});
				return standardErrors.provider.unauthorized("failed to add sub account owner when sending request to sub account signer");
			}
		}
		const { request: subAccountRequest } = await createSubAccountSigner({
			address: subAccount.address,
			owner: ownerAccount.account,
			client,
			factory: subAccount.factory,
			factoryData: subAccount.factoryData,
			parentAddress: globalAccountAddress,
			attribution: dataSuffix ? { suffix: dataSuffix } : void 0,
			ownerIndex
		});
		try {
			return await subAccountRequest(request);
		} catch (error) {
			let errorObject;
			if (isViemError(error)) errorObject = JSON.parse(error.details);
			else if (isActionableHttpRequestError(error)) errorObject = error;
			else throw error;
			if (!(isActionableHttpRequestError(errorObject) && errorObject.data)) throw error;
			if (!errorObject.data) throw error;
			const correlationId = correlationIds.get(request);
			logInsufficientBalanceErrorHandlingStarted({
				method: request.method,
				correlationId
			});
			try {
				const result = await handleInsufficientBalanceError({
					errorData: errorObject.data,
					globalAccountAddress,
					subAccountAddress: subAccount.address,
					client,
					request,
					subAccountRequest,
					globalAccountRequest: this.request.bind(this)
				});
				logInsufficientBalanceErrorHandlingCompleted({
					method: request.method,
					correlationId
				});
				return result;
			} catch (handlingError) {
				console.error(handlingError);
				logInsufficientBalanceErrorHandlingError({
					method: request.method,
					correlationId,
					errorMessage: parseErrorMessageFromAny(handlingError)
				});
				throw error;
			}
		}
	}
};
var __rest = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i$1 = 0, p = Object.getOwnPropertySymbols(s); i$1 < p.length; i$1++) if (e.indexOf(p[i$1]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i$1])) t[p[i$1]] = s[p[i$1]];
	}
	return t;
};
var BaseAccountProvider = class extends ProviderEventEmitter {
	constructor(_a) {
		var { metadata } = _a, _b = _a.preference, { walletUrl } = _b, preference = __rest(_b, ["walletUrl"]);
		super();
		this.isBaseAccount = true;
		this.communicator = new Communicator({
			url: walletUrl,
			metadata,
			preference
		});
		this.signer = new Signer({
			metadata,
			communicator: this.communicator,
			callback: this.emit.bind(this)
		});
	}
	async request(args) {
		const correlationId = crypto.randomUUID();
		correlationIds.set(args, correlationId);
		logRequestStarted({
			method: args.method,
			correlationId
		});
		try {
			const result = await this._request(args);
			logRequestResponded({
				method: args.method,
				correlationId
			});
			return result;
		} catch (error) {
			logRequestError({
				method: args.method,
				correlationId,
				errorMessage: error instanceof Error ? error.message : ""
			});
			throw error;
		} finally {
			correlationIds.delete(args);
		}
	}
	async _request(args) {
		var _a, _b;
		try {
			checkErrorForInvalidRequestArgs(args);
			if (!this.signer.isConnected) switch (args.method) {
				case "eth_requestAccounts":
					await this.signer.handshake({ method: "handshake" });
					await initSubAccountConfig();
					await this.signer.request({
						method: "wallet_connect",
						params: [{
							version: "1",
							capabilities: Object.assign({}, (_b = (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.capabilities) !== null && _b !== void 0 ? _b : {})
						}]
					});
					break;
				case "wallet_connect":
					await this.signer.handshake({ method: "handshake" });
					return await this.signer.request(args);
				case "wallet_sendCalls":
				case "wallet_sign": try {
					await this.signer.handshake({ method: "handshake" });
					return await this.signer.request(args);
				} finally {
					await this.signer.cleanup();
				}
				case "wallet_getCallsStatus": return await fetchRPCRequest(args, CB_WALLET_RPC_URL);
				case "eth_accounts": return [];
				case "net_version": return 1;
				case "eth_chainId": return hexStringFromNumber(1);
				default: throw standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
			}
			return await this.signer.request(args);
		} catch (error) {
			const { code } = error;
			if (code === standardErrorCodes.provider.unauthorized) await this.disconnect();
			return Promise.reject(serializeError(error));
		}
	}
	async disconnect() {
		await this.signer.cleanup();
		correlationIds.clear();
		this.emit("disconnect", standardErrors.provider.disconnected("User initiated disconnection"));
	}
};
function getInjectedProvider() {
	var _a, _b;
	const injectedProvider = (_a = window.ethereum) !== null && _a !== void 0 ? _a : (_b = window.top) === null || _b === void 0 ? void 0 : _b.ethereum;
	if (injectedProvider === null || injectedProvider === void 0 ? void 0 : injectedProvider["isCoinbaseBrowser"]) return injectedProvider;
	return null;
}
function createBaseAccountSDK(params) {
	var _a, _b, _c, _d;
	const options = {
		metadata: {
			appName: params.appName || "App",
			appLogoUrl: params.appLogoUrl || "",
			appChainIds: params.appChainIds || []
		},
		preference: (_a = params.preference) !== null && _a !== void 0 ? _a : {},
		paymasterUrls: params.paymasterUrls
	};
	if ((_b = params.subAccounts) === null || _b === void 0 ? void 0 : _b.toOwnerAccount) validateSubAccount(params.subAccounts.toOwnerAccount);
	store.subAccountsConfig.set({
		toOwnerAccount: (_c = params.subAccounts) === null || _c === void 0 ? void 0 : _c.toOwnerAccount,
		enableAutoSubAccounts: (_d = params.subAccounts) === null || _d === void 0 ? void 0 : _d.enableAutoSubAccounts
	});
	store.config.set(options);
	store.persist.rehydrate();
	checkCrossOriginOpenerPolicy();
	validatePreferences(options.preference);
	if (options.preference.telemetry !== false) loadTelemetryScript();
	let provider = null;
	const sdk = {
		getProvider: () => {
			var _a$1;
			if (!provider) provider = (_a$1 = getInjectedProvider()) !== null && _a$1 !== void 0 ? _a$1 : new BaseAccountProvider(options);
			return provider;
		},
		subAccount: {
			async create(accountParam) {
				var _a$1;
				return await ((_a$1 = sdk.getProvider()) === null || _a$1 === void 0 ? void 0 : _a$1.request({
					method: "wallet_addSubAccount",
					params: [{
						version: "1",
						account: accountParam
					}]
				}));
			},
			async get() {
				var _a$1, _b$1;
				const subAccount = store.subAccounts.get();
				if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) return subAccount;
				const subAccounts$1 = (_b$1 = (await ((_a$1 = sdk.getProvider()) === null || _a$1 === void 0 ? void 0 : _a$1.request({
					method: "wallet_connect",
					params: [{
						version: "1",
						capabilities: {}
					}]
				}))).accounts[0].capabilities) === null || _b$1 === void 0 ? void 0 : _b$1.subAccounts;
				if (!Array.isArray(subAccounts$1)) return null;
				return subAccounts$1[0];
			},
			addOwner: async ({ address, publicKey, chainId }) => {
				var _a$1, _b$1;
				const subAccount = store.subAccounts.get();
				const account$1 = store.account.get();
				assertPresence(account$1, /* @__PURE__ */ new Error("account does not exist"));
				assertPresence(subAccount === null || subAccount === void 0 ? void 0 : subAccount.address, /* @__PURE__ */ new Error("subaccount does not exist"));
				const calls = [];
				if (publicKey) {
					const [x, y$1] = decodeAbiParameters([{ type: "bytes32" }, { type: "bytes32" }], publicKey);
					calls.push({
						to: subAccount.address,
						data: encodeFunctionData({
							abi,
							functionName: "addOwnerPublicKey",
							args: [x, y$1]
						}),
						value: toHex(0)
					});
				}
				if (address) calls.push({
					to: subAccount.address,
					data: encodeFunctionData({
						abi,
						functionName: "addOwnerAddress",
						args: [address]
					}),
					value: toHex(0)
				});
				return await ((_a$1 = sdk.getProvider()) === null || _a$1 === void 0 ? void 0 : _a$1.request({
					method: "wallet_sendCalls",
					params: [{
						calls,
						chainId: toHex(chainId),
						from: (_b$1 = account$1.accounts) === null || _b$1 === void 0 ? void 0 : _b$1[0],
						version: "1"
					}]
				}));
			},
			setToOwnerAccount(toSubAccountOwner) {
				validateSubAccount(toSubAccountOwner);
				store.subAccountsConfig.set({ toOwnerAccount: toSubAccountOwner });
			}
		}
	};
	return sdk;
}
const TOKENS = { USDC: {
	decimals: 6,
	addresses: {
		base: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		baseSepolia: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
	}
} };
const CHAIN_IDS = {
	base: 8453,
	baseSepolia: 84532
};
const ERC20_TRANSFER_ABI = [{
	name: "transfer",
	type: "function",
	stateMutability: "nonpayable",
	inputs: [{
		name: "to",
		type: "address"
	}, {
		name: "amount",
		type: "uint256"
	}],
	outputs: [{
		name: "",
		type: "bool"
	}]
}, {
	name: "Transfer",
	type: "event",
	anonymous: false,
	inputs: [
		{
			name: "from",
			type: "address",
			indexed: true
		},
		{
			name: "to",
			type: "address",
			indexed: true
		},
		{
			name: "value",
			type: "uint256",
			indexed: false
		}
	]
}];
const logPaymentStarted = ({ amount, testnet, correlationId }) => {
	logEvent("payment.pay.started", {
		action: ActionType.process,
		componentType: ComponentType.unknown,
		method: "pay",
		correlationId,
		signerType: "base-account",
		amount,
		testnet
	}, AnalyticsEventImportance.high);
};
const logPaymentError = ({ amount, testnet, correlationId, errorMessage }) => {
	logEvent("payment.pay.error", {
		action: ActionType.error,
		componentType: ComponentType.unknown,
		method: "pay",
		correlationId,
		signerType: "base-account",
		amount,
		testnet,
		errorMessage
	}, AnalyticsEventImportance.high);
};
const logPaymentCompleted = ({ amount, testnet, correlationId }) => {
	logEvent("payment.pay.completed", {
		action: ActionType.process,
		componentType: ComponentType.unknown,
		method: "pay",
		correlationId,
		signerType: "base-account",
		amount,
		testnet
	}, AnalyticsEventImportance.high);
};
const logPaymentStatusCheckStarted = ({ testnet, correlationId }) => {
	logEvent("payment.status_check.started", {
		action: ActionType.process,
		componentType: ComponentType.unknown,
		method: "getPaymentStatus",
		correlationId,
		signerType: "base-account",
		testnet
	}, AnalyticsEventImportance.low);
};
const logPaymentStatusCheckCompleted = ({ testnet, status, correlationId }) => {
	logEvent("payment.status_check.completed", {
		action: ActionType.process,
		componentType: ComponentType.unknown,
		method: "getPaymentStatus",
		correlationId,
		signerType: "base-account",
		testnet,
		status
	}, AnalyticsEventImportance.low);
};
const logPaymentStatusCheckError = ({ testnet, correlationId, errorMessage }) => {
	logEvent("payment.status_check.error", {
		action: ActionType.error,
		componentType: ComponentType.unknown,
		method: "getPaymentStatus",
		correlationId,
		errorMessage,
		signerType: "base-account",
		testnet
	}, AnalyticsEventImportance.low);
};
async function getPaymentStatus(options) {
	var _a;
	const { id, testnet = false, telemetry = true } = options;
	const correlationId = crypto.randomUUID();
	if (telemetry) logPaymentStatusCheckStarted({
		testnet,
		correlationId
	});
	try {
		const bundlerUrl = testnet ? "https://api.developer.coinbase.com/rpc/v1/base-sepolia/S-fOd2n2Oi4fl4e1Crm83XeDXZ7tkg8O" : "https://api.developer.coinbase.com/rpc/v1/base/S-fOd2n2Oi4fl4e1Crm83XeDXZ7tkg8O";
		const receipt = await fetch(bundlerUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				jsonrpc: "2.0",
				id: 1,
				method: "eth_getUserOperationReceipt",
				params: [id]
			})
		}).then((res) => res.json());
		if (receipt.error) {
			console.error("[getPaymentStatus] RPC error:", receipt.error);
			const errorMessage = receipt.error.message || "Network error";
			if (telemetry) logPaymentStatusCheckError({
				testnet,
				correlationId,
				errorMessage
			});
			return {
				status: "failed",
				id,
				message: "Unable to check payment status. Please try again later.",
				error: errorMessage
			};
		}
		if (!receipt.result) {
			const userOpResponse = await fetch(bundlerUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					jsonrpc: "2.0",
					id: 2,
					method: "eth_getUserOperationByHash",
					params: [id]
				})
			}).then((res) => res.json());
			if (userOpResponse.result) {
				if (telemetry) logPaymentStatusCheckCompleted({
					testnet,
					status: "pending",
					correlationId
				});
				return {
					status: "pending",
					id,
					message: "Your payment is being processed. This usually takes a few seconds.",
					sender: userOpResponse.result.sender
				};
			}
			if (telemetry) logPaymentStatusCheckCompleted({
				testnet,
				status: "not_found",
				correlationId
			});
			return {
				status: "not_found",
				id,
				message: "Payment not found. Please check your transaction ID."
			};
		}
		const { success, receipt: txReceipt, reason } = receipt.result;
		if (success) {
			let amount;
			let recipient;
			if (txReceipt === null || txReceipt === void 0 ? void 0 : txReceipt.logs) {
				const network = testnet ? "baseSepolia" : "base";
				const usdcAddress = TOKENS.USDC.addresses[network].toLowerCase();
				for (const log of txReceipt.logs) if (((_a = log.address) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === usdcAddress) try {
					const decoded = decodeEventLog({
						abi: ERC20_TRANSFER_ABI,
						data: log.data,
						topics: log.topics
					});
					if (decoded.eventName === "Transfer" && decoded.args) {
						const args = decoded.args;
						if (args.value && args.to) {
							amount = formatUnits(args.value, 6);
							recipient = args.to;
							break;
						}
					}
				} catch (e) {
					console.error("[getPaymentStatus] Error parsing log:", e);
				}
			}
			if (telemetry) logPaymentStatusCheckCompleted({
				testnet,
				status: "completed",
				correlationId
			});
			return {
				status: "completed",
				id,
				message: "Payment completed successfully",
				sender: receipt.result.sender,
				amount,
				recipient
			};
		} else {
			let userFriendlyError = "Payment could not be completed";
			if (reason) if (reason.toLowerCase().includes("insufficient")) userFriendlyError = "Insufficient USDC balance";
			else if (reason.toLowerCase().includes("revert")) userFriendlyError = "Payment was rejected";
			else userFriendlyError = reason;
			if (telemetry) logPaymentStatusCheckCompleted({
				testnet,
				status: "failed",
				correlationId
			});
			return {
				status: "failed",
				id,
				message: "Payment failed",
				sender: receipt.result.sender,
				error: userFriendlyError
			};
		}
	} catch (error) {
		console.error("[getPaymentStatus] Error checking status:", error);
		const errorMessage = error instanceof Error ? error.message : "Connection error";
		if (telemetry) logPaymentStatusCheckError({
			testnet,
			correlationId,
			errorMessage
		});
		return {
			status: "failed",
			id,
			message: "Unable to check payment status",
			error: errorMessage
		};
	}
}
function createEphemeralSDK(chainId, walletUrl, telemetry = true) {
	const appName = typeof window !== "undefined" ? window.location.origin : "Base Pay SDK";
	return createBaseAccountSDK({
		appName,
		appChainIds: [chainId],
		preference: {
			telemetry,
			walletUrl
		}
	});
}
async function executePayment(sdk, requestParams) {
	var _a;
	const result = await sdk.getProvider().request({
		method: "wallet_sendCalls",
		params: [requestParams]
	});
	let transactionHash;
	let payerInfoResponses;
	if (typeof result === "string" && result.length >= 66) transactionHash = result.slice(0, 66);
	else if (typeof result === "object" && result !== null) {
		const resultObj = result;
		if (typeof resultObj.id === "string" && resultObj.id.length >= 66) {
			transactionHash = resultObj.id.slice(0, 66);
			if ((_a = resultObj.capabilities) === null || _a === void 0 ? void 0 : _a.dataCallback) payerInfoResponses = resultObj.capabilities.dataCallback;
		} else throw new Error(`Could not extract transaction hash from object response. Available fields: ${Object.keys(resultObj).join(", ")}`);
	} else throw new Error(`Unexpected response format from wallet_sendCalls: expected string with length > 66 or object with id, got ${typeof result}`);
	return {
		transactionHash,
		payerInfoResponses
	};
}
async function executePaymentWithSDK(requestParams, testnet, walletUrl, telemetry = true) {
	const chainId = CHAIN_IDS[testnet ? "baseSepolia" : "base"];
	const sdk = createEphemeralSDK(chainId, walletUrl, telemetry);
	const provider = sdk.getProvider();
	try {
		return await executePayment(sdk, requestParams);
	} finally {
		await provider.disconnect();
	}
}
function encodeTransferCall(recipient, amount) {
	const amountInUnits = parseUnits(amount, TOKENS.USDC.decimals);
	return encodeFunctionData({
		abi: ERC20_TRANSFER_ABI,
		functionName: "transfer",
		args: [recipient, amountInUnits]
	});
}
function buildSendCallsRequest(transferData, testnet, payerInfo) {
	const network = testnet ? "baseSepolia" : "base";
	const chainId = CHAIN_IDS[network];
	const call$1 = {
		to: TOKENS.USDC.addresses[network],
		data: transferData,
		value: "0x0"
	};
	const capabilities = {};
	if (payerInfo && payerInfo.requests.length > 0) capabilities.dataCallback = {
		requests: payerInfo.requests.map((request) => {
			var _a;
			return {
				type: request.type,
				optional: (_a = request.optional) !== null && _a !== void 0 ? _a : false
			};
		}),
		callbackURL: payerInfo.callbackURL
	};
	return {
		version: "2.0.0",
		chainId,
		calls: [call$1],
		capabilities
	};
}
function translatePaymentToSendCalls(recipient, amount, testnet, payerInfo) {
	const transferData = encodeTransferCall(recipient, amount);
	return buildSendCallsRequest(transferData, testnet, payerInfo);
}
function validateStringAmount(amount, maxDecimals) {
	if (typeof amount !== "string") throw new Error("Invalid amount: must be a string");
	const numAmount = parseFloat(amount);
	if (isNaN(numAmount)) throw new Error("Invalid amount: must be a valid number");
	if (numAmount <= 0) throw new Error("Invalid amount: must be greater than 0");
	const decimalIndex = amount.indexOf(".");
	if (decimalIndex !== -1) {
		if (amount.length - decimalIndex - 1 > maxDecimals) throw new Error(`Invalid amount: pay only supports up to ${maxDecimals} decimal places`);
	}
}
function validateAddress(address) {
	if (!address) throw new Error("Invalid address: address is required");
	if (!isAddress(address)) throw new Error("Invalid address: must be a valid Ethereum address");
}
async function pay(options) {
	var _a;
	const { amount, to, testnet = false, payerInfo, walletUrl, telemetry = true } = options;
	const correlationId = crypto.randomUUID();
	if (telemetry) logPaymentStarted({
		amount,
		testnet,
		correlationId
	});
	try {
		validateStringAmount(amount, 2);
		validateAddress(to);
		const requestParams = translatePaymentToSendCalls(to, amount, testnet, payerInfo);
		const executionResult = await executePaymentWithSDK(requestParams, testnet, walletUrl, telemetry);
		if (telemetry) logPaymentCompleted({
			amount,
			testnet,
			correlationId
		});
		return {
			success: true,
			id: executionResult.transactionHash,
			amount,
			to,
			payerInfoResponses: executionResult.payerInfoResponses
		};
	} catch (error) {
		let errorMessage = "Unknown error occurred";
		if (error instanceof Error) errorMessage = error.message;
		else if (typeof error === "string") errorMessage = error;
		else if (error && typeof error === "object") {
			const err = error;
			if (typeof (err === null || err === void 0 ? void 0 : err.message) === "string") errorMessage = err.message;
			else if (typeof ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) === "string") errorMessage = err.error.message;
			else if (typeof (err === null || err === void 0 ? void 0 : err.reason) === "string") errorMessage = err.reason;
		}
		if (telemetry) logPaymentError({
			amount,
			testnet,
			correlationId,
			errorMessage
		});
		return {
			success: false,
			error: errorMessage,
			amount,
			to
		};
	}
}
const base = {
	pay,
	getPaymentStatus,
	constants: {
		CHAIN_IDS,
		TOKENS
	},
	types: {}
};
export { base, createBaseAccountSDK, getCryptoKeyAccount, getPaymentStatus, pay, removeCryptoKey };
