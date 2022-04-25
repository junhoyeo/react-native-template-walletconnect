import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useWalletConnect,
  withWalletConnect,
} from '@walletconnect/react-native-dapp';
import * as React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};
const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

const App: React.FC = () => {
  const connector = useWalletConnect();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {!connector.connected ? (
          <Button
            title="Connect"
            onPress={() => connector.connect().catch(console.error)}
          />
        ) : (
          <Button
            title="Kill Session"
            onPress={() => connector.killSession()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

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
