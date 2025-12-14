import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fluid rounded>
      {/* Logo / Brand */}
      <NavbarBrand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TaskFlow
        </span>
      </NavbarBrand>

      {/* Right side (Button + Toggle) */}
      <div className="flex md:order-2">
        <Button as={Link} to="/">
          Get started
        </Button>
        <NavbarToggle />
      </div>

      {/* Mobile + Desktop Menu */}
      <NavbarCollapse>
        <NavbarLink as={Link} to="/">
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/all-todos">
          My Todos
        </NavbarLink>
        <NavbarLink as={Link} to="/add-todo">
          New Todo
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
