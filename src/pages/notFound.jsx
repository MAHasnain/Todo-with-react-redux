import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container sx={{ mt: 12, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold">
        404
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 2 }}>
        The page you’re looking for doesn’t exist.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ mt: 4 }}
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
