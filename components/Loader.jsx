import React from "react";
import Spinner from "../public/spinner.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <>
      <Image
        classname="w-[200px] m-auto block"
        src={Spinner}
        alt="Loading..."
      />
    </>
  );
};

export default Loader;
