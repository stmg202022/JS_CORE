const fetchDataFun = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json(); // Use the json() method to extract JSON data
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchDataFun();
