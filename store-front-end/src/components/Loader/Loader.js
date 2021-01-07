import React from 'react'
import PropTypes from 'prop-types'
import './Loader.css'
const Loader = props => {
    return (
    <div className="loader-container">
        <img src ="LoadingBasketContents.gif"/>
    </div>)
}

Loader.propTypes = {
}

export default Loader
