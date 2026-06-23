import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.tsx'

export const SignOut = () => {
  const { signOut } = useAuth()

  useEffect(() => {
    signOut()
  }, [signOut])

  return <Navigate to="/signin" replace />
}
