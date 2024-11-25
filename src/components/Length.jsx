import PropTypes from 'prop-types';

function Length({ length, setLength }) {
  return (
    <div className="mb-4">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="length"
      >
        Length {length}
      </label>
      <input
        className="outline-none w-full"
        id="length"
        type="range"
        min="8"
        max="100"
        value={length}
        onChange={e => setLength(e.target.value)}
      />
    </div>
  );
}
Length.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};

export default Length;
