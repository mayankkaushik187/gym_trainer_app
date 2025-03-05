import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../types/navigation.types'

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Stack = createStackNavigator<RootStackParamList>()

export const RootNavigator = ({ user }: { user: any }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // Protected routes
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // Public routes
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
