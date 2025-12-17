import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { HomePage } from "./pages";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Libre Baskerville', serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
