/**
 * URL for a file in /public that works under any deploy base (e.g. GitHub Pages serves the site
 * from /Lake-analytics-web/). Pass the path without a leading slash: asset('images/logo.webp').
 */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
