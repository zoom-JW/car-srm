import {
    Wrench,
    Calendar,
    Bell,

} from 'lucide-react';

import { ClientNavBar } from './ClientNavBar';


export const ClientHeader = () => {
    return (
        <header className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">


                <div className="flex items-center gap-2.5">
                    <div className="bg-blue-600 text-white p-2 rounded-xl shadow-lg shadow-blue-500/20">
                        <Wrench size={20} />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">
                        Auto<span className="text-blue-500">Master</span> CRM
                    </span>
                </div>
                <ClientNavBar />
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => console.log('uel')}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center gap-2 shrink-0 animate-pulse"
                    >
                        <Calendar size={15} />
                        <span className="hidden md:inline">Записаться на СТО</span>
                    </button>
                    <button className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition">
                        <Bell size={18} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </button>
                    <div className="flex items-center gap-2 p-1 pl-2 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs font-semibold hidden sm:inline">Андрей М.</span>
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                            alt="Профиль"
                            className="w-8 h-8 rounded-lg object-cover"
                        />
                    </div>
                </div>

            </div>
        </header>
    )
}
