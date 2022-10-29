import React from "react";

import { LinkData } from "../LinkData";
import Slack from "../assets/slack.png";
import Github from "../assets/github.png";

const Links = () => {
  return (
    <main className="mt-6">
      {LinkData.map((link) => {
        return (
          <div className="flex flex-col my-4" key={link.id}>
            <button
              id={link.id}
              className="py-4 font-medium text-[18px] rounded-lg bg-grey disabled:bg-disabledGrey hover:bg-hoverGrey active:bg-activeGrey"
            >
              <a
                href={link.link}
                title={link.title}
                className="text-black leading-7"
              >
                {link.name}
              </a>
            </button>
          </div>
        );
      })}
      <div className="flex justify-center items-center gap-4 mt-8">
        <img src={Slack} alt="" />
        <img src={Github} alt="" />
      </div>
    </main>
  );
};

export default Links;
