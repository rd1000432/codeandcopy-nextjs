/**
 * Strips /home from links
 * @param link the link to strip
 * @param replace optional; the string to replace the stripped part with
 * @returns stripped link without /home
 */
export function stripHome(link: string, replace?: string) {
    return link.replace(/\/?home$/, replace || "");
  }
  