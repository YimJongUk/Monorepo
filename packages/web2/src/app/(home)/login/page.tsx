'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    console.log('session : ', session);
    console.log(`name : ${session?.user?.name}`);
    console.log(`email : ${session?.user?.email}`);

    return (
      <>
        <span>{`name : ${session?.user?.name}`}</span>
        <span>{`email : ${session?.user?.email}`}</span>
        <button onClick={() => signOut({ callbackUrl: '/' })}>로그아웃</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signOut({ callbackUrl: '/' })}>로그아웃</button>
    </>
  );
}

// export default Login;
