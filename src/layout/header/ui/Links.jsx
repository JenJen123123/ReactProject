import { Box } from "@mui/material";
import nextKey from "generate-my-key";
import {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
  onlyBiz,
  onlyAdmin
} from "../../myLinks";
import NavLinkComponent from "../NavLinkComponent";
import { useSelector } from "react-redux";

const Links = () => {
  const { loggedIn, userData } = useSelector((bigPie) => bigPie.authSlice);

  return (
    <Box sx={{
      flexGrow: 1, display: { xs: "none", md: "none", lg: "flex" }
    }}>
      {alwaysLinks.map((myItem) => (
        <NavLinkComponent to={myItem.to} key={nextKey()}>
          {myItem.children}
        </NavLinkComponent>
      ))}
      {(userData.isBusiness || userData.isAdmin) && loggedIn &&
        onlyBiz.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {userData.isAdmin && loggedIn &&
        onlyAdmin.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
    </Box>
  );
};

export default Links;
