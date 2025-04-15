import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';



function Organisation() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const getImageSource = () => {

        if (currentLanguage === 'ar') {
            return '../img/organisation1.jpg'
        } else ((currentLanguage === 'fr') || (currentLanguage === 'eng'))
        {
            return '../img/organisation2.jpg'
        }
    }
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };
    return (
        <div>
            
            <Image className={isZoomed ? "zoomed" : ""}
                onClick={handleImageClick}
                style={{
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease-in-out',
                    transform: isZoomed ? 'scale(1.2)' : 'scale(1)',
                    maxWidth: isZoomed ? '100%' : 'auto',
                }} src={getImageSource()} alt="Language Image" fluid />

        </div>
    )
}

export default Organisation;

