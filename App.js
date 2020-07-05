import React from 'react'
import Buffer from 'safe-buffer'
global.Buffer = Buffer;
import MainStackNavigator from './MainStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return <SafeAreaProvider><MainStackNavigator /></SafeAreaProvider>
}


