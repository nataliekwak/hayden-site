import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { HomePage, PortfolioPage, ResumePage } from "./pages";
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
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
