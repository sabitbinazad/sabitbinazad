import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import Image from 'next/image';


export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <>

            {/* Adding a Head component for title and meta information */}
            <Head>
                <title>Sabit Bin Azad Blog</title>
                <meta name="description" content="Welcome to my professional portfolio as a fresh CSE student." />
                <meta name="keywords" content="CSE Student, Portfolio, Sabit Bin Azad, Programming, Software Development" />
                <meta name="author" content="Sabit Bin Azad" />
                <link rel="icon" href="/images/head.png" />
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

                <div style={{ backgroundColor: '#F3E5DC' }} className="text-center text-dark py-3 mb-4">
                    <h2>Welcome to My Blog</h2>
                    <p className="container text-center" style={{ fontSize: '18px' }}>
                        Explore my journey, insights, and ideas in the world of computer science and software development.
                    </p>
                </div>

                <div className="row">
                    {/* Blog 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <Image
                                src="/images/tech/blog1.jpeg" // Update to an image relevant to CSE
                                className="card-img-top"
                                alt="Blog 1"
                                width={350}
                                height={300}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Mastering Data Structures</h5>
                                <p className="card-text">
                                    Dive into essential data structures and their applications in real-world problem solving.
                                </p>
                                <Link href="/blog/mastering-data-structures" className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <Image
                                src="/images/tech/blog2.jpeg" // Update to an image relevant to CSE
                                className="card-img-top"
                                alt="Blog 2"
                                width={350}
                                height={300}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Building Your First Web App</h5>
                                <p className="card-text">
                                    Learn how to create your first web application using modern technologies like React and Next.js.
                                </p>
                                <Link href="/blog/building-your-first-web-app" className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Blog 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <Image
                                src="/images/tech/blog3.jpeg" // Update to an image relevant to CSE
                                className="card-img-top"
                                alt="Blog 3"
                                width={350}
                                height={300}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Understanding Algorithms</h5>
                                <p className="card-text">
                                    A guide to mastering algorithms and improving your problem-solving skills.
                                </p>
                                <Link href="/blog/understanding-algorithms" className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
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