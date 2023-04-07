export function CaptionFormater(text: string) {
  return text
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letra: string) => letra.toUpperCase());
}
