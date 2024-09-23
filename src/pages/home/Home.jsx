import './home.css'

// import './../../constants/_base.scss'
// import './../../constants/_components.scss'
// import './../../constants/_layouts.scss'
// import './../../constants/_variables.scss'
// import './../../constants/main.scss'
// import './../../constants/menu-page.scss'
// import './../../constants/mixins.scss'



export default function Home() {
    return (
        <>
        <main>
            <div className="hero d-flex flex-column justify-content-center" style={{ backgroundImage: `url("/img/kv-pslp-ordi-1-1.png")`, height: `94.1vh`, objectFit: `cover`}}>
                <h1 className='clr-white'>PEUR SUR LE PARC</h1>
                <h3 className='clr-white'>Du 5 octobre au 11 novembre 2024</h3>
            </div>
        </main>
        </>
    )
}