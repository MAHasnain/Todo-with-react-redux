import { FooterNav, Header } from "./components/index.js";
import { Container } from "@mui/material";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        sx={{ minHeight: "80vh", mt: 4, mb: 4, textAlign: "center" }}
      >
        <Outlet />
      </Container>
      <FooterNav />
    </>
  );
};

export default App;
