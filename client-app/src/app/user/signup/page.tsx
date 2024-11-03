import React from 'react';
import { Metadata } from 'next';
import { hashPassword, verifyPassword } from '@/utils/password';

export const metadata: Metadata = {
    title: '계정등록',
}

export default function Page(): React.ReactNode {
    return (
        <>계정등록</>
    );
}
