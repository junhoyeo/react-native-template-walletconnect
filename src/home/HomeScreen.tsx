import { useWalletConnect } from '@walletconnect/react-native-dapp';
import React, { useMemo } from 'react';
import styled from 'styled-components/native';

import { ScreenView } from '../components/ScreenView';
import { shortenAddress } from '../utils/shortenAddress';
import { Button } from './components/Button';

export const HomeScreen: React.FC = () => {
  const connector = useWalletConnect();

  const account = useMemo<string | null>(
    () => connector.session?.accounts[0] ?? null,
    [connector],
  );

  return (
    <ScreenView>
      {!!account && <Address>{shortenAddress(account)}</Address>}
      {!connector.connected ? (
        <Button
          title="Connect"
          onPress={() =>
            connector //
              .connect()
              .catch((error) => {
                if ((error.message ?? '').startsWith('User close')) {
                  return;
                }
                console.error(error);
              })
          }
        />
      ) : (
        <Button title="Disconnect" onPress={() => connector.killSession()} />
      )}
    </ScreenView>
  );
};

const Address = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: white;
  text-align: center;
  margin-bottom: 32px;
`;
