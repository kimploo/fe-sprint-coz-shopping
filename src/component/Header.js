import "./header.css";
import { useState } from "react";

export default function Header() {
  const [menu, setmenu] = useState(false);
  return (
    <header2>
      <div className="header2">
        <img src="logo.png" alt="" className="img" />
        <span className="navtitle">아이고 맙소사 쇼핑</span>
      </div>
      <div className="menu">
        <img
          src="hamburger.png"
          className="img2"
          onClick={() => {
            setmenu(!menu);
          }}
        />
        {menu === true ? (
          <div className="menu">
            <img src="menu.png" alt="" className="menuimg" />
            <div className="menubar-1">내 프로필</div>
            <div className="menubar-2">
              <img src="gift.png" alt="" className="icon" />
              상품페이지
            </div>
            <div className="menubar-3">
              <img src="star.png" alt="" className="icon" />
              즐겨찾기
            </div>
          </div>
        ) : null}
      </div>
    </header2>
  );
}
