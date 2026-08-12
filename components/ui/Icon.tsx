import type { IconType } from "react-icons";
import {
  PiAirplaneTakeoff,
  PiBarbell,
  PiBuildings,
  PiCaretDown,
  PiClock,
  PiCoins,
  PiCompass,
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiFileText,
  PiHandshake,
  PiHouseLine,
  PiImage,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiMapPin,
  PiMapTrifold,
  PiMountains,
  PiPhone,
  PiRoadHorizon,
  PiShieldCheck,
  PiSparkle,
  PiSwimmingPool,
  PiTennisBall,
  PiTrendUp,
  PiUsersThree,
  PiWaves,
  PiWhatsappLogo,
} from "react-icons/pi";
import type { IconKey } from "@/types";

const ICON_REGISTRY: Record<IconKey, IconType> = {
  wave: PiWaves,
  mountains: PiMountains,
  road: PiRoadHorizon,
  airplane: PiAirplaneTakeoff,
  compass: PiCompass,
  "trend-up": PiTrendUp,
  "shield-check": PiShieldCheck,
  "file-text": PiFileText,
  "house-line": PiHouseLine,
  buildings: PiBuildings,
  "map-trifold": PiMapTrifold,
  pool: PiSwimmingPool,
  barbell: PiBarbell,
  "tennis-ball": PiTennisBall,
  "users-three": PiUsersThree,
  handshake: PiHandshake,
  coins: PiCoins,
  sparkle: PiSparkle,
  "map-pin": PiMapPin,
  phone: PiPhone,
  envelope: PiEnvelopeSimple,
  clock: PiClock,
  image: PiImage,
  instagram: PiInstagramLogo,
  facebook: PiFacebookLogo,
  linkedin: PiLinkedinLogo,
  whatsapp: PiWhatsappLogo,
  "chevron-down": PiCaretDown,
};

interface IconProps {
  name: IconKey;
  className?: string;
  "aria-hidden"?: boolean;
}

export function Icon({ name, className, ...rest }: IconProps) {
  const Component = ICON_REGISTRY[name];
  return <Component className={className} aria-hidden {...rest} />;
}
