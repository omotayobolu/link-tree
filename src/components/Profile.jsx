import React, { useState } from "react";

import ProfileImage from "../assets/Profile Image.jpg";
import Avatar from "../assets/avatar.png";
import Menu from "../assets/menu.png";
import Camera from "../assets/camera.png";

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
      <div className="relative w-[88px] h-[88px]">
        <img
          src={ProfileImage}
          className="block w-full h-full rounded-[275px] active:border-4 active:border-solid active:border-[#EBE9FE]"
          id="profile__img"
          alt=""
        />
        <div className="absolute pb-2 bottom-0 left-0 bg-[rgba(52,64,84,75%)] w-full h-full rounded-[275px] flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity">
          <img src={Camera} alt="" />
        </div>
      </div>
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
          className="active:drop-shadow-avatarShadow border border-dotted border-hoverGrey p-1.5 rounded-[20px] hover:bg-hoverGrey cursor-pointer active:border-2 active:bg-transparent"
          alt=""
          onMouseOver={handleMouseHover}
          onMouseOut={handleMouseOut}
        />
      </div>
      <div className="sm:hidden absolute top-[3%] right-[10%]">
        <img
          src={Menu}
          className="active:drop-shadow-avatarShadow border border-dotted border-hoverGrey px-2 py-3.5 rounded-[20px] hover:bg-hoverGrey cursor-pointer active:border-2 active:bg-transparent"
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
