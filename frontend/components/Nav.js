import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavStyle, NavItems } from '../styles/NavStyle';
export default function Nav() {
  return (
    <NavStyle>
      <Link href={'/'}>E-Commerce</Link>
      <div>
        <NavItems>
          <div>
            <FiShoppingBag />
            <h3>Cart</h3>
          </div>
        </NavItems>
      </div>
    </NavStyle>
  );
}
