import React, { useState }from 'react';
import {useLocation} from 'react-router-dom';
import '../../css/User/Gallery.css';
import Navbar from './Navbar';
import Footer from './Footer'
import Gallery_Image from './Gimg';


function GType() {

    //stores the value of image type coming from gallery page
    const location = useLocation();

    // sets images from Gimg by filtering it api
    const[items, setItems] = useState(Gallery_Image.filter((curElem) => {
        if (location.state.type === "Gallery"){
        return curElem
        }
        return curElem.category === location.state.type;
    }));

    if (location.state.type === ""){
        location.state.type = "Gallery"
    }

    return (
    <div>
        <Navbar/>
        <br></br>
        <br></br>
        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>{location.state.type}</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                {
                items.map((elem) => {
                    const {image} = elem;

                    return(
                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-img"><img src={image} class="img-fluid" alt=""></img></div>
                    </div>
                    )
                })
                }
            </div>

            </div>
        </section>
        <br></br>
        <Footer/>
    </div>
    );
}

export default GType;
