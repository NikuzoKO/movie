import { Rating, RoundedStar } from "@smastrom/react-rating";
import React from "react";

function StarRating({ rating, setRating, setPage }) {
    const handleChange = (selectedValue) => {
        setRating(selectedValue);
        setPage(1);
    };

    return (
        <Rating
            style={{ maxWidth: 500 }}
            value={rating}
            items={10}
            onChange={handleChange}
        />
    );
}

export default StarRating;
