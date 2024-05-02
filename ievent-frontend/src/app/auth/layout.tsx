'use client'
import * as React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ReactNode } from 'react'

import ThemeCustomization from '@/themes'
import { store } from '@/store'

interface UserLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <ThemeCustomization>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </ThemeCustomization>
    </>
  )
}

export default AuthLayout
