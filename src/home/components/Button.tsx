import React, { useState } from 'react';
import styled, { css } from 'styled-components/native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};
export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  const [pressed, setPress] = useState<boolean>(false);

  return (
    <Container
      pressed={pressed}
      onPressIn={() => setPress(true)}
      onPressOut={() => setPress(false)}
      onPress={onPress}
    >
      <Title>{title}</Title>
    </Container>
  );
};

type ContainerProps = {
  pressed: boolean;
};
const Container = styled.Pressable<ContainerProps>`
  padding: 0 32px;
  height: 64px;

  border-radius: 12px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ pressed }) =>
    pressed &&
    css`
      background-color: rgba(255, 255, 255, 0.8);
    `}
`;
const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;
