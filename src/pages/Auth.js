import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

export default function Auth({ universities, collegeInfo }) {
  const [value, setValue] = React.useState("register");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "25%",
        margin: "100px auto",
        typography: "body1",
        boxShadow: "5px 4px 13px -4px rgba(0, 0, 0, 0.5)",
        borderRadius: "10px ",
      }}
    >
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab
              sx={{
                width: "50%",
                fontSize: "18px",
                fontWeight: "700",
              }}
              label="Login"
              value="login"
            />
            <Tab
              sx={{
                width: "50%",
                fontSize: "18px",
                fontWeight: "700",
              }}
              label="Register"
              value="register"
            />
          </TabList>
        </Box>
        <TabPanel value="login">
          <LoginComponent />
        </TabPanel>
        <TabPanel value="register">
          <RegisterComponent
            universities={universities}
            collegeInfo={collegeInfo}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
