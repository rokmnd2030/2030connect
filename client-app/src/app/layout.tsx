import React from 'react';
import type { Metadata } from 'next';

import Providers from '@/_layout/providers';
import NavigationBar from '@/_layout/navbar';
import SubMenu from '@/_layout/submenu';
import ContentBox from '@/_layout/content';

import './globals.css';

export const metadata: Metadata = {
  title: '2030 Connect',
  description: '2030 자문단과 청년을 이어주는 정책소통 플랫폼',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <NavigationBar />
          <SubMenu />
          <ContentBox>{children}</ContentBox>
        </Providers>
      </body>
    </html>
  );
}