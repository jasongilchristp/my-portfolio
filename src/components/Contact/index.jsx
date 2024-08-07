import React from "react";
import "./style.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Get in touch with me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.910163187105!2d79.87608531465719!3d16.480085988628247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb98131b0c28fd874!2zMTbCsDI4JzQ4LjMiTiA3OcKwNTInNDEuOCJF!5e0!3m2!1sen!2sin!4v1638802594573!5m2!1sen!2sin"
        width="400"
        height="300"
        frameborder="0"
        style={{ border: 0 }}
        title="Find me here!"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <h4>Phone</h4>
      <p>Call or text me at: +91 8660056268</p>
      <h4>Email</h4>
      <p>Shoot me an email at: jason.gilchrist.p@gmail.com</p>

      <h4>Address</h4>
      <p>
        Find me at: H.No.: 8-67/3b, Opposite Kotha's Apartments, Railway Station
        Road, Piduguralla - 522413
      </p>
    </div>
  );
}
