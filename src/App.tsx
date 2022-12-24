import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

import { Welcome } from './screens/Welcome';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Welcome />
    </ThemeProvider>
  )
}
