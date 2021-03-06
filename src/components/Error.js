import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ children }) => (
    <p className="alert alert-danger error">{children}</p>
);

Error.propTypes = {
    children: PropTypes.string.isRequired
}

export default Error;
