import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewReservation = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('https://localhost:7250/api/Reservation/AdminView', {
                    headers: {
                        'Accept': 'application/json', // Adjusted to match the response type
                    },
                });
                setReservations(response.data);
            } catch (error) {
                console.error('Error fetching reservation data:', error);
            }
        };

        fetchReservations();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://localhost:7250/api/Reservation/AdminCancel/${id}`, {
                headers: {
                    'Accept': 'text/plain',
                },
            });
            // Remove the deleted reservation from the state
            setReservations(reservations.filter(reservation => reservation.id !== id));
        } catch (error) {
            console.error('Error deleting reservation:', error);
        }
    };

    return (
        <div>
            <h2>Reservation Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Table Number</th>
                        <th>Date</th>
                        <th>Number of Seats</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Customer</th>
                        <th>Restaurant</th>
                        <th>Actions</th> {/* Added column for actions */}
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => (
                        <tr key={reservation.id}>
                            <td>{reservation.id}</td>
                            <td>{reservation.tablenumber}</td>
                            <td>{new Date(reservation.date).toLocaleString()}</td>
                            <td>{reservation.numberofSeats}</td>
                            <td>{reservation.type}</td>
                            <td>{reservation.status}</td>
                            <td>{`${reservation.customer.firstName} ${reservation.customer.lastName}`}</td>
                            <td>{reservation.resturant.name}</td>
                            <td>
                                <button onClick={() => handleDelete(reservation.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewReservation;
