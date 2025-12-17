import { Grid, Typography } from "@mui/material";

import { Header } from "../components";

const HomePage = () => {
  return (
    <Grid
      container
      sx={{ width: "100%", maxWidth: "full", margin: 0, padding: 0 }}
    >
      <Header />
      <Typography variant="h2">howdy</Typography>
    </Grid>
  );
};

export default HomePage;
