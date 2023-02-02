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
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {Route, Navigate, useNavigate} from 'react-router-dom';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import TermsConditions from './Terms';
import Carousel from 'react-bootstrap/Carousel';


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


export default function HOME() {

    
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/tv01.png"
          alt="First slide"
        />
        <div className='banner-text'>
        <p className='tracking-in-expand'>RAMANA ELECTRONICS</p>
        </div>
        <div className='banner-text-2'>
        <p className='focus-in-expand '>-AUTHORIZED SERVICE CENTER-</p>
        </div>
        <div className='banner-text-3'>
        <p className='text-focus-in'>LED TV SERVICE</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/tv02.png"
          alt="Second slide"
        />
        <div className='banner-text'>
    <p className='tracking-in-expand'>RAMANA ELECTRONICS</p>
    </div>
    <div className='banner-text-2'>
    <p className='focus-in-expand '>-AUTHORIZED SERVICE CENTER-</p>
    </div>
    <div className='banner-text-3'>
    <p className='text-focus-in'>LED TV SERVICE</p>
    </div>
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/tv03.png"
          alt="Third slide"
        />
        <div className='banner-text'>
        <p className='tracking-in-expand'>RAMANA ELECTRONICS</p>
        </div>
        <div className='banner-text-2'>
        <p className='focus-in-expand '>-AUTHORIZED SERVICE CENTER-</p>
        </div>
        <div className='banner-text-3'>
        <p className='text-focus-in'>LED TV SERVICE</p>
        </div>
       
      </Carousel.Item>
    </Carousel>
  
   
 <CommonIssues />
 <OutMotto />
 <OurTieups />
 <CustomerReview />

 
    </div>
  )
}

function AboutUs(){
 
    const isVisible = useScroll();
    return (
      <div className='about-us'>
        <div className="container">
        <div className="row tc-1">
        <div className="col mb-3">
        <img src="assets/image1.png" className={`tech-img bounce-in-bottom ${isVisible ? 'visible' : ''}`}/>
        </div>
        <div className="col mb-3">
        <p className={`home-txt bounce-in-right ${isVisible ? 'visible' : ''}`}>Ramana Electronics provides the best LED TV service in the market at an affordable price. Our experienced technicians are highly trained and provide top-notch repair and installation services for all types of TVs. We are committed to delivering exceptional customer service and satisfaction. We specialize in the repair and installation of LED TVs, and we also provide a variety of other services, such as setting up home theater systems, mounting LED TVs, and more. We only use the latest technology and the highest-quality parts for all of our repairs. If you are looking for an LED TV repair service, we are the company to call. Ramana Electronics offers fast, reliable, and affordable service. We also offer free estimates on all our services and a 30-day warranty on all repairs.</p>
        </div>
        
        </div>
        </div>
        <div className="container col-12 " >
    <div className={`card list-cards-1 swing-in-top-fwd ${isVisible ? 'visible' : ''}`}>
      <div className='card-body cb1'>
       <div>
        <h5>Services</h5>
        </div>
        <div>
        <h5>CHARGES</h5>
        </div>
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
      
        <Typography >COMMON ISSUES</Typography>
     
        </div>
        <div className="container text-center c-1">
        <div className="row">
          <div className="col mb-3">
          <Card className='cards' elevation={3}>
          <CardContent>
          <img src='assets/tv1.gif' width="150" />
          <p>LED TV displays picture but not plays sound</p>
          </CardContent>
          </Card>       
          </div>
          <div className="col mb-3">
          <Card className='cards' elevation={3}>
          <CardContent>
          <img src='assets/hdmi.gif' width="150" />
          <p>HDMI port issue</p>
          </CardContent>
          </Card>
          </div>
          <div className="col mb-3">
          <Card className='cards' elevation={3}>
          <CardContent>
          <img src='assets/onlysound.gif' width="150" />
          <p>TV does not show picture but only plays the sound</p>
          </CardContent>
          </Card>
          </div>
          <div className="col mb-3">
          <Card className='cards' elevation={3}>
          <CardContent>
          <img src='assets/not working.gif' width="150" />
          <p>Automatically TV switched off or on</p>
          </CardContent>
          </Card>
          </div>
        </div>
      </div>
      <AboutUs />
      <ServiceList />
      <Companies />
      </div>
    )
}




function ServiceList(){

  const { id } = useParams();
  const [serviceList, setServiceList] = useState([]);
const getServiceList = () => {

      fetch(`https://63db670ab8e69785e48142c6.mockapi.io/RamanaAPI/`, {
        method: 'GET',
      })
          .then((response) => response.json())
          .then((data) => setServiceList(data));

};

useEffect(() => getServiceList(), []);

const deletePrice = (id) => {
  // console.log("Deleting price", id);
  fetch(`https://63db670ab8e69785e48142c6.mockapi.io/RamanaAPI/${id}`, {
    method: 'DELETE',
  })
      .then((data) => getServiceList())
};

const navigate = useNavigate();

  return(

    <div>
    {serviceList.map(led => (
      <PricingLists id={led.id} led={led} deleteButton = {
        
        <IconButton onClick={()=>deletePrice(led.id)}>
        <DeleteIcon />
        </IconButton>} 

        editButton = { 
        <IconButton onClick={()=>navigate(`/ledApi/${led.id}`)}>
        <EditIcon />
        </IconButton>}
        
        
        />
  ))}
    
    </div>

  )
}


function PricingLists({led, deleteButton, editButton}){
  const isVisible = useScroll();
  const { id } = useParams();

  const [data, setData] = useState([]);

  return(
    <div className='container c3'>
    <div className="l1" >
    <div className="row">

  

  <div className="col-12 ca-1">
  <div className={`card list-cards swing-in-top-fwd-1 ${isVisible ? 'visible' : ''}`}>
    <div className='card-body cb1'>
     <div>
      <p>{led.service}</p>
      </div>
      <div>
      <p>₹ {led.price}</p>
      </div>
   
    </div>
    
  </div>
  
</div>




  </div>


  
    </div>
    
    </div>
  )
}

function Companies(){

  return(
    <div className='company'>
    <div className='container'>
    <div className='container commonIssues'>
    <Typography >Specialized in all LED TV brands</Typography>
    </div>
    
   <div className='special'>
   <div className='slide-track'>
    <div><img src='' className='special-margin'  width="100" /></div>
    <div><img src='assets/sony-2.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/samsung.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/panasonic-1.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/onida-electronics.png' className='special-margin'  width="100" /></div>
    <div><img src='assets/Micromax_logo.png' className='special-margin'  width="100" /></div>
    <div><img src='assets/lg-electronics.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/INTEX.jpeg' className='special-margin'  width="100" /></div>
    <div><img src='assets/haier-logo.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/bpl-logo.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/philips.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/mi-xiaomi.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/VuTV_Service_Logo.png' className='special-margin'  width="100" /></div>
    <div><img src='assets/videocon.png' className='special-margin'  width="100" /></div>
    <div><img src='assets/toshiba-3.svg' className='special-margin'  width="100" /></div>
    <div><img src='assets/tcl-1.svg' className='special-margin'  width="100" /></div>
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

function CustomerReview(){
  return(
    <div className='container'>
    <div className='container commonIssues'>
  
    <Typography >Customer Reviews</Typography>
 
    </div>
    <div className="container text-center c-1">
    <div className="row">
      <div className="col mb-3">
      <Card className='cards s2' elevation={3}>
      <CardContent>
      
      <h5>Gopalakrishnan</h5>
      <hr></hr>
      <h6>Display Repacement</h6>
      <p>Good Service</p>
      <p><img src='assets/stars.gif' width={50} /> 5/5 Rating</p>
      <Rating name="read-only" value={5} readOnly />
      </CardContent>
      </Card>       
      </div>

      <div className="col mb-3">
      <Card className='cards s2' elevation={3}>
      <CardContent>
     
      <h5>Manimegalai</h5>
      <hr></hr>
      <h6>Motherboard Repair</h6>
      <p>Very Friendly</p>
      <p><img src='assets/stars.gif' width={50} /> 4/5 Rating</p>
      <Rating name="read-only" value={4} readOnly />
      </CardContent>
      </Card>       
      </div>

      <div className="col mb-3">
      <Card className='cards s2' elevation={3}>
      <CardContent>
   
      <h5>Rishik</h5>
      <hr></hr>
      <h6>Logo Stuck</h6>
      <p>Excellent service!!!</p>
      <p><img src='assets/stars.gif' width={50} /> 5/5 Rating</p>
      <Rating name="read-only" value={5} readOnly />
      </CardContent>
      </Card>       
      </div>

      <div className="col mb-3">
      <Card className='cards s2' elevation={3}>
      <CardContent>
     
      <h5>Joshika</h5>
      <hr></hr>
      <h6>Sound only problem</h6>
      <p>Best service</p>
      <p><img src='assets/stars.gif' width={50} /> 5/5 Rating</p>
      <Rating name="read-only" value={5} readOnly />
      </CardContent>
      </Card>       
      </div>

      <div className="col mb-3">
      <Card className='cards s2' elevation={3}>
      <CardContent>
     
      <h5>Thanushka</h5>
      <hr></hr>
      <h6>Lines in the picture</h6>
      <p>Quick Response</p>
      <p><img src='assets/stars.gif' width={50} /> 5/5 Rating</p>
      <Rating name="read-only" value={5} readOnly />
      </CardContent>
      </Card>       
      </div>


     
      
  </div>
  </div>

  </div>
  )
}

