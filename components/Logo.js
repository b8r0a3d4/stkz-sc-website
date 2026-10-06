const LOGO_URL = "https://cdn.prod.website-files.com/6ac51e204a6da6912f741813/6ac529942a49a703374bc6be_STKZ%20SC%20Shield%20Logo.png";

export default function Logo({ size = 62 }) {
  return (
    <img
      src={LOGO_URL}
      width={size}
      height={size}
      alt="STKZ SC shield logo"
      className="logo-image"
    />
  );
}
