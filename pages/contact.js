import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import Image from 'next/image';
import axios from 'axios';

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setStatus('Sending...');
    
        try {
            const response = await axios.post('/api/send-email', formData); // Send POST request to your API
            if (response.status === 200) {
                setStatus('Message sent successfully!');
            }
        } catch (err) {
            console.error(err); // Log the error to prevent unused variable warning
            setStatus('Error sending message.');
        }
    };
    

    return (
        <>
            {/* Adding a Head component for title and meta information */}
            <Head>
                <title>Contact Sabit Bin Azad</title>
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
                <h2 className="text-center">Get in Touch</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <input type="number" className="form-control" id="phone" name="phone" placeholder="Your Number"
                            value={formData.phone}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                    {status && <p>{status}</p>}
                </form>
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