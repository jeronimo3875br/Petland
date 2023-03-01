# Pasta > Store 

Essa pasta é designada a gerenciamento de estado global. Recomenda-se o uso da biblioteca do facebook Recoil.js.

# Exemplo de uso

```tsx 

    // store/load.ts

    import { atom } from 'recoil';

    export const loadState = atom({
        key: 'loadState',
        default: false
    });

    export const loadTextState = atom({
        key: 'loadTextState',
        default: 'Capturando pókemons' as string,
    });

    // LoadComponent

    import { useRecoilState } from "recoil";
    import { View, Image } from "react-native";
    import LoadAnimation from "@/assets/animations/load.gif";

    import { loadState } from "@/store/load.ts";

    export function Load(){

        const [ load, setLoad ] = useRecoilAnimation(loadState);

        return (
            <View>
                {
                    load ? <Image source={LoadAnimation} resizeMode="contain" /> : null
                }
            </View>
        )
    }

```