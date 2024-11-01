import React from "react";

import { SubMenuStructure } from "@/_include/menuStructures";

export default function SubMenu({ submenuItems }: Readonly<{ submenuItems?: SubMenuStructure[] }>): React.ReactNode {
    return (
        <>
            {(Array.isArray(submenuItems) && submenuItems.length > 0) ? (
                <div className="hidden 2xl:block absolute left-[calc(50%-880px)] top-24 max-w-[200px] w-full text-sm text-right">
                    <nav>
                        <ul className="space-y-5">
                            {submenuItems.map((item, index) => (
                                <li key={`submenu-${index}`} className="mb-4"><a href={item[1]}>{item[0]}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            ) : ''}
        </>
    );
}