import Image from "next/image";

import StarRating from "../../components/StarRating";

export interface MenuCardProps {
  foodType: "Lunch" | "Dinner" | "Breakfast";
  title: string;
  rating: number;
  reviews: number;
  price: number;
  nonDiscountedPrice?: number;

  image: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
}

export default function MenuCard({
  foodType,
  title,
  rating,
  reviews,
  price,
  nonDiscountedPrice,
  image,
}: MenuCardProps) {
  return (
    <div className="menu-thumb">
      <div className="menu-image-wrap">
        <Image
          className="img-fluid menu-image"
          loading="lazy"
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt ?? ""}
        />

        <span className="menu-tag bg-warning">{foodType}</span>
      </div>

      <div className="menu-info d-flex flex-wrap align-items-center">
        <h4 className="mb-0">{title}</h4>

        <span className="price-tag bg-white shadow-lg ms-4">
          <small>$</small>
          {price}
        </span>

        {nonDiscountedPrice && (
          <del className="ms-4">
            <small>$</small>
            {nonDiscountedPrice}
          </del>
        )}

        <div className="d-flex flex-wrap align-items-center w-100 mt-2">
          <h6 className="reviews-text mb-0 me-3">{rating}/5</h6>
          <StarRating rating={rating} />
          <p className="reviews-text mb-0 ms-4">{reviews} Reviews</p>
        </div>
      </div>
    </div>
  );
}
