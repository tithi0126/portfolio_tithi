import { create } from 'zustand'

const useSoundStore = create((set) => ({
    isMuted: true,
    setIsMuted: (muted) => set({ isMuted: muted }),
    playSound: (soundType) => {
        // This will be implemented to trigger the actual audio play
    }
}))

export default useSoundStore;
