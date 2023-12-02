import ROUTES from "../routes/ROUTES";

const myLinks = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.ABOUT, children: "About" },
];

const alwaysLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" }];

const loggedInLinks = [
  { to: ROUTES.FAV, children: "Fav Cards" },
  { to: ROUTES.LOGOUT, children: "Logout" },
];

const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "Sign Up" },
  { to: ROUTES.LOGIN, children: "Login" },
];

const onlyBiz = [
  { to: ROUTES.CREATECARD, children: "Create page" },
];

const onlyAdmin = [
  { to: ROUTES.SANDBOX, children: "Sandbox" },
];

export default myLinks;
export { alwaysLinks, loggedInLinks, loggedOutLinks, onlyBiz,onlyAdmin };
