import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" style={{ height: '600px' }} />
        <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-50 max-w-2xl'>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-white " data-aos="fade-right">Single-family homes</h3>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-[#1DD100]" data-aos="fade-left">Spacious Family Home</h3>
          <p className="mb-5 text-white" data-aos="fade-up">A beautiful single-family home with ample space for a growing family</p>
          <a href="#">
            <button className="btn bg-[#1DD100] font-bold border-none text-black" data-aos="fade-down">Visit Our Project </button>
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-lg" style={{ height: '600px' }} />
        <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-50'>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-white"  data-aos="fade-right">Townhouses</h3>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-[#1DD100]"  data-aos="fade-left">Modern Townhouse</h3>
          <p className=" md:mb-5 lg:mb-5 text-white "  data-aos="fade-up">A contemporary townhouse featuring sleek design and urban convenience</p>
          <a href="#">
            <button className="btn bg-[#1DD100] font-bold border-none text-black"  data-aos="fade-down">Visit Our Project </button>
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img7} className="w-full rounded-lg" style={{ height: '600px' }} />
        <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-50 max-w-2xl'>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-black"  data-aos="fade-right">Apartments</h3>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-[#1DD100]"  data-aos="fade-left">Luxury City Apartment</h3>
          <p className="mb-5 text-white"  data-aos="fade-up">An upscale apartment in a prime location offering luxury living amenities</p>
          <a href="#">
            <button className="btn bg-[#1DD100] font-bold border-none text-black"  data-aos="fade-down">Visit Our Project </button>
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img8} className="w-full rounded-lg" style={{ height: '600px' }} />
        <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-50 max-w-2xl'>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-black"  data-aos="fade-right">Student Housing</h3>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-[#1DD100]"  data-aos="fade-left">Student Residence</h3>
          <p className="mb-5 text-white"  data-aos="fade-up">A comfortable student residence with convenient amenities for academic success.</p>
          <a href="#seat-section">
            <button className="btn bg-[#1DD100] font-bold border-none text-black"  data-aos="fade-down">Visit Our Project </button>
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
