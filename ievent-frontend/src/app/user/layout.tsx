'use client'
import * as React from 'react'
import { ReactNode } from 'react'

import ThemeCustomization from '@/themes'
import MainLayout from '@/layouts/mainLayout/index'

interface UserLayoutProps {
  children: ReactNode
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <ThemeCustomization>
        <MainLayout>{children}</MainLayout>
      </ThemeCustomization>
    </>
  )
}

export default UserLayout
