import Button from '../components/Button.jsx';

const Contact = () => {
  return (
    <section className="c-space p-32" id="contact">
      <div className="grid-container text-center">
        <p className="grid-headtext">Get in Touch</p>
        <p className="grid-subtext mb-6">
          Feel free to reach out through any of the platforms below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919175917604"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn text-white-500 hover:text-white transition-colors duration-300"
          >
            <img src="assets/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
            WhatsApp
          </a>
          <a
            href="mailto:visheshbhandare9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn text-white-500 hover:text-white transition-colors duration-300"
          >
            <img src="assets/gmail.svg" alt="Gmail" className="h-6 w-6" />
            Email
          </a>
          <a
            href="https://github.com/vishesh2201"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn text-white-500 hover:text-white transition-colors duration-300"
          >
            <img src="assets/github.svg" alt="GitHub" className="h-6 w-6" />
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/vishesh-bhandare-1a9906244"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn text-white-500 hover:text-white transition-colors duration-300"
          >
            <img src="assets/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/wisheswithoutwishes/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn text-white-500 hover:text-white transition-colors duration-300"
          >
            <img src="assets/instagram.svg" alt="Instagram" className="h-6 w-6" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;