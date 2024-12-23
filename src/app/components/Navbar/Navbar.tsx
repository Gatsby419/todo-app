import Link from 'next/link'
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href= 'about'>About</Link></li>
          <li>
            <Link href= '/featured-cars'>Featured cars</Link>
          </li>
        
      </ul>
    </nav>
  );
}