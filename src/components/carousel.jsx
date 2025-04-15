
import { Carousel as MyCarousel } from 'react-bootstrap'
function Carousel({ images }) {
    return (
        
  <div style={{ display: 'flex', justifyContent: 'center' }}>

<MyCarousel className="" style={{ height: "32vh", width: '32vw' }}>
    {images.length > 0 && images.map(el => {
        return <MyCarousel.Item interval={2000}>
            <img
                className="d-block mx-auto w-100 object-fit-cover"
                src={el.url}
                alt="ubl"
                style={{ height: "31vh", width: "20vw" }} />
            <MyCarousel.Caption></MyCarousel.Caption>
        </MyCarousel.Item>
    })}

</MyCarousel>
</div>
         
        

    )
}
export default Carousel;




/* 
<div className='carrousall' style={{ display: 'flex', justifyContent: 'center' }}>
  <MyCarousel  indicators={false}  style={{  width: '50vw' }}>
                {images.length > 0 && images.map(el => {
                    return <MyCarousel.Item interval={2000}>
                        <img
                            className="d-block carousel-img mx-auto w-100 "
                            src={el.url}
                            alt="ubl"
                            style={{ height: "30vh", width: "50vw", objectFit: "cover", objectPosition: "top" }}
                        />
                    </MyCarousel.Item>
                })}

            </MyCarousel>
            </div>*/
