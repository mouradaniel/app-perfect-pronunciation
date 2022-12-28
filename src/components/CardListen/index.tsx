import { GestureResponderEvent } from 'react-native';

import { IconButton } from '@components/IconButton';

import { 
  Container,
  Title  
} from './styles';

type Props = {
  title: string;
  touchableAction: (event: GestureResponderEvent) => void;
  image: string;
}

export function CardListen({ title, touchableAction, image }: Props) {
  return (
    <Container>
      <Title>{ title }</Title>
      <IconButton 
        onPress={ touchableAction }
        image={ image }        
      />
    </Container>
  )
}
