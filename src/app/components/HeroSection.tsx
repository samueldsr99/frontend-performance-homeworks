import StarRating from "../../components/StarRating";
import FoodCarousel, { CarouselItem } from "./FoodCarousel";

const carouselItems: CarouselItem[] = [
  {
    active: true,
    image: {
      src: "/images/slide/jay-wennington-N_Y88TWmGwA-unsplash.webp",
      alt: "Manhattan, New York",
      width: 536,
      height: 357,
      priority: true,
    },
    title: "Fine Dining Restaurant",
    location: "Manhattan, New York",
  },
  {
    image: {
      src: "/images/slide/jason-leung-O67LZfeyYBk-unsplash.webp",
      alt: "Steak",
      width: 536,
      height: 357,
      priority: true,
    },
    title: "Steak",
    caption: "Steak",
    price: 26.5,
    rating: 3.8,
  },
  {
    image: {
      src: "/images/slide/ivan-torres-MQUqbmszGGM-unsplash.webp",
      alt: "Sausage Pasta",
      width: 536,
      height: 357,
      priority: true,
    },
    title: "Sausage Pasta",
    caption: "Sausage Pasta",
    price: 18.25,
    rating: 4.2,
  },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 m-auto">
            <div className="heroText">
              <h1 className="text-white mb-lg-5 mb-3">Delicious Steaks</h1>

              <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                <div className="d-flex flex-wrap align-items-center">
                  <h4 className="text-white mb-0 me-3">4.4/5</h4>
                  <StarRating rating={4.4} />
                </div>

                <p className="text-white w-100">
                  From <strong>1,206+</strong> Customer Reviews
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-12">
            <FoodCarousel items={carouselItems} />
          </div>
        </div>
      </div>

      <div className="video-wrap">
        <video
          autoPlay={false}
          loop={false}
          muted={false}
          className="custom-video"
          poster=""
        >
          <source src="video/production_ID_3769033.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="overlay" />
    </section>
  );
}
