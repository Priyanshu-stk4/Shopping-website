import React,{useState}from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
import signupImage from '../assets/images/login-img2.jpg';// adjust path as needed




function Signuppage() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [salutation, setSalutation] = useState("");
    // const [applyingFor, setApplyingFor] = useState("");
    const [error, setError] = useState(null);




    const validateForm = () => {
        if (!salutation) {
            setError("Please select a salutation");
            return false;
        }
        // if (!applyingFor) {
        //     setError("Please select what you are applying for");
        //     return false;
        // }
        if (!fullName || fullName.length < 3 || fullName.length > 50) {
            setError("Full name must be between 3 and 50 characters");
            return false;
        }
        if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setError("Invalid email format");
            return false;
        }
        if (!password || password.length < 8 || password.length > 20) {
            setError("Password must be between 8 and 20 characters");
            return false;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return false;
        }
       
        console.log("Validation passed");
        return true;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("handleSubmit triggered"); // Debugging step
      if (validateForm()) {
        console.log("Form submitted with data:", {
          fullName,
          email,
          password,
          confirmPassword,
      });
        navigate("/");
        }
  };
  


  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="image-section">
          <img src={signupImage}alt="Signup" />
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <div className="input-group">
            <label>Salutation</label>
            <select  value={salutation}
                            onChange={(e) => setSalutation(e.target.value)} className="hello">
             <option value="">select salutation</option>
             <option value="mr.">Mr.</option>
             <option value="mrs.">mrs.</option>
             <option value="ms.">ms.</option>
             <option value="dr.">dr.</option>
             <option value="prof.">prof.</option>
            </select>
            </div>

            {/* <div className="input-group">
            <label>Applying for</label>
            
            <select   value={applyingFor}
                            onChange={(e) => setApplyingFor(e.target.value)} className="hello">
            <option value="">Not Selected</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Social Media Promotion">Social Media Promotion</option>
                            <option value="Content Writing / Designing">Content Writing / Designing</option>
                            <option value="Business Development">Business Development</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Market Research">Market Research</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="General Management">General Management</option>
                            <option value="Human Resource">Human Resource</option>
                            <option value="Others">Others</option>
            </select>

            </div> */}
            <div className="input-group">
              <label>Full Name</label>
              <input value={fullName}
                            onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Enter your name" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input  
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input  
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Create a password" />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
            </div>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>

            {error && (
                        <div className="text-center text-red-500 text-md mt-2">{error}</div>
                    )}
          </form>
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
