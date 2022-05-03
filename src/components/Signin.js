import React , { useRef ,useState , useEffect} from 'react'
//import { useAuth } from './AuthProvider'
import { Form , Button ,Alert } from 'react-bootstrap'
import { Link  } from 'react-router-dom'
import '../assets/css/auth.css'
import { auth } from '../firebase'
import AuthStyle from './AuthStyle'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const userRef = useRef()
    const passRef = useRef()
    const history = useNavigate()
    const [warning , setWarning] = useState('')
    async function signin(){
           
        const username  = userRef.current.value;
        const password = passRef.current.value;
        try{
            await auth.signInWithEmailAndPassword(username,password)

            if(auth){
                if(auth.currentUser.email ===  "collegeadmin1@gmail.com" || auth.currentUser.email ===  "collegeadmin2@gmail.com")
                {
                    console.log("hi");
                    history('/')
                }
               else{
                history('/signin')
               }
            }
        }
        catch(e){
            setWarning(e)
        }
    }  

   // const { signin } = useAuth()
   // const { warning } =useAuth()
    // const [error , setError] = useState()
    // async function handlesignin()
    // {
        
    //     try{
    //         if((passRef.current.value).trim().length!==0 && (userRef.current.value).trim().length!==0){
    //             await signin(userRef.current.value , passRef.current.value)
    //         }
    //         else{
    //             setError("username and password can't be empty")
    //         }
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    // }
    // useEffect(() => {
    //     setError('')
    // }, [warning])


    return (
        <div>
        <center>
            {/* {warning && <Alert variant="danger">{(warning.code).slice(5,)}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}<br/> */}
        </center>
            <div className="mainclass">
                <AuthStyle />
                <div className="sub2">
                        <center>  
                                <Form autoComplete="off">
                                    <font className="alink">College Admin Login</font><br/>
                                    <input type="email"  ref= { userRef } className="form-control" placeholder="email" />
                                    <input type="password" ref= { passRef } className="form-control" placeholder="password"/>
                                    <Button className="btn btn-success" onClick={signin}>Login</Button>
                                </Form>
                        </center>
                </div>
            </div>
            <center><font className="copyrights">&copy; We4 Solutions</font></center>
        </div>
    )
}

export default Signin