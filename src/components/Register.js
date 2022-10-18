import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async(e) => {
    e.preventDefault();
    const {fname, email, password, cpassword} = inpval;
    if (fname === "") {
      alert("Please Enter your name");
    } else if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("Enter valid email");
    } else if (password === "") {
      alert("Enter your password");
    } else if (password.length < 6) {
      alert("password must be 6 characters");
    }
    else if (cpassword === "") {
      alert("Enter your confirm password");
    } else if (cpassword.length < 6) {
      alert("Confirm password must be 6 characters");
    }else if(password !== cpassword){
        alert("password and confirm password does not match")
    }else{
        const data = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, password, cpassword
            })
        });

        const res=await data.json();
        //console.log(res);
        if(res.status==201){
            alert("user registration done");
            setInpval({...inpval,fname:"",email:"",password:"",cpassword:""})
        }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p>
              We are glad to provide our services.We hope that you will like it!
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="fname"
                name="fname"
                id="fname"
                placeholder="Enter your name"
                onChange={setVal}
                value={inpval.fname}
              ></input>
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                onChange={setVal}
                value={inpval.email}
              ></input>
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={passShow ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password "
                  onChange={setVal}
                  value={inpval.password}
                ></input>
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {passShow ? "Hide" : "Show"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="cpassword">Confirm Password</label>
              <div className="two">
                <input
                  type={cpassShow ? "text" : "password"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password "
                  onChange={setVal}
                  value={inpval.cpassword}
                ></input>
                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cpassShow)}
                >
                  {cpassShow ? "Hide" : "Show"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={addUserdata}>
              Sign Up
            </button>
            <p>
              Already have an Account?<NavLink to="/">LogIn</NavLink>{" "}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
