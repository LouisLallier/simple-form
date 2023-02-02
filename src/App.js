import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [showStepTwo, setShowStepTwo] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmedPass, setShowConfirmedPass] = useState("password");

  const [checkPass, setCheckPass] = useState("");

  const checkTwoPassword = () => {
    if (password !== confirmPass) {
      setCheckPass("red");
    } else {
      setCheckPass("");
    }
  };

  const alertOnSubmit = () => {
    if (password !== confirmPass) {
      checkTwoPassword();
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
          funcSubmit={alertOnSubmit}
          username={username}
          email={email}
          password={password}
          confirmPass={confirmPass}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPass={setConfirmPass}
          setShowPassword={setShowPassword}
          setShowConfirmedPass={setShowConfirmedPass}
          showPassword={showPassword}
          showConfirmedPass={showConfirmedPass}
          checkPass={checkPass}
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
