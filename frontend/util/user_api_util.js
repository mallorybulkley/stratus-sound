export const fetchUser = (id) => {
  return $.ajax({
    url: `api/users/${id}`,
  });
};

export const updateUser = (userId, user) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: user
  });
};
