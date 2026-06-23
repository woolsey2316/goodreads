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

export const SignIn = () => {
  const { signIn, isAuthenticated } = useAuth()
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
      await signIn(username.trim(), password)
      navigate('/home')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthPage>
      <AuthCard>
        <AuthHeading>Sign In</AuthHeading>
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
              autoComplete="current-password"
              required
            />
          </AuthLabel>
          {error && <AuthError>{error}</AuthError>}
          <AuthButton type="submit" disabled={submitting}>
            Sign In
          </AuthButton>
        </AuthForm>
        <AuthFooter>
          Don&apos;t have an account? <AuthLink to="/signup">Sign up</AuthLink>
        </AuthFooter>
      </AuthCard>
    </AuthPage>
  )
}
