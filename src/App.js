import titleImg from './dark_bg.jpg';
import addressImg from './global.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react";
import {Parallax, ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";

function InfoItem({title, desc, icon}){
    return (
        <div className='info-item'>
            <i className={`bi bi-${icon}`}></i>
            <h3 style={{color: '#E85A4F'}}>{title}</h3>
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
            <div className='title-section'>
                <div className='title-flexbox'>
                    <h1 data-aos='fade-up' data-aos-duration="500">Global Inc.</h1>
                    <h3 data-aos='fade-up' data-aos-duration="650">Lorem ipsum dolor sit amet consectetur</h3>
                    <a className="main-btn" data-aos='fade-up' data-aos-duration="700" href="#">CONTACT US</a>
                </div>
            </div>
            <section className='stats-section'>
                <div className='container'>
                    <h3 className='stats-title'>Import and Export since 2003</h3>
                    <div className='info'>
                        <InfoItem title='98%' desc='Положительных отзывов' icon='heart'/>
                        <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                        <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                        <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                    </div>
                </div>
            </section>
            <section className='address-section'>
                <div className='container'>
                    <h2 style={{marginBottom: '1rem'}}>About Us</h2>
                    <p style={{fontSize: 22}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at culpa doloremque dolores ducimus eligendi enim eos error eveniet harum impedit libero magni molestiae nobis nostrum optio quae quia sequi temporibus ullam ut, veritatis voluptatibus. Corporis eligendi magnam pariatur quaerat, ratione rem reprehenderit ullam vero! Aperiam beatae consectetur consequuntur deleniti dignissimos ea, esse facilis, ipsa iure laudantium magnam molestiae nam nemo placeat possimus quam, soluta voluptate voluptatem. Adipisci aliquid animi eius enim esse exercitationem fugiat iste magnam molestias nam numquam odit omnis provident quaerat, sed similique sit, voluptas. Accusamus asperiores at eos harum nesciunt, praesentium quibusdam quo recusandae rem?</p>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='contact-box'>
                        <h2>Contact Us</h2>
                        <input type="number"/>
                    </div>
                </div>
            </section>
        </>

    );
}
