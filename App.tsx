import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useWalletConnect,
  withWalletConnect,
} from '@walletconnect/react-native-dapp';
import * as React from 'react';

function App(): JSX.Element {
  const connector = useWalletConnect(); // valid
  console.log({ connector });
  return <>{/* awesome app here */}</>;
}

export default withWalletConnect(App, {
  clientMeta: {
    url: '',
    icons: [''],
    name: '',
    description: 'Connect with WalletConnect',
  },
  redirectUrl: 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage as any,
  },
});
