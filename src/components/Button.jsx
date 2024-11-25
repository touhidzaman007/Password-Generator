import PropTypes from 'prop-types';

function Button({ copyToClipboard }) {
  return (
    <>
      <button
        onClick={copyToClipboard}
        className="button-field"
      >
        Copy
      </button>
    </>
  );
}

Button.propTypes = {
  copyToClipboard: PropTypes.func.isRequired,
};

export default Button;
