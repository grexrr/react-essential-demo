import core_img from '../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Cruicial', 'Core'];

function getRandInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    const description = reactDescriptions[getRandInt(reactDescriptions.length - 1)]

    return (
        <header>
            <img src={core_img} alt={"Stylized atom"} />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}


