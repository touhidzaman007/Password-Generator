import PropTypes from 'prop-types';

function Password({ password, passwordRef }) {
  return (
    <div className="mt-4">
      <label className="password-input" htmlFor="password">
        Password
      </label>
      <input
        className="password-input-field focus:outline-none focus:shadow-outline"
        id="password"
        type="text"
        value={password}
        ref={passwordRef}
        readOnly
      />
    </div>
  );
}

Password.propTypes = {
  password: PropTypes.string.isRequired,
  passwordRef: PropTypes.object.isRequired,
};

export default Password;
