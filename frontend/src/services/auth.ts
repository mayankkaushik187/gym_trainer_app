import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const firebaseConfig = {
  // Your Firebase config object from Firebase Console
  apiKey: 'AIzaSyD8BXSfMehZFC_6WDB2oqtli1fiOjKR9eA',
  projectId: 'trainer-app-36546',
  appId: '1:878376590461:android:b8a9193f3c0a8c78e8e514',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const signIn = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    return response.user
  } catch (error) {
    throw error
  }
}

export const signUp = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    return response.user
  } catch (error) {
    throw error
  }
}

export const signOutUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    throw error
  }
}

export const getCurrentUser = () => {
  return auth.currentUser
}
