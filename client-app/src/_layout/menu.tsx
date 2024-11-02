"use client"

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Link } from '@nextui-org/react';

// 메뉴 구조 정의 (최대 2단계까지 가능)
interface menuStructure {
    id: string;
    name: string;
    children?: menuStructure[];
}

export const menuItems: Readonly<menuStructure[]> = [
    {
        id: 'about',
        name: '서비스 소개',
        children: [
            {
                id: '@',
                name: '서비스 소개',
            }
        ],
    },
    {
        id: 'forum',
        name: '정책토론장',
        children: [
            {
                id: '@',
                name: '정책토론장 현황',
            },
            {
                id: 'create',
                name: '정책토론 시작하기',
            },
        ],
    },
    {
        id: 'rokmnd2030',
        name: '국방부 2030 자문단',
    },
];

// 내비게이션바에 출력되는 메인메뉴 컴포넌트
export function MainMenu(): React.ReactNode {

    const [activeMainMenu, setActiveMainMenu] = useState('@');

    // 메인메뉴 라우터 기능 제공을 위한 hook
    const router = useRouter();

    // 메인메뉴 선택 여부 확인을 위한 hook 활용
    const pathname = usePathname();

    // 콘텐츠가 로드되었을 때 한 번만 실행
    useEffect(() => {
        const menuIds = pathname.split('/');

        // 현재 경로를 1단계까지 상태에 저장
        if (typeof menuIds[1] == 'string' && menuIds[1].length > 0) {
            setActiveMainMenu(menuIds[1]);
        }
    }, [pathname]);

    return (
        <>
            {menuItems.map((item, index) => (
                // 메인메뉴이므로 1단계에 해당함
                <Link color="foreground" href="#" onClick={() => router.push('/' + item.id)} key={`mainmenu-${index}`} className={item.id == activeMainMenu ? 'font-bold' : ''}>{item.name}</Link >
            ))
            }
        </>
    )
}

// 사이드 박스에 출력되는 서브메뉴 컴포넌트
export function SubMenu(): [boolean, React.ReactNode] {

    const [activeSubMenu, setActiveSubMenu] = useState('@');
    const [activeMainMenu, setActiveMainMenu] = useState('@');
    const [submenuItems, setSubMenuItems] = useState<menuStructure[]>([]);

    // 서브메뉴 라우터 기능 제공을 위한 hook
    const router = useRouter();

    // 서브메뉴 선택 여부 확인을 위한 hook 활용
    const pathname = usePathname();

    // 콘텐츠가 로드되었을 때 한 번만 실행
    useEffect(() => {
        const menuIds = pathname.split('/');

        // 현재 경로 1단계 저장
        if (typeof menuIds[1] == 'string' && menuIds[1].length > 0) {
            setActiveMainMenu(menuIds[1]);
        }

        // 현재 경로 2단계 저장
        if (typeof menuIds[2] == 'string' && menuIds[2].length > 0) {
            setActiveSubMenu(menuIds[2]);
        }

        // 선택된 메인메뉴에 서브메뉴가 있다면 가져옴
        menuItems.map((item, index) => {
            if (item.id == menuIds[1] && typeof item.children == 'object') {
                setSubMenuItems(item.children);
            }
        });

    }, [pathname]);

    if (Array.isArray(submenuItems) && submenuItems.length > 0) {

        return [true, (
            <>
                {submenuItems.map((item, index) => (
                    <li key={`submenu-${index}`} className={item.id == activeSubMenu ? 'font-bold mb4' : 'mb4'}><Link color="foreground" href="#" onClick={() => router.push('/' + activeMainMenu + '/' + (item.id == '@' ? '' : item.id))}>{item.name}</Link></li>
                ))}
            </>
        )]
    } else {
        return [false, (null)]
    }
}