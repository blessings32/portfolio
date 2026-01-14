function Title(props) {
  let style = props.className || "";
  style = "relative w-max " + style;
  return (
    <div>
      <div className={style}>
        <div className="absolute  bottom-[-6px] left-0 w-6/12 h-1 bg-gradient-to-l from-accent-400 to-primary-900 opacity-50"></div>
        <h1 className="mb-2 text-3xl  text-left font-bold text-textColor-50">
          {props.text}
        </h1>
      </div>
    </div>
  );
}
export default Title;
