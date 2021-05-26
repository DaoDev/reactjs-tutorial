import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'V-Pop Tháng 4/2021 Có Gì Hot?',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/2/1/8121477a14f8f82e4b9d43877ec97b9f.jpg'
        },
        {
            id: 2,
            name: 'Trào Lưu Nhạc Hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/0/f/4/50f478b452dd8bf0e9223ec239728d95.jpg'
        },
        {
            id: 3,
            name: 'Rap Việt Chất Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/c/d/0/dcd041dd0e2a3abba01eead69ad15239.jpg'
        },
        {
            id: 4,
            name: 'Có Hay Không Có',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/4/e/1/74e14a09a1477d6ffebfea4417d9cacd.jpg'
        },
        {
            id: 5,
            name: 'Nhìn Vậy Mà Không Phải Vậy',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/4/8/6/b48657d763edf63872b753cf0768039c.jpg'
        },
        {
            id: 1,
            name: 'V-Pop Tháng 4/2021 Có Gì Hot?',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/2/1/8121477a14f8f82e4b9d43877ec97b9f.jpg'
        },
    ]
    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;