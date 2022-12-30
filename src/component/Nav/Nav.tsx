import React, { useContext } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleClick = () => {
    logOut().then(() => {
      //
    });
  };
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
          <Navbar.Link>
            {" "}
            <Link to="/"> Add Task</Link>{" "}
          </Navbar.Link>
          <Navbar.Link>
            {" "}
            <Link to="myTask">My Task</Link>{" "}
          </Navbar.Link>
          <Navbar.Link>
            {" "}
            <Link to="/">Complete Task</Link>{" "}
          </Navbar.Link>
          <Navbar.Link>
            {user ? (
              <Navbar.Link className="pointer" onClick={handleClick}>
                Logo out
              </Navbar.Link>
            ) : (
              <Link to="/login">Sing up</Link>
            )}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
