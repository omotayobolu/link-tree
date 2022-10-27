import React from "react";

import ProfileImage from "../assets/Profile Image.jpg";

const Profile = () => {
  return (
    <div className="flex">
      <img src={ProfileImage} className="w-[50px]" id="profile__img" alt="" />
      <p className="text-black bg-grey">Testing</p>
    </div>
  );
};

export default Profile;
