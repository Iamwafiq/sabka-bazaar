import { useState } from "react";
import ButtonComponent from "../../components/Button";
import "./style.scss";

const RegisterPage = () => {
  const [activeInput, updateInput] = useState(null);
  return (
    <div>
      <div className="page-content">
        <div className="text-description">
          <h2>Signup</h2>
          <p>We do not share your personal details with anyone.</p>
        </div>
        <div className="register-form" onBlur={() => updateInput(null)}>
          {activeInput === 1 && <label>First Name</label>}
          <input
            placeholder={activeInput !== 1 && "First Name"}
            onFocus={() => updateInput(1)}
          />
          {activeInput === 2 && <label>Last Name</label>}
          <input
            placeholder={activeInput !== 2 && "Last Name"}
            onFocus={() => updateInput(2)}
          />
          {activeInput === 3 && <label>Email</label>}
          <input
            type="email"
            placeholder={activeInput !== 3 && "Email"}
            onFocus={() => updateInput(3)}
          />
          {activeInput === 4 && <label>Pasword</label>}
          <input
            type="password"
            placeholder={activeInput !== 4 && "Password"}
            onFocus={() => updateInput(4)}
          />
          {activeInput === 5 && <label>Confirm Password</label>}
          <input
            type="password"
            placeholder={activeInput !== 5 && "Confirm Password"}
            onFocus={() => updateInput(5)}
          />
          <ButtonComponent buttonText="Signup" buttonMargin="5% 0" />
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
