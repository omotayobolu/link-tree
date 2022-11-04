import React, { useState } from "react";

import ZuriLogo from "../assets/zuri logo.png";

const Contact = () => {
  const name = "Boluwatife";

  const [firstName, setFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameTouched, setLastNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);

  const firstNameIsValid = firstName !== "";
  const firstNameInvalid = !firstNameIsValid && firstNameTouched;

  const lastNameIsValid = lastName !== "";
  const lastNameInvalid = !lastNameIsValid && lastNameTouched;

  const emailIsValid = email.includes("@");
  const emailInvalid = !emailIsValid && emailTouched;

  const messageIsValid = message !== "";
  const messageInvalid = !messageIsValid && messageTouched;

  let formIsValid = false;

  if (emailIsValid && firstNameIsValid && lastNameIsValid && messageIsValid) {
    formIsValid = true;
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();

    setEmailTouched(true);
    setFirstNameTouched(true);
    setLastNameTouched(true);
    setMessageTouched(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");

    setEmailTouched(false);
    setFirstNameTouched(false);
    setLastNameTouched(false);
    setMessageTouched(false);
  };

  return (
    <section>
      <div className="sm:mx-[15%] my-[5%]">
        <h1 className="font-semibold text-[36px]">Contact Me</h1>
        <p className="text-contactText font-normal">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form onSubmit={handleFormSubmission} className="mt-8">
          <div className="flex sm:flex-row flex-col items-center gap-4 ">
            <div className="w-100 flex flex-col w-full relative pb-5">
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
                className={`${
                  firstNameInvalid && "border-red active:border-red"
                }`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => setFirstNameTouched(true)}
              />
              {firstNameInvalid && <span>Please enter your first name</span>}
            </div>
            <div className="w-100 flex flex-col w-full relative pb-5">
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
                className={`${lastNameInvalid && "border-red"}`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={() => setLastNameTouched(true)}
              />
              {lastNameInvalid && <span>Please enter your last name</span>}
            </div>
          </div>
          <div className="w-full flex flex-col mt-2 relative pb-5">
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
              className={`${emailInvalid && "border-red"}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
            />
            {emailInvalid && <span>Please enter your email</span>}
          </div>
          <div className="flex flex-col mt-4 pb-5 relative">
            <label
              className="text-[14px] font-medium leading-5"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`${
                messageInvalid &&
                "border-red focus:border-red focus:drop-shadow-errorShadow"
              }`}
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible.."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setMessageTouched(true)}
            ></textarea>
            {messageInvalid && <span>Please enter a message</span>}
          </div>
          <div className="flex flex-row items-center my-3 gap-2">
            <input type="checkbox" />
            <label
              htmlFor=""
              className="text-[16px] text-contactText leading-6"
            >
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>
          <button
            id="btn__submit"
            className="w-full bg-button hover:bg-buttonHover active:bg-buttonActive
            disabled:bg-disabledButton text-white rounded-lg py-3 my-3"
            disabled={!formIsValid}
          >
            Send Message
          </button>
        </form>
      </div>
      <footer className="mt-12">
        <hr />
        <div className="py-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between md:w-[60%]">
          <img src={ZuriLogo} alt="" />
          <p className="text-darkGrey">HNG Internship 9 Frontend Task</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
