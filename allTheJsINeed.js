function changeText(val) {
    document.getElementById(content).textContent = val;
    return;
  }


  function openRandomWebsite() {
            // List of websites (add your own)
            var websites = [
                "https://sammygulp.github.io/theSecondPage",
                "https://sammygulp.github.io/theThirdPage",
                "https://sammygulp.github.io/index"
            ];
            
            // Select a random website from the list
            var randomIndex = Math.floor(Math.random() * websites.length);
            var randomWebsite = websites[randomIndex];
            
            // Open the random website in a new tab
            window.open(randomWebsite, "_blank");
        }
