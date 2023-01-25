const PageDetail = (argument) => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, "-");
  
      const displayGame = (gameData) => {
        const { name, released, description } = gameData;
        const articleDOM = document.querySelector(".page-detail .article");
        articleDOM.querySelector("h1.title").innerHTML = name;
        articleDOM.querySelector("p.release-date span").innerHTML = released;
        articleDOM.querySelector("p.description").innerHTML = description;
      };
  
      const fetchGame = (url, argument) => {
        fetch(`https://api.rawg.io/8240f77a189d4a84a4252ccdf4314e5d/games`)
          .then((response) => response.json())
          .then((responseData) => {
            displayGame(responseData);
          });
      };
  
      fetchGame('https://api.rawg.io/api/games', cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-detail">
          <div class="article">
            <h1 class="title"></h1>
            <p class="release-date">Release date : <span></span></p>
            <p class="description"></p>
          </div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };