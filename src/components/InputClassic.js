const InputClassic = ({ label, value, set }) => {
  return (
    <div className="flex flex-col">
      <label className="pr-3">{label}</label>
      <input
        value={value}
        type="text"
        placeholder="username"
        onChange={(event) => {
          set(event.target.value);
        }}
      />
    </div>
  );
};

export default InputClassic;
