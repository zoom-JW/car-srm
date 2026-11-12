import { ClientUser, WorkerUser, AdminUser } from './mockData';
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
export const mockWorkerUser: WorkerUser = {
    id: 'usr-worker-01',
    name: 'Иван Сергеев',
    phone: '+373 69 123 456',
    email: 'worker@automaster.com',
    role: 'worker',
    specialization: 'Старший автомеханик / EV-специалист',
    assignedBayId: 'bay-02',
    isAvailable: false,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
};

// --- АДМИНИСТРАТОР ---
export const mockAdminUser: AdminUser = {
    id: 'usr-admin-01',
    name: 'Виктор Николаевич',
    phone: '+373 68 999 888',
    email: 'admin@automaster.com',
    role: 'admin',
    accessLevel: 'full',
    permissions: ['MANAGE_USERS', 'MANAGE_FINANCES', 'MANAGE_WORKERS', 'SETTINGS'],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
};




















const cars = [
    {
        id: 'car-01',
        name: 'Tesla Model Y Dual Motor',
        licensePlate: 'C AB 123',
        status: 'ON_SERVICE', // 'ON_SERVICE' | 'NORMAL'
        mileage: '45 200 км',
        batteryOrFuel: '78% (Заряд)',
        nextService: '2 800 км (или 45 дней)',
        healthWarning: 'Рекомендация: Замена передних колодок (Остаток 2 мм)',
        // Сценарий СТО
        serviceDetails: {
            progress: 65,
            currentStage: 'Комплексная диагностика EV + Замена тормозной жидкости',
            eta: '16:30',
            bay: 'Пост №2 (Электрика/EV)',
            masterName: 'Иван Сергеев'
        }
    },
    {
        id: 'car-02',
        name: 'Hyundai ix35',
        licensePlate: 'C CC 777',
        status: 'NORMAL',
        mileage: '112 000 км',
        batteryOrFuel: '45L (Дизель)',
        nextService: '1 200 км (через 14 дней)',
        healthWarning: null,
        serviceDetails: null
    }
];