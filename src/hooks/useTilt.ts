import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// Tipagem das opções do tilt
type TiltOptions = {
  reverse?: boolean;
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
  scale?: number;
  [key: string]: unknown;
};

// Interface que adiciona vanillaTilt dinamicamente ao elemento
interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

export function useTilt(options?: TiltOptions) {
  const tiltRef = useRef<TiltHTMLElement | null>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;

    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        reverse: true,
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        ...options,
      });

      return () => {
        tiltNode.vanillaTilt?.destroy();
      };
    }
  }, [options]);

  return tiltRef;
}
