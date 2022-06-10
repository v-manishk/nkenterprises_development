import React, { useState } from 'react';
import '../../css/User/Gallery.css';
import Navbar from './Navbar';
import Footer from './Footer'
import Gallery_Image from './Gimg';


function Gallery() {

  // sets images from Gimg api
  const[items, setItems] = useState(Gallery_Image);

  // use to set active class
  const [isCarActive, setCarIsActive] = useState(false);
  const [isPlumActive, setPlumIsActive] = useState(false);
  const [islabActive, setLabIsActive] = useState(false);
  const [isKitActive, setKitIsActive] = useState(false);
  const [isActive, setIsActive] = useState(true);


  //onclick function to filter images on the basis of category which is passed
  const filterItem = (categItem) => {
    const updatedItems = Gallery_Image.filter((curElem) => {
      if (categItem === ""){
        return curElem
      }
      return curElem.category === categItem;
    });
    setItems(updatedItems);
    setCarIsActive(false);
    setKitIsActive(false);
    setPlumIsActive(false);
    setLabIsActive(false);
    setIsActive(false);
    if (categItem === 'carpenter'){
      setCarIsActive(current => !current);
    } else if (categItem === 'lab'){
      setLabIsActive(current => !current);
    } else if (categItem === 'kitchen'){
      setKitIsActive(current => !current);
    } else if (categItem === 'plumbing'){
      setPlumIsActive(current => !current);
    } else {
      setIsActive(current => !current)
    }
  }


  return (
    <div>
      <Navbar/>
      <br></br>
      <br></br>
      <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Gallery</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <ul id="portfolio-flters" class="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className={isActive ? 'filter-active' : ''} onClick={() => filterItem("")}>All</li>
            <li data-filter=".filter-app" className={isCarActive ? 'filter-active' : ''} onClick={() => filterItem('carpenter')}>Carpenter</li>
            <li data-filter=".filter-card" className={isPlumActive ? 'filter-active' : ''} onClick={() => filterItem('plumbing')}>Plumbing</li>
            <li data-filter=".filter-web" className={isKitActive ? 'filter-active' : ''} onClick={() => filterItem('kitchen')}>Kitchen</li>
            <li data-filter=".filter-web" className={islabActive ? 'filter-active' : ''} onClick={() => filterItem('lab')}>lab</li>
          </ul>

          <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            {
              items.map((elem) => {
                const { id, image} = elem;

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

export default Gallery;