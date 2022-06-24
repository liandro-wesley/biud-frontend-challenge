export default function readingTime(content: string) {
  const wordsPerMinute = 225;
  const totalWords = content?.trim().split(/\s+/).length;
  const time = Math.ceil((totalWords ? totalWords : 0) / wordsPerMinute);

  return `${time} min`;
}
