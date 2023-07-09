// rafce used for boiler template
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
// import {
//     createTheme,
//     makeStyles,
//     ThemeProvider,
//   } from "@material-ui/core/styles";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles, ThemeProvider } from "@mui/styles";
import React from "react";
import { HawkState } from "../HawkContext";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));



// arrow function (()=> {})
const Header = () => {
  // Hook function below 
  const classes = useStyles();
  const { currency, setCurrency } = HawkState();
  const navigate = useNavigate();

  return (
    <div>
      <ThemeProvider>
        <AppBar color="transparent" position="static">
          {/* For responsiveness container is used */}
          <Container>       
            <Toolbar>
              <Typography
                onClick={() => navigate(`/`)}
                variant="h6"
                className={classes.title}
              >
                Hawk
              </Typography>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{
                  width: 100,
                  height: 40,
                  marginLeft: 15,
                }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
