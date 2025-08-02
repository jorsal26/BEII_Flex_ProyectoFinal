module.exports = {
  formatDate: (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(d);
  },
  currency: (amount) => `$${Number(amount).toFixed(2)}`,
  uppercase: (text) => text.toUpperCase()
};