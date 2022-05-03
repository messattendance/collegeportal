import React , { useState , useContext  ,useEffect} from 'react'
import firebase from 'firebase';
import  { useNavigate } from 'react-router-dom'


const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [warning , setWarning] = useState('')
    const [currentUser , setCurrentUser] = useState('')  
    const history = useNavigate()

   
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
        })
      }, [])
    
      

    


    async function signin(username , password){
           
            try{
                await  firebase.auth().signInWithEmailAndPassword(username,password)

                if(firebase.auth()){
                    if(firebase.auth().X === 'IzdgmuwWcmcMwPZ891jRq3BZKwL2')
                    {
                        history.push('/councellorportal')
                    }
                   else{
                       console.log(firebase.auth())
                    history.push('/')
                   }
                    console.log(firebase.auth().X)
                }
            }
            catch(e){
                setWarning(e)
            }
        }

       

 async function logout(){
        await firebase.auth().signOut()
        history.push('/signin')
    }

    const value = { 
        logout ,
        signin ,
        warning , 
        currentUser,
    }

   

    

    return (
        <AuthContext.Provider value={ value }>
                { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider