/**
 * Irregular up-and-down wave: crests and troughs of different widths and depths.
 * Drawn right-to-left along the bottom edge of a 1200×48 box; `S` keeps the joins smooth.
 */
const WAVE = [
  "M0 0 H1200 V18",
  "C1180 40 1120 46 1080 30",
  "S1010 2 960 8",
  "S900 40 850 36",
  "S790 10 740 14",
  "S660 46 600 40",
  "S540 4 470 6",
  "S400 34 350 30",
  "S290 12 240 16",
  "S170 46 110 38",
  "S40 8 0 14 Z",
].join(" ");

const WAVE_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 48" preserveAspectRatio="none"><path d="${WAVE}"/></svg>`,
)}")`;

const SOLID_MASK = "linear-gradient(#000, #000)";

/**
 * Blurred background for the sticky header that extends below it into a wave.
 * One element masked twice (solid bar on top, wave at the bottom), so there is no seam.
 */
export function HeaderSurface() {
  const mask = {
    image: `${SOLID_MASK}, ${WAVE_MASK}`,
    size: "100% calc(100% - var(--wave-h)), 100% var(--wave-h)",
    position: "top, bottom",
    repeat: "no-repeat",
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100%+var(--wave-h))] bg-background/90 backdrop-blur-lg [--wave-h:--spacing(6)] sm:[--wave-h:--spacing(10)]"
      style={{
        maskImage: mask.image,
        maskSize: mask.size,
        maskPosition: mask.position,
        maskRepeat: mask.repeat,
        WebkitMaskImage: mask.image,
        WebkitMaskSize: mask.size,
        WebkitMaskPosition: mask.position,
        WebkitMaskRepeat: mask.repeat,
      }}
    />
  );
}
