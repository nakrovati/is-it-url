/**
 * Check if the string is a telephone URL
 */
function isTelUrl(url: string): boolean {
  if (!url || typeof url === "number" || typeof url === "object") return false;

  const regex = /(tel:)([+]?\d{1,3}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/;

  return regex.test(url);
}

export default isTelUrl;
