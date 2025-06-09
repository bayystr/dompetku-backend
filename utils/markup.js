function applyMarkup(price) {
  if (price < 15000) {
    return price + parseInt(process.env.MARKUP_LOW || 500);
  } else {
    return price + parseInt(process.env.MARKUP_HIGH || 1000);
  }
}

module.exports = { applyMarkup };