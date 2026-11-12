
//  user info

export type UserRole = 'client' | 'worker' | 'admin';


export interface BaseUser {
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
import { mockWorkerUser } from "./mockUsersData"


export const mockActiveRepair: ActiveRepairOrder = {
    orderId: 'ord-8841',
    carId: 'car-01',
    carName: 'Tesla Model Y Dual Motor',
    licensePlate: 'C AB 123',
    serviceTitle: 'Комплексная диагностика EV + Замена тормозной жидкости',
    status: 'IN_PROGRESS', // Меняй на 'PARKED' для теста парковки 5х5
    progressPercent: 65,
    assignedBayName: 'Пост №2 (Электрика/EV)',
    master: mockWorkerUser,
    parkingSpot: {
        row: 2,
        col: 4,
        sectorName: 'Сектор А',
    },
    pendingIssue: {
        id: 'issue-99',
        title: 'Износ передних тормозных колодок',
        description: 'Остаток фрикционного слоя 2 мм (минимум 3 мм). Рекомендуем заменить во избежание повреждения дисков.',
        estimatedCost: 1450,
        status: 'PENDING_APPROVAL',
    },
    chatHistory: [
        {
            id: 'c1',
            senderRole: 'worker',
            senderName: 'Иван Сергеев',
            text: 'Добрый день! Приступил к диагностике вашей Tesla Model Y.',
            timestamp: '10:15',
        },
        {
            id: 'c2',
            senderRole: 'client',
            senderName: 'Андрей',
            text: 'Здравствуйте! Обратите внимание на легкий скрип спереди при торможении.',
            timestamp: '10:18',
        },
        {
            id: 'c3',
            senderRole: 'worker',
            senderName: 'Иван Сергеев',
            text: 'Принято. Обнаружил износ передних колодок, отправил вам карточку согласования.',
            timestamp: '10:22',
        },
    ],
};

// --- КАТАЛОГ ЗАПЧАСТЕЙ ---
export const mockPartsCatalog: AutoPart[] = [
    {
        id: 'p-01',
        name: 'Liqui Moly Top Tec 4200 5W-30',
        category: 'OIL',
        compatibleCarModels: ['Audi A6', 'Volkswagen Touareg'],
        price: 1250,
        inStock: true,
        specs: 'VW 504 00 / 507 00 (5 литров)',
        image: 'https://images.unsplash.com/photo-1615900119311-e6b948796851?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 'p-02',
        name: 'HEPA Салонный фильтр Tesla (Комплект 2 шт)',
        category: 'FILTERS',
        compatibleCarModels: ['Tesla Model Y', 'Tesla Model 3'],
        price: 850,
        inStock: true,
        specs: 'Защита от пыли PM2.5 и аллергенов',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 'p-03',
        name: 'Передние тормозные колодки Brembo EV',
        category: 'BRAKES',
        compatibleCarModels: ['Tesla Model Y'],
        price: 1850,
        inStock: true,
        specs: 'Керамическое покрытие, сниженный шум',
        image: 'https://images.unsplash.com/photo-1600706432520-22c92e742e97?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 'p-04',
        name: 'Тормозная жидкость Bosch DOT 4 HP',
        category: 'FLUIDS',
        compatibleCarModels: ['Tesla Model Y', 'Audi A6'],
        price: 320,
        inStock: true,
        specs: 'Низкая вязкость для систем ABS/ESP (1 литр)',
        image: 'https://images.unsplash.com/photo-1527383418406-f85a3b146499?auto=format&fit=crop&w=300&q=80',
    },
];


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