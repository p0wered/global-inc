import titleImg from './global.png';

export default function App() {
  return (
    <>
        <section className='title-section' style={{backgroundImage: `url(${titleImg})`}}>
            <div className='title-flexbox'>
                <h1>Global Inc.</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                <h4>A amet aspernatur blanditiis exercitationem</h4>
            </div>
        </section>
        <section className='section-2'>
            <div className='container'>
                <h3>Increase your revenue with an advanced fraud pipeline</h3>
                <div className='info'>
                    <div className='info-item'></div>
                    <div className='info-item'></div>
                    <div className='info-item'></div>
                    <div className='info-item'></div>
                </div>
            </div>
        </section>
    </>
  );
}
