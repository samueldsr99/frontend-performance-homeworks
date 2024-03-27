export default function StarRating({ rating }: { rating: number }) {
  const integerRating = Math.floor(rating);

  return Array.from({ length: 5 }, (_, index) => {
    return (
      <div className="reviews-stars">
        <i
          key={index}
          className={`bi-star${
            index < integerRating ? "-fill" : ""
          } reviews-icon`}
        ></i>
      </div>
    );
  });
}
