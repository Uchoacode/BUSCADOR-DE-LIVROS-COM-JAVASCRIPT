function searchBooks() {
  const query = document.getElementById('search').value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';

      data.items.forEach(item => {
          const title = item.volumeInfo.title;
          const authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown';
          const thumbnail = item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150';

          const bookDiv = document.createElement('div');
          bookDiv.classList.add('book');
          bookDiv.innerHTML = `
              <h3>${title}</h3>
              <p style="font-family: Verdana, Geneva, Tahoma, sans-serif;">Author(s): ${authors}</p>
              <img src="${thumbnail}" alt="${title}">
          `;
          resultsDiv.appendChild(bookDiv);
      });
  })
  .catch(error => console.error('Error:', error));
}
