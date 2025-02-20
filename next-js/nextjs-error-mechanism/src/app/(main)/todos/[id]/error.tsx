"use client";

import BackButton from "@/components/back-list/back-button";

const Error = () => {
  return (
    <div className="text-center h-lvh flex flex-col justify-center items-center">
      <h1>oops! something went wrong!</h1>
      <BackButton />
    </div>
  );
};

export default Error;
