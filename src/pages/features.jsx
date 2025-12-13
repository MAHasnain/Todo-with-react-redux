import { Container, Typography, List, ListItem } from "@mui/material";

const Features = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Key Features
      </Typography>

      <List>
        <ListItem>✔ Add, update, and delete tasks easily</ListItem>
        <ListItem>✔ Mark tasks as completed or active</ListItem>
        <ListItem>✔ Centralized state management with Redux</ListItem>
        <ListItem>✔ Clean and responsive UI using Material UI</ListItem>
        <ListItem>✔ Scalable structure for future features</ListItem>
      </List>
    </Container>
  );
};

export default Features;
