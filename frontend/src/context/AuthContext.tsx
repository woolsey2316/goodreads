import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import {
  type AuthResponse,
  clearAuth,
  getStoredUserId,
  getStoredUsername,
  getToken,
  saveAuth,
  signIn as apiSignIn,
  signUp as apiSignUp,
} from '../lib/auth.ts'

interface AuthContextValue {
  token: string | null
  userId: string | null
  username: string | null
  isAuthenticated: boolean
  signIn: (username: string, password: string) => Promise<void>
  signUp: (username: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const applyAuth = (data: AuthResponse) => {
  saveAuth(data)
  return {
    token: data.token,
    userId: data.user_id,
    username: data.username,
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState(() => ({
    token: getToken(),
    userId: getStoredUserId(),
    username: getStoredUsername(),
  }))

  const signIn = useCallback(async (username: string, password: string) => {
    const data = await apiSignIn(username, password)
    setAuth(applyAuth(data))
  }, [])

  const signUp = useCallback(async (username: string, password: string) => {
    const data = await apiSignUp(username, password)
    setAuth(applyAuth(data))
  }, [])

  const signOut = useCallback(() => {
    clearAuth()
    setAuth({ token: null, userId: null, username: null })
  }, [])

  const value = useMemo(
    () => ({
      ...auth,
      isAuthenticated: auth.token !== null,
      signIn,
      signUp,
      signOut,
    }),
    [auth, signIn, signUp, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
