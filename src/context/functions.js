export function getCountTitlesInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.titles.length : 0;
}

export const calcSubPrice = (manga) => +manga.count * manga.item.price;

export const calcTotalPrice = (titles) => {
  return titles.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};
