import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Carousel as MyCarousel } from 'react-bootstrap'
import { useState } from 'react';

function ForumPage() {
    let { state } = useLocation();
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
        <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="d-flex px-4 flex-column align-items-center justify-content-center">
            <h4 className="text-center mb-4 mt-4 text-green-800">{state.titles[i18n.language]}</h4>

            <h6 dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="mt-4 mb-2">{state.descriptions[i18n.language]}</h6>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MyCarousel className="" style={{ backgroundColor: "white", width: '40vw' }}>
                    {state.images.map((img, index) =>
                        <MyCarousel.Item key={index} interval={5000}>
                            {img.includes('.mp4') ? (
                                <div className="relative">
                                    <video
                                        id={`video-${index}`}
                                        className="d-block mx-auto w-100 object-fit-cover"
                                        src={img}
                                        controls
                                        style={{ height: "40vh", width: "30vw" }}
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
                                    src={img}
                                    alt={`media-${index}`}
                                    style={{ height: "40vh", width: "30vw" }}
                                />
                            )}
                        </MyCarousel.Item>
                    )
                    }


                </MyCarousel>
            </div>
            <Link to='/' > <button className="mt-3 bg-yellow-600 p-2 rounded text-white"  >{t('Acceuil')}</button></Link>


        </div>
    )
}

export default ForumPage