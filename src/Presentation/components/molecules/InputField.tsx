import { forwardRef, ForwardRefRenderFunction } from "react";
import { Colors, FontSizes } from "@/Library";

type inputType = "text";

interface Props {
  labelName: string;
  inputName: string;
  placeholder: string;
  type?: inputType;
  isDouble?: boolean;
}

const InputField: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { labelName, inputName, placeholder, type = "text", isDouble = false },
  ref
) => {
  return (
    <>
      <div className="container">
        <label className="label">
          {labelName}
          <input
            className="input"
            name={inputName}
            ref={ref}
            placeholder={placeholder}
            type={type}
          />
        </label>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            margin: 0 auto;
          }
          .label {
            margin: 5px 8px;
          }
          .input {
            display: block;
            width: ${isDouble ? "80%" : "90%"};
            margin: 0 auto;
            padding: 5px 8px;
            border-radius: 15px;
            border: solid 1px ${Colors.black};
            font-size: ${FontSizes.md};
          }
        `}
      </style>
    </>
  );
};

export const ForwordInpuField = forwardRef(InputField);
