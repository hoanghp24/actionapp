import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';
import Separator from '../../components/Separator';
import Display from '../../utils/Display';
import Fonts from '../../constants/Fonts';
import Input from '../../components/Input';
import {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const BookingScreen = ({navigation}) => {
    const [machine, setMachine] = useState('');
    
    const handleNavigate = () => {
      if (machine) {
        navigation.navigate('StartFinish');
      } else {
        alert('Please enter machine information.');
      }
    };

  return (
    <SafeAreaView styles={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Booking</Text>
      </View>
      <Input
        label="Machine"
        value={machine}
        onChangeText={text => setMachine(text)}
      />

      <View style={styles.moduleContainer}>
        <TouchableOpacity
                  style={styles.module}
                  onPress={handleNavigate}>
          <MaterialCommunityIcons name="clock-start" size={30} color="red" />
          <Text style={styles.bookingText}>START FINISH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.module}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={30}
            color="red"
          />
          <Text style={styles.bookingText}>ISSUE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.module}>
          <Feather name="layers" size={30} color="red" />
          <Text style={styles.bookingText}>LAYUP CHECKING</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.DEFAULT_RED,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    textTransform: 'uppercase',
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'left',
  },
  logo: {
    width: 180,
    height: 50,
  },
  version: {
    paddingLeft: 10,
    paddingBottom: 20,
    marginTop: -5,
  },
  moduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    paddingTop: 20,
  },
  module: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
    width: Display.setWidth(30),
    height: Display.setHeight(20),
    elevation: 3,
  },
  bookingText: {
    marginTop: 10,
    fontSize: 13,
    color: Colors.DEFAULT_RED,
    textAlign: 'center',
  },
});

export default BookingScreen;
