import { useEffect, useRef, useState } from "react";
import { Minus, Music2, Pause, Play, Plus } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-player" aria-label="Player de música ambiente">
      <Music2 size={16} aria-hidden="true" />
      <button onClick={togglePlay} aria-label={isPlaying ? "Pausar música" : "Tocar música"}>
        {isPlaying ? <Pause size={15} /> : <Play size={15} />}
      </button>
      <button onClick={() => setVolume((value) => Math.max(0, value - 0.1))} disabled={volume <= 0} aria-label="Diminuir volume">
        <Minus size={14} />
      </button>
      <span aria-live="polite">{Math.round(volume * 100)}%</span>
      <button onClick={() => setVolume((value) => Math.min(1, value + 0.1))} disabled={volume >= 1} aria-label="Aumentar volume">
        <Plus size={14} />
      </button>
      <audio ref={audioRef} src="/pokemon-bgm.m4a" loop />
    </div>
  );
}
