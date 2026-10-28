import Image from "next/image";

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="repchek home">
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
