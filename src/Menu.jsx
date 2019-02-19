import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,Input
} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom'
import logo from './logo.svg'; 

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='mb-4'>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand className="mr-5" tag={RRNavLink} to="/" exact> 
             <img src={logo} style={{widht:'40px', height:'40px'}} alt="Logo" /> React Language
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" exact>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink}  to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/employees">Employees</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/todos">Todos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/clock">Clock</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/clock">Clock</NavLink>
              </NavItem>
              <Input name="selectLang"  className="ml-5" type="select"
                     onChange={this.props.onChangeLanguage} value={this.props.language}>
                 <option value="en">English</option>
                 <option value="fr">Français</option>
              </Input>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}