import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 15px;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 45px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.BLUE_700
}))``;