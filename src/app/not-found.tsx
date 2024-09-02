"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <h1 className='text-4xl'>404 - Page Not Found</h1>
      <p className='text-xl mt-4'>Redirecting to the homepage...</p>
    </div>
  );
}
