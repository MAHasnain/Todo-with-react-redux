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
      <NavbarBrand href="/">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="ToDo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TaskFlow
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>
          <Link to="/" /> Get started
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link className="text-white" to="/">Home</Link>
        <Link className="text-white" to="about">About</Link>
        <Link className="text-white" to="all-todos">My Todos</Link>
        <Link className="text-white" to="add-todo">New Todo</Link>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
