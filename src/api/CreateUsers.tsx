import { ClientUser } from "../data/mockData"
import { mockClientUser } from "../data/mockUsersData";

export const createUsers = (data: any): ClientUser => {

    return {
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: 'client',
        activeRepairId: data.activeRepairId,
        discountRate: data.discountRate ?? 0,
        cars: (data.cars || []).map((car: any) => ({
            id: car.id,
            brand: car.brand,
            model: car.model,
            manufactureYear: car.manufactureYear,
            licensePlate: car.licensePlate,
            vinNumber: car.vinNumber,
            color: car.color,
            mileage: car.mileage,
            engineSpecs: car.engineSpecs
        }))
    };
}
export const currentUser: ClientUser = createUsers(mockClientUser);

