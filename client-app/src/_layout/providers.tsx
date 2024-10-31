"use client"

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
    return (
        <NextUIProvider locale="ko-KR">
            {children}
        </NextUIProvider>
    );
}