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

    const menu = props.images.map((image) => {
        return (

            <div key={image.id}>
                <RenderImage image={image} onClick={props.onClick} />
            </div>

        )
    });
    return (
        <div className='flex-image'>
            {menu}

        </div>
    )
}

export default ImageListComponent;