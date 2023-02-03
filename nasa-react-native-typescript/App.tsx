import { NavigationContainer } from '@react-navigation/native';
import Base from './app/screens/Base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Asteroid from './app/screens/Asteroid';
import Random from './app/screens/Random';
type RootStackParams = {
  Base: undefined;
  Asteroid: any;
  Random: any;
}
const Stack = createNativeStackNavigator<RootStackParams>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Base"
        component={Base}
        />
        <Stack.Screen
          name="Asteroid"
          component={Asteroid}
        />
        <Stack.Screen
          name="Random"
          component={Random}/>
        
        </Stack.Navigator>
        
    </NavigationContainer>
    
  );
}


