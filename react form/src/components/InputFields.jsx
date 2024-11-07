import React from "react";

const InputFields = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChangeMethod,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold text-lg">
        {label}
      </label>
      <input
        value={value}
        type={type}
        className="border p-2 outline-none rounded-md focus-within:border-green-500"
        id={id}
        onChange={onChangeMethod}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputFields;
