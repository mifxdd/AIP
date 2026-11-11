const express = require('express');
const router = express.Router();

function buildNavigation() {
  return [
    { href: '/', label: 'Главная' },
    { href: '/korzhik', label: 'Коржик' },
    { href: '/karamelka', label: 'Карамелька' },
    { href: '/kompot', label: 'Компот' }
  ];
}

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Видеокарта',
    pageTitle: 'Видеокарта',
    intro: 'Учебный сайт о видеокартах',
    navigation: buildNavigation()
  });
});

router.get('/korzhik', function(req, res) {
  res.render('cat', {
    title: 'Коржик',
    picture: '/images/korzhik.svg',
    description: 'Средний котёнок в семье. Очень любит футбол, бегает, прыгает и весело исследует новые возможности.',
    navigation: buildNavigation()
  });
});

router.get('/karamelka', function(req, res) {
  res.render('cat', {
    title: 'Карамелька',
    picture: '/images/karamelka.svg',
    description: 'Самый младший член семьи. Уверенно ищет решения и любит яркие, красивые вещи.',
    navigation: buildNavigation()
  });
});

router.get('/kompot', function(req, res) {
  res.render('cat', {
    title: 'Компот',
    picture: '/images/kompot.svg',
    description: 'Старший котёнок в семье. Любит логику, энциклопедии и спокойные, надёжные решения.',
    navigation: buildNavigation()
  });
});

module.exports = router;
