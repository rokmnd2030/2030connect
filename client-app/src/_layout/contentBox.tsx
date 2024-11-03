"use client"

import React, { useEffect, useState } from 'react';

import { SubMenu } from './menu';

export default function ContentBox({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {

    const subMenuContent = SubMenu();

    return (
        <>
            {subMenuContent[0] && (
                <div className="hidden 2xl:block absolute left-[calc(50%-880px)] top-24 max-w-[200px] w-full text-sm text-right">
                    <nav>
                        <ul className="space-y-5">
                            {subMenuContent[1]}
                        </ul>
                    </nav>
                </div>
            )}
            <div className="flex items-start mx-auto max-w-[1280px] bg-white p-6 m-1">
                {subMenuContent[0] && (
                    <div className="hidden lg:block 2xl:hidden text-sm w-[171px]">
                        <nav>
                            <ul className="space-y-5">
                                {subMenuContent[1]}
                            </ul>
                        </nav>
                    </div>
                )}
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </>
    )
}