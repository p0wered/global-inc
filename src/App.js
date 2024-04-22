import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect, useState} from "react";
import TitleImg from './bg.png'
import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from "react-scroll-parallax";

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
    const [phoneNumber, setPhoneNumber] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    useEffect(() => {
        Aos.init();
    }, []);

    const formatPhoneNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, '');
        let formattedPhoneNumber = "+";
        for (let i = 0; i < cleanedValue.length && i < 11; i++) {
            if (i === 1)
                formattedPhoneNumber += " (";
            if (i === 4)
                formattedPhoneNumber += ") ";
            if (i === 7)
                formattedPhoneNumber += "-";
            if (i === 9)
                formattedPhoneNumber += "-";
            formattedPhoneNumber += cleanedValue[i];
        }
        return formattedPhoneNumber;
    };

    const handlePhoneNumberChange = (e) => {
        const { value } = e.target;
        setPhoneNumber(formatPhoneNumber(value));
    };

    const handlePhoneFocus = () => {
        if (!phoneNumber.startsWith("+7")) {
            setPhoneNumber("+7");
        }
    }

    return (
        <ParallaxProvider>
            <ParallaxBanner layers={[{ image: TitleImg, speed: -10 }]}>
                <div className='title-section'>
                    <div className='title-flexbox'>
                        <h1 data-aos='fade-up' data-aos-duration="500">Global Inc.</h1>
                        <h3 data-aos='fade-up' data-aos-duration="600">Lorem ipsum dolor sit amet consectetur</h3>
                    </div>
                </div>
            </ParallaxBanner>
            <section className='stats-section'>
                <div className='container'>
                    <h3 className='stats-title' data-aos='fade-up' data-aos-duration="500">Работаем с 2003 года</h3>
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
                            <h2 style={{marginBottom: '1rem', textAlign: 'center'}} data-aos='fade-up' data-aos-duration="500">О компании</h2>
                            <p style={{fontSize: 22, lineHeight: 1.5}} data-aos='fade-up' data-aos-duration="650">
                                Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at culpa doloremque
                                dolores
                                ducimus eligendi enim eos error eveniet harum impedit libero magni molestiae nobis
                                nostrum
                                optio
                                quae quia sequi temporibus ullam ut, veritatis voluptatibus. Corporis eligendi magnam
                                pariatur
                                quaerat, ratione rem reprehenderit ullam vero!
                            </p>
                            <br/>
                            <p style={{fontSize: 22, lineHeight: 1.5}} data-aos='fade-up' data-aos-duration="650">
                                Aperiam beatae consectetur consequuntur
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
                                    <h2>Свяжитесь с нами</h2>
                                    <div className='contact-info'>
                                        <p>+7 (912) 123 45-67</p>
                                        <p>ул.Свободы, д.2</p>
                                    </div>
                                </div>
                                <div className='fields'>
                                    <ContactInput text="Имя" type='text'/>
                                    <ContactInput text="Фамилия" type='text'/>
                                    <div className="form__group field">
                                        <input type='tel' className="form__field" placeholder='Телефон' name='Телефон'
                                               id='number' value={phoneNumber} onChange={handlePhoneNumberChange} onFocus={handlePhoneFocus}/>
                                        <label htmlFor='number' className="form__label">Номер телефона</label>
                                    </div>
                                    <ContactInput text="E-mail" type='email'/>
                                    <ContactInput text="Доп. информация" type='text'/>
                                </div>
                            </div>
                            <div className='contact-buttons'>
                                <label className="checkbox style-b">
                                    <input type="checkbox"/>
                                    <div className="checkbox__checkmark"></div>
                                    <div className="checkbox__body">
                                        <p style={{fontSize: 20}}>Я согласен на обработку <span
                                            style={{color: '#E85A4F'}}>персональных данных</span></p>
                                    </div>
                                </label>
                                <button className='submit-btn'>Отправить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <div className='container' style={{padding: '2rem'}}>
                    <p>Global Inc. 2003 - 2024 ©</p>
                </div>
            </footer>
        </ParallaxProvider>

    );
}