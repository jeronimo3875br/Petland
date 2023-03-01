# Arquivo > Components

Esse arquivo deve suportar os componentes criados para ser implementados nas páginas ou em outros componentes.

# Exemplo de uso

```tsx

    import { Component } from "react";
    import { Text, TouchableOpacity } from "react-native";

    export class ComponenteBotaoAlertaExemplo extends Component {
        public render(){
            return (
                <>
                    <TohchableOpacity onPress={showAlertMessage}>
                        <Text>Clique aqui para mostrar o alerta</Text>
                    </TohchableOpacity>
                </>
            )
        }

        private showAlertMessage(message: string){
            alert(message);
        }
    }

```