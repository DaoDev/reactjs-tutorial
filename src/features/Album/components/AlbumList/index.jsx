import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/index.jsx';
import "./styles.scss"

AlbumList.propTypes = {
    albumList: PropTypes.array
};

AlbumList.defaultProps = {
    albumList: []
}

function AlbumList(props) {
    const { albumList } = props
    return (
        <div>
            <ul className='album__list'>
                {albumList.map(item => (
                    console.log('item', item),
                    <li key={item.id}>
                        <Album item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;