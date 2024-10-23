import React from 'react';

function BookingSlot({ time, isBooked }) {
    return (
        <div
            style={{
                padding: '10px',
                border: '2px solid',
                borderColor: isBooked ? '#dc3545' : '#28a745',
                borderRadius: '5px',
                backgroundColor: 'white',
                color: '#495e57',
                textAlign: 'center',
                transition: 'border-color 0.3s',
            }}
        >
            <span>{time}</span>
            {isBooked && <span> (Booked)</span>}
        </div>
    );
}

export default BookingSlot;
