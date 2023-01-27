import background from '../hero.webp';
import logo from '../dumbell.png';
import insta from '../insta.svg';
import "./Hero.css";

function Hero() {
    return (
        <div className="hero">
            <img src={background} className="background" alt="bg" />
            <div className='tint'></div>

            <div className='content_wrap'>
                <img src={logo} className="logo" alt="bg" />
                <h1 className='font-4'>Online program treninga</h1>
                <span>
                    <p className='font-2' >
                        Po vasoj meri
                    </p>
                    <div class="toggle">
                        <input type="checkbox" class="check" disabled checked></input>
                        <b class="b switch"></b>
                        <b class="b track"></b>
                    </div>
                </span>
                <span>
                    <p className='font-2' >
                        Na Vasem Telefonu
                    </p>
                    <div class="toggle">
                        <input type="checkbox" class="check" disabled checked></input>
                        <b class="b switch"></b>
                        <b class="b track"></b>
                    </div>
                </span>
                <span>
                    <p className='font-2' >
                        Bilo gde, bilo kad
                    </p>
                    <div class="toggle">
                        <input type="checkbox" class="check" disabled checked></input>
                        <b class="b switch"></b>
                        <b class="b track"></b>
                    </div>
                </span>
                <span>
                    <p className='font-2' >
                        Podrska
                    </p>
                    <div class="toggle">
                        <input type="checkbox" class="check" disabled checked></input>
                        <b class="b switch"></b>
                        <b class="b track"></b>
                    </div>
                </span>
            </div>

            <a className="social font-2" href="https://www.instagram.com/_stankovicmilos_/" target="_blank">
                <img src={insta} className="insta" alt="insta" />
                _stankovicmilos_
            </a>
        </div>
    );
}

export default Hero;
