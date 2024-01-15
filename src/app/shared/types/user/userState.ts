import { Role } from "../role";

export interface UserState {
  name: string;
  token: string;
  role: Role;
  isLogged: boolean;
}
