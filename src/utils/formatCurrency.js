export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return amount;
  }
};

export const formatNumber = (number, decimals = 0) => {
  try {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(number);
  } catch (error) {
    console.error('Error formatting number:', error);
    return number;
  }
};

export const formatPercentage = (value, decimals = 1) => {
  try {
    return `${formatNumber(value, decimals)}%`;
  } catch (error) {
    console.error('Error formatting percentage:', error);
    return value;
  }
};

export const formatCompactNumber = (number) => {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  return number.toString();
};

