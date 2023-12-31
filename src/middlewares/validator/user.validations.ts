import { body } from "express-validator";
import { User } from "../../models/User";

export function createUserRules() {
  return [
    body("email")
      .isString()
      .trim()
      .isEmail()
      .toLowerCase()
      .custom(async (email) => {
        const exist = await User.findOne({
          where: {
            email,
          },
        });

        if (exist) throw new Error("Email already in use");

        return true;
      }),
    body("first_name").isString(),
    body("last_name").isString(),
    body("password").isString().isLength({ min: 6 }),
    body("password_confirm")
      .isString()
      .isLength({ min: 6 })
      .custom((input, meta) => {
        const password = meta.req.body.password;
        if (input !== password) {
          throw new Error("Does not match password");
        }
        return true;
      }),
  ];
}
