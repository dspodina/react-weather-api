import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import WeatherContainer from "./components/WeatherContainer";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Oswald", "Roboto", "Arial"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header title="Weather in Brussels for the week" />
      <WeatherContainer />
    </ThemeProvider>
  );
};

export default App;
