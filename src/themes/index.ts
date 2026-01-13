import { ClassicTheme } from "./classic.theme";

export const themes = {
  classic: ClassicTheme,
} as const;

export type ThemeName = keyof typeof themes;

export function getTheme(name: ThemeName) {
  return themes[name];
}
