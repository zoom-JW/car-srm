import React from 'react';
import { initialClient } from '../../../data/mockData.tsx';
import { Car, User, Phone, Mail } from 'lucide-react';

export const ClientProfile: React.FC = () => {
    const client = initialClient;

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">

            <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                    <User className="text-blue-600" /> Профиль клиента
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                        <User size={20} className="text-gray-400 shrink-0" />
                        <div>
                            <p className="text-xs text-gray-400">Имя</p>
                            <p className="font-medium text-gray-800">{client.name}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                        <Mail size={20} className="text-gray-400 shrink-0" />
                        <div>
                            <p className="text-xs text-gray-400">Email</p>
                            <p className="font-medium text-gray-800">{client.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                        <Phone size={20} className="text-gray-400 shrink-0" />
                        <div>
                            <p className="text-xs text-gray-400">Телефон</p>
                            <p className="font-medium text-gray-800">{client.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                    <Car className="text-blue-600" /> Портфолио автомобиля (Гараж)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {client.cars.map((car) => (
                        <div
                            key={car.id}
                            className="border border-gray-200 rounded-xl p-5 bg-gradient-to-br from-gray-50/50 to-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{car.mark} {car.model}</h3>
                                    <p className="text-xs text-gray-500">Год выпуска: {car.manufactureYear}</p>
                                </div>
                                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                                    {car.licensePlate}
                                </span>
                            </div>

                            <div className="space-y-2.5 text-sm text-gray-600 border-t border-gray-100 pt-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">VIN-код:</span>
                                    <span className="font-mono text-gray-800 text-xs bg-gray-100 px-2 py-0.5 rounded">{car.vinNumber}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Двигатель:</span>
                                    <span className="font-medium text-gray-800">{car.enginetype || 'Не указан'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Цвет:</span>
                                    <span className="font-medium text-gray-800">{car.color || 'Не указан'}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};