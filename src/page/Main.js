import { useEffect, useState } from 'react';
import Header from '../component/Header/Header'
import Product from '../component/Product/Product';
import DebugComponent from '../util/DebugComponent';

export default function Main() {
  // API Call (네트워크 요청) -> useEffect
  const [products, setProducts] = useState([]);

  useEffect(() => {

    // const customFetch = async () => {
    //   const res = await fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=10`);
    //   const json = await res.json();
    //   setProducts(json)
    // }
    // customFetch()

    // 브라우저의 API의 하나로 Fetch API가 있습니다.
    // 브라우저 내장 기능
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=10`)
    .then(res => res.json())
    .then(json => setProducts(json))


    // 비동기
      // 정신없이 순서 뒤죽박죽으로 오는 요청을
      // 순서대로 잘 처리하기 위해서
    // async/await
      // await 뒤의 비동기 요청을 동기적으로 처리
  }, [])

  return (
    <section>
      <Header></Header>
      {/* // App => Main => useState (상태 생성) => useEffect => render(return) => 빈 배열 렌더링
      => fetch  => 데이터를 받아오고 => useState의 상태 갱신 함수 setProduct(데이터)
      => 어? 상태 데이터가 바뀌었네? => 컴포넌트를 재렌더링 => 비로소 products들이 보였다. */}
      {products.map((product) => {
        return <Product key={product.id} title={product.title} image_url={product.image_url}></Product>
      })}
      <DebugComponent data={products}></DebugComponent>
    </section>
  );
}
