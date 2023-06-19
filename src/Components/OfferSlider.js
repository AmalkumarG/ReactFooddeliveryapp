
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./OfferSlider.css";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";
import service from "../Services/baseUrl";

function OfferSlider() {
    const [offer, setOffer] = useState([])
    useEffect(()=>{
        service.get('/offerslide').then(result=>
            setOffer(result.data.offer))
    },[])
    console.log(offer);
  return (
    <Swiper 
    slidesPerView={1}
    spaceBetween={80}
    slidesPerGroup={4}
    loop={true}
    autoplay={{
          delay: 1,
         
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
    loopFillGroupWithBlank={false}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper bg-dark p-4"
  >
  {
    offer.map(item=>(    <SwiperSlide><img className="" src={item.image}/></SwiperSlide>
))
  }


  </Swiper>
  )
}

export default OfferSlider