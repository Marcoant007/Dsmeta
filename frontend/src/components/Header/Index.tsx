import './styles.css'
import logo from '../../assets/img/logo.svg';
import templario from '../../assets/img/templario.svg';


function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={templario} alt="DSMeta" />
                <h1>Sales registers</h1>
                <p>
                    Desenvolvido por
                    <a href="https://marcoantdeveloper.netlify.app/"> Marco Antônio</a>
                </p>
            </div>
        </header>
    )
}

export default Header