// constants/Colors.ts

const tintColorLight = '#6366f1'; // Indigo-500
const tintColorDark = '#a5b4fc'; // Indigo-300

export const Colors = {
  light: {
    text: '#111827',           // slate-900
    background: '#F9FAFB',     // gray-50
    tint: tintColorLight,      // indigo
    icon: '#6B7280',           // gray-500
    tabIconDefault: '#9CA3AF', // gray-400
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#F3F4F6',           // gray-100
    background: '#0F172A',     // slate-900
    tint: tintColorDark,       // indigo light
    icon: '#9CA3AF',           // gray-400
    tabIconDefault: '#6B7280', // gray-500
    tabIconSelected: tintColorDark,
  },
};
