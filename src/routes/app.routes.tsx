import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';

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
    </Navigator>
  );
}
