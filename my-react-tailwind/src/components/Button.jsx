import PropTypes from 'prop-types';
import "../index.css";


function Button( {children} ) {
    return (
      <button className="btn">
        {children}
      </button>
    );
  }

  Button.propTypes = {
    children: PropTypes.node,
  };

  export default Button;