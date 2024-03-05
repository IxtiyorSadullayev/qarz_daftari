const bcrypt = require("bcrypt");
class PasswordHelper {
    async generateHashPassword(password) {
        const hashpass = await bcrypt.hash(password, process.env.SALT);
        return hashpass;
    }

    async comparePass(password) {
        const comp = await bcrypt.compare(password, process.env.SALT);
        return comp;
    }
}

module.exports = PasswordHelper;