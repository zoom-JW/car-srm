import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Сюда будешь добавлять свои slice-редьюсеры
    // например: auth: authReducer,
    //           cars: carsReducer,
  },
});

// Типы для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

