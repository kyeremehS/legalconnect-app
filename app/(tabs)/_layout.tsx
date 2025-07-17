import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserPage"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}