import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text className='bg-red-500'>index</Text>
      <Link href={'/Login'}>Login</Link>
    </View>
  )
}

export default index