/**
 * Check if the string is a chrome URL
 */
function isMailtoUrl(url: string): boolean {
  if (!url || typeof url === "number" || typeof url === "object") return false;

  const regex =
    /^(chrome:)(\/\/\/?)(?::(\d+))?([/\\\w.()-]*)?(?:([?][^#]*)?(#.*)?)*/;

  return regex.test(url);
}

export default isMailtoUrl;
