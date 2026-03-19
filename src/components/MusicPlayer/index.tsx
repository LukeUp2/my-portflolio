import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Inicia com 30% de volume
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Efeito para atualizar o volume do áudio sempre que o estado "volume" mudar
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Funções para aumentar/diminuir de 10 em 10%
  const decreaseVolume = () => setVolume((prev) => Math.max(0, prev - 0.03));
  const increaseVolume = () => setVolume((prev) => Math.min(1, prev + 0.03));

  // Converte 0.3 para "30" para mostrar na tela
  const volumeDisplay = Math.round(volume * 100);

  // Estilo base para zerar os botões padrão do HTML
  const btnStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'VT323', monospace",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "color 0.2s",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem", // Fica no canto inferior direito
        zIndex: 100, // Garante que fique por cima de tudo
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "rgba(13, 13, 13, 0.9)", // Fundo escuro levemente transparente
        backdropFilter: "blur(4px)", // Efeito de vidro borrado no fundo
        border: "1px solid #333",
        padding: "0.5rem 1rem",
        fontFamily: "'VT323', monospace",
        color: "#a0a0a0",
      }}
    >
      {/* Botão de Play/Pause */}
      <button
        onClick={togglePlay}
        style={{ ...btnStyle, color: isPlaying ? "#4ade80" : "#a0a0a0" }}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        {isPlaying ? "ON" : "OFF"}
      </button>

      {/* Separador visual */}
      <span style={{ color: "#333" }}>|</span>

      {/* Controles de Volume */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button
          onClick={decreaseVolume}
          style={{ ...btnStyle, color: volume === 0 ? "#333" : "#a0a0a0" }}
          disabled={volume === 0}
        >
          [ - ]
        </button>

        <span style={{ width: "70px", textAlign: "center" }}>
          VOL:{volumeDisplay}%
        </span>

        <button
          onClick={increaseVolume}
          style={{ ...btnStyle, color: volume >= 1 ? "#333" : "#a0a0a0" }}
          disabled={volume >= 1}
        >
          [ + ]
        </button>
      </div>

      <audio ref={audioRef} src="/pokemon-bgm.m4a" loop />
    </div>
  );
}
