import Link from "next/link";


export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <h2 className="logo-text">S.</h2>
      </div>
      <div className="name">
        <p className="name-text">Saeed</p>
      </div>
      {/* Nav buttons */}
      <ul className="nav-links">
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="#about">About</Link>
          <Link className="nav-link" href="#services">Services</Link>
          <Link className="nav-link" href="#project">Projects</Link>
          <Link className="nav-link" href="#contact">Contact</Link>
        </li>
      </ul>

      
    </header>
  );
}
