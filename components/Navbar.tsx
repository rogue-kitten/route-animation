import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="relative z-20 text-2xl font-medium">
      <ul className="flex gap-12">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
