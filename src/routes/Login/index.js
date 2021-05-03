import { useState } from "react";
import ButtonComponent from "../../components/Button";
import "./style.scss";

const LoginPage = () => {
  const [activeInput, updateInput] = useState(null);
  const [formState, updateForm] = useState({});
  return (
    <div>
      <div className="page-content">
        <div className="text-description">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations.</p>
        </div>
        <div className="register-form" onBlur={() => updateInput(null)}>
          <div className="input-label-container">
            {activeInput === 1 && <label>Email</label>}
            <input
              id="email-input"
              placeholder={activeInput !== 1 ? "Email" : ""}
              onFocus={() => updateInput(1)}
              value={formState.email || ""}
              onChange={(e) =>
                updateForm({ ...formState, email: e.target.value })
              }
            />
          </div>
          <div className="input-label-container">
            {activeInput === 2 && <label>Password</label>}
            <input
              id="password-input"
              type="password"
              placeholder={activeInput !== 2 ? "Password" : ""}
              onFocus={() => updateInput(2)}
              value={formState.password || ""}
              onChange={(e) =>
                updateForm({ ...formState, password: e.target.value })
              }
            />
          </div>
          <ButtonComponent
            buttonText="Login"
            buttonMargin="10% 0"
            buttonFont="14px"
          />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
