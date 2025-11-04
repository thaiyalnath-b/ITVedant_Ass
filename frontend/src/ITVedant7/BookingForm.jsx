import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, date, time } = formData;

        if (!name || !email || !phone || !date || !time) {
            setError("Please fill in all fields.");
            setMessage("");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.")
            setMessage("");
            return;
        }

        setError("");
        setMessage(`Appointment booked successfully for ${name} on ${date} at ${time}.`);

        setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
        });
    };

    return (
        <div className="form-container">

            <h2>Book Appointment</h2>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                </div>
                <div>
                    <label>Appoinment Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
                <div>
                    <label>Appoinment Time:</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} />
                </div>
                <button type="submit">Book Appointment</button>

                {error && <p className="error">{error}</p>}
                {message && <p className="success">{message}</p>}
            </form>
        </div>
    )
}

export default BookingForm
