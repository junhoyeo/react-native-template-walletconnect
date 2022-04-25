import React from 'react';
import styled from 'styled-components/native';

type ScreenViewProps = {
  children?: React.ReactNode;
};

export const ScreenView: React.FC<ScreenViewProps> = ({ children }) => {
  return (
    <SafeArea>
      <Container>{children}</Container>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

const Container = styled.View`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;
