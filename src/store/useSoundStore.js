import { create } from 'zustand'

const useSoundStore = create((set, get) => ({
    isMuted: false,
    isPlaying: false,
    currentSong: null,
    audio: null,
    playlist: [
        { title: 'Aaj Din Chadheya', file: 'aaj_din_chadheya.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Kaun Tujhe', file: 'Kaun_Tujhe.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Raabta', file: 'ye_dil_tum_bin.mp3', artist: 'Tithi Shah', category: 'Bollywood' }, // Aliased for variety
        { title: 'Bole Chudiyan', file: 'Bole_Chudiyan.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Mora Saiyaan', file: 'Mora_Saiyaan.mp3', artist: 'Tithi Shah', category: 'Classical' },
        { title: 'Tum Tak', file: 'tumtak.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Tere Hawale', file: 'tere_hawale.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Vida Karo', file: 'Vida_karo.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Bolo Na', file: 'bolo_na.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Aise Kyun', file: 'aise_kyun.opus', artist: 'Tithi Shah', category: 'Independent' },
        { title: 'Finding Him', file: 'finding_him.m4a', artist: 'Tithi Shah', category: 'Instrumental/Vocal' }
    ],

    setIsMuted: (muted) => {
        set({ isMuted: muted });
        if (get().audio) get().audio.muted = muted;
    },

    playSong: (song) => {
        const { audio, isMuted } = get();

        // Stop current audio if any
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        const newAudio = new Audio(`/Hobby/Singing/${song.file}`);
        newAudio.muted = isMuted;

        newAudio.play().catch(e => console.error("Audio playback failed:", e));

        set({
            currentSong: song,
            audio: newAudio,
            isPlaying: true
        });

        newAudio.onended = () => {
            get().nextSong();
        };
    },

    togglePlay: () => {
        const { audio, isPlaying, currentSong, playlist, playSong } = get();
        if (!currentSong) {
            playSong(playlist[0]);
            return;
        }

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        set({ isPlaying: !isPlaying });
    },

    nextSong: () => {
        const { currentSong, playlist, playSong } = get();
        const index = playlist.findIndex(s => s.file === currentSong?.file);
        const nextIndex = (index + 1) % playlist.length;
        playSong(playlist[nextIndex]);
    },

    prevSong: () => {
        const { currentSong, playlist, playSong } = get();
        const index = playlist.findIndex(s => s.file === currentSong?.file);
        const prevIndex = (index - 1 + playlist.length) % playlist.length;
        playSong(playlist[prevIndex]);
    }
}))

export default useSoundStore;
