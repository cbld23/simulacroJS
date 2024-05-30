

const ERROR_MESSAGE = "is not ok";

export const parseToUserClass = (literalUserObject, user) => {
    return new Promise((resolve, reject) => {
        if (!literalUserObject) {
            reject(`${literalUserObject} ${ERROR_MESSAGE}`);
        } else {
            user.avatar = literalUserObject.avatar;
            user.email = literalUserObject.email;
            user.first_name = literalUserObject.first_name;
            user.id = literalUserObject.id;
            user.last_name = literalUserObject.last_name;
            resolve(user);
        }
    });
};
