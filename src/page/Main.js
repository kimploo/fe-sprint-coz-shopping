import { useEffect, useRef, useState } from 'react';
import Header from '../component/Header/Header';

import ProductList from '../component/Product/ProductList';

export default function Main() {
  // API Call (네트워크 요청) -> useEffect
  const [products, setProducts] = useState([]);

  // React 대 선배님: Dan Abramov: 댄 형님
  // DOM 직접 접근하지 마라 제발 ..
  // React는 VDOM DOM 만지는 방식을 정해놨어요, 중간에 갑자기 너 맘대로 DOM에 접근하면 잘 안됩니다.
  // 근데.. 어쩔수 없는 진짜 어쩔 수 없는 경우, document.querySelector한 것 처럼 DOM의 주소를 주겠다.

  useEffect(() => {
    // const customFetch = async () => {
    //   const res = await fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=10`);
    //   const json = await res.json();
    //   setProducts(json)
    // }
    // customFetch()

    // 브라우저의 API의 하나로 Fetch API가 있습니다.
    // 브라우저 내장 기능
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
    // 비동기
    // 정신없이 순서 뒤죽박죽으로 오는 요청을
    // 순서대로 잘 처리하기 위해서
    // async/await
    // await 뒤의 비동기 요청을 동기적으로 처리

    // 무한스크롤을 처리하는 방식이 두가지가 있습니다.
    // 1. 10개씩 요청을 그때그때 보내서 화면에 보여주는 방식
    // 브라우저 리소스, 클라이언트 리소스를 덜 사용합니다.
    // 100개 보여주기 위해서 10번의 네트워크 요청을 보내야 합니다.

    // 2. 많은 요청을 한 번에 받아와서 나눠서 보여주는 방식 (v)
    // 변수에 데이터 저장하는 것 => 기기 메모리에 데이터를 저장하는 방식

    // 1990년대
    // 기기 리소스가 너무 많이 들면 앱이 안돌아갑니다.
    // 네트워크 요청 비쌋어요 -> 바람의나라 모뎀 -> 엄청 비쌉니다.
    // CD로 설치를 많이 했었어요
  }, []);

  return (
    <section>
      <Header></Header>
      {/* // App => Main => useState (상태 생성) => useEffect => render(return) => 빈 배열 렌더링
      => fetch  => 데이터를 받아오고 => useState의 상태 갱신 함수 setProduct(데이터)
      => 어? 상태 데이터가 바뀌었네? => 컴포넌트를 재렌더링 => 비로소 products들이 보였다. */}
      <ProductList
        products={products}
      ></ProductList>
    </section>
  );
}
