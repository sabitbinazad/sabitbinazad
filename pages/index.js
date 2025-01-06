import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';



export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Adding a Head component for title and meta information */}
            <Head>
                <title>Sabit Bin Azad</title>
                <meta name="description" content="Welcome to my professional portfolio as a fresh CSE student." />
                <meta name="keywords" content="CSE Student, Portfolio, Sabit Bin Azad, Programming, Software Development" />
                <meta name="author" content="Sabit Bin Azad" />
                <link rel="icon" href="/images/logo.jpeg" />
            </Head>


            <header className="text-dark py-3">
                <div className="container d-flex align-items-center justify-content-between">
                    {/* Logo on the left */}
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <Image
                                src="/images/logo.jpeg"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="rounded-circle"
                            />
                        </Link>
                        <h1 className="mb-0 ms-2">SABIT BIN AZAD</h1>
                    </div>

                    {/* Hamburger menu icon for small screens */}
                    <div className="d-block d-md-none">
                        <button
                            onClick={toggleMenu}
                            className="navbar-toggler"
                            aria-expanded={isOpen}
                            aria-controls="navbar-menu"
                        >
                            <i className="fas fa-bars" style={{ color: '#FFFFFF' }}></i>
                        </button>
                    </div>

                    {/* Navigation links for larger screens */}
                    <nav
                        id="navbar-menu"
                        className={`nav justify-content-center d-none d-md-flex ${isOpen ? 'd-none' : ''}`}
                    >
                        <Link href="/" className="nav-link text-white">
                            Home
                        </Link>
                        <Link href="/about" className="nav-link text-white">
                            About Me
                        </Link>
                        <Link href="/blog" className="nav-link text-white">
                            Blog
                        </Link>
                        <Link href="/contact" className="nav-link text-white">
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`} >
                <button onClick={toggleMenu} className="close-btn">
                    <i className="fas fa-times"></i>
                </button>
                <nav className="nav flex-column text-center mt-4">
                    <Link href="/" className="nav-link text-white">
                        Home
                    </Link>
                    <Link href="/about" className="nav-link text-white">
                        About Me
                    </Link>
                    <Link href="/blog" className="nav-link text-white">
                        Blog
                    </Link>
                    <Link href="/contact" className="nav-link text-white">
                        Contact
                    </Link>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="overlay" onClick={toggleMenu} />
            )}

            <main className="container py-5">

                <div style={{ backgroundColor: '#F3E5DC' }} className="text-center text-dark py-3">
                    <h2>Unveiling My Journey in Computer Science</h2>
                    <p className="container text-center" style={{ fontSize: '18px' }}>
                        Explore my passion for technology, programming, and innovative solutions in the world of software development.
                    </p>
                </div>


            </main>

            <footer>
                <div className="container text-center">
                    <p>© 2025 SABIT BIN AZAD | All Rights Reserved</p>
                    <p>
                        Follow me on
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-danger ms-2"
                        >
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
}