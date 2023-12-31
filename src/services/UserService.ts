import { IUserCreationAttributes, User } from "../models/User";
import { generateAuthorization } from "../helpers/auth.helper";
import { CreateUserPayload } from "../types/user";

export default class UserService {
  public static async createNewUser(requestBody: CreateUserPayload) {
    const { email, password, first_name, last_name } =
      requestBody;

    const newUser: IUserCreationAttributes = {
      first_name,
      last_name,
      email,
      password,
    };
    const user = await User.create(newUser);

    const [access_token, refresh_token] = await generateAuthorization(user);

    return {
      token_type: "bearer",
      access_token,
      refresh_token,
      expires_in: 3600,
    };
  }
}
