import './Home.css'

// import './../../constants/_base.scss'
// import './../../constants/_components.scss'
// import './../../constants/_layouts.scss'
// import './../../constants/_variables.scss'
// import './../../constants/main.scss'
// import './../../constants/menu-page.scss'
// import './../../constants/mixins.scss'
import ImgMobile from './../../../public/img/pslp-mobile.png';
import ImgDesktop from './../../../public/img/kv-pslp-ordi-1-1.png';




export default function Home() {
    return (
        <>
        <main>
            <section className="block__home">
                <picture>
                    <source srcSet={ImgMobile} media="(max-width: 768px)"/>
                    <img src={ImgDesktop} alt="peur sur le parc" className="img-desktop"/>
                </picture>
                <div className="block__home__title">
                        <h1>PEUR SUR LE PARC</h1>
                        <h3>Du 5 octobre au 11 novembre 2024</h3>
                </div>
            </section>
        </main>
        </>
    )
}