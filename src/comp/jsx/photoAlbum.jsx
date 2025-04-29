
import { Helmet } from 'react-helmet';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/photoAlbum.css"
// import {  } from "../Img/img"




const PhotoAlbum = ({ newborn, halake,family,batMitzvah,studio }) => {
    const images = {
       "ניו בורן": [newborn.img16,
        newborn.img17, newborn.img18, newborn.img19, newborn.img20, newborn.img21, newborn.img22, newborn.img23, newborn.img24,
        newborn.img25, newborn.img26, newborn.img27, newborn.img28, newborn.img29, newborn.img30, newborn.img31, newborn.img32,
        newborn.img33, newborn.img34, newborn.img35, newborn.img36, newborn.img37, newborn.img38, newborn.img39, newborn.img40,
        newborn.img41, newborn.img42, newborn.img43, newborn.img44, newborn.img45, newborn.img46, newborn.img47, newborn.img48,
        newborn.img49, newborn.img50, newborn.img51, newborn.img52, newborn.img53, newborn.img54, newborn.img55, newborn.img56,
        newborn.img57, newborn.img58, newborn.img59, newborn.img60, newborn.img61, newborn.img62, newborn.img63, newborn.img64,
        ],
        "חלקא": [
            halake.img65, halake.img66, halake.img67, halake.img68, halake.img69, halake.img70, halake.img71, halake.img72, halake.img73,
            halake.img74, halake.img75, halake.img76, halake.img77, halake.img78, halake.img79, halake.img80, halake.img81, halake.img82,
            halake.img83, halake.img84, halake.img85, halake.img86, halake.img87, halake.img88, halake.img89, halake.img90,halake.img105, halake.img106, halake.img107
        ],
        "בת מצווה": [
            batMitzvah.img91, batMitzvah.img92, batMitzvah.img93, batMitzvah.img94, batMitzvah.img95, batMitzvah.img96, 
            batMitzvah.img97, batMitzvah.img98, batMitzvah.img99, batMitzvah.img100, batMitzvah.img101, batMitzvah.img102, 
            batMitzvah.img103, batMitzvah.img104
        ],
        "סטודיו": [
          studio.img128, studio.img129, studio.img130, studio.img131,
            studio.img132, studio.img133, studio.img134, studio.img135, studio.img136, studio.img137, studio.img138, studio.img139,
            studio.img140
        ],
        "משפחה": [
            family.img108, family.img109, family.img110, family.img111, family.img112, family.img113, family.img114, family.img115,
            family.img116, family.img117, family.img118, family.img119, family.img120, family.img121, family.img122, family.img123,
            family.img124, family.img125, family.img126, family.img127
        ]
      
    };
    const navigate = useNavigate();

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        navigate(`?category=${category}`); // ⬅️ מוסיף ל-URL את הפרמטר
    };

    const [selectedCategory, setSelectedCategory] = useState("ניו בורן");
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get('category');
    useEffect(() => {
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [categoryFromUrl]);
    const buttonRef = useRef(null);

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % images[selectedCategory].length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) =>
            (prev - 1 + images[selectedCategory].length) % images[selectedCategory].length
        );
    };

    return (
        <div className='div_Culinary_balvader'>
            <Helmet>
                <title>אילה גפן צלמת</title>
                <meta id='hdr3000' name="description" content="צלמת מקצועית בסטודיו חמים ומשפחתי – מתמחה בצילומי משפחה, ניו בורן, בת מצווה, וחלקה. חוויה אישית, רגישה ובלתי נשכחת." />
                <meta id='hdr3001' property="og:title" content="צילום ניו בורן | בת מצווה | משפחה | חלקה – בסטודיו מקצועי ומרגש" />
                <meta id='hdr3002' property="og:description" content="סטודיו צילום מקצועי לצילומי ניו בורן, משפחה, בת מצווה וחלקה. צילום באווירה נעימה עם יחס אישי לכל לקוח." />
                <meta id='hdr3003' property="og:image" content="https://res.cloudinary.com/dgujclab8/image/upload/f_webp/Rectangle_1_c1lhya" />

            </Helmet>
            <br></br>
            <br></br>
            <br></br>

            <h1 className='taytel_photografhy'>
                -{selectedCategory}-
            </h1>
            <p className='txt_photografhy'>רגעים שתופסים את הלב – גלריית התמונות שלי</p>
            <div className='div_button_Culinary' id="ניו בורן" ref={buttonRef}>

                <button id="ניו בורן"
                    className='button_Culinary'
                    onClick={() => handleCategoryChange("ניו בורן")}
                    style={{ backgroundColor: selectedCategory === "ניו בורן" ? "#91675E" : "#CD8579" }}
                >
                    ניו בורן
                </button>
                <button id="חלקה"
                    className='button_Culinary'
                    onClick={() => handleCategoryChange("חלקא")}
                    style={{ backgroundColor: selectedCategory === "חלקא" ? "#91675E" : "#CD8579" }}
                >
                    חלקא
                </button>
                <button id="בת מצווה"
                    className='button_Culinary'
                    onClick={() => handleCategoryChange("בת מצווה")}
                    style={{ backgroundColor: selectedCategory === "בת מצווה" ? "#91675E" : "#CD8579" }}
                >
                    בת מצוה
                </button>
                <button id="סטודיו"
                    className='button_Culinary'
                    onClick={() => handleCategoryChange("סטודיו")}
                    style={{ backgroundColor: selectedCategory === "סטודיו" ? "#91675E" : "#CD8579" }}
                >
                    סטודיו
                </button>
                <button id="משפחה"
                    className='button_Culinary'
                    onClick={() => handleCategoryChange("משפחה")}
                    style={{ backgroundColor: selectedCategory === "משפחה" ? "#91675E" : "#CD8579" }}
                >
                    משפחה
                </button>
            </div>

            <div className="div12_alvader" style={{ display: "flex", flexWrap: "wrap" }}>
                {images[selectedCategory] && images[selectedCategory].map((img, index) => (
                    <img
                        className="img_Culinary"
                        key={index}
                        src={img}
                        alt={`תמונה ${index + 1}`}
                        loading="lazy"
                        onClick={() => openModal(index)}
                        style={{ cursor: "pointer" }}
                    />
                ))}
                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={closeModal}>×</button>
                            <button className="nav-btn left" onClick={prevImage}>‹</button>
                            <img src={images[selectedCategory][selectedImageIndex]} alt="תמונה מוגדלת" className="modal-img" />
                            <button className="nav-btn right" onClick={nextImage}>›</button>
                        </div>
                    </div>
                )}

            </div>

        </div>

    )
}
export default PhotoAlbum;