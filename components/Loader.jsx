import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <>
      <Image classname="w-[200px] m-auto block" src={null} alt="Loading..." />
    </>
  );
};

export default Loader;
