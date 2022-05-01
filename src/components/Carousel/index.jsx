import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/rigth.svg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


SwiperCore.use([Navigation, Pagination])

const Carousel = () => {
  const navPrevButton = useRef(null)
  const navNextButton = useRef(null)


  const onBeforeInit = (Swiper) => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation
      navigation.prevEl = navPrevButton.current
      navigation.nextEl = navNextButton.current
    }
  }
  // const listRef = useRef(null);

  // const scrollLeft = () => {
  //   if (listRef.current && slide >= 0) {
  //     listRef.current.scrollBy({
  //       top: 0,
  //       left: -360,
  //       behavior: "smooth",
  //     });
  //   }
  //   if (slide === 0) return
  //   setSlide(slide - 1)
  // };


  // const scrollRight = () => {
  //   if (listRef.current && slide !== 2) {
  //     listRef.current.scrollBy({
  //       top: 0,
  //       left: 360,
  //       behavior: "smooth",
  //     });
  //   }
  //   if (slide === 2) return
  //   setSlide(slide + 1)
  // };


  return (
    <div className='carousel_wrapper'>

      <button ref={navPrevButton} className="carousel_btn">
        <Left />
      </button>



      <Swiper
        onBeforeInit={onBeforeInit}
        spaceBetween={10}
        slidesPerView={3}
        pagination={true}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      >


        <SwiperSlide>

          <img src="./assets/images/azgayin.png" />

        </SwiperSlide>
        <SwiperSlide>

          <img src="./assets/images/Moris.png" />

        </SwiperSlide>
        <SwiperSlide>

          <img src="./assets/images/Soft.png" />

        </SwiperSlide>
        <SwiperSlide>

          <img src="./assets/images/azgayin.png" />

        </SwiperSlide>
        <SwiperSlide>

          <img src="./assets/images/azgayin.png" />

        </SwiperSlide>
      </Swiper >
      <button ref={navNextButton} className="carousel_btn">
        <Right />
      </button>




      {/* <div className='radio_wrapper'>
        <div type="radio" className={slide === 0 ? "dactive dot" : "dot"} />
        <div type="radio" className={slide === 1 ? "dactive dot" : "dot"} />
        <div type="radio" className={slide === 2 ? "dactive dot" : "dot"} />
      </div> */}
    </div>
  )
}

export default Carousel