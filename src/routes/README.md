# Arquivo > Routes

Esse arquivo é onde as rotas da aplicação devem ser configuradas.

```tsx

    // Packages
    import React from 'react';
    import { RootStackParamsList } from '@/RootStackParamsList';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';

    // Pages
    import { Home } from '@/pages/home';
    import { Welcome } from '@/pages/welcome';

    const Stack = createNativeStackNavigator<RootStackParamsList>();

    function Routes(){
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="home"
                    component={Home}
                    options={{
                        headerShown: true,
                        headerTitle: 'Pokédex',
                        headerStyle: {
                            backgroundColor: '#ed5463',
                        },
                        headerTitleStyle: {
                            color: '#ffffff',
                            fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center',
                        headerBackVisible: false
                    }}
                />
            </Stack.Navigator>
        );
    }

    export { Routes };


```