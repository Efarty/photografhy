import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'; // שים לב שזה כמו בדף CallAs
import { FiPhone, FiMail } from "react-icons/fi";
import { Helmet } from 'react-helmet';
import "../css/footer.css";
import "../css/app.css";

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        emailjs.send(
            'service_lo2zvt8', // Service ID
            'template_f8uzfh9', // Template ID
            {
                from_name: data.name,
                to_name: "אילה גפן",
                message: data.message,
                to_email: data.email,
                phone: data.phone,
            },
            'u-aJB-672K3uJgNqC' // Public Key (User ID)
        ).then(() => {
            alert("ההודעה נשלחה בהצלחה!");
            reset();
        }).catch((error) => {
            console.error("שגיאה בשליחת ההודעה:", error);
            alert("אירעה שגיאה בשליחת ההודעה");
        });
    };

    return (
        <footer className='footer' id='footer'>
            <Helmet>
                <title>אילה גפן צלמת</title>
                <meta name="description" content="צלמת מקצועית בסטודיו חמים..." />
                <meta property="og:title" content="צילום ניו בורן | בת מצווה..." />
                <meta property="og:description" content="סטודיו צילום מקצועי..." />
                <meta property="og:image" content="https://res.cloudinary.com/..." />
            </Helmet>

            <form className='footer_content' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    className='input_footer'
                    placeholder='שם מלא'
                    {...register('name', { required: true, minLength: 2 })}
                />
                {errors.name && <span className='error'>יש להזין שם תקין</span>}

                <input
                    type='email'
                    className='input_footer'
                    placeholder='המייל שלך'
                    {...register('email', {
                        required: true,
                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                    })}
                />
                {errors.email && <span className='error'>כתובת מייל לא תקינה</span>}

                <input
                    type='tel'
                    className='input_footer'
                    placeholder='הטלפון שלך'
                    {...register('phone', {
                        required: true,
                        pattern: /^\d{10}$/
                    })}
                />
                {errors.phone && <span className='error'>מספר טלפון צריך להיות בן 10 ספרות</span>}

                <textarea
                    className='input_x_footer'
                    placeholder='אני פה לשמוע הכול'
                    {...register('message', { required: true })}
                />
                {errors.message && <span className='error'>נא להוסיף הודעה</span>}

                <button className='button_footer' type='submit'>
                    יאללה מחכה שתחזרי אלי
                </button>
            </form>

            <div>
                <h1 className='footer_taytel'>- Let's Talk. -</h1>
                <div className="footer_icons">
                    <div className='div_icon_footer '>
                        <a href="tel:0556782500" style={{ color: 'inherit'  ,textDecoration:'none'}}>
                            <FiPhone className='icon_footer' />
                        </a>
                    </div>
                    <div className='div_icon_footer' >
                        <a href="mailto:7175089@gmail.com" style={{ color: 'inherit' ,textDecoration:'none'}}>
                            <FiMail className='icon_footer' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
