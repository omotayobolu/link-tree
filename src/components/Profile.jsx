import React, { useState } from "react";

import ProfileImage from "../assets/Profile Image.jpg";
import Avatar from "../assets/avatar.png";

const Profile = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      <img
        src={ProfileImage}
        className="w-[88px] h-[88px] rounded-[275px] active:border-4 active:border-[#EBE9FE] hover:bg-imageHover"
        id="profile__img"
        alt=""
      />
      <p id="twitter" className="text-black my-2 font-bold text-[20px]">
        bolu_xy
      </p>
      <p id="slack" className="hidden">
        Bolu Omotayo
      </p>
      <div className="hidden sm:absolute top-0 right-[20%] sm:flex items-center gap-3">
        {isHovering && (
          <p className="drop-shadow-linkShadow px-[12px] py-[8px] rounded-lg bg-black text-white text-xs font-semibold">
            Share link
          </p>
        )}
        <img
          src={Avatar}
          className="border border-hoverGrey p-1.5 rounded-[20px] hover:bg-hoverGrey cursor-pointer active:border-2 active:bg-transparent"
          alt=""
          onMouseOver={handleMouseHover}
          onMouseOut={handleMouseOut}
        />
      </div>
    </div>
  );
};

export default Profile;
