import React, { useState } from 'react';

function BookingForm({
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimes = [],
    handleSubmit
}) {
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

    const allAvailableTimes = Array.from(new Set([...customTimes, ...availableTimes]));
    const [errorMessage, setErrorMessage] = useState('');

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        setTime(selectedTime);

        if (!availableTimes.includes(selectedTime)) {
            setErrorMessage("Please select an available time!");
        } else {
            setErrorMessage('');
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (availableTimes.includes(time)) {
            setErrorMessage('');
            handleSubmit(e);
        } else {
            setErrorMessage("Please select an available time!");
        }
    };

    return (
        <form onSubmit={handleSubmitForm} style={{ display: 'grid', maxWidth: '400px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={handleTimeChange}
                required
            >
                {allAvailableTimes.length > 0 ? (
                    allAvailableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))
                ) : (
                    <option value="" disabled>No available times</option>
                )}
            </select>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Work">Work</option>
                <option value="No Occasion">No Occasion</option>
            </select>
            <input type="submit" value="Make Your Reservation" />
        </form>
    );
}

export default BookingForm;
