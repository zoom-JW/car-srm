import {
    Car,
    Calendar,
    History,
} from 'lucide-react';


export const ClientNavBar = () => {
    return (
        < nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800" >
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white shadow-md">
                <Car size={16} /> Гараж
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition">
                <Calendar size={16} /> Каталог
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition">
                <History size={16} /> История и счета
            </button>
        </nav >
    )
}