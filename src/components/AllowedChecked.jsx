import PropTypes from 'prop-types';

function AllowedChecked({ id, name, checked, onchange }) {
  return (
    <div className="checked-container">
      <input
        id={id}
        type="checkbox"
        className="input-field"
        checked={checked}
        onChange={e => onchange(e.target.checked)}
      />
      <label className="input-label" htmlFor={id}>
        Include {name}
      </label>
    </div>
  );
}

AllowedChecked.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onchange: PropTypes.func.isRequired,
};

export default AllowedChecked;
