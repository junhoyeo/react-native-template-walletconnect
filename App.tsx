import AsyncStorage from '@react-native-async-storage/async-storage';
import { withWalletConnect } from '@walletconnect/react-native-dapp';
import React from 'react';

import { HomeScreen } from './src/home/HomeScreen';

const App: React.FC = () => {
  return (
    //
    <HomeScreen />
  );
};

export default withWalletConnect(App, {
  clientMeta: {
    url: 'https://ex.junho.io',
    icons: ['https://ex.junho.io/android-chrome-512x512.png'],
    name: 'Wallet',
    description: 'Connect with WalletConnect',
  },
  redirectUrl: 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage as any,
  },
});
