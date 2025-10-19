import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {StrictMode, useEffect} from "react";
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import { sdk } from '@/lib/farcaster';

function AppWrapper() {
  useEffect(() => {
    sdk.actions.ready().catch(() => {
      console.log('Not in Farcaster context');
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <ErrorBoundary>
                <AppWrapper />
            </ErrorBoundary>
        </StrictMode>
);
