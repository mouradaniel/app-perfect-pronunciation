import { Image } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  size: string;
}

export const Container = styled.TouchableOpacity`
`;

export const Icon = styled(Image) <Props>`
  width: ${({ size }) => size === 'SM' ? '30px' : '100px'};
  height: ${({ size }) => size === 'SM' ? '30px' : '100px'};  
`;