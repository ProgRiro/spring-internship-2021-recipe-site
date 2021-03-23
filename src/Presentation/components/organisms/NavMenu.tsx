import React from "react";
import { Icon } from "@/Presentation/components/atoms";

export const NavMenu: React.FC = () => {
  return (
    <>
      <div className="container">
        <Icon icon="mobile">アプリ</Icon>
        <Icon icon="signin">ログイン</Icon>
        <Icon icon="bars">メニュー</Icon>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};
