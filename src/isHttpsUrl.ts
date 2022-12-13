/**
 * Check if the string is a HTTPS URL
 */
function isHttpsUrl(url: string): boolean {
  if (!url || typeof url === "number" || typeof url === "object") return false;

  const regex =
    /^(https:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w.-]+)(?::(\d+))?([/\\\w.()-]*)?(?:([?][^#]*)?(#.*)?)*/;

  return regex.test(url);
}

export default isHttpsUrl;
