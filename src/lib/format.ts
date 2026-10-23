/** 0 → "01", 9 → "10". */
export function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

/** "https://github.com/x" → "github.com/x". */
export function stripProtocol(url: string) {
  return url.replace(/^https?:\/\//, "");
}

/** "+46 76 958 19 94" → "tel:+46769581994". */
export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
