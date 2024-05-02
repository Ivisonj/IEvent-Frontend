'use client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Button variant="contained" onClick={() => router.push('/user/home')}>
        User Layout
      </Button>
      <Button variant="contained" onClick={() => router.push('/auth')}>
        Login
      </Button>
    </>
  )
}
