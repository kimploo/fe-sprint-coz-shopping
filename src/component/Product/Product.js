import './product.css';

export default function Product({ title, image_url }) {
  return (
    // flex container
    // TODO: div 말고 좀 더 좋은 엘리먼트 이름 고민
    <div className='product-container'>
      <img src={image_url} alt='product picture' style={{ height: '400px'}}/>
      <h3>{title}</h3>
      <span className='product-detail'>product detail</span>
    </div>
  );
}
