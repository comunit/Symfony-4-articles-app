var articles = document.getElementById('table');

if (articles) {
  articles.addEventListener('click', (e) => {
    if(e.target.className == 'btn btn-danger delete-article') {
      if(confirm('Ar you sure?')) {
        const id = e.target.getAttribute('data-id');
        fetch(`/articles/delete/${id}`, {
          method: 'DELETE'
        }).then(res => window.location.reload());
      }
    }
  });
}