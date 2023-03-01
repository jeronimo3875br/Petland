# Pasta > DTOs

Pasta designada a declarações de esquemas para transferência de objetos entre uma camada e outra do sistema.

# Exemplo de uso

```ts

    // IUserAuthenticationDTO.ts

    import { IDefaultDTO } from "@/dtos/IDefaultDTO"; 

    export interface IUserAuthenticationDTO extends IDefaultDTO {
        username: string;
        password: string;
        active: boolean;
        verification: {
            email: boolean;
            telephone: boolean;
        }
    }

```