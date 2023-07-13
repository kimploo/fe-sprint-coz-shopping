import { useEffect, useRef, useState } from "react";
import Product from './Product';
import DebugComponent from '../../util/DebugComponent';

export default function ProductList ({
  products,
}) {
  const bottom = useRef(null); 
  const [page, setPage] = useState(1);
  const [currentProduct, setCurrentProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const renderNextPage = () => {
    setIsLoading(true);
    setCurrentProducts(products.slice(0, 10 * (page + 1)));
    setPage(page + 1);
    console.log('currentProducts', currentProduct);
    console.log('products', products);
    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries[0]);
        if (entries[0].isIntersecting) {
          setIsLoading(true);
          setCurrentProducts(products.slice(0, 10 * (page + 1)));
          setPage(page + 1);
          console.log('currentProducts', currentProduct);
          console.log('products', products);
          setIsLoading(false);
          // 여기 아래 있는 코드는, bottom 엘리먼트에 도달하면 호출된다.
          // setCurrentProducts(products.slice(0, 10 * page))

          // 1. 10개씩 요청을 그때그때 보내서 화면에 보여주는 방식
          // 브라우저 리소스, 클라이언트 리소스를 덜 사용합니다.
          // 100개 보여주기 위해서 10번의 네트워크 요청을 보내야 합니다.
          // async function fetchMorePosts() {
          //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          //   const data = await res.json();
          //   setPosts((prevPosts) => [...prevPosts, ...data]);
          //   setLoading(false);
          //   setShowLoading(false);
          // }
          // fetchMorePosts();

          // 2. 많은 요청을 한 번에 받아와서 나눠서 보여주는 방식 (v)
          // 변수에 데이터 저장하는 것 => 기기 메모리에 데이터를 저장하는 방식
        }
      }
    );
    observer.observe(bottom.current);
    // return observer.unobserve(bottom.current);
  }, []);

  return (
    <>
      {currentProduct.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            image_url={product.image_url}
          ></Product>
        );
      })}
      <DebugComponent
        data={{ products, currentProduct, page }}
      ></DebugComponent>
      <button onClick={() => {
        setCurrentProducts(products.slice(0, 10 * (page + 1))); 
        setPage(page + 1);
        console.log(currentProduct, page)
      }}>check</button>
      {isLoading ? 'loading...' : null}
      <div ref={bottom}>wow</div>
    </>
  );
};
