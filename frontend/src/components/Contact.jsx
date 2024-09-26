import React from "react";
import Navbar from "./templates/Navbar";
import Footer from "./templates/Footer";

const Contact = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <Navbar/>
        <div className="max-w-screen-2xl container mx-auto px-14 lg:px-20 mt-28 z-10 mb-14 text-justify leading-loose">
          <h1 className="text-4xl sm:text-5xl leading-snug font-semibold mb-2">Contact us &#128222;</h1>
          <p className="text-xl">At <span className="text-green-200">Paathshala</span>, we value our readers and are committed to providing the best possible experience. Whether you have a question, need assistance, or simply want to share your feedback, we’re here to help!</p>

          <h1 className="text-4xl  sm:text-5xl leading-snug mt-14 font-semibold">How We Can Assist You &#x1F9CD;</h1>
          <p className="text-xl leading-snug mt-3"><b>Customer Support:</b> If you’re facing any issues with accessing your account, downloading books, or navigating the platform, our dedicated support team is available to assist you with prompt solutions.</p>
          <p className="text-xl leading-snug mt-3"><b>Feedback & Suggestions:</b> We’re always looking to improve and grow. If you have suggestions or ideas that could enhance your experience on our platform, we’d love to hear from you.</p>
          <p className="text-xl leading-snug mt-3"><b>Partnership Inquiries:</b> If you’re an author, publisher, or content creator interested in collaborating with us, please reach out. We are always looking to build meaningful partnerships that align with our vision of delivering quality content.</p>
          <p className="text-xl leading-snug mt-3"><b>Technical Support:</b> For any technical difficulties or troubleshooting, our experts are here to ensure you enjoy a smooth, hassle-free experience on the platform.</p>
          <p className="text-xl leading-snug mt-3"><b>Email:</b> Send us an email at <span className="text-green-200">abhishektripathy201@gmail.com</span> and our team will respond within 24-48 hours.</p>
          <h2 className="text-2xl mt-10">Your feedback and satisfaction are essential to us. Feel free to contact us with any questions or concerns. We aim to respond as quickly as possible and ensure you enjoy every moment with our e-book platform.</h2>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Contact;
