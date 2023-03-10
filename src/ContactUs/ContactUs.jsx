import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import './contactUs.css';


export const ContactUs = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = 'service_0rbpdxs';
        const templateId = 'template_ckq4iy8';
        const apiKey = '2tvwa5-2ofm8rr48l'

        emailjs.sendForm(serviceId, templateId, refForm.current,  apiKey)
        .then( result => console.log(result.text))
        .catch(error => console.error(error))
    }

  return (
   <form ref={refForm} action="" onSubmit={handleSubmit}>
    <div className='header-contact'>
        <h2>Contact Us</h2>
        <p>Please fill this form</p>
    </div>
    <fieldset className='field-name'>
        <label className='symbol-required name' htmlFor="">Name</label>
        <input name='username' type="text" placeholder='Ej: Pepe Ramirez'  required/>
    </fieldset>
    <fieldset className='field-email'>
        <label className='symbol-required ' name='email'>Email</label>
        <input placeholder='Ej: pepeRamirez@gmail.com' type='email' name='email' id='email' required/>
    </fieldset>
    <fieldset className='field-message'>
        <label className='symbol-required'>Mensaje</label>
        <textarea name="message" id="" cols="30" rows="10" maxLength='500'></textarea>
    </fieldset>
    <button className='btn-send'>Send</button>
   </form>
  )
}
