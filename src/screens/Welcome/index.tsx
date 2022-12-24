import { Header } from '../../components/Header';

import {
  Container,
  Title
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Header/>

      <Title>Seja bem-vindo(a) ao Perfect Pronunciation!</Title>
    </Container>
  )
}