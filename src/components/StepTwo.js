const StepTwo = ({ username, email, password, edit }) => {
  return (
    <div>
      <h1 className="py-4 text-2xl">Results</h1>
      <div className="flex w-72 flex-col gap-4 rounded-md bg-green-300 p-5">
        <div>Username : {username}</div>
        <div>Email : {email}</div>
        <div>Password : {password}</div>
      </div>
      <button
        onClick={() => {
          edit();
        }}
        className="mt-8 rounded-md bg-purple-500 px-2 py-3 text-white"
      >
        Edit your info
      </button>
    </div>
  );
};

export default StepTwo;
