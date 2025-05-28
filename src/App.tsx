import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';


export function App(){//exportando função App

    return (
        <>
            
             <Heading>Ola mundo 1 
                <button>
                    <TimerIcon />
                    </button>
            </Heading>
        
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat error iste cupiditate obcaecati temporibus nesciunt dolor perspiciatis, quisquam, ab consequatur exercitationem nihil delectus aspernatur quibusdam neque accusamus dolorem asperiores quae!</p>
        </>
       
    );
} 
