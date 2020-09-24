const celebsSearchInput = document.querySelector('#celebsSearch');

celebsSearchInput.oninput = async (event) => {
  // request => localhost:3000/api/celebrities/
  const requestURL = `https://calebrities-movies-app.herokuapp.com/api/celebrities?name=${event.target.value}`;

  const response = await axios.get(requestURL);

  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  
  response.data.celebrities.forEach(oneCeleb => {
    ul.innerHTML += `
      <li>
        <a href="/celebrities/${oneCeleb._id}">${oneCeleb.name}</a>

        <a href="/celebrities/${oneCeleb._id}/edit">Editar Celebridade</a>

        <form action="/celebrities/${oneCeleb._id}/delete" method="post">
          <button type="submit">Deletar Celebridade</button>
        </form>
      </li>
    `
  });
}
