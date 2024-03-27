"use client";

import { useId } from "react";

export default function StarRating({ rating }: { rating: number }) {
  const integerRating = Math.floor(rating);
  const id = useId();

  return (
    <div className="reviews-stars">
      {Array.from({ length: 5 }, (_, index) => (
        <i
          key={`${id}-${index}`}
          className={`bi-star${
            index < integerRating ? "-fill" : ""
          } reviews-icon`}
        />
      ))}
    </div>
  );
}
