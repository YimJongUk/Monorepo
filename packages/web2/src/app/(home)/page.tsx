'use client';
// import News from '@web2/components/News';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    console.log(session);

    return (
      <main>
        <div>Web2</div>
        <div>Login!!!!!!!!!!!!</div>
        <div>{session.user?.name}</div>
        <div>{session.user?.email}</div>
        <button onClick={() => signOut()}>로그아웃</button>
      </main>
    );
  }

  return (
    <main>
      <div>Web2</div>
      <Link href={`/login`}>Next</Link>
      <button onClick={() => signIn('kakao', { redirect: true, callbackUrl: '/login' })}>카카오</button>
      <br />
      <button onClick={() => signIn('discord', { redirect: true, callbackUrl: '/login' })}>디스코드</button>
      <br />
      <button onClick={() => signIn('naver')}>네이버</button>
      {/* <button onClick={() => signIn('kakao', { redirect: true, callbackUrl: '/' })} /> */}
      {/* <News /> */}
    </main>
  );
}
