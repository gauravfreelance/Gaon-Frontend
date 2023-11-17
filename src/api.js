const fetchJSON = async (path, method, inputData) => {
    let fetched;
    if (method === "POST") {
      fetched = await fetch("http://45.126.126.209:1337/api/" + path, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b`,
        },
        body: JSON.stringify(inputData),
      }).then((response) => response.json());
    } else if (method === "GET") {
      fetched = await fetch("http://45.126.126.209:1337/api/" + path, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b`,
        },
      }).then((response) => response.json());
    }
    return fetched;
  };

  export { fetchJSON};
