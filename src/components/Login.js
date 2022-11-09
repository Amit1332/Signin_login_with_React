import React,{useState} from "react";
import { Link , useNavigate} from "react-router-dom";


const Login = () => {
const navigate = useNavigate()

    const [inputval, setInputVal] = useState({
        email:"",
        password:""
    });
    const [data, setData] = useState([]);



    const getdata = (e)=>{
        const {value,name} = e.target
        setInputVal(()=>{
            return{

                ...inputval,[name]:value
            }
            
        })
    }



    const addata = (e)=>{
        e.preventDefault()

        const getuserArr = localStorage.getItem("userdata")

        const {email,password}= inputval
        
        if(email===""){
            alert("please enter your email")
        }
        else if(!email.includes('@')){
            alert("please enter your valid email")
        }
       
        else if(password===""){
            alert("please enter your password")
        }
        else if(email.length<5){
            alert("please enter your password greater than five")
        }
        else{
           if(getuserArr&& getuserArr.length){
            const userdata = JSON.parse(getuserArr)
            const userLogin = userdata.filter((el,k)=>{
                return el.email ===email && el.password ===password
            })
           

            if(userLogin.length===0){
            alert("invalid details")
           }
           else{
           localStorage.setItem("user_Login",JSON.stringify(userLogin))
            navigate('/details')
            console.log("user loggin successfully");
           }
        }

        
    }
}
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh", position: "absolute", top: "0" }}
      >
        <div className="card p-2" style={{ width: "20rem" }}>
          <h5 className="card-title text-center mb-3">Login</h5>
          <form>
            
            <div className="mb-3">
             
              <input
                type="email"
                name="email"
                className="form-control shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email"
                onChange={getdata}

              />
            </div>

           


            <div className="mb-3">
             
              <input
              type="password"
              name="password"
              className="form-control shadow-none"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              onChange={getdata}             
              
              />
            </div>
            
            <button type="submit" onClick={addata} className="btn btn-primary">
              Submit
            </button>
            <Link to= "/">signup</Link>

          </form>
        </div>
      </div>

      </>
  )
};

export default Login;
