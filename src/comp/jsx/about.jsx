import React from 'react'
import "../css/about.css"
import "../css/app.css"
import { Helmet } from 'react-helmet'

const About = () => {

  return (
    <div className='div_about'>
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
      <h1 className='taytel_photografhy'>-מי אני-</h1>
      <br></br>
      <br></br>

      <div className='div_txt_photografhy'>
        <p className='span1_photografhy span_photografhy'> ...דמיינו לרגע </p>
        <p className='txt_photografhy'>
          הילד שלכם צוחק צחוק מתגלגל, העיניים שלו נוצצות, הרגע הזה טהור, מלא קסם – ופתאום… <span className='span_photografhy'>קליק! </span>הרגע הזה הופך לזיכרון שיישאר אתכם לנצח
          <br></br>
          <br></br>
          <span className='span_photografhy '>זה בדיוק מה שאני עושה.</span>
        </p>
        <p className='txt_photografhy'>
          התשוקה שלי לצילום נולדה מתוך אהבה לרגעים הקטנים של החיים – אלה שמרגשים,
          שמספרים סיפור בלי מילים. אני כאן כדי להנציח אותם עבורכם –   <span className='span_photografhy'>
            את החיבוק האוהב,
            את המבטים שמדברים, את השובבות של הילדים ואת החום המשפחתי.
          </span>
        </p>
        <p className='txt_photografhy'>
          <span className='span_photografhy'>התמונות שלי הן לא רק תמונות – הן זיכרונות חיים </span>
          . כאלה שתחזרו אליהם שוב ושוב, תתרגשו, תצחקו, אולי אפילו תזילו דמעה קטנה של נוסטלגיה
        </p>

        <p className='txt_photografhy'>
          <span className='span_photografhy'>
            ?אז איך זה עובד
          </span>
          <br></br>
          .   אתם מגיעים עם המשפחה שלכם – בדיוק כמו שאתם
          <br></br>
          .  אני יוצרת אווירה נינוחה שבה הילדים חופשיים להיות הם עצמם
          <br></br>
          .   ובין רגעי הצחוק, המשחק והאהבה – אני שם, תופסת את הקסם דרך העדשה
        </p>

        <p className='span_photografhy'>
          .כי בסופו של דבר, התמונות הכי יפות הן לא המבוימות, אלא אלה שתופסות את הרגעים האמיתיים שלכם
        </p>
        <p className='txt_photografhy'>
          ?אז… מוכנים לצאת יחד למסע ויזואלי שישאיר לכם זיכרונות מרגשים לכל החיים
        </p>
        <p className='span_photografhy'>
          📩 דברו איתי – ונתחיל לתפוס רגעים שלא שוכחים!
        </p>
      </div>
    </div >
  )
}

export default About;
