import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

import { Routes } from './routes';

import { PreferencesProvider } from './contexts/PreferencesContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <PreferencesProvider>
        <Routes />
      </PreferencesProvider>
    </ThemeProvider>
  )
}
