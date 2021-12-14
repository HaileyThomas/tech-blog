const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    title: 'Best Blog Ever',
    post_content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    created_at: new Date(),
    comment: [{}, {}],
    user: {
      username: 'test_user',
    },
  });
});

module.exports = router;
