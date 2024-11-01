import React from 'react';

import SubMenu from './submenu';
import { SubMenuStructure } from '@/_include/menuStructures';

export default function ContentBox({ children, submenuItems }: Readonly<{ children: React.ReactNode; submenuItems?: SubMenuStructure[] }>): React.ReactNode {
    return (
        <>
            <SubMenu submenuItems={submenuItems} />
            <div className="flex items-start mx-auto max-w-[1280px] bg-white p-6 m-1">
                {(Array.isArray(submenuItems) && submenuItems.length > 0) ? (
                    <div className="hidden lg:block 2xl:hidden text-sm w-[171px]">
                        <nav>
                            <ul className="space-y-5">
                                {submenuItems.map((item, index) => (
                                    <li key={`submenu-${index}`} className="mb-4"><a href={item[1]}>{item[0]}</a></li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                ) : ''}
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </>
    )
}