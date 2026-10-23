/** Link that opens in a new tab. */
export function ExternalLink(props: Omit<React.ComponentProps<"a">, "target" | "rel">) {
  return <a target="_blank" rel="noreferrer" {...props} />;
}
