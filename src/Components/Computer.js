import React from 'react'
import { Player } from 'video-react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from 'react-bootstrap/Table';
import { useEffect, useState, useNavigate } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import { useTheme } from '@mui/material/styles';

import Rating from '@mui/material/Rating';

import IconButton from '@mui/material/IconButton';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function useScroll() {
    // Keep track of whether the element is visible
    const [isVisible, setVisible] = useState(false);
  
    // Add an event listener for when the user scrolls
    useEffect(() => {
      window.addEventListener('scroll', () => {
        // Check to see if the element is in view
        if (window.pageYOffset > 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }, []);
  
    return isVisible;
  }


  export default function Computer() {

    
    return (
      <div>
      <div className='banner-contain'>
      <img className='gif' src="/assets/computer service.gif" />
      <div className='banner-text'>
      <p className='tracking-in-expand'>RAMANA ELECTRONICS</p>
      </div>
      <div className='banner-text-2'>
      <p className='focus-in-expand '>-AUTHORIZED SERVICE CENTER-</p>
      </div>
      <div className='banner-text-3'>
      <p className='text-focus-in'>COMPUTER SERVICE</p>
      </div>
      </div>
   <CommonIssues />
   <OutMotto />
   <OurTieups />
  
   
      </div>
    )
  }
  
  function AboutUs(){
   
      const isVisible = useScroll();
      return (
        <div>
          <div className="container">
          <div className="row tc-1">
          <div className="col mb-3">
          <img src="assets/pc engineer.png" className={`tech-img bounce-in-bottom ${isVisible ? 'visible' : ''}`}/>
          </div>
          <div className="col mb-3">
          <p className={`home-txt bounce-in-right ${isVisible ? 'visible' : ''}`}>Ramana Electronics is the leading provider of computer repair services in the area. Our experienced technicians use the latest diagnostic tools and techniques to ensure that all repairs are conducted quickly and effectively. We offer a variety of services including hardware and software repairs, upgrades, maintenance, networking, and more. Our commitment to quality and customer satisfaction has earned us a reputation as the go-to source for all your computer repair needs.</p>
          </div>
          
          </div>
          </div>
     
          </div>
          )
  }
  
  
  function CommonIssues(){
      return(
  
          <div className='container'>
          <div className='container commonIssues'>
        
          <Typography >We Handle</Typography>
       
          </div>
          <div className="container text-center c-1">
          <div className="row">
            <div className="col mb-3">
            <Card className='cards' elevation={3}>
            <CardContent>
            <img src='assets/computer.gif' width="150" />
            <p>PC Build & Software Installation</p>
            </CardContent>
            </Card>       
            </div>
            <div className="col mb-3">
            <Card className='cards' elevation={3}>
            <CardContent>
            <img src='assets/hard disk.gif' width="150" />
            <p>Hard Disk Data Recovery</p>
            </CardContent>
            </Card>
            </div>
            <div className="col mb-3">
            <Card className='cards' elevation={3}>
            <CardContent>
            <img src='assets/laptop.gif' width="150" />
            <p>Broken Laptop Service</p>
            </CardContent>
            </Card>
            </div>
            <div className="col mb-3">
            <Card className='cards' elevation={3}>
            <CardContent>
            <img src='assets/chiplevel.gif' width="150" />
            <p>Chip Level Service</p>
            </CardContent>
            </Card>
            </div>
            <div className="col mb-3">
            <Card className='cards' elevation={3}>
            <CardContent>
            <img src='assets/hinges.gif' width="150" />
            <p>Hinges Repair & Replacement</p>
            </CardContent>
            </Card>
            </div>
          </div>
        </div>
        <AboutUs />
      
        <Companies />
        </div>
      )
  }
  
  
  
  

  
  
 
  
  function Companies(){
  
    return(
      <div className='company'>
      <div className='container'>
      <div className='container commonIssues'>
      <Typography >Specialized in all brands</Typography>
      </div>
      
     <div className='special'>
     <div className='slide-track'>
      <div><img src='' className='special-margin'  width="100" /></div>
      <div><img src='assets/dell-2.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/hp-2.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/acer-2.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/apple-11.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/sony-2.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/toshiba-3.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/lenovo-2.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/samsung.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/asus-logo.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/realme-1.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/mi-xiaomi.svg' className='special-margin'  width="100" /></div>
      <div><img src='assets/infinix.png' className='special-margin'  width="100" /></div>
      <div><img src='' className='special-margin'  width="100" /></div>
     
     
   
  
      
      </div>
      </div>
      
      
  
  
  
  
  
      </div>
  
      
     
      
      </div>
     
    )
  }
  
  function OutMotto(){
  
    return(
      <div className='bar'>
      <div className='container'>
      <div className='container commonIssues-1'>
          <Typography className='ourMotto'>Our Motto</Typography>
          </div>
  
  
        <div className="container text-center c-1">
        <div className="row">
        <div className="col mb-3">
        <Card className='cards' elevation={3}>
        <CardContent>
        <img src='assets/30days.gif' width="150" />
        <h5>30 Days Warranty</h5>
        <p>We offer 30 days warranty on all appliance services.</p>
        </CardContent>
        </Card>       
        </div>
  
        <div className="col mb-3">
        <Card className='cards' elevation={3}>
        <CardContent>
        <img src='assets/Trusted.gif' width="150" />
        <h5>Trusted Technicians</h5>
        <p>The technicians at Ramana Electronics are the best in the industry.</p>
        </CardContent>
        </Card>       
        </div>
  
        <div className="col mb-3">
        <Card className='cards' elevation={3}>
        <CardContent>
        <img src='assets/customer.gif' width="150" />
        <h5>Best Customer Support</h5>
        <p>Our team of experienced professionals is available 24/7 to provide you with the best service.</p>
        </CardContent>
        </Card>       
        </div>
  
  
        
  
  
  
        </div>
        </div>
      </div>
      </div>
     
    )
  }
  
  function OurTieups(){
    const theme = useTheme();
  
    return(
      <div className='bar-2'>
      <div className='container'>
      <div className='container commonIssues'>
          <Typography className='ourMotto'>We have tie-ups with</Typography>
          </div>
  
  
        <div className="container text-center c-1">
        <div className="row">
        <div className="col mb-3">
      <img src='assets/jeeves.png'/>
  
  
  
        </div>
  
        <div className="col mb-3">
      
        <img src='assets/urban.png'/>
        
        </div>
  
      
        </div>
        </div>
      </div>
      </div>
     
    )
  }
  
  