import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

export const LoginForm: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Получаем адрес для редиректа, если он был передан (например /booking)
    const redirectTarget = searchParams.get('redirect') || '/';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Здесь будет вызов API для авторизации (например, loginUser({ phone, password }))
        console.log('Вход:', { phone, password });

        // После успешного входа перенаправляем пользователя
        navigate(redirectTarget);
    };

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                {redirectTarget === '/booking' ? 'Войдите для записи на сервис' : 'Вход в личный кабинет'}
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
                Введите номер телефона и пароль для продолжения
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Номер телефона
                    </label>
                    <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+373 60 000 000"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Пароль
                    </label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 shadow-sm"
                >
                    Войти
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
                Ещё нет аккаунта?{' '}
                <Link
                    to={`/register?redirect=${encodeURIComponent(redirectTarget)}`}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Зарегистрироваться
                </Link>
            </div>
        </div>
    );
};