import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function ColorBox(props) {
    const [color, setColor] = useState('while')
    return (
        <div>
            {color}
            <button onClick={() => setColor('black')}>Doi mau</button>
        </div>
    );
}

export default ColorBox;