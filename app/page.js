'use client'

//Redirect to Login Page

import {useRouter, usePathname, useSearchParams} from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/signin");
  }, [])
  
  return (<></>);
}
