import { ClientsCar } from "./ClientsCar"

import { ClientCarOverview } from './ClientCarOverview';
import { ClientSosButton } from './ClientSosButton';
export const ClientMain = () => {

    return (

        <main className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
            <ClientsCar />
            <ClientCarOverview />
            <ClientSosButton />
        </main >
    )
}