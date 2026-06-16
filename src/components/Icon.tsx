const paths: Record<string, string> = {
  bus: "M4 16c0 1.1.9 2 2 2h.5a1.5 1.5 0 1 0 3 0h5a1.5 1.5 0 1 0 3 0H18a2 2 0 0 0 2-2V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v9Zm2.5-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3H6V7Zm0 5h12v2H6v-2Z",
  handshake:
    "M2 9.5 7 5l3 2 2-1.5L17 9l-2 2-3.5-2.5L10 10l3 2-1.5 2-3-2-2.5 2L4 12l-2-2.5Zm15 .5 3 3-2 2-3-3 2-2Z",
  users:
    "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 19c0-3.3 2.7-6 6-6s6 2.7 6 6v1H2v-1Zm12.5-5c2.8.4 5 2.8 5.5 6v1h-4v-1c0-2.2-.8-4.2-2.1-5.8.2-.1.4-.2.6-.2Z",
};

export default function Icon({
  name,
  className = "h-8 w-8",
}: {
  name: keyof typeof paths;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={paths[name]} fill="currentColor" />
    </svg>
  );
}
