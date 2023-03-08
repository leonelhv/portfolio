export const imgUrl = ({ image, nameCarpet }) => {
  return new URL(`../assets/${nameCarpet}/${image}`, import.meta.url).href
}
