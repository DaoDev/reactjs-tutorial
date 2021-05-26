import React from 'react';
import PropTypes from 'prop-types';
import './index.scss'

Album.propTypes = {
    item: PropTypes.array
};

Album.defaultProps = {
    item: []
}

function Album(props) {
    const { item } = props;
    console.log('item', item);
    return (
        <div className='album'>
            <div className="album-thumnail">
                <img src={item.thumbnailUrl} alt={item.name} />
            </div>
            <p className="album-name">{item.name}</p>
        </div>
    );
}

export default Album;