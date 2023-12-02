import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponentVertical = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Typography 
          color={isActive ? "text.headerActive" : "text.headerColor"}
          sx={{ p: 0.5, ml: 0, '&:hover': { color: "lime" }, }}
          variant="h5"
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};

export default NavLinkComponentVertical;
