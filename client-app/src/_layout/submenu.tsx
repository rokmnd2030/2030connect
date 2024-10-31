import React from "react";

export default function SubMenu(): React.ReactNode {
    return (
        <div className="hidden 2xl:block absolute left-[calc(50%-880px)] top-32 max-w-[200px] w-full text-sm text-right">
            <nav>
                <ul className="space-y-5">
                    <li className="mb-4"><a href="#home">Home</a></li>
                    <li className="mb-4"><a href="#about">About</a></li>
                    <li className="mb-4"><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}