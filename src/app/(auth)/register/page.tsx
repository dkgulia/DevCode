// src/app/(auth)/register/page.tsx
'use client';

import { SignUp } from '@clerk/nextjs';

export default function RegisterPage() {
  return (
    <div className='bg-black flex items-center justify-center h-screen'>
      <SignUp />
    </div>
  )
}
