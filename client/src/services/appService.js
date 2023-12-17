const appService = {
  convertCurrency: (amount, currency) => {
    // Format the price above to USD, INR, EUR using their locales.
    let formatCurrency = new Intl.NumberFormat('en-GB', {
      style: "currency",
      currency: currency,
    });
    // return a string => use the replace() method
    return formatCurrency
      .format(amount)
      .replace(/(?:\.)00/g, "");
      // .replace(/₫/g, "");
  }
}

export default appService;
