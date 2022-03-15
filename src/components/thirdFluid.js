import React, { Component } from 'react';
import ImageListComponent from "./ImageListComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from './modalComponent';


class Fluid3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: true,
            initialFetch: true,
            hasMore: true,
            page: 0,
            open: false,
            selectedImage: null
        }
    }

    /* componentDidMount method fetch only first set of images & set the states of the component */

    componentDidMount() {

        this.fetchImages();
    }

    fetchImages = () => {

        const { items, loading, hasMore, page, open, selectedImage } = this.state;

        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${this.state.page}&_limit=20`)
            .then(response => response.json())
            .then(json => {
                this.setState(
                    {
                        items: items.concat(json),
                        loading: false,
                        page: page + 1
                    }
                )
            })
    }


    /* fetchMoreData fetches set of 20 images by API call everytime after the previous set of images are rendered */

    fetchMoreData = () => {
        if (this.state.items.length >= 5000) {
            this.setState({ hasMore: false });
            return;
        }

        else {
            this.fetchImages();
        }

    };

    // handleModal function stores the image that is clicked & opened as modal

    handleModal = (img) => {
        this.setState({
            open: true,
            selectedImage: img
        })

    }

    // Function to display the previous image when the arrows on modal is clicked

    handleDecrement = () => {
        const { items, loading, hasMore, page, open, selectedImage } = this.state;

        if (selectedImage.id !== 1) {
            this.setState({
                selectedImage: items.filter((item) => item.id === (selectedImage.id - 1))[0]
            })
        }
        else {
            this.setState(
                {
                    selectedImage: items.filter((item) => item.id === items.length)[0]
                }
            )

        }

    }

    // Function to display the next image when the arrows on modal is clicked

    handleIncrement = () => {
        const { items, loading, hasMore, page, open, selectedImage } = this.state;

        if (selectedImage.id !== items.length) {
            this.setState({
                selectedImage: items.filter((item) => item.id === (selectedImage.id + 1))[0]
            })
        }
        else {
            this.setState({
                selectedImage: items[0]
            })
        }

    }

    // InfiniteScroll component adds the infinite scroll functionality in the fluid components

    render() {
        const { items, loading, hasMore, open, selectedImage } = this.state;

        if (loading) {
            return (
                <div>Loading....</div>
            );
        }
        else {
            return (


                <div>
                    <InfiniteScroll
                        dataLength={items.length}
                        next={this.fetchMoreData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}>

                        <ImageListComponent images={items} onClick={(img) => this.handleModal(img)} />

                    </InfiniteScroll>

                    <Modal isOpen={open} onClose={() => this.setState({ open: false })}>
                        <div className='modal-flex'>
                            <button onClick={() => this.handleDecrement()} className='modal-dec'>&#9665;</button>
                            <img src={selectedImage?.url} alt={selectedImage?.title} />
                            <button onClick={() => this.handleIncrement()} className='modal-inc'>&#9655;</button>
                        </div>
                    </Modal>
                </div>


            );
        }
    }
}



export default Fluid3;
