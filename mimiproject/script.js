document.addEventListener("DOMContentLoaded", async () => {
  const lists_moves = document.getElementById("lists_moves");

  const move_learn_method = document.getElementById("move_learn_method");
  const version_group_list = document.getElementById("version_group_list");
  // const button_list = document.getElementById("button_list");

  //fetch api from  poke api
  const pokeApiFun = async () => {
    try {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      let data = await res.json(); // Use the json() method to extract JSON data
      // console.log(data);

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  //
  try {
    const pokeData = await pokeApiFun();
    let movies = await pokeData.moves[0].version_group_details;

    // console.log(movies);

    // appendChild success
    const list = document.createElement("li");
    list.textContent = "hello";

    for (mov of movies) {
      let li = document.createElement("li");
      let node = document.createTextNode(`${mov.level_learned_at} `);
      li.appendChild(node);
      lists_moves.appendChild(li);
      // console.log(mov);
    }

    for (movenameUlr of movies) {
      let li = document.createElement("li");
      let br = document.createElement("br");
      let movenameUlrNode = document.createTextNode(
        `Name: ${movenameUlr.move_learn_method.name}  url: ${movenameUlr.move_learn_method.url}`
      );

      li.appendChild(movenameUlrNode);
      li.appendChild(br);

      move_learn_method.appendChild(li);
    }

    for (version_group of movies) {
      let li = document.createElement("li");
      let br = document.createElement("br");

      // console.log(version_group);
      // console.log(version_group_list);
      let version_group_node = document.createTextNode(
        `Name: ${version_group.version_group.name} url: ${version_group.version_group.url}`
      );

      li.appendChild(version_group_node);
      li.appendChild(br);

      version_group_list.appendChild(li);
    }

    for (const mov of movies) {
      let button = document.createElement("button");
      button.innerHTML = "Delete";
      let li = document.createElement("li");
      li.appendChild(button);
      button_list.appendChild(li);

      // Use a closure to capture the value of mov
      button.addEventListener("click", function (currentMov) {
        return function () {
          const indexToRemove = movies.indexOf(currentMov);

          if (indexToRemove !== -1) {
            const newMovies = movies.filter(
              (movie, index) => index !== indexToRemove
            );
            console.log("mewMovies", newMovies);
          }
        };
      });
    }
  } catch (err) {
    console.log(err);
  }
});
