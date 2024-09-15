import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import {
  StyledWrapper,
  StyledLabel,
  StyledInput,
  StyledTextArea
} from "./styles";
import "./index.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Content = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("submit")
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EJSERVICEID, process.env.REACT_APP_EJTEMPLATEID, form.current, {
        publicKey: process.env.REACT_APP_EJPUBLICKEY,
      })
      .then(
        () => {
          alert('Successfull');
          e.target.reset()
        },
        (error) => {
          alert('Failed');
          e.target.reset()
        },
      );
  };
  return (
    <section className="flow-spacing">
      <StyledWrapper className="wrapper flow-spacing-content">
      <form ref={form} onSubmit={sendEmail} style={{display:"flex", flexDirection:"column",width:"50%", gap:"1rem"}}>
      <StyledLabel>
        Name
      <StyledInput type="text" name="user_name" required/>
      </StyledLabel>
      
      <StyledLabel>
        Mobile
        <StyledInput type="number" name="user_mobile" required/>
      </StyledLabel>
      
      <StyledLabel>
        Email
        <StyledInput type="email" name="user_email" required/>
      </StyledLabel>
      
      <StyledLabel>
        Message
        <StyledTextArea name="message"/>
      </StyledLabel>
      <div style={{display:'flex', justifyContent:"left"}}>
      <StyledInput type="submit" value="Send" style={{textAlign:"center", cursor:"pointer", background:"var(--clr-blue)", color:"white", width:"auto",
        padding:"0rem 2rem"
      }}/>
      </div>
       </form>
    </StyledWrapper>
    </section>
  );
};

export default Content;