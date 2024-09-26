import { StateCreator } from "zustand"

export interface AppSlice {
  isNavbarCollapse: boolean
  openNavbar: () => void
  closeNavbar: () => void
  toggleNavbar: () => void
}

const createAppSlice: StateCreator<AppSlice> = (set) => {
  return {
    isNavbarCollapse: true,
    openNavbar: () =>
      set((state) => {
        return { ...state, isNavbarCollapse: true }
      }),
    closeNavbar: () =>
      set((state) => {
        return { ...state, isNavbarCollapse: false }
      }),
    toggleNavbar: () =>
      set((state) => {
        return { ...state, isNavbarCollapse: !state.isNavbarCollapse }
      }),
  }
}

export default createAppSlice
