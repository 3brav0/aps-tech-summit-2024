import {IonPage, IonContent, IonGrid, IonRow, IonCol, IonText, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle} from '@ionic/react';

const Schedule: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/' text="Go Back to Map"></IonBackButton>
                    </IonButtons>
                    {/* <IonTitle>Go Back to Map</IonTitle> */}
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid fixed>
                    <IonRow>
                        <IonCol>
                            <IonText>Start Time</IonText>
                        </IonCol>
                        <IonCol>
                            <IonText>End Time</IonText>
                        </IonCol>
                        <IonCol size="6">
                            <IonText>Speaker(s)</IonText>
                        </IonCol>
                        <IonCol size="4">
                            <IonText>Topic</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText>3:30 PM</IonText>
                        </IonCol>
                        <IonCol>
                            <IonText>3:35 PM</IonText>
                        </IonCol>
                        <IonCol size="6">
                            <IonText>Java Bojorquez - APS Northern Regional Co-Director</IonText>
                        </IonCol>
                        <IonCol size="4">
                            <IonText>Welcome Address</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText>3:35 PM</IonText>
                        </IonCol>
                        <IonCol>
                            <IonText>4:00 PM</IonText>
                        </IonCol>
                        <IonCol size="6">
                            <IonText>Jair Granados - Visual Communication Expert</IonText>
                        </IonCol>
                        <IonCol size="4">
                            <IonText>Introduction to Conference</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText>4:00 PM</IonText>
                        </IonCol>
                        <IonCol>
                            <IonText>4:45 PM</IonText>
                        </IonCol>
                        <IonCol size="6">
                            <IonText>Zaul Ocaña - Cinematographer</IonText>
                        </IonCol>
                        <IonCol size="4">
                            <IonText>KeyNote Speech</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText>5:00 PM</IonText>
                        </IonCol>
                        <IonCol>
                            <IonText>5:30 PM</IonText>
                        </IonCol>
                        <IonCol size="6">
                            <IonText>Daniel Cruz & Shua Jimenez - APS Representatives</IonText>
                        </IonCol>
                        <IonCol size="4">
                            <IonText>Introductory to the Presentations</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText>5:30 PM</IonText>
                        </IonCol>
                        <IonCol>
                            <IonText>6:15 PM</IonText>
                        </IonCol>
                        <IonCol size="6">
                            <IonText>Manuel Rodriguez - Moderator & APS Representative</IonText>
                        </IonCol>
                        <IonCol size="4">
                            <IonText>Q & A</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText>6:15 PM</IonText>
                        </IonCol>
                        <IonCol>
                            <IonText>6:30 PM</IonText>
                        </IonCol>
                        <IonCol size="6">
                            <IonText>Java Bojorquez - APS Northern Regional Co-Director</IonText>
                        </IonCol>
                        <IonCol size="4">
                            <IonText>Closing Remarks for Day 1</IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Schedule;