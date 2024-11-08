var productText = `{{ startTimer }}`;
  // Convert the start and end times from Liquid into JavaScript Date objects
  var startDate = new Date("{{ section.settings.start_time }}")
  var endDate = new Date("{{ section.settings.end_time }}")
  console.log(productText)
  console.log("{{ section.settings.start_time }}")
    console.log("{{ section.settings.end_time }}")
  // Function to update the countdown
  function updateCountdown() {
    var now = new Date()
    var distance = endDate - now
    

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "EXPIRED"
      clearInterval(countdownInterval)
    } else {
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)

      document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    }
  }

  // Update the countdown every second
  var countdownInterval = setInterval(updateCountdown, 1000)

