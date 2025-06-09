exports.applyMarkup = (basePrice) => {
  const price = Number(basePrice);
  if (price < 15000) return price + Math.floor(Math.random() * 300 + 200); // markup 200–500
  return price + Math.floor(Math.random() * 500 + 500); // markup 500–1000
};