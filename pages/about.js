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
                <title>About Sabit Bin Azad</title>
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
                <div className="row align-items-center">
                    <div className="col-md-4 mb-4">
                        <Image
                            src="/images/profile.jpg"
                            alt="Profile"
                            width={400}
                            height={300}
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-7" style={{ textAlign: 'justify' }}>
                        <h2>Hello! I am Sabit Bin Azad</h2>
                        <p>
                            A passionate Computer Science and Engineering student with a vision to innovate and solve complex problems through technology. My journey in the tech world began with a deep interest in programming, algorithms, and software development.
                        </p>
                        <p>I specialize in:</p>
                        <ul>
                            <li><strong>Web Development:</strong> Building responsive and dynamic websites using technologies like React, Next.js, and Node.js.</li>
                            <li><strong>Data Structures & Algorithms:</strong> Mastering the foundations of computer science to solve real-world problems efficiently.</li>
                            <li><strong>Software Engineering:</strong> Designing, developing, and maintaining scalable and robust software solutions.</li>
                            <li><strong>Machine Learning:</strong> Exploring the possibilities of AI and data science to create intelligent applications.</li>
                        </ul>
                        <p>
                            My approach to problem-solving revolves around clean, efficient code and continuous learning. Whether it’s optimizing an algorithm or developing a full-stack application, I am always excited to tackle new challenges and grow as a developer.
                        </p>
                        <p>
                            As a student, I am constantly experimenting with new technologies and tools to stay ahead in this ever-evolving field. Each project is a chance to refine my skills and contribute to meaningful solutions.
                        </p>
                        <p>
                            When I’m not coding, you can find me reading about the latest tech trends, attending coding meetups, or working on personal projects.
                        </p>
                        <p>
                            Thank you for visiting my portfolio! I invite you to explore my work and join me on this exciting journey in the world of technology and innovation.
                        </p>
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