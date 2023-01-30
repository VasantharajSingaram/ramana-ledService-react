import React from 'react'
import { Link } from 'react-router-dom';
import './component.css';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Navbar() {
  const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];


  return (
    <div>
    
    <nav className="navbar nav-1 bg-body-tertiary">
    <div className="container">
    <div>
      <a className="navbar-brand" href="#">
        <img src="assets/R.png" alt="Bootstrap" width="50" height="50" />
      <Link to="/" className='brand-name'>RAMANA ELECTRONICS</Link>  
      </a>
      </div>
      <div>
      <a href='https://ramanaelectronicsolutions.blogspot.com/'  target="_blank" className='brand-name bn'>
   BLOG
      </a>
      </div>
    </div>
  </nav>

  <nav class="navbar nav-2 navbar-expand-lg bg-body-tertiary">
  <div class="container">
   
    <button class="navbar-toggler" style={{backgroundColor: "#e3f2fd"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
  
        <Link to="/" className='brand-name-2  n2-1'>Home</Link>
        <Link to="/" className='brand-name-2 active n2-2'>Led Tv Services</Link>
        <Link to="/computer" className='brand-name-2 n2-3'>Computer Services</Link>

        
        
        <a href="tel:9962424996"><button className="btn btn-success btn-1" type="submit" id='footer'>CALL US</button></a>
      </div>
    </div>
  </div>
</nav>




    </div>
  )
}
