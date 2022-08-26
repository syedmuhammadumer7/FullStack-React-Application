import Head from 'next/head';
import Link from 'next/link';
import { PRODUCT_QUERY } from '../lib/query';
import { useQuery } from 'urql';
import Product from '../components/Product';
import { Gallery } from '../styles/Gallery';
export default function Home() {
  const [{ data, fetching, error }] = useQuery({ query: PRODUCT_QUERY });
  if (fetching) return <p>Loading!</p>;
  if (error) return <p>Error ${error}</p>;
  const products = data.products.data;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gallery>
        {products.map((product) => {
          return (
            <Product key={product.attributes.slug} product={product}></Product>
          );
        })}
      </Gallery>
    </div>
  );
}
