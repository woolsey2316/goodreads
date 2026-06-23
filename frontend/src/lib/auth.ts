const TOKEN_KEY = 'token'
const USER_ID_KEY = 'userId'
const USERNAME_KEY = 'username'

export interface AuthResponse {
  token: string
  user_id: string
  username: string
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const getStoredUserId = () => localStorage.getItem(USER_ID_KEY)

export const getStoredUsername = () => localStorage.getItem(USERNAME_KEY)

export const saveAuth = ({ token, user_id, username }: AuthResponse) => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_ID_KEY, user_id)
  localStorage.setItem(USERNAME_KEY, username)
}

export const clearAuth = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_ID_KEY)
  localStorage.removeItem(USERNAME_KEY)
}

export const getAuthHeaders = (): HeadersInit => {
  const token = getToken()
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return headers
}

export const authFetch = (url: string, options: RequestInit = {}) =>
  fetch(url, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  })

export const signUp = async (username: string, password: string): Promise<AuthResponse> => {
  const res = await fetch('/api/auth/signup/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error ?? 'Sign up failed')
  return data
}

export const signIn = async (username: string, password: string): Promise<AuthResponse> => {
  const res = await fetch('/api/auth/signin/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error ?? 'Sign in failed')
  return data
}
