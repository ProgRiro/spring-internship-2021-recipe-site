import React, { useState } from "react";
import { useRouter } from "next/router";
import { Colors } from "@/Library/StyleTypes";
import { LinkButton, IconButton } from "@/Presentation/components/molecules";

export const SearchForm: React.FC = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const { query } = router;

  const getParams = () => {
    if (!input) return "/";
    const params = new URLSearchParams();
    params.append("keyword", input);
    return `/?${params.toString()}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      query.keyword = input;
      router.push({ query });
    }
  };

  return (
    <>
      <div className="container">
        <input
          className="input"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <LinkButton to={getParams()}>
          <IconButton
            icon="search"
            color="white"
            bgColor="green"
            className="searchButton"
          />
        </LinkButton>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 5px;
          }
          .input {
            width: 100%;
            padding: 8px 15px;
            box-shadow: 0 0 4px ${Colors.black} inset;
            border-radius: 20px 0 0 20px;
            border: none;
          }
        `}
      </style>
    </>
  );
};
