import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';
// import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import Naver from 'next-auth/providers/naver';

// 로그인 처리
// kakao, naver, google, github, discord,

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string
    }),
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string
    }),
    Naver({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session }) {
      return session;
    }
  },
  pages: { signIn: '/login' }
});
export { handler as GET, handler as POST };

// const authOptions = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'logina',
//       credentials: {
//         username: {
//           label: '이메일',
//           type: 'text',
//           placeholder: '이메일 주소 입력 요망'
//         },
//         password: { label: '비밀번호', type: 'password' }
//       },

//       async authorize(credentials) {
//         const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
//           method: 'POST',
//           headers: {
//             'content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             username: credentials?.username,
//             password: credentials?.password
//           })
//         });

//         const user = await res.json();
//         console.log(user);

//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       }
//     }),
//     KakaoProvider({
//       clientId: process.env.KAKAO_CLIENT_ID as string,
//       clientSecret: process.env.KAKAO_CLIENT_SECRET as string
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user };
//     },

//     async session({ session, token }) {
//       session.user = token as any;
//       return session;
//     }
//   },
//   pages: { signIn: '/' },
//   secret: process.env.NEXTAUTH_SECRET
// });

// export { authOptions as GET, authOptions as POST };
