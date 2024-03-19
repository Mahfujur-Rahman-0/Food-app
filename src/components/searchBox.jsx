export default ({ value, setValue }) => {
  return (
    <>
      <div className="inputBox">
        <input
          className="inputStyle"
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </div>
    </>
  );
};
