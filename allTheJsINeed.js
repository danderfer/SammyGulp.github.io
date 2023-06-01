function changeText(val) {
    document.getElementById(content).textContent = val;
    return;
  }


  function openRandomWebsite() {
            // List of websites (add your own)
            var websites = [
                "https://www.example1.com",
                "https://www.example2.com",
                "https://www.example3.com"
            ];
            
            // Select a random website from the list
            var randomIndex = Math.floor(Math.random() * websites.length);
            var randomWebsite = websites[randomIndex];
            
            // Open the random website in a new tab
            window.open(randomWebsite, "_blank");
        }
