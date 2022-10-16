// import jwt from 'jsonwebtoken';

// export const auth = async (req, res, next) => {
//   try {
//     const token = req.header('Authorization');
//     if (!token) return res.status(400).json({ msg: 'Login first' });
//     jwt.verify(token, process.env.JWT_SECRET, async (err, res) => {
//       if (err) return res.status(400).json({ msg: 'Login first' });
//       req.user = res;
//       next();
//     });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
};
