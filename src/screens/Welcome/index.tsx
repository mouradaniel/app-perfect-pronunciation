import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';

import {
  Container,
  Title,
  Button,
  ButtonText
} from './styles';

export function Welcome() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Header />

      <Title>Seja bem-vindo(a) ao Perfect Pronunciation!</Title>

      <Button
        onPress={handleHome}
      >
        <ButtonText>Praticar</ButtonText>
      </Button>
    </Container>
  )
}