import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import { db } from '@/app/firebaseConfig';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: FirestoreAdapter(db),
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const userRef = db.collection('users').doc(user.id);
        const userDoc = await userRef.get();
        if (!userDoc.exists) {
          await userRef.set({
            name: user.name,
            email: user.email,
            image: user.image,
            createdAt: new Date(),
          });
        }
        return true;
      } catch (error) {
        console.error('Error saving user to Firestore:', error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl; // Redirect to the home page after successful login
    },
    async session({ session, token }) {
      session.userId = token.sub!;
      return session;
    },
  },
  pages: {
    signIn: '/pages/index.tsx',
  },
  debug: process.env.NODE_ENV === 'development',
});