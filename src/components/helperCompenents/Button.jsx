// Button.jsx

import PropTypes from 'prop-types';

const Button = (props) => {
  const { xl, children } = props;

  const btnClass = `btn ${xl ? 'btn-xl' : 'btn-base'} btn-primary`;

  return (
    <div className={btnClass}>
      {children}
    </div>
  );
};

Button.propTypes = {
  xl: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Button;
