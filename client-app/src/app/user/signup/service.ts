import { config } from '@/config';
import axios from 'axios';

interface SignUpForm {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    nickname: string
}

export const post = async ({ email, password, firstname, lastname, nickname }: Readonly<SignUpForm>) => {
    const api_url = config.api_url + '/api/users';

    try {
        const response = await axios.post(api_url, {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            nickname: nickname,
        });
        console.log('계정 저장 완료: ', response.data);
    } catch (err) {
        console.log('계정 저장 실패: ', err);
    }
}