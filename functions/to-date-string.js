const toDateString = (date) => {
  return date.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

module.exports = toDateString;
