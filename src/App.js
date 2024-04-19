import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react";
import TitleImg from './bg.png'

function InfoItem({title, desc, icon}) {
    return (
        <div className='info-item'>
            <i className={`bi bi-${icon}`}></i>
            <h3 style={{color: '#E85A4F'}}>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

function ContactInput({text, type}) {
    return (
        <div className="form__group field">
            <input type={type} className="form__field" placeholder={text} name={text} id={text}/>
            <label htmlFor={text} className="form__label">{text}</label>
        </div>
    )
}

export default function App() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className='title-section' style={{backgroundImage: `url(${TitleImg})`}}>
                <div className='title-flexbox'>
                    <h1 data-aos='fade-up' data-aos-duration="500">Global Inc.</h1>
                    <h3 data-aos='fade-up' data-aos-duration="600">Lorem ipsum dolor sit amet consectetur</h3>
                    {/*<a href="#" className="main-btn" data-aos='fade-up' data-aos-duration="700">CONTACT US</a>*/}
                </div>
            </div>
            <section className='stats-section'>
                <div className='container'>
                    <h3 className='stats-title' data-aos='fade-up' data-aos-duration="500">Delivering since 2003</h3>
                    <div className='info' data-aos='fade-up' data-aos-duration="650" data-aos-offset="-100">
                        <InfoItem title='98%' desc='Положительных отзывов' icon='heart'/>
                        <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                        <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                        <InfoItem title='2000+' desc='Выполненных заказов' icon='box-seam'/>
                    </div>
                </div>
            </section>
            <section className='about-section'>
                <div className='container'>
                    <div className='flexbox-center'>
                        <div style={{maxWidth: '60rem'}}>
                            <h2 style={{marginBottom: '1rem', textAlign: 'center'}} data-aos='fade-up' data-aos-duration="500">About
                                Company</h2>
                            <p style={{fontSize: 22, lineHeight: 1.5}} data-aos='fade-up' data-aos-duration="650">
                                Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at culpa doloremque
                                dolores
                                ducimus eligendi enim eos error eveniet harum impedit libero magni molestiae nobis
                                nostrum
                                optio
                                quae quia sequi temporibus ullam ut, veritatis voluptatibus. Corporis eligendi magnam
                                pariatur
                                quaerat, ratione rem reprehenderit ullam vero! Aperiam beatae consectetur consequuntur
                                deleniti
                                dignissimos ea, esse facilis, ipsa iure laudantium magnam molestiae nam nemo placeat
                                possimus
                                quam, soluta voluptate voluptatem. Adipisci aliquid animi eius enim esse exercitationem
                                fugiat
                                iste magnam molestias nam numquam odit omnis provident quaerat, sed similique sit,
                                voluptas.
                                Accusamus asperiores at eos harum nesciunt, praesentium quibusdam quo recusandae rem?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section">
                <div className='flexbox-center'>
                    <form className='contact-box' id="contact-href" data-aos='fade-up' data-aos-duration="500">
                        <div>
                            <div className='contact-flexbox'>
                                <div className='contact-inner'>
                                    <h2>Contact Us</h2>
                                    <div className='contact-info'>
                                        <p>+7 (912) 123 45-67</p>
                                        <p>ул.Свободы, д.2</p>
                                        <p>example@mail.ru</p>
                                    </div>
                                </div>
                                <div className='fields'>
                                    <ContactInput text="Name" type='text'/>
                                    <ContactInput text="Surname" type='text'/>
                                    <ContactInput text="Contact Number" type='tel'/>
                                    <ContactInput text="E-mail" type='email'/>
                                    <ContactInput text="Additional Info" type='text'/>
                                </div>
                            </div>
                            <div className='contact-buttons'>
                                <label className="checkbox style-b">
                                    <input type="checkbox"/>
                                    <div className="checkbox__checkmark"></div>
                                    <div className="checkbox__body">
                                        <p style={{fontSize: 20}}>I accept the processing <span
                                            style={{color: '#E85A4F'}}><a
                                            href="#">of personal data</a></span></p>
                                    </div>
                                </label>
                                <button className='submit-btn'>SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <div className='container'>
                    <p>Global Inc. 2003 - 2024 ©</p>
                </div>
            </footer>
        </>

    );
}