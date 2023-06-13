export const catalogProductsFilter = (order: string) => {
  let orderDir = '';
  let orderBy = order;

  if (order === 'Expensive') {
    orderBy = 'fullPrice';
    orderDir = 'DESC';
  }

  if (order === 'Cheapest') {
    orderBy = 'fullPrice';
    orderDir = 'ASC';
  }

  return { orderBy, orderDir };
};
