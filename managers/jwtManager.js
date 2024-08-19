import jsonwebtoken from "jsonwebtoken";

const jwtManager = (user) => {
    const accessToken = jsonwebtoken.sign(
        {
            _id: user._id,
            name: user.name,
        },
        process.env.JWT_KEY
    );

    return accessToken;
};

export default jwtManager;