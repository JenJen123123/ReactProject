import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Typography
          color={isActive ? "text.headerActive" : "text.headerColor"}
          sx={{ ml: 4, '&:hover': { color: "lime" }, fontFamily: 'Arial' }}
          variant="h5"
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};
{
  /* <Link to={to}>
      <Typography color="text.primary" sx={{ p: 2 }}>
        {children}
      </Typography>
    </Link> */
}
export default NavLinkComponent;
