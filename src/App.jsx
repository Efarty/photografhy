import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './comp/jsx/footer'
import Header from './comp/jsx/heder'
import { Home } from './comp/jsx/home'
import About from './comp/jsx/about'
import QuestionsAnswers from './comp/jsx/questionsAnswers'
import PhotoAlbum from './comp/jsx/photoAlbum'
import { newborn,halake,batMitzvah,family,studio } from './comp/Img/img'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/אודות" element={<About />} />
        <Route path="/שאלות תשובות" element={<QuestionsAnswers />} />
        <Route path="/גלריה" element={<PhotoAlbum newborn={newborn} halake={halake}  batMitzvah={batMitzvah} family={family}  studio={studio}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
