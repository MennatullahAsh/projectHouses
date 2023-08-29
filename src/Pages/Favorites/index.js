import React from 'react';

export default function Favorites({ favorites }) {
    return (
        <div>
            <h2>Your Favorite Houses</h2>
            {/* <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map((favorite, index) => (
                        <tr key={index}>
                            <td>{favorite.type}</td>
                            <td>{favorite.location}</td>
                            <td>{favorite.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
}
