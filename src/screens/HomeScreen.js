import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Images from '../constants/Images';
import Colors from '../constants/Colors';
import Separator from '../components/Separator';
import Display from '../utils/Display';
import {version} from '../../package.json';
import Fonts from '../constants/Fonts';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView styles={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons name="menu" size={30} color="white" />
        <Text style={styles.headerTitle}>Main Menu</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Images.LOGO} style={styles.logo} resizeMode="contain" />
        <Text style={styles.version}>Version: {version}</Text>
      </View>

      <View style={styles.moduleContainer}>
        <TouchableOpacity
          style={styles.module}
          onPress={() => navigation.navigate('Booking')}>
          <FontAwesome5 name="qrcode" size={30} color="red" />
          <Text style={styles.bookingText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.module}>
          <FontAwesome5 name="boxes" size={30} color="red" />
          <Text style={styles.bookingText}>WIP Counting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.module}>
          <FontAwesome5 name="temperature-low" size={30} color="red" />
          <Text style={styles.bookingText}>Mold Temperature</Text>
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
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
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
    paddingHorizontal: 2,
  },
  module: {
    backgroundColor: Colors.SECONDARY_WHITE,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
    width: Display.setWidth(31.5),
    height: Display.setHeight(20),
    elevation: 5,
  },
  bookingText: {
    marginTop: 10,
    fontSize: 13,
    color: Colors.DEFAULT_RED,
    textAlign: 'center',
  },
});

export default HomeScreen;
