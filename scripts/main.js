var tab = [
  {
    'quote': "Don't cry because it's over, smile because it happened.",
    'name': 'Dr.Suess'
  },
  {
    'quote': 'Be yourself; everyone else is already taken.',
    'name': 'Oscar Wilde'
  },
  {
    'quote': 'So many books, so little time.',
    'name': 'Frank Zappa'
  },
  {
    'quote': 'You only live once, but if you do it right, once is enough.',
    'name': 'Mae West'
  }
]

var btn = document.querySelector('.next')
var btnTweet = document.querySelector('.tweet')
var l = tab.length

function change () {
  var x = Math.floor(Math.random() * l)
  document.querySelector('.quote-container').innerHTML = '&ldquo; ' + tab[x].quote
  document.querySelector('.quote-by').innerHTML = tab[x].name
};

function share () {
  var quoto = document.querySelector('.quote-container')
  var quotoby = document.querySelector('.quote-by')
  var thequote = quoto.innerHTML + quotoby.innerHTML
  window.open('https://twitter.com/intent/tweet?text=' + thequote)
};

btn.onclick = change
btnTweet.onclick = share
