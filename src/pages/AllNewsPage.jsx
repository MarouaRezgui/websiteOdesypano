import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'
import { Carousel as MyCarousel } from 'react-bootstrap'

function AllNewsPage() {
  let { state } = useLocation()
  const { t, i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(null);


  const handlePlay = (index) => {
    setIsPlaying(index);
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.play();
    }
  };

  const handlePause = (index) => {
    setIsPlaying(null);
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.pause();
    }
  };
  return (
    <>
      <h1 className='text-center text-green-800 m-3'>{t('اخر الأخبار و المستجدات')}</h1>
      {
        state.map((post, index) => (
          <div dir={i18n.language == "ar" ? 'rtl' : 'ltr'} key={index} className="border p-2 mt-2 mb-3 shadow d-flex px-4 flex-column align-items-center justify-content-center">
            <h6 className="text-center m2-4 mt-4 text-green-800">{post.titles[i18n.language]}</h6>
            <p className="postText">{post.descriptions[i18n.language]}</p>
            <div className='d-flex'>
              <MyCarousel style={{ backgroundColor: "white", width: '30vw' }}>
                {post.images.map((el, index) => (
                  <MyCarousel.Item key={index} interval={5000}>
                    {el.includes('.mp4') ? (
                      <div className="relative">
                        <video
                          id={`video-${index}`}
                          className="d-block mx-auto w-100 object-fit-cover"
                          src={el}
                          controls
                          style={{ height: "35vh", width: "30vw" }}
                          onPause={() => handlePause(index)}
                        >
                          Your browser does not support the video tag.
                        </video>
                        {isPlaying !== index && (
                          <div
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                            onClick={() => handlePlay(index)}
                          >
                            <svg
                              className="w-16 h-16 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 3.5a1 1 0 011.54-.84l10 6.5a1 1 0 010 1.68l-10 6.5A1 1 0 014.5 16.5V3.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    ) : (
                      <img
                        className="d-block mx-auto w-100 object-fit-cover"
                        src={el}
                        alt={`media-${index}`}
                        style={{ height: "35vh", width: "30vw" }} à />
                    )}
                    <MyCarousel.Caption></MyCarousel.Caption>
                  </MyCarousel.Item>
                ))}
              </MyCarousel>
            </div>


            <Link to='/news-page' state={post}> <button className="mt-3 bg-orange-600 p-2 rounded text-white"  >{t('إقرأ المزيد')}</button></Link>

          </div>
        ))
      }
    </>

  )
}

export default AllNewsPage