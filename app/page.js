'use client'

//Redirect to Login Page

import {useRouter, usePathname, useSearchParams} from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push("/login");
  return null;
}
