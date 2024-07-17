import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


// (function () {
//   emailjs.init({
//     publicKey: 'biOJspmimtBQ47tB6',
//    // privateKey: '7q6pLakOezFE6vkP1qIa7'
//   });
//   console.log(emailjs);
// })();

// console.log('test emailjs');


// var templateParams = {
//   name: 'James',
//   notes: 'Check this out!',
// };

// emailjs.send('service_dw9ukb2', 'template_n8y4f1z', templateParams).then(
//   function (response) {
//     console.log('SUCCESS!', response.status, response.text);
//   },
//   function (err) {
//     console.log('FAILED...', err);
//   },
// );



// import emailjs from '@emailjs/nodejs';

// // set Public Key as global settings
// emailjs.init({
//   publicKey: '5Insgb5sLxOaJXWmq',
//   privateKey: '7q6pLakOezFE6vkP1qIa7', // optional, highly recommended for security reasons
// });


// emailjs.send('service_dw9ukb2', 'template_n8y4f1z').then(
//   (response) => {
//     console.log('SUCCESS!', response.status, response.text);
//   },
//   (err) => {
//     console.log('FAILED...', err);
//   },
// );


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let  publicKey = 'Fmx7yPqFUl5HEF6fb';

    emailjs
      .sendForm('service_dw9ukb2', 'template_n8y4f1z', form.current, {
        // publicKey: 'Fmx7yPqFUl5HEF6fb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        
      );
      console.log(publicKey);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;
