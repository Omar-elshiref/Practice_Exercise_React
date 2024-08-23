import { create } from 'zustand';

const initialState = { count: 0 };

const useCounterStore = create((set) => ({
  ...initialState,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set((state) => ({ count: state.count = 0 })),
}));


export default useCounterStore;

//=========================================================================================================

// Using DevTools Middleware

// import create from 'zustand';
// import { devtools } from 'zustand/middleware';
// const useStore = create(devtools((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
// })));

// export default useStore

//=========================================================================================================

// Using Logger Middleware

// import create from 'zustand';
// import { logger } from 'zustand/middleware';
// const useStore = create(logger((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
// })));

// export default useStore

//=========================================================================================================

// Using Built-in Persistence Middleware

// import create from 'zustand';
// import { persist } from 'zustand/middleware';
// const useStore = create(persist(
//   (set) => ({
//     count: 0,
//     increment: () => set((state) => ({ count: state.count + 1 })),
//     resetCount: () => set({ count: 0 })
//   }),
//   {
//     name: 'counter-storage', // unique name
//     getStorage: () => localStorage, // default is localStorage can be a sessionStorage too
//   }
// ));

// export default useStore;

// ===================================================================================

//  Splitting Stores

// import create from 'zustand'
// Store for user information
// const useUserStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
// }));
// Store for application settings
// const useSettingsStore = create((set) => ({
//   darkMode: false,
//   toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
// }));

// export default useSettingsStore ;
