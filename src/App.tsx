import { ThemeProvider } from 'styled-components';

import theme from './theme';

import {Welcome} from './screens/Welcome';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  )
}
