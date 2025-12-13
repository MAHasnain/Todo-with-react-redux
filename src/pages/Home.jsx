import { Container, Typography, Button, Stack } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        TaskFlow
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
        Organize your tasks. Focus on what matters. Finish strong.
      </Typography>

      <Typography sx={{ mt: 3 }} color="text.secondary">
        TaskFlow is a clean and minimal todo app built with React, Redux, and
        Material UI. It helps you manage daily tasks with clarity and control —
        no distractions, just productivity.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 5 }}>
        <Button variant="contained" size="large">
          Get Started
        </Button>
        <Button variant="outlined" size="large">
          Learn More
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
