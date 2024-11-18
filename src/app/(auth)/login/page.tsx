// src/app/(auth)/login/page.tsx
'use client';

import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className='bg-black flex items-center justify-center h-screen'>
      <SignIn />;
    </div>
  )
}
