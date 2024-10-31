import React from 'react';

export default function ContentBox({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
    return (
        <div className="flex items-start mx-auto max-w-[1280px] bg-white p-6 m-4">
            <div className="hidden lg:block 2xl:hidden text-sm w-[150px]">
                <nav>
                    <ul className="space-y-5">
                        <li className="mb-4"><a href="#home">Home</a></li>
                        <li className="mb-4"><a href="#about">About</a></li>
                        <li className="mb-4"><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}