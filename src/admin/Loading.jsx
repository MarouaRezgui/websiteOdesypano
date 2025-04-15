import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <div style={{ height: '100vh' }} className="flex justify-center flex-column items-center">
            <img style={{height:'20vh'}} src="/img/loading.gif" />
            <h4 className="text-center">  {currentLanguage == "ar" ? " يرجى الانتظار"  
            
            :
                currentLanguage == "fr" ?
            "Please wait" : "Veuillez patienter"}      </h4>
                    </div>
    );
};

export default Loading;
