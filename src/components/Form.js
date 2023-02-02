const Form = ({
  func,
  username,
  email,
  password,
  confirmPass,
  setUsername,
  setPassword,
  setEmail,
  setConfirmPass,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    func();
  };

  return (
    <div>
      <h1 className="mb-10 text-2xl">Create your account</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          value={email}
          type="email"
          placeholder="email@mail.com"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          value={confirmPass}
          type="text"
          placeholder="confirm password"
          onChange={(event) => {
            setConfirmPass(event.target.value);
          }}
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
