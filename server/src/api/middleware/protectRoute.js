import jwt from "jsonwebtoken"
import {properties} from "../../config/properties.js"

export const protectRoute = async(req,res,next) => {
    const secret_key = properties?.JWT_SECERT_KEY
    const token = req.header('Authorization')?.split(" ")[1]
    if(!token) return res.status(400).send({
        message: "jwt must be provided"
    })

    try {
        const decode = jwt.verify(token, secret_key);
        req.user = decode 
        next()
    } catch (error) {
        res.status(401).json({ message: 'Invalied or Expire token', error });
    }

}