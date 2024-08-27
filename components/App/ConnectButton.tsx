'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import Metamask from '@/app/assets/token-branded_metamask.svg';

export const ConnectBtn = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className='bg-primaryColor px-6 py-3 rounded-lg font-bold text-lg flex items-center gap-4'>
                    <Image src={Metamask} alt="Metamask" className="w-8 h-8" width={100} height={100}/>
                    <p>
                      Connect Wallet
                    </p>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className='bg-primaryColor px-6 py-3 rounded-lg font-bold text-lg text-red-500'>
                    Wrong network
                  </button>
                );
              }
              return (
                <div className='flex gap-3 bg-primaryColor p-3 rounded-xl'>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        className='mr-2 overflow-hidden rounded-full'
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            className='w-8 h-8'
                            width={100}
                            height={100}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <div className='h-8 border'></div>
                  <button onClick={openAccountModal} type="button" className='mr-3'>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
