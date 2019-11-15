import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { AuthTheme } from '../resources/AuthTheme';
import { SignOut } from "aws-amplify-react";

class HamburgerMenu extends React.Component {

  constructor (props) {
    super(props)
    this.state = { menuOpen: false};
  }

  ////////
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/Home">HOME</Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/Portfolio">PORTFOLIO</Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/Notifications">NOTIFICATIONS</Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/Preferences">PREFERENCES</Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/TIPS">PORTFOLIO TIPS</Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/Welcome"><SignOut theme={ AuthTheme }  /></Link>
      </Menu>
    )
  }

} export default HamburgerMenu;
