import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Default User",
});

export const uLogIn = createContext({
  loggedIn: false,
});
export default userContext;
