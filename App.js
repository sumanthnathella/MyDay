import React from 'react'

import MainStackNavigator from './MainStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return <SafeAreaProvider><MainStackNavigator /></SafeAreaProvider>
}


