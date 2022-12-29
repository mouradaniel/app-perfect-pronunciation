import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '@screens/Welcome';
import { Home } from '@screens/Home';
import { SelectLanguage } from '@screens/SelectLanguage';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen 
        name="welcome"
        component={Welcome} 
      />

      <Screen 
        name="home"
        component={Home} 
      />

      <Screen
        name="select-language"
        component={SelectLanguage}
      />
    </Navigator>
  );
}
