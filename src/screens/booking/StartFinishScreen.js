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
import useScanning from '../../hooks/useScanning';

const StartFinishScreen = ({navigation}) => {
  const [code, setCode] = useState('');
  const dataScan = useScanning();

  const handleScanCode = async text => {
    setCode(text);
    let arr = text.split(',');
    console.log(arr.lenght);
    if (arr.lenght === 8) {
      console.log('Yes');
    } else {
      console.log('NO');
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
        <Text style={styles.headerTitle}>Start/Finish</Text>
      </View>
      <Input
        label="BatchCode"
        value={code}
        onChangeText={text => handleScanCode(text)}
      />
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

export default StartFinishScreen;
