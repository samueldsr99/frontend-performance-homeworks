$(".navbar-nav .nav-link").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// Geolocation
const API_KEY = "65fd642ebb0f0899034018ype083a5c";

function getGeolocationDataFromLatLon(lat, lon) {
  const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=${API_KEY}`;

  return fetch(url).then((response) => response.json());
}

function displayGeolocationBanner(city) {
  const banner = document.createElement("div");
  banner.classList.add("geolocation-banner");
  banner.innerHTML = `Hey! We also deliver to ${city}!`;

  document.body.appendChild(banner);
}

function showGeolocationBanner() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      const locationData = getGeolocationDataFromLatLon(
        position.coords.latitude,
        position.coords.longitude
      );
      locationData.then((data) => {
        const city = data.address.city;

        displayGeolocationBanner(city);
      });
    });
  }
}

showGeolocationBanner();

// Online/offline events
function onOffline() {
  const banner = document.createElement("div");
  banner.classList.add("offline-banner");
  banner.innerHTML =
    "Seems we're offline; Ordering features may not be available. We'll refresh in a bit!";

  document.body.appendChild(banner);
}

function onOnline() {
  const banner = document.querySelector(".offline-banner");
  if (banner) {
    banner.remove();
  }
}

window.addEventListener("offline", onOffline);
window.addEventListener("online", onOnline);

// Delayed notification
function showNotificationBanner() {
  const heroImageContainer = document.querySelector("#hero-image-container");
  if (!heroImageContainer) return;

  const banner = document.createElement("div");
  banner.classList.add("notification-banner");
  banner.innerHTML = `Friday specials available till 14:00`;

  heroImageContainer.appendChild(banner);
}

setTimeout(() => {
  showNotificationBanner();
}, 15000);
