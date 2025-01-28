
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext 
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CPCardCategory } from '../../Cards/CPCardAnuncioCategoryZ copy';


export function CPCarrossel( ) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
      infinite
    >
      <Slider>
        <Slide index={0}><CPCardCategory categoria='dede' uriFoto=''/></Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};