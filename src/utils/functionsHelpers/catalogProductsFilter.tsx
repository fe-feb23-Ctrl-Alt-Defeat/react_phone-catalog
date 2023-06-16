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

  if (order === 'Newest') {
    orderBy = 'year';
    orderDir = 'DESC';
  }

  if (order === 'Oldest') {
    orderBy = 'year';
    orderDir = 'ASC';
  }

  return { orderBy, orderDir };
};
