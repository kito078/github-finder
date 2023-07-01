import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProtoType from "prop-types";

function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">Navbar</div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.protoType = {
  title: ProtoType.string,
};

export default Navbar;
