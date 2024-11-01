import React from 'react';

import ContentBox from '@/_layout/content';
import { SubMenuStructure } from '@/_include/menuStructures';

const submenuItems: SubMenuStructure[] = [
  ['테스트 1', '#'],
  ['테스트 2', '#'],
];

export default function Page(): React.ReactNode {
  return (
    <>
      <ContentBox submenuItems={submenuItems}>
        홈
      </ContentBox>
    </>
  );
}