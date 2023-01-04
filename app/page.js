'use client'

import {useRouter, usePathname, useSearchParams} from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push("/login");
  return null;
}
