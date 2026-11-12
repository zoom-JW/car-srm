import {
    Car,
    Plus,
    ShieldCheck,
} from 'lucide-react';
import React, { useState } from 'react';

import { currentUser } from '../../../api/CreateUsers';

export const ClientsCar: React.FC = () => {
    const [selectedCarIndex, setSelectedCarIndex] = useState(0);
    const { cars } = currentUser;
    const { brand, model, licensePlate, vinNumber, mileage, engineSpecs } = cars[selectedCarIndex];
    const fullName = `${brand} ${model}`;
    const currentCar = cars[selectedCarIndex];
    return (

        <section className="space-y-3">
            <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Мой автопарк</h2>
                <span className="text-xs text-slate-500">{cars.length} автомобиля</span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {cars.map((car, index) => {
                    const isSelected = selectedCarIndex === index;
                    return (
                        <button
                            key={car.id}
                            onClick={() => setSelectedCarIndex(index)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all shrink-0 ${isSelected
                                ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-blue-500/50 text-white shadow-lg shadow-blue-500/10'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                                }`}
                        >
                            <div className={`p-2 rounded-xl ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                                <Car size={18} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold">{`${car.brand} ${car.model}`}</p>
                                <p className="text-[10px] text-slate-400">{car.licensePlate}</p>
                            </div>
                        </button>
                    );
                })}
                <button
                    onClick={() => alert('Открыть модалку добавления авто')}
                    className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 text-slate-400 hover:border-slate-500 hover:text-white transition shrink-0 text-xs font-semibold"
                >
                    <Plus size={16} /> Добавить авто
                </button>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-[#131C31] border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            {currentUser.activeRepairId ? (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" /> На обслуживании
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <ShieldCheck size={12} /> В норме
                                </span>
                            )}
                            <span className="text-xs text-slate-400 font-mono">VIN: {vinNumber}</span>
                        </div>
                        <h1 className="text-2xl font-extrabold text-white tracking-tight">{fullName}</h1>
                        <p className="text-sm font-mono text-slate-400 mt-0.5">Гос. номер: <span className="text-slate-200">{licensePlate}</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}


