
import React from 'react';
import emailjs from 'emailjs-com';
import ReactPlayer from 'react-player'



export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_x16e72g','template_vltyi8r', e.target,'user_Q9yusgnJFQkEpLnVqINWt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    
    <div class="box3">
        <h1 style={{padding:"30px",textAlign:"center", width:"100%",}}> Contact Me  </h1>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <br></br>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
            
    </div>
  );
}