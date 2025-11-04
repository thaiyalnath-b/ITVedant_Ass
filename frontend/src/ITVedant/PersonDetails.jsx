import React from "react";
import './PersonDetails.css';

export const personsData = [
    { name: "John Doe", dateOfBirth: "1990-01-15" },
    { name: "Jane Smith", dateOfBirth: "1985-05-20" },
    { name: "Alice Johnson", dateOfBirth: "1995-09-10" },
];

function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }

    return age;
}

function PersonalDetails() {
    return(
        <div className="out">
            <div className="in">
                <h1>Person Details</h1>
                <ul>
                    {personsData.map((person, index) => (
                        <li key={index}>
                            <b>Name:</b> {person.name} <br />
                            <b>DOB:</b> {person.dateOfBirth} <br />
                            <b>Age:</b> {calculateAge(person.dateOfBirth)} Years <br />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default PersonalDetails;