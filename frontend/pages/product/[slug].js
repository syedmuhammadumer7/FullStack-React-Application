import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from '../../styles/ProductDetails';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useState } from 'react';

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const { query } = useRouter();
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { fetching, data, error } = result;
  if (fetching) return <p>Loading!</p>;
  if (error) return <p>Error ${error}</p>;
  const { image, title, description, price, slug } =
    data.products.data[0].attributes;
  console.log(image);
  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button
            onClick={() => {
              setQuantity((state) => {
                return state + 1;
              });
            }}
          >
            <AiFillPlusCircle />
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              setQuantity((state) => {
                return state - 1;
              });
            }}
          >
            <AiFillMinusCircle />
          </button>
        </Quantity>
        <Buy>Add to Cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
