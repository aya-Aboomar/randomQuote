var btn = document.getElementById('btn');
var output = document.getElementById('output');

var quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela",
  "The way to get started is to quit talking and begin doing. — Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. — Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. — Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. — James Cameron",
  "Life is what happens when you're busy making other plans. — John Lennon"
];

btn.addEventListener('click', function() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});