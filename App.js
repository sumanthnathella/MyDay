import React from 'react'
import Buffer from 'safe-buffer'
import MainStackNavigator from './MainStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

global.Buffer = Buffer;
export default function App() {
  return <SafeAreaProvider><MainStackNavigator /></SafeAreaProvider>
}


