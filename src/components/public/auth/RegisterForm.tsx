import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

interface RegisterData {
    name: string;
    phone: string;
    password: string;
    carModel?: string;    // Необязательное поле
    licensePlate?: string; // Необязательное поле
}

export const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<RegisterData>({
        name: '',
        phone: '',
        password: '',
        carModel: '',
        licensePlate: '',
    });

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirectTarget = searchParams.get('redirect') || '/';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Здесь будет вызов API регистрации (например, registerUser(formData))
        console.log('Регистрация:', formData);

        // После успешной регистрации перенаправляем пользователя
        navigate(redirectTarget);
    };

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                Регистрация клиента
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
                Создайте аккаунт для удобного управления ремонтами
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Имя и Фамилия
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Иван Иванов"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Номер телефона
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
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
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                </div>

                {/* Разделитель для данных авто */}
                <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Данные авто (необязательно)
                    </p>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Марка и модель <span className="text-gray-400 font-normal">(необязательно)</span>
                            </label>
                            <input
                                type="text"
                                name="carModel"
                                value={formData.carModel}
                                onChange={handleChange}
                                placeholder="Например: Tesla Model Y"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Гос. номер <span className="text-gray-400 font-normal">(необязательно)</span>
                            </label>
                            <input
                                type="text"
                                name="licensePlate"
                                value={formData.licensePlate}
                                onChange={handleChange}
                                placeholder="ABC 123"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200 shadow-sm mt-2"
                >
                    Зарегистрироваться
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
                Уже есть аккаунт?{' '}
                <Link
                    to={`/login?redirect=${encodeURIComponent(redirectTarget)}`}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Войти
                </Link>
            </div>
        </div>
    );
};