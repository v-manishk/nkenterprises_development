import React from 'react';
import '../../css/User/Footer.css'

function Footer() {
  return (
    <div>
        <div class="container-fluid text-white mt-5 py-5 px-sm-3 px-md-5" style={{backgroundColor: "#000040"}}>
            <div class="row pt-5">
                <div class="col-lg-7 col-md-6">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <h3 class="text-primary mb-4 text1">Get In Touch</h3>
                            <p><i class="fa fa-map-marker-alt mr-2"></i>Gokuldham, Goregaon East, Mumbai</p>
                            <p><i class="fa fa-phone-alt mr-2"></i>+91 7498183940</p>
                            <p><i class="fa fa-envelope mr-2"></i>nkenterprises.contact@gmail.com</p>
                            <div class="d-flex justify-content-start mt-4">
                                <a class="btn btn-outline-light btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/n_k_enterprises/?hl=en"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <h3 class="text-primary mb-4 text1">Quick Links</h3>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About Us</a>
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Services</a>
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Gallery</a>
                                <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 mb-5">
                    <h3 class="text-primary mb-4 text1">Newsletter</h3>
                    <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                    <div class="w-100">
                        <div class="input-group">
                            <input type="text" class="form-control border-light" style={{padding: "25px"}} placeholder="Your Email Address"></input>
                            <div class="input-group-append">
                                <button class="btn btn-primary px-4 btn1">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: "#3E3E4E"}}>
            <div class="row">
                <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0 text-white">&copy; <a href="/">NK Enterprises</a>. All Rights Reserved Since @2022.
                    Designed by <a href="https://profile.vmanishk.in/">ManishKumar Vishwakarma</a>
                    </p>
                </div>
                <div class="col-lg-6 text-center text-md-right">
                    <ul class="nav d-inline-flex">
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Terms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;