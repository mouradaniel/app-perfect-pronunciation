import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  BackButton,
  BackIcon
} from './styles';

import logoImage from '@assets/logo.png';

type Props = {
  showBackButton?: boolean; 
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton
          onPress={handleGoBack}
        >
          <BackIcon />
        </BackButton>
      }
      
      <Logo source={logoImage} />
    </Container>
  )
}