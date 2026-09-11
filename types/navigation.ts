export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconKey;
}

export type IconKey =
  | "wave"
  | "mountains"
  | "road"
  | "airplane"
  | "compass"
  | "trend-up"
  | "shield-check"
  | "file-text"
  | "house-line"
  | "buildings"
  | "map-trifold"
  | "pool"
  | "barbell"
  | "tennis-ball"
  | "users-three"
  | "handshake"
  | "coins"
  | "sparkle"
  | "speaker-high"
  | "speaker-slash"
  | "map-pin"
  | "phone"
  | "envelope"
  | "clock"
  | "image"
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "chevron-down";
