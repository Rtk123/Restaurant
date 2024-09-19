function searchFood(event) {
    event.preventDefault();
    var foodName = event.currentTarget.getAttribute('data-food');
    var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(foodName);
    window.open(googleSearchUrl, '_blank');
  }
  