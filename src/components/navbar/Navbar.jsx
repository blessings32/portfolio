import React from "react";
import { Component } from "react";
import Button from "../button/Button";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex space-x-6 flex-row m-0 h-16 w-full border border-slate-700 fixed">
        <h1 className="flex items-center w-2/6 text-textColor text-2xl m-0 p-4  font-bold">
          BLESSINGS CHALEKA
        </h1>
        <div className="space-x-0 pr-12 justify-end right w-4/6 flex flew-row h-full ">
          <Button type="navLink" textValue="Home" />
          <Button type="navLink" textValue="About" />
          <Button type="navLink" textValue="Skills" />
          <Button type="navLink" textValue="Coursework" />
          <Button type="navLink" textValue="Projects" />
          <Button type="navLink" textValue="Education" />
          <Button type="navLink" textValue="Awards & honors" />
        </div>
      </div>
    );
  }
}

export default Navbar;
