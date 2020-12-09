import React from 'react';
import './Profile.scss';
import formConfig from "../Forms/Config";

export default function UserProfile({id, profilePicture, firstName, lastName, dateOfBirth, phone, city, address, education, bio, job}) {
    return(
        <div className="profile">
            {profilePicture}
            {firstName}
            {lastName}
            {dateOfBirth}
            {phone}
            {city}
            {address}
            {education}
            {bio}
            {job}
        </div>
    )
}