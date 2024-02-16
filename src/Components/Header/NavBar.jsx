import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./nav.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Cart/CartContext";
import { auth } from "../../Helper/Firebase";

function NavBar() {
  const [{ cartItems, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <Navbar className="navBg">
      <Container fluid className="nav-container">
        <Navbar.Brand>
          <Link to="home">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              width="100"
              height="35"
              className="d-inline-block align-top"
              alt="Netflix logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar />
        <Navbar className="nav-elements">
          {/* <Nav> */}
          <Form className="d-flex search-container">
            <NavDropdown
              title={<span className="all">All</span>}
              className="search-filter"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
            </NavDropdown>
            <Form.Control
              type="search"
              placeholder="Search Amazon"
              className="search-bar"
              aria-label="Search"
            />
            <Button variant="outline-success" className="search-button">
              <SearchIcon />
            </Button>
          </Form>
          {/* </Nav> */}
          <Nav
            className="me-auto my-2 my-lg-0 nav-links"
            style={{ maxHeight: "100px" }}
          >
            <NavDropdown
              className="my-auto language-filter"
              title={
                <span>
                  <img
                    src={
                      "https://wallpapers.com/images/high/american-flag-graphic-qtwm6w1svgrk9txp.png"
                    }
                    alt="USA flag"
                    width="20px"
                    height="17px"
                    className="flage"
                  />
                  <span className="bold-nav-link">EN</span>
                </span>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="account-filter"
              title={
                <>
                  <span className="regular-nav-link">
                    Hello, {user ? user.email : "Guest"}
                  </span>
                  <br />
                  <span className="bold-nav-link">Account & Lists</span>
                </>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="signin-button1">
                <Link to={!user && "signin"} className="signin-link">
                  <div onClick={handleAuthentication}>
                    {user ? "Sign out" : "Sign in"}
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <div className="signin-dropdown">
                <div className="signin-dropdown-left">
                  <strong>Your Lists</strong>
                  <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
                </div>
                <div className="signin-dropdown-right">
                  <strong>Your Accounts</strong>
                  <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <Nav.Link>
              <Link to="orders" className="cart-link">
                <span className="regular-nav-link">Returns </span>
                <br />
                <span className="bold-nav-link">& Orders</span>
              </Link>
            </Nav.Link>
            <Nav.Link className="my-auto">
              <Link to="checkout" className="cart-link">
                <AddShoppingCartIcon className="cart-icon" />
                <span className="bold-nav-link cart-text">
                  {cartItems.length}
                </span>
              </Link>
              {/* <span className="bold-nav-link cart-text">Cart</span> */}
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;
// import React from "react";
// import numeral from "numeral";

// const CurrencyFormat = ({ amount }) => {
//   const formattedAmount = numeral(amount).format("$0,0.00");

//   return <div>{formattedAmount}</div>;
// };s

// export default CurrencyFormat;
