export const fetchUser = (id) => {
  return $.ajax({
    url: `api/users/${id}`,
  });
};
