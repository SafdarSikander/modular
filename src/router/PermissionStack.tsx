import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Permission from '../modules/Permission';

const Stack = createNativeStackNavigator();

function PermissionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Permission" component={Permission} />
    </Stack.Navigator>
  );
}

export default PermissionStack;
