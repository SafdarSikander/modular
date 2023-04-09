import React from 'react';
import {Button, Text, View} from 'react-native';
import {PERMISSIONS, RESULTS} from 'react-native-permissions';
import {usePermission} from './hooks/usePermission';

const Permission = () => {
  const [locationStatus, checkAndRequestLocationPermission] = usePermission(
    PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
  );

  const handleButtonClick = async () => {
    try {
      await checkAndRequestLocationPermission();
    } catch (err) {
      console.log('err', err);
    }
  };
  if (locationStatus === null) {
    return <Text>Loading...</Text>;
  }

  if (locationStatus === RESULTS.GRANTED) {
    return (
      <View>
        <Text>You have access to the camera</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>You do not have access to the Location</Text>
      <Button title="Request access" onPress={handleButtonClick} />
    </View>
  );
};

export default Permission;
