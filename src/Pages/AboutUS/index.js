import React from "react";
import key from "../../Components/Utilis/images/key.png"

const AboutUs = () => {

    return (
         <div>
            <h1>House Hunting</h1>
            <CardMedia
                component="img"
                height="295"
                width="406"
                image={key}
                alt=""
            />

        <p>  Welcome to Houses Hunting, your go-to platform for finding your dream home!
            Our mission is to provide you with the best tools and resources to make your house hunting journey smooth and successful.
            </p>
            <ul>
              
            </ul>
            <p>Contact us at info@houseshunting.com for any inquiries or feedback.</p>
        </div>
    );
};

export default AboutUs;