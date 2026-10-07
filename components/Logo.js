import { media } from "@/data/media";

export default function Logo({ size = 62 }) {
  return (
    <img
      src={media.logo}
      width={size}
      height={size}
      alt="STKZ SC shield logo"
      className="logo-image"
    />
  );
}
