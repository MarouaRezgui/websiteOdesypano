import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

function Videos() {
    const { t, i18n } = useTranslation();
    const db = getFirestore();
    const [videos, setVideos] = useState([]);
    const [isPlaying, setIsPlaying] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const offresCollection = collection(db, 'videos');
            const snapshot = await getDocs(offresCollection);
            const videosList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setVideos(videosList);
            console.log(videosList)

        };
        fetchVideos();
    }, [db]);


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
        <Container>
            <Row className='d-flex justify-content-center mt-4'>
                <h4 className="text-center col-4 mb-4 p-3 bg-success text-white rounded" >{t('Vidéos')}</h4>
            </Row>
            <div className='row videos_container'>
                {videos.length> 0 && videos.map((el,index)=> {
                    return (
                    <div className='col-6  border border-5 shadow border-green'>
                          
                      
                                <h6 className='text-center mt-1 mb-2'> {el.titles[i18n.language]}  </h6>   <div>
                                    <div className="relative mb-2">
                                        <video
                                            id={`video-${index}`}
                                            className="d-block mx-auto w-100 object-fit-cover"
                                            src={el.images}
                                            controls
                                            style={{ height: "40vh", width: "40vw" }}
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
                                </div> 
                          
                            
                                
                        </div>
                   
               )
                })}
                
               
            </div>
        </Container>
    )
}

export default Videos