import React from "react";

import ProfileImage from "../assets/Profile Image.jpg";

const Profile = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <img
        src={ProfileImage}
        className="w-[88px] h-[88px] rounded-[275px]"
        id="profile__img"
        alt=""
      />
      <p id="twitter" className="text-black my-2 font-bold text-[20px]">
        bolu_xy
      </p>
      <p id="slack" className="hidden">
        Bolu Omotayo
      </p>
    </div>
  );
};

export default Profile;
