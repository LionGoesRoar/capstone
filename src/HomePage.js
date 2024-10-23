import React from 'react';
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.png";

function HomePage() {
    const reviews = [
        {
            name: "Alice Johnson",
            review: "Little Lemon is my favorite place to dine! The food is always fresh and delicious.",
            rating: 5
        },
        {
            name: "Mark Smith",
            review: "A fantastic dining experience! The ambiance is lovely and the staff is very friendly.",
            rating: 4
        },
        {
            name: "Emily Davis",
            review: "I love their pasta! It's the best I've ever had. Highly recommend the tiramisu for dessert!",
            rating: 5
        }
    ];

    return (
        <div className="homepage">
            <h1>Welcome to Little Lemon</h1>
            <p>Come dine with us! Click on the booking tab to reserve a table!</p>
            <div className="image-gallery">
                <img src={image1} alt="Delicious Meal 1" className="homepage-image" />
                <img src={image2} alt="Delicious Meal 2" className="homepage-image" />
                <img src={image3} alt="Restaurant Ambiance" className="homepage-image" />
            </div>
            <div className="reviews-section">
                <h2>What Our Customers Are Saying</h2>
                {reviews.map((review, index) => (
                    <div key={index} className="review">
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                        <p>Rating: {'⭐'.repeat(review.rating)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
