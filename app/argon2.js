import argon2 from 'argon2';

const hash = async (plainText) => {
    try {
        const hashed = await argon2.hash(plainText, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            timeCost: 10,
            parallelism: 8,
        });
        return hashed;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function verify(hashed, text) {
    try {
        const isMatch = await argon2.verify(hashed, text);
        return isMatch;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { hash, verify }