import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="sm:mx-[15%] my-[5%]">
        <h1 className="font-semibold text-[36px]">Contact Me</h1>
        <p className="text-contactText font-normal">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8">
          <div className="flex sm:flex-row flex-col items-center gap-4 ">
            <div className="w-100 flex flex-col w-full">
              <label
                className="text-[14px] font-medium leading-5"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                className="border border-hoverGrey p-2 rounded-lg"
              />
            </div>
            <div className="w-100 flex flex-col w-full">
              <label
                className="text-[14px] font-medium leading-5"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                className="border border-hoverGrey p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="w-full flex flex-col mt-4">
            <label
              className="text-[14px] font-medium leading-5"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="emal"
              placeholder="yourname@email.com"
              className="border border-hoverGrey p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              className="text-[14px] font-medium leading-5"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="border border-hoverGrey p-2 rounded-lg w-full h-[130px] resize-none overflow-auto"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible.."
            ></textarea>
          </div>
          <div className="flex flex-row my-6 gap-2">
            <input type="checkbox" />
            <label
              htmlFor=""
              className="text-[16px] text-contactText leading-6"
            >
              You agree to providing your data to Boluwatife who may contact
              you.
            </label>
          </div>
          <button className="w-full bg-button text-white rounded-lg py-3">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
