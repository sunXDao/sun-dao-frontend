import {
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { assetChainTestnet } from './chain';

export const config = getDefaultConfig({
  appName: 'Sun Dao App',
  projectId: "d9e1d6f6b250eda2e49797be82caf01d",
  chains: [assetChainTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});