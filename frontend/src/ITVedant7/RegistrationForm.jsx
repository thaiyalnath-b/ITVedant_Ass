import React, { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState({});
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^s@]+$/;

        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailPattern.test(formData.email)) newErrors.email = "Invalid email format";

        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm your password";
        else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSuccess("Registration successfull");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } else {
            setSuccess("");
        }
    };

    return (
        <div className="form-container">
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange} />
                    {error.firstName && <p className="error">{error.firstName}</p>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange} />
                    {error.lastName && <p className="error">{error.lastName}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {error.email && <p className="error">{error.email}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />
                    {error.password && <p className="error">{error.password}</p>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange} />
                    {error.confirmPassword && <p className="error">{error.confirmPassword}</p>}
                </div>
                <button type="submit">Register</button>
            </form>

            {success && <p className="success">{success}</p>}
        </div>
    )
}

export default RegistrationForm