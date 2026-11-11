
//  user info

type UserRole = 'client' | 'worker' | 'admin';


interface BaseUser {
    id: string;
    name: string;
    phone?: string;
    email: string;
    role: UserRole;
    avatar?: string;
}
//  client user
export interface ClientUser extends BaseUser {
    role: 'client';
    cars: Car[];
    activeRepairId?: string;
    discountRate?: number;
}
//  worker user
export interface WorkerUser extends BaseUser {
    role: 'worker';
    specialization: string;
    assignedBayId?: string;
    isAvailable: boolean;
}



// admin user
export interface AdminUser extends BaseUser {
    role: 'admin';
    permissions: string[];
    accessLevel: 'full' | 'manager';
}
// export as type for permision

export type User = ClientUser | WorkerUser | AdminUser;


//  stay token for user 

export const MOCK_TOKENS = {
    CLIENT: 'token_user_client_111',
    WORKER: 'token_user_worker_111',
    ADMIN: 'token_user_admin_111',
} as const;

//  type engine 
export type DrivetrainType = 'ICE' | 'EV';

// two type of engine specificatio 

export interface IceEngineSpecs {
    drivetrain: 'ICE';
    fuelType: 'GASOIL' | 'DIESEL' | 'GAS';
    volumeLiters: number;
    oilCapacityLiters: number;
    recommendedOilGrade: string[];
}
export interface EvEngineSpecs {
    drivetrain: 'EV';
    batteryCapacityKwh: number;
    driveType: 'AWD' | 'RWD' | 'FWD';
    coolantType: string[];
}
// export fix type 
export type EngineSpecs = IceEngineSpecs | EvEngineSpecs;


//  main specifacation of car 
export interface Car {
    id: string;
    brand: string;
    model: string;
    manufactureYear: number;
    licensePlate: string;
    vinNumber: string;
    color?: string;
    mileage: number;
    engineSpecs: EngineSpecs;
}


// status of repair 
export type RepairStatus =
    | 'DIAGNOSTICS'
    | 'IN_PROGRESS'
    | 'WAITING_PARTS'
    | 'READY_FOR_PICKUP'
    | 'PARKED';

//  chat with clent 
export interface ChatMessage {
    id: string;
    senderRole: 'client' | 'worker';
    senderName: string;
    text: string;
    timestamp: string;
}
// aditional  service dor perpicion from cleint
export interface AdditionalIssueAlert {
    id: string;
    title: string;
    description: string;
    estimatedCost: number;
    status: 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED';
    photoUrl?: string;
}

// place where will packed the car after work



export interface ParkingCoordinates {
    row: number;
    col: number;
    sectorName: string;
}


//  place work and work 

export interface ActiveRepairOrder {
    orderId: string;
    carId: string;
    carName: string;
    licensePlate: string;
    serviceTitle: string;
    status: RepairStatus;
    progressPercent: number;
    assignedBayName: string;
    master: WorkerUser;
    pendingIssue?: AdditionalIssueAlert;
    chatHistory: ChatMessage[];
    parkingSpot?: ParkingCoordinates;
}




// for catalog 
export type PartCategory = 'OIL' | 'FLUIDS' | 'FILTERS' | 'BRAKES';

export interface AutoPart {
    id: string;
    name: string;
    category: PartCategory;
    compatibleCarModels: string[];
    price: number;
    inStock: boolean;
    specs: string;
    image: string;
}




// static client
export const mockClientUser: ClientUser = {
    id: 'usr-client-01',
    name: 'XXX XXXX',
    phone: '+373 60 000 000',
    email: 'client@automaster.com',
    role: 'client',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    discountRate: 5,
    activeRepairId: 'ord-8841',
    cars: [
        {
            id: 'car-01',
            brand: 'Tesla',
            model: 'Model Y Dual Motor',
            manufactureYear: 2023,
            licensePlate: 'C AB 123',
            vinNumber: '5YJYGDEF8PF123456',
            color: 'Pearl White',
            mileage: 45000,
            engineSpecs: {
                drivetrain: 'EV',
                batteryCapacityKwh: 75,
                driveType: 'AWD',
                coolantType: ['G48 EV Antifreeze', 'Coolant Type 2'],
            },
        },
        {
            id: 'car-02',
            brand: 'Audi',
            model: 'A6 Allroad',
            manufactureYear: 2020,
            licensePlate: 'C C 777',
            vinNumber: 'WAUZZZ4G8LN654321',
            color: 'Mythos Black',
            mileage: 112000,
            engineSpecs: {
                drivetrain: 'ICE',
                fuelType: 'DIESEL',
                volumeLiters: 3.0,
                oilCapacityLiters: 6.4,
                recommendedOilGrade: ['5W-30 VW 507 00', '5W-30 VW 504 00'],
            },
        },
    ],
};















export interface CarSpecidication {
    id: string;
    mark: string;
    model: string;
    licensePlate: string;
    vinNumber: string;
    manufactureYear: number;
    color?: string;
    enginetype?: string;

}

export interface ClientDetails {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    password?: string;
    cars: CarSpecidication[];

}
const initialClient: ClientDetails = {
    id: 'u1',
    name: 'Алексей Смирнов',
    email: 'client@test.com',
    phoneNumber: '+380671234567',
    password: 'password123',
    cars: [
        {
            id: 'c1',
            mark: 'BMW',
            model: 'X5',
            licensePlate: 'AE 7777 HB',
            vinNumber: 'WBAX1234567890DEF',
            manufactureYear: 2020,
            color: 'Черный',
            enginetype: '3.0 L6 Turbo',
        },
    ],
};


export { initialClient }