import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "../css/heder.css"
import "../css/app.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // פונקציה לפתיחת/סגירת התפריט
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // פונקציה לפתיחת/סגירת תפריט הגלריה
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".site-header");
            if (header) {
                if (window.scrollY > 155) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header_header">
            <Helmet>
                <title>אילה גפן צלמת</title>
                <meta id='hdr3000' name="description" content="צלמת מקצועית בסטודיו חמים ומשפחתי – מתמחה בצילומי משפחה, ניו בורן, בת מצווה, וחלקה. חוויה אישית, רגישה ובלתי נשכחת." />
                <meta id='hdr3001' property="og:title" content="צילום ניו בורן | בת מצווה | משפחה | חלקה – בסטודיו מקצועי ומרגש" />
                <meta id='hdr3002' property="og:description" content="סטודיו צילום מקצועי לצילומי ניו בורן, משפחה, בת מצווה וחלקה. צילום באווירה נעימה עם יחס אישי לכל לקוח." />
                <meta id='hdr3003' property="og:image" content="https://res.cloudinary.com/dgujclab8/image/upload/f_webp/Rectangle_1_c1lhya" />
            </Helmet>
            <div className='div_header'>
                <Link className='link_photografhy' to="/" >
                    <img className='image_logo' src="https://res.cloudinary.com/dgujclab8/image/upload/f_webp/Rectangle_1_c1lhya" onClick={() => window.scrollTo(0, 0)} alt=" צילום אילה גפן" loading="lazy" />
                </Link>
                <Link id='hdr3013' className='taytel_heder_photografhy botton_heder' to="#" onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}>
                    <button className='botton_heder' >
                        דברו איתי
                    </button>
                </Link>
            </div>

            <nav className='nav-header' aria-label="תפריט ניווט ראשי באתר שלנ">
                <Link className='link_photografhy' to="/" >
                    <img className='link_photografhy' src="https://res.cloudinary.com/dgujclab8/image/upload/f_webp/Rectangle_1_c1lhya" onClick={() => window.scrollTo(0, 0)} alt=" צילום אילה גפן" loading="lazy" />
                </Link>
                <Link id='hdr3006' className='taytel_heder_photografhy' to="/" onClick={() => window.scrollTo(0, 0)}><p>דף בית</p></Link>
                <Link id='hdr3007' className='taytel_heder_photografhy' to="/אודות" onClick={() => window.scrollTo(0, 0)}>אודות</Link>

                {/* תפריט נפתח לגלריה */}
                <div className="dropdown">
                    <Link to="/גלריה" className="taytel_heder_photografhy" onClick={toggleDropdown}>
                        גלריה
                    </Link>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <Link to="גלריה/?category=משפחה" onClick={() => window.scrollTo(0, 0)} className='txt_photografhy'>משפחה</Link>
                            <Link to="גלריה/?category=סטודיו" onClick={() => window.scrollTo(0, 0)} className='txt_photografhy'>סטודיו</Link>
                            <Link to="גלריה/?category=בת מצווה" onClick={() => window.scrollTo(0, 0)} className='txt_photografhy'>בת מצווה</Link>
                            <Link to="גלריה/?category=חלקא" onClick={() => window.scrollTo(0, 0)} className='txt_photografhy'>חלקא</Link>
                            <Link to="גלריה/?category=ניו בורן" onClick={() => window.scrollTo(0, 0)} className='txt_photografhy'>ניו בורן</Link>
                        </div>
                    )}
                </div>

                <Link id='hdr3012' className='taytel_heder_photografhy' to="/שאלות תשובות" onClick={() => window.scrollTo(0, 0)}>שאלות תשובות</Link>
                <Link id='hdr3013' className='taytel_heder_photografhy botton_heder' to="#" onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}>
                    <button className='botton_heder' >
                        דברו איתי
                    </button>
                </Link>
            </nav>

            {/* תפריט נפתח לסמארטפון */}
            <button className="menu-icon" onClick={toggleMenu}>☰</button>
            <nav className={`mobile_menu ${menuOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={toggleMenu}>✖</button>
                <Link to="/" onClick={toggleMenu}>בית</Link>
                <Link to="/אודות" onClick={toggleMenu}>אודות</Link>
                <Link to="/גלריה" onClick={toggleMenu}>גלריה</Link>
                <Link to="/אלבומים" onClick={toggleMenu}>אלבומים</Link>
                <Link to="/שאלות תשובות" onClick={toggleMenu}>שאלות תשובות</Link>
            </nav>
        </header>
    );
};

export default Header;
