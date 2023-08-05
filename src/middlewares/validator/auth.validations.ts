import { body } from "express-validator";
import { User } from "../../models/User";

export function createTokenRules() {
  return [
    body("grant_type").isString().isIn(["password", "refresh_token"]).default("password"),
    body("refresh_token")
      .if(body("grant_type").equals("refresh_token"))
      .isString(),
    // if grant_type is password
    body("email")
      .if(body("grant_type").equals("password"))
      .isString()
      .trim()
      .isEmail()
      .toLowerCase(),
    body("password")
      .if(body("grant_type").equals("password"))
      .isString().isLength({ min: 6 }),
  ];
}
