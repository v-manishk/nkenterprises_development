import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../css/User/Project_details.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import { Navigation } from "swiper";


function Project_details() {
  return (
    <div>
        <Navbar/>
        <section id="project-details" class="project-details">
            
        <div class="container" data-aos="fade-up" data-aos-delay="100">
            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{marginTop: "2%"}}>
                <SwiperSlide>
                <img src="Images/img2.jpg" alt="" style={{height: "600px", width: "700px"}}></img></SwiperSlide>
                <SwiperSlide>
                <img src="Images/img2.jpg" alt="" style={{height: "600px", width: "700px"}}></img>
                </SwiperSlide>
                <SwiperSlide>
                <img src="Images/img2.jpg" alt="" style={{height: "600px", width: "700px"}}></img>
                </SwiperSlide>
            </Swiper> */}

            <div class="row justify-content-between gy-4 mt-4">

            <div class="col-lg-8">
                <div class="portfolio-description">
                <h2>This is an example of project detail</h2>
                <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                </p>
                <p>
                    Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                </p>

                <div class="testimonial-item">
                    <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                    <div>
                    <img src="Images/img1.jpg" class="testimonial-img" alt=""></img>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    </div>
                </div>

                <p>
                    Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
                </p>
                <p>
                    Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
                </p>

                </div>
            </div>

            <div class="col-lg-4" style={{paddingLeft: "50px"}}>
                <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                    <li><strong>Category</strong> <span>Furniture</span></li>
                    <li><strong>Client</strong> <span>Godrej</span></li>
                    <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                    <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
                    <li><a href="#" class="btn-visit align-self-start">Visit Website</a></li>
                </ul>
                </div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{marginTop: "2%"}}>
                    <SwiperSlide>
                    <img src="Images/img2.jpg" alt="" style={{height: "300px"}}></img></SwiperSlide>
                    <SwiperSlide>
                    <img src="Images/img2.jpg" alt="" style={{height: "300px"}}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="Images/img2.jpg" alt="" style={{height: "300px"}}></img>
                    </SwiperSlide>
                </Swiper>
            </div>

            </div>

        </div>
        </section>
        <Footer/>
    </div>
  );
}


export default Project_details;