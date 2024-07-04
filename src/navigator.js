import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/booking/BookingScreen';
import StartFinishScreen from './screens/booking/StartFinishScreen';


const Stack = createStackNavigator();

const Navigator = () => {
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

export default Navigator;
