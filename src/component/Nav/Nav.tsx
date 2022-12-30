import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Daily Task
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars">
            {" "}
            <Link to="/"> Add Task</Link>{" "}
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            {" "}
            <Link to="myTask">My Task</Link>{" "}
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            {" "}
            <Link to="/">Complete Task</Link>{" "}
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            {" "}
            <Link to="/login">Sing up</Link>{" "}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
