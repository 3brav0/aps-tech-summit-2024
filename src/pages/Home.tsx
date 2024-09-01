import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import StudentCenterMap from '../components/StudentCenterMap';
import APSLogo from '../components/APSLogo';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="3">
              <APSLogo/>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="4" className="ion-text-center">
              <IonText>Select the Map to View Day One Schedule</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="6">
              <StudentCenterMap />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
