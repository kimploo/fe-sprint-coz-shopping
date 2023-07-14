import "./section.css";

export default function Profile() {
  const handleTodayListClick = () => {
    // 오늘 할일 리스트 클릭 시
  };

  const handleCalendarClick = () => {
    // 달력 보러가기 클릭 시
  };

  const handleFavoritesClick = () => {
    // 즐겨찾기 클릭 시
  };

  return (
    <section>
      <img src="profile.jpg" className="profile" alt="프로필 이미지" />
      <span className="profilefont">프로필 이름</span>
      <ul className="list">
        <li onClick={handleTodayListClick}>오늘 할일 리스트</li>
        <li onClick={handleCalendarClick}>달력 보러가기</li>
        <li onClick={handleFavoritesClick}>즐겨찾기</li>
      </ul>
    </section>
  );
}
