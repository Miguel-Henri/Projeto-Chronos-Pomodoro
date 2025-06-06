import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';


export function App(){//exportando função App

    return (
        <>
            <Container>
                   <Logo/>
            </Container>


           <Container>
                   <Menu/>
            </Container>

            <Container>
                   <CountDown/>
            </Container>


            <Container>
                    <form action="" className="form">
                        <div className="formRow">
                            <DefaultInput labelText='' id='meuInput' type='text'/>
                        </div>


                        <div className="formRow">
                            <p>Lorem ipsum dolor sit amet. </p>
                        </div>



                        <div className="formRow">
                            <p>ciclos </p>
                            <p>0 0 0 0 0 0</p>
                        </div>


                        <div className="formRow">
                            <button>Enviar  </button>
                        </div>


                    </form>
            </Container>

         
        </>
       
    );
} 
