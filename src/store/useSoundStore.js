import { create } from 'zustand'

const useSoundStore = create((set, get) => ({
    isMuted: false,
    isPlaying: false,
    progress: 0,
    currentSong: null,
    audio: null,
    playlist: [
        // Group 1
        { title: 'Aaj Jane Ki Zidd Na Karo', file: '1]aaj_jane_ki_zidd_na_karo.opus', artist: 'Tithi Shah', category: 'Ghazal' },
        { title: 'Finding Him', file: '1] finding_him.m4a', artist: 'Tithi Shah', category: 'Instrumental' },
        { title: 'Bole Chudiyan', file: '1]Bole_Chudiyan.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Ekadantaya Vakratundaya', file: '1]Ekadantaya_Vakratundaya.mp3', artist: 'Tithi Shah', category: 'Devotional' },
        { title: 'Kaun Tujhe', file: '1]Kaun_Tujhe.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Vida Karo', file: '1]Vida_karo.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Wo Dekhne Me', file: '1]Wo_dekhne_me.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Ae Re Sakhi', file: '1]ae_re_sakhi.mp4', artist: 'Tithi Shah', category: 'Classical' },
        { title: 'Bolo Na', file: '1]bolo_na.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Hum Tere Pyar Me', file: '1]hum_tere_pyar_me.m4a', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Khuda Jane', file: '1]khuda_jane_ke.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Ram Ratan Dhan Payo', file: '1]ram_ratan_dhan_payo.mp3', artist: 'Tithi Shah', category: 'Devotional' },
        { title: 'Sajni Re', file: '1]sajni_re.mp3', artist: 'Tithi Shah', category: 'Independent' },

        // Group 3
        { title: 'Mora Saiyaan', file: '3]Mora_Saiyaan.mp3', artist: 'Tithi Shah', category: 'Classical' },
        { title: 'Aaj Din Chadheya', file: '3]aaj_din_chadheya.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Dil Da Vasta', file: '3]dil_da_vasta.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Main Rahu Ya Na Rahu', file: '3]main_rahu_ya_na_rahu.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Savan Beeto Jai', file: '3]savan_beeto_jai.mp3', artist: 'Tithi Shah', category: 'Classical' },
        { title: 'Tere Hawale', file: '3]tere_hawale.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Tu Aisa Kese Hai', file: '3]tu_aisa_kese_hai.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Tum Tak', file: '3]tumtak.mp3', artist: 'Tithi Shah', category: 'Bollywood' },

        // Group 2
        { title: 'Aapki Akho Me Kuch', file: '2]apki_akho_me kuch.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Dagabaaz Re', file: '2]dagabaazre.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Dekha Hazaro Dafa', file: '2]dekha_hazaro_dafa.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Kaise Ab Kahe', file: '2]kaise_ab_kahe.mp3', artist: 'Tithi Shah', category: 'Bollywood' },
        { title: 'Ye Dil Tum Bin', file: '2]ye_dil_tum_bin.mp3', artist: 'Tithi Shah', category: 'Bollywood' }
    ],

    setIsMuted: (muted) => {
        set({ isMuted: muted });
        if (get().audio) get().audio.muted = muted;
    },

    playSong: (song) => {
        const { audio, isMuted } = get();

        // Clean up current audio if any
        if (audio) {
            audio.pause();
            audio.src = '';
            audio.load();
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
    },

    setProgress: (progress) => set({ progress }),

    resetProgress: () => set({ progress: 0 })
}))

export default useSoundStore;
