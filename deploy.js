// deploy.js
const ghpages = require('gh-pages');

ghpages.publish('dist', {
  dotfiles: true,
  // This avoids the "ENAMETOOLONG" issue by not trying to clean old files
  clean: false
}, function (err) {
  if (err) {
    console.error('Deploy failed:', err);
  } else {
    console.log('Deploy successful!');
  }
});
