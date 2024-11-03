"use client"

import React, { useState } from 'react';

import { Input, Button } from "@nextui-org/react";
import { z } from 'zod';

import { post } from './service';

export default function Form(): React.ReactNode {
    const [formData, setFormData] = useState<{
        email: string;
        password: string;
        verify_password: string,
        lastname: string,
        firstname: string,
        nickname: string,
    }>({
        email: '',
        password: '',
        verify_password: '',
        lastname: '',
        firstname: '',
        nickname: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = async () => {
        try {
            // 1. 비어있는 양식이 있는지 확인
            if (formData.email.length < 1 || formData.password.length < 1 || formData.verify_password.length < 1 || formData.lastname.length < 1 || formData.firstname.length < 1 || formData.nickname.length < 1) {
                throw new Error('비어있는 양식 존재');
            }

            // 2. 패스워드 일치 확인
            if (formData.password != formData.verify_password) {
                throw new Error('입력한 패스워드 불일치');
            }

            // 3. 이메일 주소 검증
            const email = z.string().email({ message: '유효한 이메일 주소가 아닙니다.' }).parse(formData.email);

            // 4. post 전송
            await post({ email: email, password: formData.password, firstname: formData.firstname, lastname: formData.lastname, nickname: formData.nickname });
        } catch (err) {
            console.log('계정등록 실패: ', err);
        }
    }

    return (
        <div>
            <Input onChange={handleChange} type="email" name="email" label="이메일주소" variant="bordered" description="이메일 주소는 아이디로 사용됩니다." className="max-w-xs mb-5" />
            <Input onChange={handleChange} type="password" name="password" label="패스워드" variant="bordered" className="max-w-xs mb-5" />
            <Input onChange={handleChange} type="password" name="verify_password" label="패스워드 확인" variant="bordered" className="max-w-xs mb-5" />
            <div className="flex w-full flex-wrap items-end gap-5 mb-5">
                <Input onChange={handleChange} type="text" name="lastname" label="성(Last name)" variant="bordered" className="max-w-xs" />
                <Input onChange={handleChange} type="text" name="firstname" label="이름(First name)" variant="bordered" className="max-w-xs" />
            </div>
            <Input onChange={handleChange} type="text" name="nickname" label="닉네임" variant="bordered" description="2030 Connect에서는 닉네임으로 불립니다." className="max-w-xs mb-5" />
            <Button onClick={submitForm} color="primary" variant="solid" className="mt-10">계정등록</Button>
        </div>
    )
}