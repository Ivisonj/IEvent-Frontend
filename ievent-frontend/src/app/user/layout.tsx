'use client'
import * as React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ReactNode } from 'react'

import ThemeCustomization from '@/themes'
import MainLayout from '@/layouts/mainLayout/index'
import { store } from '@/store'

interface UserLayoutProps {
  children: ReactNode
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <ThemeCustomization>
        <ReduxProvider store={store}>
          <MainLayout>{children}</MainLayout>
        </ReduxProvider>
      </ThemeCustomization>
    </>
  )
}

export default UserLayout
