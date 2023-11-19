import { IUser } from "../models/User.model";
import { TOKEN } from "../models/constants.model";

export function auth(users: IUser[], values: Omit<IUser, "id">) {
  const userData = users.find(
    (user) =>
      user.username.toLowerCase() === values.username.toLowerCase() &&
      user.password === values.password
  );
  if (userData) {
    return { data: userData, token: TOKEN };
  } else {
    return null;
  }
}
