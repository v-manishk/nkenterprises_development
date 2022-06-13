import React from 'react';
import '../../css/User/About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Godrej from '../../assets/User/Alias_Logo/Godrej.png'
import Homelane from '../../assets/User/Alias_Logo/Homelane.png'
import DC from '../../assets/User/Alias_Logo/Designcafe.png'
import SpeedHome from '../../assets/User/Alias_Logo/SpeedHome.png'
import TableSpace from '../../assets/User/Alias_Logo/TableSpace.png'
import LiveSpace from '../../assets/User/Alias_Logo/LiveSpace.png'
import icon from '../../assets/User/dummy_icon.png'

function About() {
  return (
    <div>
      <Navbar/>
      <div class="container py-5">
        <div class="section-title">
          <h2>About US</h2>
        </div>
        <br></br>
        <br></br>
        <div class="row">
            <div class="col-lg-5">
                <img class="img-fluid rounded mb-4 mb-lg-0" src="Images/img1.jpg" alt=""></img>
            </div>
            <div class="col-lg-7">
                <div class="text-left mb-4">
                    <h2 style={{color: "#37517e"}}>Who are we?</h2>
                </div>
                <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptuat</p>
            </div>
        </div>
      </div>
      <section id="clients" class="clients">
        <h2 style={{textAlign: "center", marginBottom: "15px",color: "#37517e"}}>Working Partners</h2>
        <div class="container">

          <div class="row no-gutters clients-wrap clearfix wow fadeInUp">

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src={Godrej} class="img-fluid" alt=""></img>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src={Homelane} class="img-fluid" alt=""></img>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src={DC} class="img-fluid" alt=""></img>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src={SpeedHome} class="img-fluid" alt=""></img>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src={TableSpace} class="img-fluid" alt=""></img>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src={LiveSpace} class="img-fluid" alt=""></img>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src={LiveSpace} class="img-fluid" alt=""></img>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src={LiveSpace} class="img-fluid" alt=""></img>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="pricing" class="pricing">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="box">
                <img src={icon} style={{height: "90px", marginBottom: "20px"}}></img>
                <h3>Our Vision</h3>
                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>             </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div class="box">
              <img src={icon} style={{height: "90px", marginBottom: "20px"}}></img>
                <h3>Our Mission</h3>
                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>      
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div class="box">
                <img src={icon} style={{height: "90px", marginBottom: "20px"}}></img>
                <h3>Our Style</h3>
                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>      
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default About;
