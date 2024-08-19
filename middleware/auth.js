import jsonwebtoken from "jsonwebtoken";

const auth = (req,res,next) => {
    console.log(req.headers);
    try {
        const accessToken = req.headers.authorization.replace("Bearer ", "");

        //verify access token
        const jwtPayload = jsonwebtoken.verify(accessToken, process.env.JWT_KEY);

        req.user = jwtPayload;
    } catch (e) {
        res.status(401).json({
            status: "failed",
            message: "Unauthorized!",
        });
        return;
    }

    next();
}

export default auth;