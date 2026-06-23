import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AuthPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f1ea;
`
export const AuthCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`
export const AuthHeading = styled.h1`
  color: #382110;
  font-family: "Merriweather", "Georgia", serif;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 24px;
  text-align: center;
`
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  font-weight: bold;
`
export const AuthInput = styled.input`
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  &:focus {
    outline: none;
    border-color: #00635d;
  }
`
export const AuthButton = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #00635d;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  &:hover {
    background-color: #004d48;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
export const AuthError = styled.p`
  color: #c0392b;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  margin: 0;
`
export const AuthFooter = styled.p`
  margin: 20px 0 0;
  text-align: center;
  color: #666666;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
`
export const AuthLink = styled(Link)`
  color: #00635d;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
