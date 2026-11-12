import {
    AlertTriangle,
    FileText,
    PhoneCall,
    ChevronRight
} from 'lucide-react';


export const ClientSosButton = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button
                onClick={() => alert('Сметы и чеки')}
                className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between transition group text-left"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400 group-hover:scale-110 transition">
                        <FileText size={18} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white">Сметы и чеки</p>
                        <p className="text-[10px] text-slate-400">Архив документов</p>
                    </div>
                </div>
                <ChevronRight size={16} className="text-slate-600 group-hover:text-slate-400 transition" />
            </button>

            <button
                onClick={() => alert('Вызов эвакуатора / SOS')}
                className="bg-slate-900/60 hover:bg-red-950/20 border border-slate-800 hover:border-red-900/40 rounded-2xl p-4 flex items-center justify-between transition group text-left"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 group-hover:scale-110 transition">
                        <AlertTriangle size={18} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white">SOS / Эвакуатор</p>
                        <p className="text-[10px] text-red-400/80">Экстренная помощь</p>
                    </div>
                </div>
                <ChevronRight size={16} className="text-slate-600 group-hover:text-slate-400 transition" />
            </button>

            <button
                onClick={() => alert('Контакты СТО')}
                className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between transition group text-left"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 group-hover:scale-110 transition">
                        <PhoneCall size={18} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white">Контакты СТО</p>
                        <p className="text-[10px] text-slate-400">Пн-Сб: 09:00 - 19:00</p>
                    </div>
                </div>
                <ChevronRight size={16} className="text-slate-600 group-hover:text-slate-400 transition" />
            </button>
        </section>
    );
};