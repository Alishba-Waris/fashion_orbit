// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../../assets/css/ContactUs.css";

// const ContactUs = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();
//   const [, setSuccess] = useState(null);

//   const onSubmit = async (data) => {
//     try {
//       await axios.post("http://localhost:5000/api/contactus", data);
//       setSuccess(true);
//       reset();
//       toast.success('🦄 Message sent Successfully!', {
//         theme: "colored",
//       });
//     } catch (error) {
//       console.error(error);
//       setSuccess(false);
//       toast.error('🦄 Message failed to send!', {
//         theme: "colored",
//         });
//     }
//   };

//   return (
//     <>
//      <ToastContainer />
//       <div className="contact-us-container container">
//         <div className="row">
//           <div className="form-container col-12 col-md-6">
//             <h2 className="form-title">DROP US A LINE</h2>
//             <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-group">
//                 <label htmlFor="name">Name (required)</label>
//                 <input
//                   type="text"
//                   id="name"
//                   {...register("name", {
//                     required: "Name is required",
//                     maxLength: 50,
//                   })}
//                 />
//                 {errors.name && <p className="error">{errors.name.message}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email (required)</label>
//                 <input
//                   type="email"
//                   id="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
//                       message: "Enter a valid email",
//                     },
//                   })}
//                 />
//                 {errors.email && (
//                   <p className="error">{errors.email.message}</p>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">Phone# (Optional)</label>
//                 <input
//                   type="text"
//                   id="phone"
//                   {...register("phone", {
//                     pattern: {
//                       minLength: {
//                         value: 11,
//                         message: "Enter a valid phone number",
//                       },
//                     },
//                   })}
//                 />
//                 {errors.phone && (
//                   <p className="error">{errors.phone.message}</p>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea id="message" {...register("message", {
//                   required: "Message is required",
//                 })} />
//                 {errors.message && (
//                   <p className="error">{errors.message.message}</p>
//                 )}
//               </div>
//               <button type="submit" className="send-button" >
//                 Send
//               </button>
//             </form>

//           </div>

//           <div className="contact-info col-12 col-md-6">
//             <div className="info-section">
//               <h3 className="info-title">Telephone</h3>
//               <p>
//                 <a href="tel:+922138227000">
//                   FashionOrbit Helpline: +9221 38227292
//                 </a>
//               </p>
//               <p>
//                 <a href="https://wa.me">WhatsApp: +92 300 7807290</a>
//               </p>
//             </div>
//             <div className="info-section">
//               <h3 className="info-title">Time</h3>
//               <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
//               <p>Saturday: 9:00 AM to 4:00 PM</p>
//             </div>
//             <div className="info-section">
//               <h3 className="info-title">Email</h3>
//               <p>FOR WHOLESALE INQUIRY</p>
//               <p>
//                 <a href="mailto:Wholesale@FashionOrbit.pk">
//                   Email: Wholesale@FashionOrbit.pk
//                 </a>
//               </p>
//               <p>FOR ORDER QUERIES</p>
//               <p>
//                 <a href="mailto:sale@FashionOrbit.pk">
//                   Email: fashionorbit0@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/ContactUs.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/contactus", data);
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Message failed to send!");
    }
  };

  return (
    <div className="contact-us-container container">
      <div className="row">
        <div className="form-container col-12 col-md-6">
          <h2 className="form-title">DROP US A LINE</h2>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name (required)</label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  maxLength: 50,
                })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (required)</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone# (Optional)</label>
              <input
                type="text"
                id="phone"
                {...register("phone", {
                  pattern: {
                    minLength: {
                      value: 11,
                      message: "Enter a valid phone number",
                    },
                  },
                })}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>

        <div className="contact-info col-12 col-md-6">
          <div className="info-section">
            <h3 className="info-title">Telephone</h3>
            <p>
              <a href="tel:+922138227000">
                FashionOrbit Helpline: +9221 38227292
              </a>
            </p>
            <p>
              <a href="https://wa.me">WhatsApp: +92 300 7807290</a>
            </p>
          </div>
          <div className="info-section">
            <h3 className="info-title">Time</h3>
            <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
            <p>Saturday: 9:00 AM to 4:00 PM</p>
          </div>
          <div className="info-section">
            <h3 className="info-title">Email</h3>
            <p>FOR WHOLESALE INQUIRY</p>
            <p>
              <a href="mailto:Wholesale@FashionOrbit.pk">
                Email: Wholesale@FashionOrbit.pk
              </a>
            </p>
            <p>FOR ORDER QUERIES</p>
            <p>
              <a href="mailto:sale@FashionOrbit.pk">
                Email: fashionorbit0@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
