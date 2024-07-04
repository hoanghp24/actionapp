import {useState, useEffect} from 'react';
import {DeviceEventEmitter} from 'react-native';
import DataWedgeIntents from 'react-native-datawedge-intents';

const useScanning = () => {
  const [dataScan, setDataScan] = useState('');
  const [sendCommandResult, setSendCommandResult] = useState('false');

  useEffect(() => {
    createAndConfigProfile();
  }, []);

  useEffect(() => {
    const deviceEmitterSubscription = DeviceEventEmitter.addListener(
      'datawedge_broadcast_intent',
      intent => {
        broadcastReceiver(intent);
      },
    );
    registerBroadcastReceiver();

    return () => {
      deviceEmitterSubscription.remove();
    };
  }, []);

  const sendCommand = (extraName, extraValue) => {
    var broadcastExtras = {};
    broadcastExtras[extraName] = extraValue;
    broadcastExtras['SEND_RESULT'] = sendCommandResult;
    DataWedgeIntents.sendBroadcastWithExtras({
      action: 'com.symbol.datawedge.api.ACTION',
      extras: broadcastExtras,
    });
  };

  const createAndConfigProfile = () => {
    //  Configure the created profile (associated app and keyboard plugin)
    var profileConfig = {
      PROFILE_NAME: 'ACTIONAPP',
      PROFILE_ENABLED: 'true',
      CONFIG_MODE: 'CREATE_IF_NOT_EXIST', // Change from UPDATE
      PLUGIN_CONFIG: {
        PLUGIN_NAME: 'INTENT',
        RESET_CONFIG: 'true',
        PARAM_LIST: {
          intent_output_enabled: 'true',
          intent_action: 'com.zebra.actionapp.ACTION',
          intent_delivery: '2',
        },
      },
      APP_LIST: [
        {
          PACKAGE_NAME: 'com.actionapp',
          ACTIVITY_LIST: ['*'],
        },
      ],
    };
    sendCommand('com.symbol.datawedge.api.SET_CONFIG', profileConfig);
  };

  const registerBroadcastReceiver = () => {
    DataWedgeIntents.registerBroadcastReceiver({
      filterActions: [
        'com.zebra.actionapp.ACTION',
        'com.symbol.datawedge.api.RESULT_ACTION',
      ],
      filterCategories: ['android.intent.category.DEFAULT'],
    });
  };

  const broadcastReceiver = intent => {
    setSendCommandResult('true');
    barcodeScanned(intent, new Date().toLocaleString());
  };

  const barcodeScanned = scanData => {
    let scanned = scanData['com.symbol.datawedge.data_string'];
    setDataScan(scanned);
  };

  return dataScan;
};

export default useScanning;
