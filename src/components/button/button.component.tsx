import { IonButton } from "@ionic/react";

interface ContainerProps {
    name: string,
    click: any
}

const Button: React.FC<ContainerProps> = ({ click, name }) => {
    return (
        <IonButton 
            expand='block'
            onClick={click}
        >{name}</IonButton>
    )
};

export default Button;