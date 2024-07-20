import React from 'react'
import { LocalStorageManager } from '~/shared/managers'
import { TAuth, TAuthBase } from './use-auth.type'

export function useAuth(): TAuth {
  const state = React.useState<TAuthBase | undefined>(
    LocalStorageManager.getItem('auth'),
  )
  const logout = () => {
    console.log('logout function')
    LocalStorageManager.removeItem('auth')
    state[1](undefined)
  }
  const login = (auth: TAuthBase) => {
    console.log('login function', auth)
    LocalStorageManager.setItem('auth', auth)
    state[1](auth)
  }

  React.useEffect(() => {
    console.log('auth', state[0])
  }, [state[0]])
  return {
    value: state[0],
    logout,
    login,
  }
}
