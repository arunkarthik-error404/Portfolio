"use client";

import { useSyncExternalStore } from "react";

export type MeshMode = "solid" | "wireframe" | "crystal";
export type SpeedMode = 0.5 | 1 | 2.5;
export type ParticleMode = "normal" | "supernova" | "off";
export type ColorTheme = "red" | "blue" | "white";

export interface SceneConfig {
  meshMode: MeshMode;
  speed: SpeedMode;
  particleMode: ParticleMode;
  theme: ColorTheme;
  colorHex: string;
}

const THEME_COLORS: Record<ColorTheme, string> = {
  red: "#ff2e3f",
  blue: "#2f7bff",
  white: "#f7f7f8",
};

/** Text colour that stays readable on top of each accent. */
export const THEME_INK: Record<ColorTheme, string> = {
  red: "#ffffff",
  blue: "#ffffff",
  white: "#050506",
};

const DEFAULT_CONFIG: SceneConfig = {
  meshMode: "solid",
  speed: 1,
  particleMode: "normal",
  theme: "red",
  colorHex: THEME_COLORS.red,
};

let currentConfig: SceneConfig = { ...DEFAULT_CONFIG };
const subscribers = new Set<() => void>();

function notify() {
  subscribers.forEach((callback) => callback());
}

export const sceneStore = {
  get: () => currentConfig,
  set: (partial: Partial<SceneConfig>) => {
    const newTheme = partial.theme ?? currentConfig.theme;
    const newHex = partial.colorHex ?? THEME_COLORS[newTheme] ?? currentConfig.colorHex;

    currentConfig = {
      ...currentConfig,
      ...partial,
      theme: newTheme,
      colorHex: newHex,
    };
    notify();
  },
  reset: () => {
    currentConfig = { ...DEFAULT_CONFIG };
    notify();
  },
  subscribe: (callback: () => void) => {
    subscribers.add(callback);
    return () => {
      subscribers.delete(callback);
    };
  },
};

export function useSceneConfig(): SceneConfig {
  return useSyncExternalStore(
    sceneStore.subscribe,
    sceneStore.get,
    () => DEFAULT_CONFIG
  );
}
