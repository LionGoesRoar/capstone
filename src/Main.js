import React from 'react';
import BookingSlot from './BookingSlot';

function Main({ date, customTimes = [], bookedTimes = [] }) {
    const availableTimes = customTimes.filter(time =>
        !bookedTimes.some(b => b.time === time && b.date === date)
    );

    return (
        <main>
            <h2>Booking Slots</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {customTimes.map((time) => (
                    <div key={time} style={{ flex: '1 1 calc(50% - 10px)' }}>
                        <BookingSlot
                            time={time}
                            isBooked={bookedTimes.some(b => b.time === time && b.date === date)}
                        />
                    </div>
                ))}
            </div>
            {availableTimes.length === 0 && <p>No available times</p>}
        </main>
    );
}

export default Main;
