import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputPassword = ({
  label,
  classname,
  value,
  type,
  setPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className="flex flex-col">
      <label className="pr-3">{label}</label>
      <div className="relative">
        <input
          className={classname}
          value={value}
          type={type}
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (showPassword === "password") {
              setShowPassword("text");
            } else {
              setShowPassword("password");
            }
          }}
        >
          <FontAwesomeIcon
            className="absolute right-9 top-3"
            icon="fa-solid fa-eye"
          />
        </button>
      </div>
    </div>
  );
};
export default InputPassword;
