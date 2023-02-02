import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputClassic from "./InputClassic";
import InputPassword from "./InputPassword";

const Form = ({
  funcSubmit,
  username,
  email,
  password,
  confirmPass,
  setUsername,
  setPassword,
  setEmail,
  setConfirmPass,
  setShowConfirmedPass,
  setShowPassword,
  showPassword,
  showConfirmedPass,
  checkPass,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    funcSubmit();
  };

  return (
    <div>
      <h1 className="mb-10 text-2xl">Create your account</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <InputClassic label="Name" value={username} set={setUsername} />
        <InputClassic label="Email" value={email} set={setEmail} />
        <InputPassword
          label="Password"
          classname={checkPass}
          value={password}
          type={showPassword}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <InputPassword
          label="Confirm Password"
          classname={checkPass}
          value={confirmPass}
          type={showConfirmedPass}
          setPassword={setConfirmPass}
          showPassword={showConfirmedPass}
          setShowPassword={setShowConfirmedPass}
        />

        <button
          className="mt-8 rounded-md bg-purple-500 py-3 text-white"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
