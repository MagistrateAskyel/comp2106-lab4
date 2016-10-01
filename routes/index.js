var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
    res.render('index', { title: 'Lab 4',
    message: 'This is the lab 4 home page'   });
});

/* GET lee page. */
router.get('/lee', function(req, res, next)
{
  res.render('lee', { title: 'Lee',
    message: 'I am a programming studenting in my third semester. I originally studied graphic design ' +
    'but after 5 years decided to change careers. I paint, enjoy horror and fiction.'   });
});

/* GET sam page. */
router.get('/sam', function(req, res, next)
{
  res.render('sam', { title: 'Sam',
    message: 'Sam is a network engineer. He was recently married and bought a ' +
    'house last year. He has two dogs and two cats.'   });
});

/* GET jill page. */
router.get('/jill', function(req, res, next)
{
  res.render('jill', { title: 'Jill',
    message: 'Jill is a nursing student. She has a cat and enjoys Buffy the Vampire Slayer'   });
});

/* GET mike page. */
router.get('/mike', function(req, res, next)
{
  res.render('mike', { title: 'Mike',
    message: 'Mike is a windows salesman. He enjoys driving, picking and building stuff.'   });
});


module.exports = router;
