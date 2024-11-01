import React from 'react';
import type { Metadata } from 'next';

import Providers from '@/_layout/providers';
import NavigationBar from '@/_layout/navbar';

import { MainMenuStructure } from '@/_include/menuStructures';

import './globals.css';

const menuItems: MainMenuStructure[] = [
  ['서비스 소개', '/about'],
  ['정책토론장', '/forum'],
  ['국방부 2030 자문단', '#'],
];

export const metadata: Metadata = {
  title: {
    default: '2030 Connect',
    template: '%s - 2030 Connect',
  },
  description: '2030 자문단과 청년을 이어주는 정책소통 플랫폼',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <NavigationBar menuItems={menuItems} />
          {children}
        </Providers>
      </body>
    </html>
  );
}