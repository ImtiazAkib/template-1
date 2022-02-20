import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactUs.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div>
        <div className="form-container">
          <div className="contact-form">
            <h4
              style={{ marginLeft: "8px", color: "#2c3e50", fontWeight: "600" }}
            >
              Reach us quickly
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Name"
              />
              {errors?.number?.type === "required" && (
                <span style={{ color: "red" }}>*This field is required</span>
              )}
              <br />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Email"
              />
              {errors?.number?.type === "required" && (
                <span style={{ color: "red" }}>*This field is required</span>
              )}
              <br />
              <input
                type="number"
                {...register("number", { required: true })}
                placeholder="Your Phone"
              />

              <br />
              <input
                type="text"
                {...register("company", { required: true })}
                placeholder="Your Company"
              />

              <textarea
                name="message"
                id="message"
                cols="74"
                rows="5"
                placeholder="Message"
                onChange={handleChange}
                {...register("textarea", { required: "This is required" })}
              >
                {text}
              </textarea>

              <br />
              <input type="submit" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
