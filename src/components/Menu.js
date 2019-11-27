import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { home, list } from 'ionicons/icons';

const Menu = () => {
    return (

        <IonMenu contentId="main" type="overlay">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle key="" autoHide={false}>
                        <IonItem routerLink="" routerDirection="none">
                            <IonIcon slot="start" color="medium" icon={home} />

                            <IonLabel>Home</IonLabel>
                        </IonItem>

                        <IonItem routerLink="/home/list" routerDirection="none">
                            <IonIcon slot="start" color="medium" icon={list} />

                            <IonLabel>List</IonLabel>
                        </IonItem>
                    </IonMenuToggle>

                </IonList>
            </IonContent>
        </IonMenu>);
};
export default withRouter(Menu);
