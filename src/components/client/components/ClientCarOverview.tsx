import {
    BatteryCharging,
    Gauge,
    Clock,
} from 'lucide-react';

import React, { useState } from 'react';
import { currentUser } from '../../../api/CreateUsers';

export const ClientCarOverview: React.FC = () => {
    const { cars } = currentUser;
    const [selectedCarIndex, setSelectedCarIndex] = useState(0);
    const currentCar = cars[selectedCarIndex];
    const batteryOrFuelInfo = currentCar.engineSpecs.drivetrain === 'EV'
        ? `Батарея: ${currentCar.engineSpecs.batteryCapacityKwh} кВт·ч`
        : `Топливо: ${currentCar.engineSpecs.fuelType} (${currentCar.engineSpecs.volumeLiters}L)`;
    return (
        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400">
                        <Gauge size={20} />
                    </div>
                    <div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Пробег</p>
                        <p className="text-sm font-bold text-slate-100">{currentCar.mileage}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400">
                        <BatteryCharging size={20} />
                    </div>
                    <div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Батарея / Топливо</p>
                        <p className="text-sm font-bold text-slate-100">{batteryOrFuelInfo}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400">
                        <Clock size={20} />
                    </div>
                    <div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">До след. ТО</p>
                        <p className="text-sm font-bold text-slate-100">Service(number)</p>
                    </div>
                </div>
            </div>

            {/* Акцентный блок предупреждений (если есть) */}

        </section>
    );
};