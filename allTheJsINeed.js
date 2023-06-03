function changeText(val) {
    document.getElementById(Content).innerHTML = val;
    return;
  }


  function openRandomWebsite() {
            // List of websites 
            var websites = [
                "https://sammygulp.github.io/a",
                "https://sammygulp.github.io/index",
                "https://sammygulp.github.io/b",
                "https://sammygulp.github.io/c",
                "https://sammygulp.github.io/d"
            ];
            
            // Select a random website from the list
            var randomIndex = Math.floor(Math.random() * websites.length);
            var randomWebsite = websites[randomIndex];
            if(randomWebsite == window.location.href){
                openRandomWebsite();
            }
            //Should replace the site with another.
            window.open(randomWebsite, "_parent");
        }

        