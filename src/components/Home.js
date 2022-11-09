import React,{useState} from "react";
import { Link} from "react-router-dom";


const Home = () => {
    const [inputval, setInputVal] = useState({
        name:"",
        email:"",
        date:"",
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

        const {name,email,date,password}= inputval
        if(name===""){
            alert("please enter your name")
        }
        else if(email===""){
            alert("please enter your email")
        }
        else if(!email.includes('@')){
            alert("please enter your valid email")
        }
        else if(date===""){
            alert("please enter your Dob")
        }
        else if(password===""){
            alert("please enter your password")
        }
        else if(email.length<5){
            alert("please enter your password greater than five")
        }
        else{
            localStorage.setItem("userdata", JSON.stringify([...data,inputval]))
        }

        
    }
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh", position: "absolute", top: "0" }}
      >
        <div className="card p-2" style={{ width: "20rem" }}>
          <h5 className="card-title text-center mb-3">Signup</h5>
          <form>
            <div className="mb-3">
             
              <input
              type="text"
              name="name"
              className="form-control shadow-none"
              id="exampleInputname"
              placeholder="Enter Your Name"
              onChange={getdata}
              />
            </div>
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
              type="date"
              name="date"
              className="form-control shadow-none"
              id="exampleInputdob"
              placeholder="Enter Your Dob"
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
            <Link to= "/login">Already have an account</Link>

          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
