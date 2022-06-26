import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/User/Gallery.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Gallery_Image from './Gimg';

//stores the type of gallery image
var Gallery_Type = ""

function Gallery() {

  const navigate = useNavigate();

  // sets images from Gimg api
  const[items, setItems] = useState(Gallery_Image);
  

  // use to set active class
  const [isFalseActive, setFalseIsActive] = useState(false);
  const [isCivilActive, setCivilIsActive] = useState(false);
  const [isKitActive, setKitIsActive] = useState(false);
  const [isElecActive, setElecIsActive] = useState(false);
  const [islabActive, setLabIsActive] = useState(false);
  const [isPainctive, setPainIsActive] = useState(false);
  const [isSlidActive, setSlidIsActive] = useState(false);
  const [isFurnActive, setFurnIsActive] = useState(false);
  const [isPopActive, setPopIsActive] = useState(false);
  const [isActive, setIsActive] = useState(true);


  //onclick function to filter images on the basis of category which is passed
  const filterItem = (categItem) => {
    Gallery_Type = categItem;
    const updatedItems = Gallery_Image.filter((curElem) => {
      if (categItem === ""){
        return curElem
      }
      return curElem.category === categItem;
    });
    setItems(updatedItems);
    setFalseIsActive(false);
    setCivilIsActive(false);
    setKitIsActive(false);
    setElecIsActive(false);
    setLabIsActive(false);
    setPainIsActive(false);
    setSlidIsActive(false);
    setFurnIsActive(false);
    setPopIsActive(false)
    setIsActive(false);
    if (categItem === 'false_ceiling'){
      setFalseIsActive(current => !current);
    } else if (categItem === 'civil'){
      setCivilIsActive(current => !current);
    } else if (categItem === 'kitchen'){
      setKitIsActive(current => !current);
    } else if (categItem === 'electrical'){
      setElecIsActive(current => !current);
    } else if (categItem === 'laboratory'){
      setLabIsActive(current => !current);
    } else if (categItem === 'painting'){
      setPainIsActive(current => !current);
    } else if (categItem === 'sliding_window'){
      setSlidIsActive(current => !current);
    } else if (categItem === 'furniture'){
      setFurnIsActive(current => !current);
    } else if (categItem === 'pop'){
      setPopIsActive(current => !current);
    } else {
      setIsActive(current => !current)
    }
  }

  //Function to call a particular gallery page
  const showMore = () => {
    navigate('/gallery_type',{state:{id:1,type:Gallery_Type}});
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

          <ul id="portfolio-flters" class="row d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className={isActive ? 'filter-active' : ''} onClick={() => filterItem("")}>All</li>
            <li data-filter=".filter-app" className={isFalseActive ? 'filter-active' : ''} onClick={() => filterItem('false_ceiling')}>False_Ceiling</li>
            <li data-filter=".filter-card" className={isCivilActive ? 'filter-active' : ''} onClick={() => filterItem('civil')}>Civil</li>
            <li data-filter=".filter-web" className={isKitActive ? 'filter-active' : ''} onClick={() => filterItem('kitchen')}>Kitchen</li>
            <li data-filter=".filter-web" className={isElecActive ? 'filter-active' : ''} onClick={() => filterItem('electrical')}>Electrical</li>
            <li data-filter=".filter-app" className={islabActive ? 'filter-active' : ''} onClick={() => filterItem('laboratory')}>Laboratory</li>
            <li data-filter=".filter-card" className={isPainctive ? 'filter-active' : ''} onClick={() => filterItem('painting')}>Painting</li>
            <li data-filter=".filter-web" className={isSlidActive ? 'filter-active' : ''} onClick={() => filterItem('sliding_window')}>Sliding_Window</li>
            <li data-filter=".filter-web" className={isFurnActive ? 'filter-active' : ''} onClick={() => filterItem('furniture')}>Furniture</li>
            <li data-filter=".filter-web" className={isPopActive ? 'filter-active' : ''} onClick={() => filterItem('pop')}>POP</li>
          </ul>

          <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            {
              items.slice(0,6).map((elem) => {
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
        <button style={{position: "absolute", left: "46%", color: "white", backgroundColor: "#000040", borderRadius: "20px", padding: "6px 15px"}} onClick={() => showMore()}>Show More</button>
        <br></br>
      </section>
      <br></br>
      <Footer/>
    </div>
    
  );
}

export default Gallery;