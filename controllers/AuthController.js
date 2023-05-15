import secret from "../config/auth.config.js";
import jwt from "jsonwebtoken";


export const token = async (req, res) => {
    jwt.sign({
        api_key: req.body.api_key,
        source: req.body.source,
        fingerprint: req.body.fingerprint,
        user_agent: req.body.user_agent,
        browser: req.body.browser,
        ip: req.body.ip,
        device: req.body.device,
        platform: req.body.platform,
        imei: req.body.imei,
        os: req.body.os,
        version: req.body.version,
        language: req.body.language,
        geo_latitude: req.body.geo_latitude,
        geo_longitude: req.body.geo_longitude,
    }, secret, { expiresIn: '8h' }, (err, token) => {
        if (err) {
            res.json({
                message: err.message
            })
        } else {
            res.json({
                message: "Success generate token",
                data: token,
            })
        }
    });
}

// export const verify = async (req, res) => {
//     jwt.verify(req.body.token, secret, (err, decoded) => {
//         if (err) {
//             res.json({
//                 message: err.message
//             })
//         } else {
//             res.json({
//                 message: "Success verify token",
//                 data: decoded,
//             })
//         }
//     });
// }

