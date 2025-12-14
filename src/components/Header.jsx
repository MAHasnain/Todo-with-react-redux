import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router";

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
      <NavbarCollapse className="bg-gray-900 md:bg-transparent rounded-lg">
        <NavbarLink
          as={Link}
          to="/"
          className="text-white md:text-gray-700 dark:md:text-white"
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/about"
          className="text-white md:text-gray-700 dark:md:text-white"
        >
          About
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/all-todos"
          className="text-white md:text-gray-700 dark:md:text-white"
        >
          My Todos
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/add-todo"
          className="text-white md:text-gray-700 dark:md:text-white"
        >
          New Todo
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
