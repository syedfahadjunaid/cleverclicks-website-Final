import React from "react";
import "./ContactForm.css";

import { useForm } from "react-hook-form";

import { useRef } from "react";

import emailjs from "emailjs-com";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = (data) => {
    // Form submission code

    // console.log(data);

    emailjs
      .sendForm(
        "service_uwvcm6h",
        "template_lka71fu",
        form.current,
        "DDM3JJYObI3GhJF6q"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
    reset();
  };

  return (
    <div className='contact-form-main'>
      <form className='main-form' ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type='text'
            name='name'
            placeholder='Name*'
            {...register("name", { required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </div>
        <div>
          <input
            type='email'
            name='email'
            placeholder='Email*'
            {...register("email", { required: true })}
          />
          {errors.email && <p>This field is required</p>}
        </div>
        <div>
          <input
            type='tel'
            name='phone'
            placeholder='Phone*'
            {...register("phone", {
              required: true,
              pattern: {
                value: /^\+?\d{8,}$/,
                message: "Invalid phone number (minimum 8 digits required)",
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <input
            type='text'
            name='website'
            placeholder='Website'
            {...register("website", {
              required: false,
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Please enter a valid URL",
              },
            })}
          />
          {errors.website && <p>{errors.website.message}</p>}
        </div>
        <div className='main-form-textarea'>
          <textarea
            type='text'
            name='message'
            placeholder='Message*'
            {...register("message", { required: true })}
          />
          {errors.message && <p>This field is required</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
