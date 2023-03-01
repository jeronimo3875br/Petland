/*

    # Arquivo > RootStackParamsList

    Arquivo designado declaração de tipagens das rotas.

*/

import { ImageSourcePropType } from 'react-native';


export type RootStackParamsList = {
    home: undefined;
    welcome: undefined;
    pet: {
        name: string;
        image: ImageSourcePropType,
        description: string;
        isFavorite: boolean;
    };
}