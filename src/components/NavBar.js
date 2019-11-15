import React from "react";
import Hamburger from './HamburgerMenu';
import { Hub, Auth } from 'aws-amplify';

class NavBar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
  }

  //will use later if I have a back button implemented
  navigate =  () => {
    this.setState({navigateBack: true});
  };

  async componentDidMount() {

    try {
      if (await Auth.currentAuthenticatedUser())
        this.setState({isLoggedIn: true});
      } catch(e){
        console.log(e);
      }

    const listener = (data) => {
      if (data.payload.event === 'signIn')
        this.setState({isLoggedIn: true});
      else
        this.setState({isLoggedIn: false});
    }

    Hub.listen('auth', listener);
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div style={styles.navContainer}>
        <Hamburger />
          <div style={styles.viewStyle}>
            <span style={styles.textStyle}>{this.props.headerText}</span>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

} export default NavBar

const styles = {
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1e22',
    height:70,
    width:'100vw'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    color: '#feda6a',

  },
  navContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    margin: 'auto',
    width: '100%',
    zIndex: 999
  },
};
