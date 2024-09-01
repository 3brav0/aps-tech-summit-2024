import './APSLogo.css';

interface ContainerProps { }

const APSLogo: React.FC<ContainerProps> = () => {
    return (
        <div id="al-container">
            <img
                src="/aps-tech-summit-2024/assets/aps-tech-summit-logo.png"
                alt="Student Center Map"
            ></img>
        </div>
    );
}

export default APSLogo;