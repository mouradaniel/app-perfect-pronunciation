import { TouchableOpacityProps } from 'react-native';

import { 
  Container,
  Icon
} from './styles';

type Props = TouchableOpacityProps & {
  image: string;
  size?: string;
}

export function IconButton({ image, size = 'SM', ...rest }: Props) {
  return (
    <Container
      {...rest}
      >
      <Icon
        source={ image }
        size={ size }
      />
    </Container>
  )
}