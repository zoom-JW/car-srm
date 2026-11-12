import React, { useState } from 'react';



import { ClientHeader } from '../components/ClientHeader';
import { ClientMain } from '../components/ClientMain';

export const ClientGarageScreen: React.FC = () => {
    // Состояние: выбранный автомобиль в карусели


    // Моковые данные автомобилей пользователя




    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans antialiased pb-12">

            <ClientHeader />
            <ClientMain />
            {/* ОСНОВНОЙ КОНТЕЙНЕР */}


            {/* 2. БЛОК 1: КАРУСЕЛЬ / СЛАЙДЕР АВТОМОБИЛЕЙ («Мой автопарк») */}

            {/* 3. БЛОК 2: ВИДЖЕТ СОСТОЯНИЯ («Здоровье авто») */}



        </div>
    );
};