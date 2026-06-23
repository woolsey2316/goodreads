import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  AuthButton,
  AuthCard,
  AuthError,
  AuthFooter,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthLabel,
  AuthLink,
  AuthPage,
} from '../components/AuthLayout.tsx'
import { useAuth } from '../context/AuthContext.tsx'

export const SignUp = () => {
  const { signUp, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (isAuthenticated) {
    return <Navigate to="/home" replace />
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await signUp(username.trim(), password)
      navigate('/home')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign up failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthPage>
      <AuthCard>
        <AuthHeading>Sign Up</AuthHeading>
        <AuthForm onSubmit={handleSubmit}>
          <AuthLabel>
            Username
            <AuthInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </AuthLabel>
          <AuthLabel>
            Password
            <AuthInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </AuthLabel>
          {error && <AuthError>{error}</AuthError>}
          <AuthButton type="submit" disabled={submitting}>
            Sign Up
          </AuthButton>
        </AuthForm>
        <AuthFooter>
          Already have an account? <AuthLink to="/signin">Sign in</AuthLink>
        </AuthFooter>
      </AuthCard>
    </AuthPage>
  )
}
