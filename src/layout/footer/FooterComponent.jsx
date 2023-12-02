import { Fragment, useState } from "react";
import { BottomNavigation } from "@mui/material";
import Links from "../header/ui/Links";

const FooterComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <BottomNavigation sx={{
        mt: 2,
        pt: 0.5,
        boxShadow: 2
      }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <div>
          <Links />
        </div>
      </BottomNavigation>
    </Fragment>
  );
};

export default FooterComponent;
