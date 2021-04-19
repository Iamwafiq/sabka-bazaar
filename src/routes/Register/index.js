import { useState } from "react";
import ButtonComponent from "../../components/Button";
import "./style.scss";

const RegisterPage = () => {
  const [activeInput, updateInput] = useState(null);
  const [formState, updateForm] = useState({});
  return (
    <div>
      <div className="page-content">
        <div className="text-description">
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone.</p>
        </div>
        <div className="register-form" onBlur={() => updateInput(null)}>
          {activeInput === 1 && <label>First Name</label>}
          <input
            type="text"
            placeholder={activeInput !== 1 && "First Name"}
            onFocus={() => updateInput(1)}
            value={formState.firstName || ""}
            onChange={(e) =>
              updateForm({ ...formState, firstName: e.target.value })
            }
          />
          {activeInput === 2 && <label>Last Name</label>}
          <input
            type="text"
            placeholder={activeInput !== 2 && "Last Name"}
            onFocus={() => updateInput(2)}
            value={formState.lastName || ""}
            onChange={(e) =>
              updateForm({ ...formState, lastName: e.target.value })
            }
          />
          {activeInput === 3 && <label>Email</label>}
          <input
            type="email"
            placeholder={activeInput !== 3 && "Email"}
            onFocus={() => updateInput(3)}
            value={formState.email || ""}
            onChange={(e) =>
              updateForm({ ...formState, email: e.target.value })
            }
          />
          {activeInput === 4 && <label>Pasword</label>}
          <input
            type="password"
            placeholder={activeInput !== 4 && "Password"}
            onFocus={() => updateInput(4)}
            value={formState.password || ""}
            onChange={(e) =>
              updateForm({ ...formState, password: e.target.value })
            }
          />
          {activeInput === 5 && <label>Confirm Password</label>}
          <input
            type="password"
            placeholder={activeInput !== 5 && "Confirm Password"}
            onFocus={() => updateInput(5)}
            value={formState.confirmPassword || ""}
            onChange={(e) =>
              updateForm({ ...formState, confirmPassword: e.target.value })
            }
          />
          <ButtonComponent buttonText="Signup" buttonMargin="5% 0" />
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
