var map = L.map('map', {maxBounds: [[47.4003, 9.3062],[47.4603, 9.4373]] }).setView([47.4252, 9.3766], 15);

L.tileLayer('http://localhost:3333/map/moots/{z}/{x}/{y}', {
    maxZoom: 17
}).addTo(map);