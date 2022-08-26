import { ProductStyle } from '../styles/ProductStyle';
import Link from 'next/link';

export default function Product({ product }) {
  console.log(product);
  const { description, price, title, image, slug } = product.attributes;
  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.large.url}></img>
        </div>
      </Link>
      <h3>{title}</h3>
      <h3>{description}</h3>
    </ProductStyle>
  );
}
