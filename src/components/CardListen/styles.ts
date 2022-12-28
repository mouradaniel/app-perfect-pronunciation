import styled from 'styled-components/native';

export const Container = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;