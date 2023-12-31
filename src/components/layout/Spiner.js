import React from "react";
import Spinner from "./assets/spinner.gif";

function Spiner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spiner;
