import { UserState } from "src/app/shared/types/user/userState";
import { userState } from "../user/user.state";

export function getInitialUserState(): UserState {
  const previousSettings: string | null = localStorage.getItem("user");
  if (previousSettings != null) {
    return JSON.parse(previousSettings);
  }

  return userState;
}
