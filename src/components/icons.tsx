/* ── Brand SVG Icons ── */
/* Colors: --a (#B4FF39 acid), --c (#00D2FF cyan), --b (#7C5CFF violet) */

export function IconKeyboard({ size = 28, color = "#B4FF39" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="24" height="15" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="6" y="11" width="3" height="2" rx="0.5" fill={color} opacity="0.7" />
      <rect x="11" y="11" width="3" height="2" rx="0.5" fill={color} opacity="0.7" />
      <rect x="16" y="11" width="3" height="2" rx="0.5" fill={color} opacity="0.7" />
      <rect x="21" y="11" width="3" height="2" rx="0.5" fill={color} opacity="0.5" />
      <rect x="6" y="15" width="3" height="2" rx="0.5" fill={color} opacity="0.5" />
      <rect x="11" y="15" width="6" height="2" rx="0.5" fill={color} opacity="0.9" />
      <rect x="19" y="15" width="5" height="2" rx="0.5" fill={color} opacity="0.5" />
      <path d="M5 5L8 7M23 5L20 7" stroke={color} strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconAgent({ size = 28, color = "#00D2FF" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="12" r="7" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="11" cy="11" r="1.5" fill={color} opacity="0.8" />
      <circle cx="17" cy="11" r="1.5" fill={color} opacity="0.8" />
      <path d="M10.5 14.5C11.5 15.8 12.5 16.2 14 16.2C15.5 16.2 16.5 15.8 17.5 14.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M14 5V2M7 7L5 5M21 7L23 5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M8 20L6 25M20 20L22 25M14 19V25" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function IconLink({ size = 28, color = "#7C5CFF" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16L16 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.5 18.5L6.5 21.5C5.1 22.9 5.1 25 6.5 26.3" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <rect x="3" y="3" width="9" height="9" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="16" y="16" width="9" height="9" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="7.5" cy="7.5" r="2" fill={color} opacity="0.3" />
      <circle cx="20.5" cy="20.5" r="2" fill={color} opacity="0.3" />
      <path d="M12 7.5H15M20.5 12V15" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function IconChart({ size = 28, color = "#B4FF39" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24L10 16L15 19L24 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="10" cy="16" r="2" fill={color} opacity="0.3" />
      <circle cx="15" cy="19" r="2" fill={color} opacity="0.3" />
      <circle cx="24" cy="8" r="2" fill={color} opacity="0.5" />
      <path d="M20 8H24V12" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IconClipboard({ size = 28, color = "#B4FF39" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="4" width="18" height="21" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="9" y="2" width="10" height="4" rx="1.5" stroke={color} strokeWidth="1.2" fill="none" />
      <line x1="9" y1="12" x2="19" y2="12" stroke={color} strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
      <line x1="9" y1="16" x2="16" y2="16" stroke={color} strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
      <line x1="9" y1="20" x2="14" y2="20" stroke={color} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <path d="M9 8.5L11 10.5L15 7" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function IconRocket({ size = 28, color = "#00D2FF" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3C14 3 8 9 8 18L14 22L20 18C20 9 14 3 14 3Z" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="13" r="2.5" fill={color} opacity="0.4" />
      <path d="M8 18L4 20L6 16" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M20 18L24 20L22 16" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M12 24L14 27L16 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
    </svg>
  );
}

export function IconBarChart({ size = 28, color = "#7C5CFF" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="16" width="4" height="9" rx="1" fill={color} opacity="0.4" />
      <rect x="10" y="10" width="4" height="15" rx="1" fill={color} opacity="0.6" />
      <rect x="16" y="6" width="4" height="19" rx="1" fill={color} opacity="0.8" />
      <rect x="22" y="3" width="4" height="22" rx="1" fill={color} opacity="1" />
      <line x1="2" y1="25" x2="27" y2="25" stroke={color} strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

export function IconTarget({ size = 28, color = "#B4FF39" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="11" stroke={color} strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="14" cy="14" r="7" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="14" cy="14" r="3" stroke={color} strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="14" cy="14" r="1" fill={color} />
      <line x1="14" y1="1" x2="14" y2="6" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="14" y1="22" x2="14" y2="27" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="1" y1="14" x2="6" y2="14" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="22" y1="14" x2="27" y2="14" stroke={color} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function IconShield({ size = 28, color = "#00D2FF" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L4 7V14C4 20 8 24.5 14 26.5C20 24.5 24 20 24 14V7L14 2Z" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M14 2L4 7V14C4 20 8 24.5 14 26.5" fill={color} opacity="0.08" />
      <path d="M10 14L13 17L19 11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTemplate({ size = 28, color = "#B4FF39" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="22" height="22" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
      <line x1="3" y1="10" x2="25" y2="10" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="13" y1="10" x2="13" y2="25" stroke={color} strokeWidth="1" opacity="0.4" />
      <rect x="5" y="5" width="8" height="3" rx="1" fill={color} opacity="0.5" />
      <rect x="5" y="13" width="6" height="2" rx="0.5" fill={color} opacity="0.3" />
      <rect x="5" y="17" width="5" height="2" rx="0.5" fill={color} opacity="0.2" />
      <rect x="15" y="13" width="8" height="4" rx="1" fill={color} opacity="0.15" />
      <rect x="15" y="19" width="8" height="3" rx="1" fill={color} opacity="0.1" />
    </svg>
  );
}

/* ── Greyscale Integration Logos ── */

export function LogoCursor({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 2L5 19L9.5 14.5L14.5 22L17.5 20.5L12.5 13L19 12L5 2Z" fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}

export function LogoSlack({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 9.5C4.67 9.5 4 8.83 4 8s.67-1.5 1.5-1.5H9V8c0 .83-.67 1.5-1.5 1.5h-2zm4 0c-.83 0-1.5-.67-1.5-1.5V4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5z" fill="rgba(255,255,255,0.55)" />
      <path d="M14.5 9.5c.83 0 1.5-.67 1.5-1.5V4c0-.83-.67-1.5-1.5-1.5S13 3.17 13 4v4c0 .83.67 1.5 1.5 1.5zm4 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H15V8c0 .83.67 1.5 1.5 1.5z" fill="rgba(255,255,255,0.45)" />
      <path d="M18.5 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H15v-1.5c0-.83.67-1.5 1.5-1.5h2zm-4 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5z" fill="rgba(255,255,255,0.55)" />
      <path d="M9.5 14.5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5zm-4 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H9v-1.5c0-.83-.67-1.5-1.5-1.5z" fill="rgba(255,255,255,0.45)" />
    </svg>
  );
}

export function LogoNotion({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 3.5L16 2.5L20 3.5V20.5L16 21.5L4.5 20V3.5Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none" />
      <path d="M7 7L10.5 7L16 16V7.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <line x1="7" y1="17" x2="12" y2="17" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    </svg>
  );
}

export function LogoJira({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L22 12L12 22L7 17L12 12L7 7L12 2Z" fill="rgba(255,255,255,0.5)" />
      <path d="M12 2L2 12L7 17L12 12L7 7L12 2Z" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

export function LogoGitHub({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

export function LogoGoogle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3-4.5 3-7.5z" fill="rgba(255,255,255,0.5)" />
      <path d="M12 22c2.9 0 5.3-1 7-2.6l-3.4-2.6c-.9.6-2.1 1-3.6 1-2.8 0-5.1-1.9-6-4.4H2.6v2.7C4.3 19.7 7.9 22 12 22z" fill="rgba(255,255,255,0.4)" />
      <path d="M6 13.4c-.2-.6-.3-1.3-.3-2s.1-1.3.3-1.9V6.8H2.6C1.9 8.2 1.5 9.8 1.5 11.4s.4 3.2 1.1 4.6L6 13.4z" fill="rgba(255,255,255,0.35)" />
      <path d="M12 5.5c1.6 0 3 .5 4.1 1.6l3.1-3.1C17.3 2.2 14.9 1.2 12 1.2 7.9 1.2 4.3 3.5 2.6 6.8L6 9.5c.9-2.5 3.2-4 6-4z" fill="rgba(255,255,255,0.55)" />
    </svg>
  );
}

export function LogoMicrosoft({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8.5" height="8.5" fill="rgba(255,255,255,0.55)" />
      <rect x="12.5" y="3" width="8.5" height="8.5" fill="rgba(255,255,255,0.45)" />
      <rect x="3" y="12.5" width="8.5" height="8.5" fill="rgba(255,255,255,0.4)" />
      <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

export function LogoHubSpot({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="12" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="12" r="1.5" fill="rgba(255,255,255,0.5)" />
      <path d="M16 8V5.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="4.5" r="1.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
      <path d="M12 14L7 18" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 10L7 6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="6" cy="5" r="1.5" fill="rgba(255,255,255,0.35)" />
      <circle cx="6" cy="19" r="1.5" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}

export function LogoLinear({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 14.5L9.5 20.5C5.5 19.5 3.5 16.5 3.5 14.5Z" fill="rgba(255,255,255,0.4)" />
      <path d="M3.5 10.5L13.5 20.5C11 20.5 7.5 19.5 5 17L3.5 15.5V10.5Z" fill="rgba(255,255,255,0.5)" />
      <path d="M4 7L17 20C19.5 18 21 15 21 12C21 7 16.5 3 12 3C9 3 6 4.5 4 7Z" fill="rgba(255,255,255,0.55)" />
    </svg>
  );
}

export function LogoConfluence({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.5C3 17.5 4.5 15 7 15C10 15 11 18 14 18C16.5 18 18 16 18 16L21 20C21 20 18.5 22.5 15 22.5C11.5 22.5 10.5 19.5 7.5 19.5C5 19.5 3 21.5 3 21.5L3 17.5Z" fill="rgba(255,255,255,0.45)" />
      <path d="M21 6.5C21 6.5 19.5 9 17 9C14 9 13 6 10 6C7.5 6 6 8 6 8L3 4C3 4 5.5 1.5 9 1.5C12.5 1.5 13.5 4.5 16.5 4.5C19 4.5 21 2.5 21 2.5V6.5Z" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

export function LogoClaude({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <path d="M8 10C8 10 10 14 12 14C14 14 16 10 16 10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="9" cy="9" r="1" fill="rgba(255,255,255,0.5)" />
      <circle cx="15" cy="9" r="1" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

export function LogoOpenClaw({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 8V16L12 21L20 16V8L12 3Z" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
      <path d="M12 3V21M4 8L20 16M20 8L4 16" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <circle cx="12" cy="12" r="2.5" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}
