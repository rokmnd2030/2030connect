import React from 'react';
import { Metadata } from 'next';

import ContentBox from '@/_layout/content';
import { SubMenuStructure } from '@/_include/menuStructures';

const submenuItems: SubMenuStructure[] = [
    ['정책토론장 현황', '/forum'],
    ['정책토론 시작하기', '/forum/create'],
];

export const metadata: Metadata = {
    title: '정책토론 시작하기',
}

export default function Page(): React.ReactNode {
    return (
        <>
            <ContentBox submenuItems={submenuItems}>
                정책토론 시작하기
            </ContentBox>
        </>
    );
}
