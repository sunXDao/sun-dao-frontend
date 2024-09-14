import { defineChain } from 'viem'

export const assetChainTestnet = defineChain({
  id: 42421,
  name: 'Asset Chain Testnet',
  nativeCurrency: { name: 'Asset Chain', symbol: 'RWA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://enugu-rpc.assetchain.org/'] },
  },
  blockExplorers: {
    default: { name: 'Asset Chain Testnet', url: 'https://scan-testnet.assetchain.org/' },
  },
})