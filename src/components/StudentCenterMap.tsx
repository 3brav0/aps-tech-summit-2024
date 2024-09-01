import { useIonRouter } from '@ionic/react';
import './StudentCenterMap.css';

interface ContainerProps { }

const StudentCenterMap: React.FC<ContainerProps> = () => {
    const router = useIonRouter();

    return (
        <div id="scm-container" onClick={() => { router.push("/aps-tech-summit-2024/schedule");}}>
            <img
                src="/aps-tech-summit-2024/assets/unt-dallas-student-center-map.jpg"
                alt="Student Center Map"
            ></img>
        </div>
    );
}

export default StudentCenterMap;