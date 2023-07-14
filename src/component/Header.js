import "./header.css";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  return (
    <header2>
      <div className="header2">
        <img src="logo.png" alt="" className="img" />
        <span className="navtitle">대충 만들어본 CRUD</span>
      </div>
      <div className="menu">
        <img src="hamburger.png" className="img2" onClick={handleClick} />
        {menu === true ? (
          <div className="menu">
            <img src="menu.png" alt="" className="menuimg" />
            <div className="menubar-1">오늘 할일 리스트</div>
            <div className="menubar-2">
              <img src="gift.png" alt="" className="icon" />
              달력 보러가기
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
