const pool = require("../config/db");

const jwt = require('jsonwebtoken');

const login = async (req, res) => {

  try {

    const { employeeID, password } = req.body;

    if (!(employeeID && password)) {
      return res.status(400).send("All input is required");
    }

    console.log("Start login process");

    pool.getConnection((err, connection) => {

      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }

      connection.query(
        'SELECT EmployeeID, Password FROM employee WHERE EmployeeID = ?',
        [employeeID],
        (err, rows) => {

          connection.release();

          if (err) {
            console.log(err);
            return res.status(500).json({ error: err });
          }

          if (rows.length === 0) {
            return res.status(401).send("User not found");
          }

          const user = rows[0];

          console.log(user);

          console.log("Finish query for user identification");

          // Plain-text password check
          if (password === user.Password) {

            const token = jwt.sign(
              { id: user.EmployeeID },
              process.env.ACCESS_TOKEN,
              { expiresIn: '2h' }
            );

            let options = {
              maxAge: 1000 * 60 * 60 * 24,
              httpOnly: true,
            };

            res.cookie('x-access-token', token, options);

            res.status(200).json({
              token: token
            });

            console.log("login success");

          } else {

            console.log("password is false");

            res.json({
              token: "invalid"
            });

          }

        }
      );

    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }

};

module.exports = { login };