import React, { useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {useNavigate , Link} from "react-router-dom"
import Modal from "react-bootstrap/Modal";

const AllUser = () => {
    const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const todayDate = new Date().toString().slice(0, 10);

  const [logindata, setLoginData] = useState([]);

  const Birthday = () => {
    const getUser = localStorage.getItem("user_Login");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);

      const userBirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userBirth) {
        setTimeout(() => {
          handleShow();
        }, 3000);
      }
    }
  };
  useEffect(() => {
    Birthday();
  }, []);


  const logoutUser = ()=>{
    localStorage.removeItem("user_Login")
   navigate('/login')
  }

  return (
    <>
      {logindata.length === 0 ? (
        <div className="container d-flex align-items-center justify-content-center" style={{height:"100vh",position:"absolute",top:"0"}}>
       <Link to="/login" className="text-center btn btn-sm btn-success">Please Login first</Link>
       </div>
      ) : (
        <>
          <div>
            <h5 className="p-3" style={{ backgroundColor: "#0001" }}>
              {logindata[0].name}
            </h5>
            <h6 className="p-3" style={{ backgroundColor: "#0001" }}>
              {logindata[0].date}
            </h6>
            <h6 className="p-3" style={{ backgroundColor: "#0001" }}>
              {logindata[0].email}
            </h6>
            <button className="btn btn-sm btn-primary" onClick={logoutUser}>Logout</button>
          </div>
          {
            // logindata[0].date === todayDate ?
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton >
                <Modal.Title>{logindata[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                many many happy return of the day happy birthday
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            //   :""
          }
        </>
      )}
    </>
  );
};

export default AllUser;
