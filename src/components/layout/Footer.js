import React from "react";

const footerYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <h5>svg</h5>
        <p>Copyright &copy; {footerYear} All reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
