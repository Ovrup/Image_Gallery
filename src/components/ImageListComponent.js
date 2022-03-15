import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

function RenderImage({ image, onClick }) {
    return (
        <div className='image'>
            <Card onClick={() => onClick(image)}>

                <CardImg src={image.url} alt={image.title} />
                <CardImgOverlay className='image-count'><h5>IMAGE {image.id}</h5></CardImgOverlay>

                <div className='image-title'>
                    <CardTitle className='text'>{image.title}</CardTitle>
                </div>
            </Card>
        </div>
    );
}

function ImageListComponent(props) {
    const { images, onClick } = props;

    const menu = images.map((image) => {
        return (
            <RenderImage key={image.id} image={image} onClick={onClick} />
        )
    });
    return (
        <div className='flex-image'>
            {menu}
        </div>
    )
}

export default ImageListComponent;