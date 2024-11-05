"use server"

import { auth, signIn, signOut } from '@/auth';

export const signInWithCredentials = async (formData: FormData) => {
    await signIn('credentials', {
        email: formData.get('email') || '',
        password: formData.get('password') || '',
    });
}

export const signOutWithForm = async (formData: FormData) => {
    await signOut();
}

export { auth as getSession }