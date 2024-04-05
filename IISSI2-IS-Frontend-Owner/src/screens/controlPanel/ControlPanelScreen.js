import React from 'react'
import { View, Text } from 'react-native'
import SystemInfo from '../components/SystemInfo'

export default function RestaurantsScreen () {
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Restaurants</Text>
            <SystemInfo></SystemInfo>
        </View>
  )
}
