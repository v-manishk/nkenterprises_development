import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../css/User/Projects.css';


function Projects() {
  return (
    <div>
        <Navbar/>
        <section id="service" class="services pt-0">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Projects</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="row gy-4">

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100"  style={{marginTop: "30px"}}>
                    <div class="card">
                    <div class="card-img">
                        <img src="Images/img1.jpg" alt="" class="img-fluid"></img>
                    </div>
                    <h3><a href="/project_details" class="stretched-link">Furniture</a></h3>
                    <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200"  style={{marginTop: "30px"}}>
                    <div class="card">
                    <div class="card-img">
                        <img src="Images/img1.jpg" alt="" class="img-fluid"></img>
                    </div>
                    <h3><a href="/project_details" class="stretched-link">Civil</a></h3>
                    <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300"  style={{marginTop: "30px"}}>
                    <div class="card">
                    <div class="card-img">
                        <img src="Images/img1.jpg" alt="" class="img-fluid"></img>
                    </div>
                    <h3><a href="/project_details" class="stretched-link">Cargo</a></h3>
                    <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400" style={{marginTop: "30px"}}>
                    <div class="card">
                    <div class="card-img">
                        <img src="Images/img1.jpg" alt="" class="img-fluid"></img>
                    </div>
                    <h3><a href="/project_details" class="stretched-link">Trucking</a></h3>
                    <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500"  style={{marginTop: "30px"}}>
                    <div class="card">
                    <div class="card-img">
                        <img src="Images/img1.jpg" alt="" class="img-fluid"></img>
                    </div>
                    <h3><a href="/project_details" class="stretched-link">Packaging</a></h3>
                    <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600"  style={{marginTop: "30px"}}>
                    <div class="card">
                    <div class="card-img">
                        <img src="Images/img1.jpg" alt="" class="img-fluid"></img>
                    </div>
                    <h3><a href="/project_details" class="stretched-link">Warehousing</a></h3>
                    <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla</p>
                    </div>
                </div>

                </div>

            </div>
        </section>
        <Footer/>
    </div>
  );
}


export default Projects;