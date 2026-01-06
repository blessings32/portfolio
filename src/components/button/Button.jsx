import React from "react";
const Button = (props) => {
  const type = props.type;
  if (type === "navLink") {
    return (
      <>
        <a
          href={
            "#" +
            props.textValue
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/ /g, "-")
          }
          onClick={props.onClick}
          className="px-4 py-2 text-textColor-100 hover:text-accent-400 transition-colors duration-200 whitespace-nowrap text-sm sm:text-base"
        >
          {props.textValue}
        </a>
      </>
    );
  } else if (type === "button") {
    let style = props.className || "";
    let icon = props.icon || "";
    style +=
      " bg-secondary-500 mt-7 text-xl p-2 w-36 font-semibold hover:text-black text-white h-11 text-center rounded-lg hover:bg-slate-200 ";
    return (
      <>
        <a href={props.href} className={style}>
          {props.textValue} {icon}
        </a>
      </>
    );
  }
};

export default Button;
