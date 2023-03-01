# Arquivo > Pages

Essa parte deve suportar os componentes que se comportarão como uma página. 

# Exemplo de uso

```tsx

    import { Component } from "react";
    import { View, Text, TouchableOpacity } from "react-native";
    import { ApplicationTitle } from "@/components/home/ApplicationTitle";
    import { ApplicationHeader } from "@/components/home/ApplicationTitle";
    import { ApplicationFooter } from "@/components/home/ApplicationTitle";
    import { ApplicationButton } from "@/components/home/ApplicationTitle";

    export class HomePage extends Component {
        public render(){
            return (
                <View>
                    <ApplicationHeader>
                        <ApplicationTitle>Criação de uma página</ApplicationTitle>
                    </ApplicationHeader>
                    <ApplicationFooter>
                        <ApplicationButton>Botão da página</ApplicationButton>
                    </ApplicationFooter>
                </View>
            )
        }

        private showAlertMessage(message: string){
            alert(message);
        }
    }

```