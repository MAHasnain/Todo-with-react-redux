import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About TaskFlow
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 2 }}>
        TaskFlow is a practice-driven project focused on mastering modern
        frontend development concepts like state management, component-based
        architecture, and scalable UI design.
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 2 }}>
        This app is built using React for UI, Redux for predictable state
        management, and Material UI for a clean, professional interface.
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 2 }}>
        The goal is simple: build real-world habits by creating real-world
        projects.
      </Typography>
    </Container>
  );
};

export default About;
