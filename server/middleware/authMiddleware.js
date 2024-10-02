import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log(payload);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Request is not authorizated" });
  }
};

module.exports = authenticateToken;
