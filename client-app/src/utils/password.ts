const bcrypt = require('bcryptjs');

const hashPassword = async (password: any) => {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

const verifyPassword = async (plainPassword: any, hashedPassword: any) => {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

export { hashPassword, verifyPassword }