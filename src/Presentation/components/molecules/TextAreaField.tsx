import { forwardRef, ForwardRefRenderFunction } from "react";
import { Colors, FontSizes } from "@/Library";

interface Props {
  labelName: string;
  inputName: string;
  placeholder: string;
}

const TextAreaField: ForwardRefRenderFunction<HTMLTextAreaElement, Props> = (
  { labelName, inputName, placeholder },
  ref
) => {
  return (
    <>
      <div className="container">
        <label className="label">
          {labelName}
          <textarea
            className="input"
            name={inputName}
            ref={ref}
            placeholder={placeholder}
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
            width: 90%;
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

export const ForwordTextAreaField = forwardRef(TextAreaField);
