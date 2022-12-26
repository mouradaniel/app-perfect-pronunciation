import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  border-radius: 10px;
  width: 80%;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
`;