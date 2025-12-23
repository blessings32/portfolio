import React from "react";
const Button = (props) => {
  const type = props.type;
  if (type === "navLink") {
    return (
      <>
        <button className="flex font-semibold w-64 justify-center items-center text-lg text-textColor m-0 p-0 hover:border-b-4 hover:border-b-[#acbd0f] hover:bg-slate-900">
          {props.textValue}
        </button>
      </>
    );
  }
};

export default Button;
