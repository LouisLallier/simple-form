import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [showStepTwo, setShowStepTwo] = useState(false);

  const alertOnSubmit = () => {
    if (password !== confirmPass) {
      alert("Les deux password ne sont pas identiques");
      setShowStepTwo(false);
    } else {
      setShowStepTwo(true);
    }
  };

  return (
    <div className="App">
      {!showStepTwo ? (
        <Form
          username={username}
          email={email}
          password={password}
          confirmPass={confirmPass}
          func={alertOnSubmit}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPass={setConfirmPass}
        />
      ) : (
        <StepTwo
          username={username}
          email={email}
          password={password}
          edit={setShowStepTwo}
        />
      )}
    </div>
  );
};

export default App;
