import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Favorites({ favorites }) {
    return (
        <div>
            <FavoriteBorderIcon/>
            <h2>My Favorites House</h2>
            <table>
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
            </table>
        </div>
    );
}
