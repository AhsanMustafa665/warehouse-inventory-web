import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assests/images/logo2.png'
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar className='navbar-style' collapseOnSelect sticky='top' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img style={{width:'80%',borderRadius:'20px'}} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/home'
        >
          Home
        </NavLink>
            <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='featured'
        >
         Featured
        </NavLink>
            <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/home#collections'
        >
         Collections
        </NavLink>
            <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='blogs'
        >
         Blogs
        </NavLink>
            
      {/* <Nav.Link href="home#featured" className='link'>Featured</Nav.Link> */}
      {/* <Nav.Link href="home#collections" className='link'>Collections</Nav.Link>
      <Nav.Link href="blogs"  className='link' >Blogs</Nav.Link> */}
  
    </Nav>
            <Nav>
            
              <Nav.Link style={{fontSize: '20px',fontWeight: 'bold',color: '#1e90c2'}} as={Link} to="minventory" className='link'>Manage Inventory</Nav.Link>
              {
                user ?
                  <button  style={{fontSize: '20px',fontWeight: 'bold',color: '#1e90c2'}} onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign out</button>
                  :
                  <Nav.Link  style={{fontSize: '20px',fontWeight: 'bold',color: '#1e90c2'}} as={Link} to="login">Login </Nav.Link>}
              <Nav.Link as={Link} to="signup"></Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

<br />

</>
);
};

export default Header;