/**
 * Checks if the string is a URL
 */
function isUrl(url: string): boolean {
  if (!url || typeof url === "number" || typeof url === "object") return false;

  const regexp = /[\w@:%._+~#=]{1,256}\.[\w()]{1,6}\b(?:[\w()@:%_+.~#?&//=]*)/;

  return regexp.test(url);
}

export default isUrl;
