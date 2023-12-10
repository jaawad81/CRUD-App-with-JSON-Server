import React, { forwardRef ,useId} from "react";

const Input = (
  {
    label,
    type = "text",
    className = "",
    placeholder = "Enter your text",
    ...props
  },
  ref
) => {
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-1  items-center">
      {label && (
        <label className="text-xl font-semibold mr-auto pl-[105px]" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`${className} w-2/3 outline-none border-2 py-1 px-2`}
        {...props}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
};

export default forwardRef(Input);
