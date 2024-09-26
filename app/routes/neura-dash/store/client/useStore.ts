import { create } from "zustand"
import createAppSlice, { AppSlice } from "./appSlice"

/**
 * Global Client Store
 * @example const something = useStore((state) => ({ auth: state.auth }))
 */
export const useStore = create<AppSlice>((...a) => ({
  ...createAppSlice(...a),
}))
