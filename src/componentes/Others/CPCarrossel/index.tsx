// Import Swiper React components
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { ReactNode } from 'react';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/swiper-bundle.css'; // Para versões mais antigas

import './style.css'

interface SliderProps{
    settings: SwiperProps;
    children: ReactNode;
    className?: string
}




export default function CPCarrossel ({settings, children}: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination]} {...settings} className='Swiper'>{children}  </Swiper>
  );
};