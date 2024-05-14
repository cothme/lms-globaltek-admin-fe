import React from "react";

interface userName {
  greetingName?: string;
}

const GreetingsSection: React.FC<userName> = ({ greetingName }) => {
  return (
    <>
      <div className="text-4xl font-garet m-4">
        Hello,{" "}
        <span className="font-garetheavy text-theme-maroon">
          {greetingName}
        </span>
        !
      </div>
    </>
  );
};

export default GreetingsSection;
