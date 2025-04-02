import { Stack } from 'expo-router';

export default function UsersLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="bulk" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}