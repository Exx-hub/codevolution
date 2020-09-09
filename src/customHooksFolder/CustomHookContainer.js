import React from "react";
import DocTitleOne from "./DocTitleOne";
import DocTitleTwo from "./DocTitleTwo";
import CustomCounterOne from "./CustomCounterOne";
import CustomCounterTwo from "./CustomCounterTwo";
import UserForm from "./UserForm";
import UserFormTwo from "./useFormTwo";

function CustomHookContainer() {
  return (
    <div>
      {/*
      <DocTitleOne />
      <DocTitleTwo />
      <CustomCounterOne />
      <CustomCounterTwo />
      */}
      <UserForm />
      <UserFormTwo />
    </div>
  );
}

export default CustomHookContainer;
