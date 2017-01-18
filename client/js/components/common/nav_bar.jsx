"use strict";

import React                    from 'react';
import Scroll                   from 'react-scroll';
import SideNav                  from 'react-simple-sidenav';
import Materialize              from 'materialize-css';
import assets                   from '../../libs/assets';

export default class Navbar extends React.Component {
  constructor(props){
    super(props)

    var sideNavitems = [
      <Scroll.Link className="top-nav-item text-light" to='home' spy={true} smooth={true} offset={50}
        duration={800} onClick={(e)=>{e.preventDefault(); this.toggleNav();}}>Home</Scroll.Link>,
      <Scroll.Link className="top-nav-item text-light" to='about' spy={true} smooth={true} offset={50}
        duration={800} onClick={(e)=>{e.preventDefault(); this.toggleNav();}}>About</Scroll.Link>,
      <Scroll.Link className="top-nav-item text-light" to='schedule' spy={true} smooth={true} offset={50}
        duration={800} onClick={(e)=>{e.preventDefault(); this.toggleNav();}}>Schedule</Scroll.Link>,
      <Scroll.Link className="top-nav-item text-light" to='sponsors' spy={true} smooth={true} offset={50}
        duration={800} onClick={(e)=>{e.preventDefault(); this.toggleNav();}}>Sponsors</Scroll.Link>,
    ]

    this.state = { sideNavitems, showNav: false };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    var showNav = (this.state.showNav) ? false : true;
    this.setState({showNav});
  }

  render(){

    return (
      <div className="navbar-fixed" style={{ top: '0px', position: 'absolute' }}>
        <nav className="default-background" role="navigation">
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo"><img src={"\." + assets('./images/hackustate-logo.png')} alt="hackustate" style={{ height: '55px', paddingTop: '10px' }}/></a>
            <ul className="right hide-on-med-and-down" style={{ position:'absolute', left: '100px', width: '825px' }}>
              <li><Scroll.Link className="top-nav-item text-light" to='home' spy={true} smooth={true} offset={50} duration={800}>Home</Scroll.Link></li>
              <li><Scroll.Link className="top-nav-item text-light" to='about' spy={true} smooth={true} offset={50} duration={800}>About</Scroll.Link></li>
              <li><Scroll.Link className="top-nav-item text-light" to='schedule' spy={true} smooth={true} offset={50} duration={800}>Schedule</Scroll.Link></li>
              <li><Scroll.Link className="top-nav-item text-light" to='sponsors' spy={true} smooth={true} offset={50} duration={800}>Sponsors</Scroll.Link></li>
            </ul>
          </div>

          <a  data-activates="nav-mobile"
              className="button-collapse mobile-nav-style"
              style={{ position: 'absolute' }}
              onClick={(e)=>{e.preventDefault(); this.toggleNav();}}>
                <i className="material-icons">menu</i>
          </a>

          <SideNav  showNav={ this.state.showNav }
                    onHideNav={ ()=>{this.setState({showNav: false});} }
                    title={<div className="light"><img src={"\." + assets('./images/hackustate-logo.png')} alt="hackustate" style={{ margin: 'auto', width: '200px' }}/></div>}
                    titleStyle={{ backgroundColor: '#FFF' }}
                    itemStyle={{ backgroundColor: '#F3E0CE', width: '100%', padding: '0px' }}
                    items={this.state.sideNavitems} />
        </nav>
        <br/>
      </div>
    );
  }
}
