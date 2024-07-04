import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BookingScreen from './src/screens/booking/BookingScreen';
import StartFinishScreen from './src/screens/booking/StartFinishScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="StartFinish" component={StartFinishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
