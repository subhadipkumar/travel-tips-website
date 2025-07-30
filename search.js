document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results-container');
  const searchResultsSection = document.getElementById('search-results');

  // Static content for mock AI search
  const content = [
    // Travel Tips from index.html
    { category: 'Packing Tips', text: 'Roll clothes to save space in your luggage.' },
    { category: 'Packing Tips', text: 'Pack versatile clothing for multiple occasions.' },
    { category: 'Packing Tips', text: 'Use packing cubes for better organization.' },
    { category: 'Packing Tips', text: 'Bring a reusable water bottle to stay hydrated.' },
    { category: 'Budget Travel', text: 'Book flights on Tuesdays for better deals.' },
    { category: 'Budget Travel', text: 'Use local transport apps to save on fares.' },
    { category: 'Budget Travel', text: 'Eat at local markets instead of tourist restaurants.' },
    { category: 'Budget Travel', text: 'Look for free walking tours in major cities.' },
    { category: 'Safety & Planning', text: 'Keep digital copies of important documents.' },
    { category: 'Safety & Planning', text: 'Research local customs to avoid misunderstandings.' },
    { category: 'Safety & Planning', text: 'Use a money belt for valuables in crowded areas.' },
    { category: 'Safety & Planning', text: 'Share your itinerary with a trusted contact.' },
    // Flight Deals from flight-deals.html
    { category: 'Book Smart', text: 'Book 6–8 weeks in advance for domestic flights.' },
    { category: 'Book Smart', text: 'Search on Tuesdays or Wednesdays for lower fares.' },
    { category: 'Book Smart', text: 'Use incognito mode to avoid price hikes.' },
    { category: 'Best Tools for Deals', text: 'Skyscanner: Compare prices across airlines.', url: 'https://skyscanner.com' },
    { category: 'Best Tools for Deals', text: 'Google Flights: Track price trends.', url: 'https://google.com/flights' },
    { category: 'Best Tools for Deals', text: 'Momondo: Find hidden deals.', url: 'https://momondo.com' },
    { category: 'Trending Destinations', text: 'Bali, Indonesia: Flights from $500 round-trip.' },
    { category: 'Trending Destinations', text: 'Lisbon, Portugal: Deals as low as $350 from the US.' },
    { category: 'Trending Destinations', text: 'Bangkok, Thailand: Budget flights starting at $600.' },
    // Credit Card Deals from credit-card-deals.html
    { category: 'Choose the Right Card', text: 'Opt for cards with no foreign transaction fees.' },
    { category: 'Choose the Right Card', text: 'Look for sign-up bonuses offering travel points.' },
    { category: 'Choose the Right Card', text: 'Choose cards with lounge access for long layovers.' },
    { category: 'Reward Hacks', text: 'Use cards for everyday purchases to earn points.' },
    { category: 'Reward Hacks', text: 'Redeem points for flights during off-peak seasons.' },
    { category: 'Reward Hacks', text: 'Transfer points to airline or hotel partners for better value.' },
    { category: 'Recommended Cards', text: 'Chase Sapphire Preferred: Great for travel rewards.', url: 'https://www.chase.com' },
    { category: 'Recommended Cards', text: 'Amex Platinum: Premium perks like lounge access.', url: 'https://www.americanexpress.com' },
    { category: 'Recommended Cards', text: 'Capital One Venture: Flexible miles redemption.', url: 'https://www.capitalone.com' },
    // Calculator from calculator.html
    { category: 'Trip Cost Calculator', text: 'Calculate total trip cost including Uber, flights, and hotel.' },
    { category: 'Trip Cost Calculator', text: 'Estimate daily food and other expenses for your trip.' },
    { category: 'Trip Cost Calculator', text: 'Plan gas and rental car costs for accurate budgeting.' }
  ];

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
      searchResultsSection.classList.add('active');
      return;
    }

    // Mock AI search: Filter content based on query
    const results = content.filter(item => 
      item.text.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    );

    // Display results
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
      resultsContainer.innerHTML = results.map(item => `
        <div class="result-item">
          <h3>${item.category}</h3>
          <p>${item.url ? `<a href="${item.url}" target="_blank">${item.text}</a>` : item.text}</p>
        </div>
      `).join('');
    }
    searchResultsSection.classList.add('active');
  });

  // Clear results when input is cleared
  searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) {
      searchResultsSection.classList.remove('active');
      resultsContainer.innerHTML = '';
    }
  });
});