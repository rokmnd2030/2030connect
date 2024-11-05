"use client"

import React from 'react';
import { Input } from '@nextui-org/react';
import { signInWithCredentials } from '@/server/auth';

export default function Form(): React.ReactNode {
    return (
        <form action={signInWithCredentials}>
            <Input type="email" name="email" label="이메일주소" variant="bordered" className="max-w-xs mb-5" />
            <Input type="password" name="password" label="패스워드" variant="bordered" className="max-w-xs mb-5" />
            <button>로그인</button>
        </form>
    )
}