import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainScreen from './src/main'

const App = () => {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})