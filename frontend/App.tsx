import React, { useEffect, useState } from 'react'
import { RootNavigator } from './src/navigation/RootNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'

export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return unsubscribe
  }, [])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigator user={user} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
