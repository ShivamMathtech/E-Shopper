function categoriesData() {
  fetch(" https://api.escuelajs.co/api/v1/categories")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
