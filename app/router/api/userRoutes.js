import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as mariadb from '../../mariadb.js';
import { User } from '../../mongodb.js';
import { hash } from '../../argon2.js';

const router = express.Router();

// 계정정보 저장 (POST /api/users)
router.post('/', async (req, res) => {
    // 전송된 정보를 개별 변수에 저장
    const { email, password, firstname, lastname, nickname } = req.body;

    // 패스워드 해싱
    const hashedPassword = await hash(password);

    // 사용자 UUID 생성
    const userUuid = uuidv4();

    let status = 500, message = '';

    try {
        let result, query;

        // MariaDB에 기본 user 레코드 생성

        const connection = await mariadb.pool.getConnection();

        query = 'INSERT INTO users (uuid, email, password, firstname, lastname, nickname) VALUES (?, ?, ?, ?, ?, ?)';
        result = await connection.query(query, [userUuid, email, hashedPassword, firstname, lastname, nickname]);

        query = 'SELECT * FROM users WHERE uuid= ?';
        result = await connection.query(query, [userUuid]);

        connection.release();

        if (result.length < 1) {
            status = 500;
            message = '쿼리는 정상 실행되었으나 레코드가 추가되지 않음';
            console.error('Database error: ', message, result);
        } else {
            status = 200;
        }

        // MongoDB에 도큐먼트 생성
        const mongoDBDocument = new User({ uuid: userUuid });
        result = await mongoDBDocument.save();

        if ((await User.findOne({ uuid: userUuid }))) {
            status = 200;
            message = '계정 저장 완료';
            console.log(message);
        } else {
            status = 500;
            message = 'MongoDB 도큐먼트 생성 실패';
            console.error(message);
        }

    } catch (err) {
        console.error('Database error:', err);
    }

    res.status(status).json({ message: message });
});

// 로그인 (POST /api/users/auth/signin)
router.get('/auth/signin', async (req, res) => {

});

export default router;