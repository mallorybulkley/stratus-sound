export const fetchSearchResults = (query) => {
  return $.ajax({
    url: 'api/searches',
    data: query
  });
}
