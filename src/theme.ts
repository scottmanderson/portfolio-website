import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#87CEFA",
      paper: "#FFFFF0",
    },
    text: {
      primary: "#000000",
      secondary: "#000080",
    },
  },
  typography: {
    body1: {
      fontSize: "1.125rem",
    },
  },
});

export default theme;
