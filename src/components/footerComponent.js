import React from 'react';

function Footer(props) {
    const { containerStyle } = props;
    return (

        <div className='container-fluid' style={containerStyle}>
            <div className='row footer'>

                <a href='#' className='btn btn-social-icon btn-google m-2'><i className='fa fa-google-plus'></i></a>
                <a href='#' className='btn btn-social-icon btn-twitter m-2'><i className='fa fa-twitter'></i></a>
                <a href='#' className='btn btn-social-icon btn-facebook m-2'><i className='fa fa-facebook'></i></a>
                <a href='#' className='btn btn-social-icon btn-linkedin m-2'><i className='fa fa-linkedin'></i></a>
                <a href='#' className='btn btn-social-icon btn-youtube m-2'><i className='fa fa-youtube'></i></a>
            </div>
        </div>

    );
}

export default Footer;