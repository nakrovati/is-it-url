/**
 * Check if the string is a HTTP URL
 */
function isHttpUrl(url: string): boolean {
  if (!url || typeof url === "number" || typeof url === "object") return false;

  const regex =
    /^(http:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w.-]+)(?::(\d+))?([/\\\w.()-]*)?(?:([?][^#]*)?(#.*)?)*/;

  return regex.test(url);
}

export default isHttpUrl;
