export function getFirstImage(urls: string) {
  if (!urls) return null;
  const splitUrls = urls.split(',').map(url => url.trim()).filter(url => url !== '');
  return splitUrls.length > 0 ? splitUrls[0] : null;
}

export function getRandomImage(urls: string) {
  if (!urls) return null;
  const splitUrls = urls
  .split(',')
  .map(url => url.trim())
  .filter(url => url !== '');
  if (splitUrls.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * splitUrls.length);
  return splitUrls[randomIndex];
}
