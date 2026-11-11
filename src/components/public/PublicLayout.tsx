import React, { useState } from 'react';
import { Wrench, ShieldCheck, Clock, Award, Phone, Send, MessageSquare, Lock, X } from 'lucide-react';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';

export const PublicLayout: React.FC = () => {
    // Состояние для управления модальными окнами ('none' | 'login' | 'register')
    const [authModal, setAuthModal] = useState<'none' | 'login' | 'register'>('none');

    // Функция для переключения между модалками прямо из форм
    const switchToLogin = () => setAuthModal('login');
    const switchToRegister = () => setAuthModal('register');
    const closeModal = () => setAuthModal('none');

    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans relative">

            {/* 1. Публичный Хедер */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white p-2 rounded-xl">
                            <Wrench size={22} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            Auto<span className="text-blue-600">Master</span> CRM
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
                        <a href="#about" className="hover:text-blue-600 transition-colors">О нас</a>
                        <a href="#advantages" className="hover:text-blue-600 transition-colors">Преимущества</a>
                        <a href="#contacts" className="hover:text-blue-600 transition-colors">Контакты</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setAuthModal('login')}
                            className="text-gray-700 hover:text-blue-600 font-semibold px-4 py-2 rounded-xl transition-all text-sm flex items-center gap-1.5"
                        >
                            Войти
                        </button>
                        <button
                            onClick={() => setAuthModal('register')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md text-sm flex items-center gap-1.5"
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </header>

            {/* 2. Hero-секция (Обложка) */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-white py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                            <Award size={14} /> Инновационный автосервис #1
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                            Обслуживание автомобиля нового уровня
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                            Прозрачный контроль ремонта в реальном времени, запись онлайн без очередей и точное прогнозирование технического обслуживания вашего авто.
                        </p>
                        <div className="pt-2 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setAuthModal('login')}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30 text-center"
                            >
                                Записаться на сервис
                            </button>
                            <a
                                href="#advantages"
                                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all text-center border border-white/10 backdrop-blur-sm"
                            >
                                Узнать больше
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800">
                            <img
                                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
                                alt="Современный автосервис"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Преимущества */}
            <section id="advantages" className="py-20 px-6 max-w-7xl mx-auto w-full">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему мы лучшие в своем деле</h2>
                    <p className="text-gray-500">Мы объединили передовое диагностическое оборудование и удобный цифровой сервис для владельцев авто.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 space-y-4 hover:border-blue-200 transition-all">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Гарантия качества</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Официальная гарантия на все виды работ и запчасти. Вы утверждаете каждую деталь сметы лично.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 space-y-4 hover:border-blue-200 transition-all">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Запись без очередей</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Выбирайте удобное время в интерактивном календаре. Точный расчет длительности работ до минут.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 space-y-4 hover:border-blue-200 transition-all">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <Wrench size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Прозрачный трекер</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Отслеживайте статус готовности машины прямо в личном кабинете: от диагностики до выдачи.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Футер */}
            <footer id="contacts" className="mt-auto bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white font-bold text-lg">
                            <Wrench className="text-blue-500" /> AutoMaster CRM
                        </div>
                        <p className="text-sm text-gray-400">
                            Ваш надежный партнер в обслуживании и ремонте автомобилей.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-white font-semibold text-sm">Связь в мессенджерах</h4>
                        <div className="flex flex-col gap-2 text-sm">
                            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Send size={16} className="text-blue-400" /> Telegram
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                                <MessageSquare size={16} className="text-purple-400" /> Viber
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone size={16} className="text-emerald-400" /> WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-white font-semibold text-sm">Контакты</h4>
                        <p className="text-sm">Телефон: +380 (67) 123-45-67</p>
                        <p className="text-sm">Email: info@automaster-crm.com</p>
                        <p className="text-sm">Режим работы: Пн-Сб 09:00 - 19:00</p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-white font-semibold text-sm">Безопасность</h4>
                        <div className="flex items-start gap-2 text-xs text-gray-400">
                            <Lock size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>Ваши личные данные и история визитов зашифрованы и строгой конфиденциальности.</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    © 2026 AutoMaster CRM. Все права защищены.
                </div>
            </footer>

            {/* МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ */}
            {authModal !== 'none' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
                    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Кнопка закрытия модалки */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-2 max-h-[90vh] overflow-y-auto">
                            {authModal === 'login' ? (
                                <LoginForm />
                            ) : (
                                <RegisterForm />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};