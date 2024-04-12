import titleImg from './global.png';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react";

function InfoItem({title, desc, icon}){
    return (
        <div className='info-item'>
            <i className={`bi bi-${icon}`}></i>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default function App() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
    <>
        <section className='title-section' style={{backgroundImage: `url(${titleImg})`}}>
            <div className='title-flexbox'>
                <h1 data-aos='fade-right' data-aos-duration="500">Global Inc.</h1>
                <h4 data-aos='fade-right' data-aos-duration="700">Lorem ipsum dolor sit amet, consectetur</h4>
                <h4 data-aos='fade-right' data-aos-duration="700">A amet aspernatur blanditiis exercitationem</h4>
            </div>
        </section>
        <section className='stats-section'>
            <div className='container'>
                <h3 style={{paddingBottom: '3rem'}}>Increase your revenue with an advanced fraud pipeline</h3>
                <div className='info'>
                    <InfoItem title='98%' desc='Положительных отзывов' icon='heart'/>
                    <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                    <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                    <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                </div>
            </div>
        </section>
    </>
    );
    }
