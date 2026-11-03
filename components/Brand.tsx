import Image from "next/image";

export function Brand({ href = "#top" }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="repchek home">
      <Image
        src="/repchek-logo.svg"
        alt=""
        width={36}
        height={31}
        unoptimized
      />
      repchek
    </a>
  );
}
