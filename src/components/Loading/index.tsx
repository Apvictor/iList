import { ActivityIndicator } from 'react-native';

import theme from '../../theme';

import {Container } from './styles';

export function Loading() {
  return (
    <Container>
      <ActivityIndicator size="large" color={theme.COLORS.TEXT} />
    </Container>
  );
}