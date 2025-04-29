import React from 'react'
import { IMG } from '../Img/img'
import "../css/home.css"
import "../css/app.css"
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


export const Home = () => {

    const testimonials = [
        {
            name: "משפחת כהן",
            text: 'היה לנו את הזכות להיעזר באילה לצילומי החינה שלנו, והיו לנו תמונות פשוט מדהימות! אילה הצליחה לתפוס את כל הרגעים הייחודיים, עם תשומת לב לכל פרט קטן. הצילומים יצאו כל כך טבעיים ומרגשים – לא יכולנו לבקש יותר!״'
        },
        {
            name: "משפחת לוי",
            text: "אילה היא פשוט צלמת מדהימה! היא הצליחה לתפוס את כל הרגעים המיוחדים שלנו בצורה כל כך מקצועית ורגישה. התמונות יצאו מושלמות!״"
        }
    ];

    const Testimonial = ({ testimonials }) => {
        const [currentTestimonial, setCurrentTestimonial] = useState(0);
        const [fade, setFade] = useState(true);
        useEffect(() => {
            const interval = setInterval(() => {
                setFade(false);
                setTimeout(() => {
                    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                    setFade(true);
                }, 3000); // Duration of fade-out animation
            }, 5000);

            return () => clearInterval(interval);
        }, [testimonials.length]);

        return (
            <div className={`testimonial ${fade ? 'fade-in' : 'fade-out'}`}>
                <p className='txt_photografhy txt11_photografhy'>{testimonials[currentTestimonial].text}</p>
                <h3 className='taytel_photografhy'>{testimonials[currentTestimonial].name}</h3>
            </div>
        );
    };
    return (
        <div className='div_home'>
            <Helmet>
                <title>אילה גפן צלמת</title>
                <meta id='hdr3000' name="description" content="צלמת מקצועית בסטודיו חמים ומשפחתי – מתמחה בצילומי משפחה, ניו בורן, בת מצווה, וחלקה. חוויה אישית, רגישה ובלתי נשכחת." />
                <meta id='hdr3001' property="og:title" content="צילום ניו בורן | בת מצווה | משפחה | חלקה – בסטודיו מקצועי ומרגש" />
                <meta id='hdr3002' property="og:description" content="סטודיו צילום מקצועי לצילומי ניו בורן, משפחה, בת מצווה וחלקה. צילום באווירה נעימה עם יחס אישי לכל לקוח." />
                <meta id='hdr3003' property="og:image" content="https://res.cloudinary.com/dgujclab8/image/upload/f_webp/Rectangle_1_c1lhya" />
            </Helmet>
            <img className='imag_taytel_photografhy' src={IMG.img1} alt="" />
            <div className='home_text_img_bottom'>
                <div className='home_img_img'>
                    <img className='img_txt_home1 img_txt_home11' src={IMG.img13} alt="" />
                    <img className='img_txt_home' src={IMG.img2} alt="" />
                    <img className='img_txt_home1' src={IMG.img14} alt="" />
                    <img className='img_txt_home1' src={IMG.img15} alt="" />
                </div>
                <div className='home_text_bottom'>
                    <div className='home_text_bottom'>
                        <h1 className=' taytel_photografhy taytel1_photografhy'>אילה גפן – צלמת המתמחה ברגעים בלתי נשכחים</h1>
                        <p className='txt_photografhy'>החיים מלאים ברגעים קטנים וגדולים, ואני כאן כדי להנציח אותם עבורכם.
                            צילום הוא לא רק עבודה בשבילי – זה דרך לתפוס את הרגשות והחוויות שמאחורי כל רגע,
                            להפוך אתם לתמונות שיבלו איתכם לאורך השנים.
                        </p>
                        <p className='txt1_photografhy'>אני מאמינה שכל אדם הוא ייחודי, וכל אירוע הוא סיפור שצריך להיכתב.
                            אני מתמחה בצילום אירועים מיוחדים כמו צילומי ניו בורן, חלקה, בת מצווה, חינה ואירוסין. כל אירוע הוא הזדמנות לתפוס את הרגעים הייחודיים, ואני כאן כדי להבטיח שתקבלו
                            תמונות שמספרות סיפור ויוצרים זיכרונות שלא נשכחים.
                        </p>
                    </div>
                </div>
            </div>
            <Link to="/אודות" className='button_home link_photografhy' onClick={() => window.scrollTo(0, 0)} >עוד עלי</Link>
            <div className='photos_home'>
                <h2 className='taytel_photografhy'> -הצצה לתמונות שלנו-</h2>
                <div className='photos1_home'>
                    <div className="img_photos_home">
                        <img src={IMG.img3} alt="" />
                    </div>
                    <div className="img_photos_home">
                        <img src={IMG.img4} alt="" />
                    </div>
                    <div className="img_photos_home">
                        <img src={IMG.img5} alt="" />
                    </div>
                </div>
                <div className='photos1_home'>
                    <div className="img_photos_home">
                        <img src={IMG.img6} alt="" />
                    </div>
                    <div className="img_photos_home">
                        <img src={IMG.img7} alt="" />
                    </div>
                    <div className="img_photos_home">
                        <img src={IMG.img8} alt="" />
                    </div>
                </div>
                <Link to="/גלריה" onClick={() => window.scrollTo(0, 0)} className='link_photografhy button_home'
                >לכל התמונות
                </Link>
            </div>
            <div className='testimonial1_container' >
                <h2 className='taytel_photografhy' >-המלצות  הלקוחות-</h2>
                <div className='testimonial_container'>
                    <Testimonial testimonials={testimonials} />
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div >
            {/* <div className=' photos_home photos2_home'>
                <h2 className='taytel_photografhy'>-האלבומים שלי -</h2>
                <div className='photos1_home'>
                    <div className='photo_album_wrapper'>
                        <img className='img_album_home' src={IMG.img9} alt="" />
                        <button className='button_album_home'>חלאקה של חיים</button>
                    </div>
                    <div className='photo_album_wrapper'>
                        <img className='img_album_home' src={IMG.img10} alt="" />
                        <button className='button_album_home'>  יעל חוגגת 12</button>
                    </div>
                </div>
                <div className='photos1_home'>
                    <div className='photo_album_wrapper'>
                        <img className='img_album_home' src={IMG.img11} alt="" />
                        <button className='button_album_home'> הדס ביבי</button>
                    </div>
                    <div className='photo_album_wrapper'>
                        <img className='img_album_home' src={IMG.img12} alt="" />
                        <button className='button_album_home'> האלבום של יונתן</button>
                    </div>
                </div>
                <button className='button_home'> לכל האלבומים</button>
            </div> */}


        </div >
    );
}
