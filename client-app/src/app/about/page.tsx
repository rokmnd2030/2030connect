import React from 'react';
import { Metadata } from 'next';

import ContentBox from '@/_layout/content';
import { SubMenuStructure } from '@/_include/menuStructures';

const submenuItems: SubMenuStructure[] = [
    ['서비스 소개', '#'],
    ['자문단 참여 신청방법', '#'],
];

export const metadata: Metadata = {
    title: '서비스 소개',
}

export default function Page(): React.ReactNode {
    return (
        <>
            <ContentBox submenuItems={submenuItems}>
                서비스 소개
            </ContentBox>
        </>
    );
}
