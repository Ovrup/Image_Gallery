import React from 'react';
import Footer from './footerComponent';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

function Column() {
    return (
        <>
            <div className='container-fluid container-bg'>
                <div className='row columns'>
                    <Card className='col-12 col-md-3 m-3 p-2'>
                        <CardTitle><h5>What is Lorem Ipsum?</h5></CardTitle>
                        <CardBody>
                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                        </CardBody>
                    </Card>

                    <Card className='col-12 col-md-3 offset-1 m-3 p-2'>
                        <CardTitle><h5>Why do we use it?</h5></CardTitle>
                        <CardBody>
                            <CardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</CardText>
                        </CardBody>
                    </Card>

                    <Card className='col-12 col-md-3 offset-1 m-3 p-2'>
                        <CardTitle><h5>Where does it come from?</h5></CardTitle>
                        <CardBody>
                            <CardText>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='row columns'>
                    <Card className='col-12 col-md-5 m-3 p-2'>
                        <CardTitle><h5>What is Lorem Ipsum?</h5></CardTitle>
                        <CardBody>
                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                        </CardBody>
                    </Card>

                    <Card className='col-12 col-md-5 offset-1 m-3 p-2'>
                        <CardTitle><h5>Why do we use it?</h5></CardTitle>
                        <CardBody>
                            <CardText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='row columns'>
                    <Card className='col-11 m-3 p-2'>
                        <CardTitle><h5>Where can I get some?</h5></CardTitle>
                        <CardBody>
                            <CardText>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</CardText>
                        </CardBody>
                    </Card>


                </div>

            </div>
            <Footer />
        </>
    );
}

export default Column;