import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import {GoogleAuthProvider, getAuth,signInWithPopup, signOut} from 'firebase/auth'
import { addUser } from '../../redux/bazarSlice';



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        signInWithPopup(auth,provider)
        .then((result)=>{
            const user = result.user
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image : user.photoURL
            }),
setTimeout(()=>{
    navigate("/")
},1500)
            )

        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }

  return (
    <div className='login'>
        <div className="container">
            <div className="content" onClick={handleGoogleLogin}>
                <p>Sign in with Google</p>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
            <div className="content">
                <p>Sign in with Github</p>
                <button>Sign Out</button>
            </div>
        </div>
    </div>
  )
}

export default Login