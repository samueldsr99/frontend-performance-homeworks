import Image from "next/image";
import StarRating from "../../components/StarRating";

export interface CarouselItem {
  title: string;
  active?: boolean;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };
  location?: string;
  caption?: string;
  price?: number;
  rating?: number;
}

export interface FoodCarouselProps {
  items: CarouselItem[];
}

export default function FoodCarousel({ items }: FoodCarouselProps) {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-fade hero-carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {items.map((item) => (
          <div
            key={item.title}
            className={`carousel-item ${item.active ? "active" : ""}`}
          >
            <div className="carousel-image-wrap">
              <Image
                priority={item.image.priority}
                src={item.image.src}
                width={800}
                height={600}
                className="img-fluid carousel-image"
                alt={item.image.alt}
              />
            </div>

            <div className="carousel-caption">
              {item.location && (
                <span className="text-white">
                  <i className="bi-geo-alt me-2"></i>
                  Manhattan, New York
                </span>
              )}

              <div className="d-flex align-items-center">
                <h4 className="hero-text">{item.title}</h4>
                {item.price && (
                  <span className="price-tag ms-4">
                    <small>$</small>
                    {item.price.toFixed(2)}
                  </span>
                )}
              </div>

              {item.rating && (
                <div className="d-flex flex-wrap align-items-center">
                  <h5 className="reviews-text mb-0 me-3">{item.rating}/5</h5>
                  <StarRating rating={item.rating} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
