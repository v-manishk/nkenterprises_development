import React from 'react';
import '../../css/User/Navbar.css';
import logo from '../../assets/User/logo.png'


function Navbar() {
  return (
    <div>
        <div class="container-fluid bg-dark" style={{borderBottom: "3px solid #000040"}}>
            <div class="row py-2 px-lg-5">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center text-white">
                        <small><i class="fa fa-phone-alt mr-2 i1"></i>+91 74981 83940</small>
                        <small class="px-3">|</small>
                        <small><i class="fa fa-envelope mr-2 i1"></i>nkenterprises.contact@gmail.com</small>
                    </div>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-white px-2" href="/login">
                            Login
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-facebook-f i1"></i>
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-twitter i1"></i>
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-linkedin-in i1"></i>
                        </a>
                        <a class="text-white px-2" href="https://www.instagram.com/n_k_enterprises/?hl=en">
                            <i class="fab fa-instagram i1"></i>
                        </a>
                        <a class="text-white pl-2" href="">
                            <i class="fab fa-youtube i1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <a href="/" class="navbar-brand ml-lg-3">
                    <h1 class="m-0 display-5 text-uppercase" style={{fontSize: "26px", color:"red", fontFamily: "Ubuntu"}}><img src={logo} style={{width:"40px"}}></img> NK Enterprises</h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div class="navbar-nav m-auto py-0">
                        <a href="/" class="nav-item nav-link active">Home</a>
                        <a href="/about" class="nav-item nav-link">About</a>
                        <a href="/services" class="nav-item nav-link">Service</a>
                        <a href="/projects" class="nav-item nav-link">Projects</a>
                        <a href="/gallery" class="nav-item nav-link">Gallery</a>
                        {/* <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="blog.html" class="dropdown-item">Blog Grid</a>
                                <a href="single.html" class="dropdown-item">Blog Detail</a>
                            </div>
                        </div> */}
                        <a href="/contact" class="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" class="btn btn-primary py-2 px-4 d-none d-lg-block" style={{color: "white", border: "none"}}>Get A Quote</a>
                </div>
            </nav>
        </div>
    </div>
  );
}


export default Navbar;