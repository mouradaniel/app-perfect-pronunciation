import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Button } from '@components/Button';

import {
  Container,
  Title,
  Content
} from './styles';

export function Welcome() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Header />

      <Content>
        <Title>Seja bem-vindo(a) ao Perfect Pronunciation!</Title>

        <Button 
          onPress={ handleHome }
          title="Praticar"
        />
      </Content>
    </Container>
  )
}