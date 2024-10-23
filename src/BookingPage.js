import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';
import Main from './Main';

const initialTimes = [];

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);
    const [bookedTimes, setBookedTimes] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Default to today's date
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [loading, setLoading] = useState(false);

    const customTimes = [
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    const handleBooking = () => {
        setBookedTimes((prev) => [...prev, { date, time, guests, occasion }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleBooking();
        console.log('Booking details:', { date, time, guests, occasion });
    };

    const updateTimes = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="booking-page">
            <h1>Make a Reservation!</h1>
            {loading && <p>Loading available times...</p>}
            <BookingForm
                date={date}
                setDate={updateTimes}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
                availableTimes={customTimes.filter(
                    (t) => !bookedTimes.some((b) => b.time === t && b.date === date)
                )}
                handleSubmit={handleSubmit}
            />
            <Main date={date} customTimes={customTimes} bookedTimes={bookedTimes} />
        </div>
    );
}

export default BookingPage;
