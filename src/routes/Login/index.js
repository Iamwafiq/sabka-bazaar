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
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations.</p>
        </div>
        <div className="register-form" onBlur={() => updateInput(null)}>
          {activeInput === 1 && <label>Email</label>}
          <input
            id="email-input"
            placeholder={activeInput !== 1 && "Email"}
            onFocus={() => updateInput(1)}
            value={formState.email || ""}
            onChange={(e) =>
              updateForm({ ...formState, email: e.target.value })
            }
          />
          {activeInput === 2 && <label>Pasword</label>}
          <input
            id="password-input"
            type="password"
            placeholder={activeInput !== 2 && "Password"}
            onFocus={() => updateInput(2)}
            value={formState.password || ""}
            onChange={(e) =>
              updateForm({ ...formState, password: e.target.value })
            }
          />

          <ButtonComponent buttonText="Login" buttonMargin="5% 0" />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
