import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// import Container from "react-bootstrap/Container";
// import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const { user, dispatch } = useAuthContext();
  let authorized;
  const navigate = useNavigate();
  if (user != null && user.authority === "admin") authorized = true;
  else authorized = false;
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
    navigate("/");
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.authority === "admin") authorized = true;
    else authorized = false;
    if (!user) {
      console.log("no user logged in ");
    } else {
      console.log(authorized);
      console.log(user.email, "here");
      dispatch({ type: "LOGIN", payload: user });
      console.log("hello");
      console.log(user);
    }
  }, []);

  return (
    <header className="navbar grid">
      {/* <nav>
        <ul className="navbar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/softwares">Software Projects</Link>
          </li>
          <li>
            <Link to="/hardwares">Hardware Projects</Link>
          </li>
          <li>
            <Link to="/createProject">Free Projects</Link>
          </li>
          {user ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {user ? (
            <Link to="/" onClick={handleClick}>
              Logout
            </Link>
          ) : (
            <Link to="/signup">Signup</Link>
          )}
          {authorized ? <Link to="/admin">Admin</Link> : null}
        </ul>
      </nav> */}

      <div className="navbar__links flex">
        <Link className="nav__item" to="/">
          Home
        </Link>
        <Link className="nav__item" to="/softwares">
          Software Projects
        </Link>
        <Link className="nav__item" to="/hardwares">
          Hardware Projects
        </Link>
      </div>
      <div className="navbar__logo">
        <Link className="nav__item" to="/">
          <strong>WebDroid</strong>
        </Link>
      </div>
      <div className="navbar__links flex">
        <Link className="nav__item" to="/freeprojects">
          Free Projects
        </Link>
        <Link className="nav__item" to="/aboutus">
          About Us
        </Link>
        {user ? (
          <Link className="nav__item" to="/profile">
            Profile
          </Link>
        ) : (
          <Link className="nav__item" to="/login">
            Login
          </Link>
        )}
        {user ? (
          <Link className="nav__item" to="/" onClick={handleClick}>
            Logout
          </Link>
        ) : (
          console.log("hello")
        )}
        {authorized ? (
          <Link className="nav__item" to="/admin">
            Admin
          </Link>
        ) : null}
      </div>
    </header>
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container className="header">
    //     <Navbar.Brand href="/">
    //       <strong>WebDroid</strong>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: "100px" }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/aboutus">About Us</Nav.Link>
    //         <NavDropdown
    //           onMouseLeave={() => setShowDropdown(false)}
    //           onMouseOver={() => setShowDropdown(true)}
    //           show={showDropdown}
    //           menuVariant="dark"
    //           title="Software Projects"
    //           id="collasible-nav-dropdown"
    //           renderMenuOnMount={true}
    //           style={{ marginTop: "0" }}
    //         >
    //           <NavDropdown.Item href="/webbased">
    //             Web-Based Projects
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="/softwares">Android</NavDropdown.Item>
    //           <NavDropdown.Item href="/python">Python</NavDropdown.Item>
    //           <NavDropdown.Item href="/blockchain">Blockchain</NavDropdown.Item>
    //           <NavDropdown.Item href="/cloud">Cloud</NavDropdown.Item>
    //           <NavDropdown.Item href="/matlab">Matlab</NavDropdown.Item>
    //           {/* <NavDropdown.Divider />
    //           <NavDropdown.Item href="/softwares">
    //             And many more
    //           </NavDropdown.Item> */}
    //         </NavDropdown>
    //         <NavDropdown
    //           onMouseLeave={() => setShowDropdown2(false)}
    //           onMouseOver={() => setShowDropdown2(true)}
    //           show={showDropdown2}
    //           menuVariant="dark"
    //           title="Hardware Projects"
    //           id="collasible-nav-dropdown"
    //           renderMenuOnMount={true}
    //           style={{ marginTop: "0" }}
    //         >
    //           <NavDropdown.Item href="/iot">IoT/Robotics</NavDropdown.Item>
    //           <NavDropdown.Item href="/drone">Drone</NavDropdown.Item>
    //           {/* <NavDropdown.Divider />
    //           <NavDropdown.Item href="/hardwares">
    //             And many more
    //           </NavDropdown.Item> */}
    //         </NavDropdown>
    //         <Nav.Link href="/freeprojects">Free Projects</Nav.Link>
    //       </Nav>
    //       {user && authorized && (
    //         <Nav className="me-auto my-2 my-lg-0">
    //           <Nav.Link as={Link} to="/createProject">
    //             Create Project
    //           </Nav.Link>
    //         </Nav>
    //       )}
    //       {!user && (
    //         <Nav class="ms-auto mb-2 mg-lg-0">
    //           {/* <Nav.Link as={Link} to="/login">
    //         Login
    //       </Nav.Link> */}
    //           <Button variant="outline-primary" href="/login">
    //             Login
    //           </Button>{" "}
    //           {/* <Nav.Link as={Link} to="/signup">
    //         Signup
    //       </Nav.Link> */}
    //           <Button href="/signup">SignUp</Button>{" "}
    //         </Nav>
    //       )}
    //       {user && (
    //         <Nav class="ms-auto mb-2 mg-lg-0">
    //           <Button
    //             variant="outline-danger"
    //             onClick={handleClick}
    //             // onClick={()=>navigate("/")}
    //             // style={{ float: "right", marginLeft: 800 }}
    //           >
    //             Logout
    //           </Button>
    //         </Nav>
    //       )}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
