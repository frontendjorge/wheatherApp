import React from 'react';
import PropTypes from "prop-types";

const Location = ({ city, country }) => {
    //console.log(props);
    //debugger;
    //Destructuring

    return(
        <div>
            <h1>
                {city}
            </h1>
            <p>
                {country}
            </p>
        </div>
    );
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default Location;