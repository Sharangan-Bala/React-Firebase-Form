import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { Link, Navigate, useHistory, useNavigate } from "react-router-dom"

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerFullName, setRegisterFullName] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const [user, setUser] = useState({});
  const navigate = useNavigate();


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>
        <form>
            <h2 className="text-center mb-4">Sign Up</h2>

            <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" 
                onChange={(event) => {
                setRegisterFullName(event.target.value);
                }}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control"  aria-describedby="emailHelp" 
                onChange={(event) => {
                setRegisterEmail(event.target.value);
            }}/>
            </div>

            <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" 
                onChange={(event) => {
                setRegisterPassword(event.target.value);
          }}/>
            </div>

            
            <br></br>

            <button onClick={register} className="btn btn-primary" type="submit">Sign Up</button>

            
        </form>

        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>

    </div>


  );
}

export default App;