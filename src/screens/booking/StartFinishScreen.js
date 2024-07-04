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
import {useLazyGetBatchCodeQuery} from '../../states/api/code';

const initialState = {
  product: '',
  productName: '',
  productDesc: '',
  bomNo: '',
  batchCode: '',
  mainWONO: '',
  curWO: '',
  curOprCode: '',
  curMC: '',
  curOprSts: '',
  blocked: '',
  blockReason: '',
  damaged: '',
  damageNote: '',
  curOprSeq: 0,
  eqNo: '',
  qcType: '',
  lstQCSpec: [],
};

const StartFinishScreen = ({navigation}) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialState);
  const [getBatchCode] = useLazyGetBatchCodeQuery();

  const handleScanCode = async text => {
    let arr = text.split(',');
    if (arr.length === 8) {
      setIsLoading(true);
      const product = arr[3];
      const batchCode = arr[1];

      try {
        const {data, error} = await getBatchCode({
          product,
          batchCode,
        });
        console.log(data);
        if (error) {
          console.error('Error fetching batch code:', error);
        } else {
          setData({...data, product, batchCode});
        }
      } catch (error) {
        console.error('Error fetching batch code:', error);
      }

      setIsLoading(false);
    } else {
      setData(initialState);
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
      <Input label="BatchCode" value={code} onChangeText={handleScanCode} />
      {data.batchCode && (
        <View style={styles.infoContainer}>
          <View style={styles.infoTitleContainer}>
            <Text style={styles.infoTitle}>BatchCode Information</Text>
          </View>
          <Text style={styles.infoText}>Product: {data.product}</Text>
          <Text style={styles.infoText}>Batch Code: {data.batchCode}</Text>
        </View>
      )}
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
  infoContainer: {
    marginTop: 20,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  infoTitleContainer: {
    backgroundColor: Colors.DEFAULT_GREEN,
    width: '100%',
    alignItems: 'center',
    padding: 5,
  },
  infoTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  infoText: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DEFAULT_GREY,
  },
});

export default StartFinishScreen;
