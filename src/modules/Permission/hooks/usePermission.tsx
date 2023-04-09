import {useEffect, useState} from 'react';
import {
  check,
  request,
  RESULTS,
  PermissionStatus,
  Permission,
} from 'react-native-permissions';

type UsePermissionResult = [
  PermissionStatus | null, // current status of the permission
  () => Promise<void>, // function to request or check and request the permission
];

export function usePermission(permission: Permission): UsePermissionResult {
  const [status, setStatus] = useState<PermissionStatus | null>(null);

  useEffect(() => {
    async function checkPermission() {
      const result = await check(permission);
      setStatus(result);
    }

    checkPermission();
  }, [permission]);

  async function requestPermission() {
    const result = await request(permission);
    setStatus(result);
  }

  async function checkAndRequestPermission() {
    const result = await check(permission);

    if (result !== RESULTS.GRANTED) {
      await requestPermission();
    }

    setStatus(result);
  }

  return [status, checkAndRequestPermission];
}
