export function CaptionFormater(text) {
  return text
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase());
}
