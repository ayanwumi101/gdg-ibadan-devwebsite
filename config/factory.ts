import bcrypt from 'bcryptjs';

const factory = {
    generateHashPassword(password: string) {
        let salt = bcrypt.genSaltSync(10);
        let hashedPassword = bcrypt.hashSync(password, salt);
        return hashedPassword;
    },

    compareHashedPassword: (typedPassword: string, storedPassword: string) => {
        // return boolean
        let compareStatus = bcrypt.compareSync(typedPassword, storedPassword);

        return compareStatus;
    }
}

// module.exports = factory;
export default factory;