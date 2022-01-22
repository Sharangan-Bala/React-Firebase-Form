import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Link, Navigate, useHistory, useNavigate } from "react-router-dom"

function App() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
      });
    
   const logout = async () => {
     await signOut(auth);
      };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });



  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>
        <form>
            <h2 className="text-center mb-4">Log In</h2>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control"  aria-describedby="emailHelp" 
                onChange={(event) => {
                    setLoginEmail(event.target.value);
            }}/>
            </div>

            <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control" 
                onChange={(event) => {
                setLoginPassword(event.target.value);
          }}/>
            </div>

            
            <br></br>

            <button onClick={login} class="btn btn-primary" type="submit">login</button>

            
        </form>

        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
        <div>
        <br></br>
        <h4> User Logged In: </h4>
        {user?.email}
        <br></br>
        <button onClick={logout} class="btn btn-primary"> Sign Out </button>
        </div>

    </div>

  );
}

export default App;