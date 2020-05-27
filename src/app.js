console.log(document.getElementById('root'));
var gitment = new Gitment({
  owner: 'zjz236',
  repo: 'blog_comments',
  oauth: {
    client_id: '181f82e74c1bef24a114',
    client_secret: '5cb1575776ef8f28e0abe651fa625d95dda2d8c6',
  },
});
gitment.render(document.getElementById('root'));
