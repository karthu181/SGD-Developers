import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import {
  StyledWrapper,
  StyledLabel,
  StyledParragraph,
  StyledSubText,
  StyledImg,
} from "./styles";
import "./index.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Content = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_46j4b8m', 'template_prki6tw', form.current, {
        publicKey: 'xGiDIFvjZfJLwbfUR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Successfull');
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed');
          e.target.reset()
        },
      );
  };
  return (
    <section className="flow-spacing">
      <StyledWrapper className="wrapper flow-spacing-content">
      <form ref={form} onSubmit={sendEmail} style={{display:"flex", flexDirection:"column"}}>
      <StyledLabel>Name</StyledLabel>
      <input type="text" name="user_name" required/>
      <StyledLabel>Mobile</StyledLabel>
      <input type="number" name="user_mobile" required/>
      <StyledLabel>Email</StyledLabel>
      <input type="email" name="user_email" required/>
      <StyledLabel>Message</StyledLabel>
      <textarea name="message" />
      <input type="submit" value="Send"/>
    </form>
    </StyledWrapper>
    </section>
  );
};

export default Content;