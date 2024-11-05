import React from 'react';
import { Metadata } from 'next';

import Form from './form';

export const metadata: Metadata = {
    title: '로그인',
}

export default function Page(): React.ReactNode {
    return (
        <>
            <h1 className="text-2xl mb-2">로그인</h1>
            <p className="pb-5 mb-5 border-b border-gray-100">2030 Connect에 로그인하면 국방부 2030 자문단과 직접 소통하며 국방정책을 제언할 수 있습니다.</p>
            <Form />
        </>
    );
}
