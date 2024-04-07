const appService = {
  convertCurrency: (amount, currency) => {
    // Validate the currency code
    const validCurrencies = ["USD", "EUR", "VND","GBP"]; // Add other valid currency codes if needed

    if (!validCurrencies.includes(currency)) {
      console.error(`Invalid currency code: ${currency}`);
      return "Invalid currency";
    }

    // Format the price above using the valid currency code
    let formatCurrency = new Intl.NumberFormat('en-GB', {
      style: "currency",
      currency: currency,
    });

    // return a string => use the replace() method
    return formatCurrency
      .format(amount)
      .replace(/(?:\.)00/g, "");
  }
}

export default appService;