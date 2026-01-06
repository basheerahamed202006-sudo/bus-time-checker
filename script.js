/* ============================================
   BUS TIME CHECKER - MAIN JAVASCRIPT
   ============================================ */

// ============ DATA STRUCTURE ============
const transportDatabase = {
    'Trichy': {
        icon: '🏛️',
        areas: ['Panjapur to Jamal College', 'Airport to Central', 'Chatiram to Junction'],
        buses: {
            'Panjapur to Jamal College': [
                { id: 101, name: 'Trichy Express', number: 'TR-101', time: '06:30 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 102, name: 'Temple Route', number: 'TR-102', time: '07:15 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 103, name: 'City Line', number: 'TR-103', time: '08:00 AM', from: 'Panjapur', to: 'Jamal College' }
            ],
            'Airport to Central': [
                { id: 104, name: 'Airport Shuttle', number: 'TR-201', time: '06:45 AM', from: 'Airport', to: 'Central' },
                { id: 105, name: 'Central Connector', number: 'TR-202', time: '07:30 AM', from: 'Airport', to: 'Central' },
                { id: 106, name: 'Rapid Link', number: 'TR-203', time: '08:15 AM', from: 'Airport', to: 'Central' }
            ],
            'Chatiram to Junction': [
                { id: 107, name: 'North Line', number: 'TR-301', time: '06:20 AM', from: 'Chatiram', to: 'Junction' },
                { id: 108, name: 'East Rider', number: 'TR-302', time: '07:05 AM', from: 'Chatiram', to: 'Junction' },
                { id: 109, name: 'Metro Connect', number: 'TR-303', time: '07:50 AM', from: 'Chatiram', to: 'Junction' }
            ]
        }
    },
    'Puthukottai': {
        icon: '🏞️',
        areas: ['Panjapur to Jamal College', 'Airport to Central', 'Chatiram to Junction'],
        buses: {
            'Panjapur to Jamal College': [
                { id: 201, name: 'Puthu Express', number: 'PK-101', time: '06:40 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 202, name: 'Heritage Bus', number: 'PK-102', time: '07:25 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 203, name: 'Town Shuttle', number: 'PK-103', time: '08:10 AM', from: 'Panjapur', to: 'Jamal College' }
            ],
            'Airport to Central': [
                { id: 204, name: 'Puthu Airport', number: 'PK-201', time: '06:55 AM', from: 'Airport', to: 'Central' },
                { id: 205, name: 'Central Runner', number: 'PK-202', time: '07:40 AM', from: 'Airport', to: 'Central' },
                { id: 206, name: 'Fast Line', number: 'PK-203', time: '08:25 AM', from: 'Airport', to: 'Central' }
            ],
            'Chatiram to Junction': [
                { id: 207, name: 'Local Link', number: 'PK-301', time: '06:35 AM', from: 'Chatiram', to: 'Junction' },
                { id: 208, name: 'Market Rider', number: 'PK-302', time: '07:20 AM', from: 'Chatiram', to: 'Junction' },
                { id: 209, name: 'Commuter', number: 'PK-303', time: '08:05 AM', from: 'Chatiram', to: 'Junction' }
            ]
        }
    },
    'Chennai': {
        icon: '🌆',
        areas: ['Panjapur to Jamal College', 'Airport to Central', 'Chatiram to Junction'],
        buses: {
            'Panjapur to Jamal College': [
                { id: 301, name: 'Chennai Metro', number: 'CH-101', time: '06:50 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 302, name: 'Bay Line', number: 'CH-102', time: '07:35 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 303, name: 'Coastal Express', number: 'CH-103', time: '08:20 AM', from: 'Panjapur', to: 'Jamal College' }
            ],
            'Airport to Central': [
                { id: 304, name: 'Airport Rapid', number: 'CH-201', time: '07:00 AM', from: 'Airport', to: 'Central' },
                { id: 305, name: 'Central Flyer', number: 'CH-202', time: '07:45 AM', from: 'Airport', to: 'Central' },
                { id: 306, name: 'City Express', number: 'CH-203', time: '08:30 AM', from: 'Airport', to: 'Central' }
            ],
            'Chatiram to Junction': [
                { id: 307, name: 'Harbor Shuttle', number: 'CH-301', time: '06:45 AM', from: 'Chatiram', to: 'Junction' },
                { id: 308, name: 'East Connector', number: 'CH-302', time: '07:30 AM', from: 'Chatiram', to: 'Junction' },
                { id: 309, name: 'Town Express', number: 'CH-303', time: '08:15 AM', from: 'Chatiram', to: 'Junction' }
            ]
        }
    },
    'Karur': {
        icon: '🏭',
        areas: ['Panjapur to Jamal College', 'Airport to Central', 'Chatiram to Junction'],
        buses: {
            'Panjapur to Jamal College': [
                { id: 401, name: 'Karur Local', number: 'KR-101', time: '06:25 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 402, name: 'Weave Express', number: 'KR-102', time: '07:10 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 403, name: 'River Route', number: 'KR-103', time: '07:55 AM', from: 'Panjapur', to: 'Jamal College' }
            ],
            'Airport to Central': [
                { id: 404, name: 'Karur Shuttle', number: 'KR-201', time: '06:40 AM', from: 'Airport', to: 'Central' },
                { id: 405, name: 'Central Link', number: 'KR-202', time: '07:25 AM', from: 'Airport', to: 'Central' },
                { id: 406, name: 'Express Line', number: 'KR-203', time: '08:10 AM', from: 'Airport', to: 'Central' }
            ],
            'Chatiram to Junction': [
                { id: 407, name: 'Stone Town Bus', number: 'KR-301', time: '06:15 AM', from: 'Chatiram', to: 'Junction' },
                { id: 408, name: 'Market Shuttle', number: 'KR-302', time: '07:00 AM', from: 'Chatiram', to: 'Junction' },
                { id: 409, name: 'Heritage Line', number: 'KR-303', time: '07:45 AM', from: 'Chatiram', to: 'Junction' }
            ]
        }
    },
    'Dindugal': {
        icon: '🌄',
        areas: ['Panjapur to Jamal College', 'Airport to Central', 'Chatiram to Junction'],
        buses: {
            'Panjapur to Jamal College': [
                { id: 501, name: 'Dindugal Express', number: 'DD-101', time: '06:35 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 502, name: 'Hill Rider', number: 'DD-102', time: '07:20 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 503, name: 'Valley Line', number: 'DD-103', time: '08:05 AM', from: 'Panjapur', to: 'Jamal College' }
            ],
            'Airport to Central': [
                { id: 504, name: 'Dindugal Shuttle', number: 'DD-201', time: '06:50 AM', from: 'Airport', to: 'Central' },
                { id: 505, name: 'Central Fast', number: 'DD-202', time: '07:35 AM', from: 'Airport', to: 'Central' },
                { id: 506, name: 'Rapid D', number: 'DD-203', time: '08:20 AM', from: 'Airport', to: 'Central' }
            ],
            'Chatiram to Junction': [
                { id: 507, name: 'Market Link', number: 'DD-301', time: '06:30 AM', from: 'Chatiram', to: 'Junction' },
                { id: 508, name: 'Town Rider', number: 'DD-302', time: '07:15 AM', from: 'Chatiram', to: 'Junction' },
                { id: 509, name: 'Commuter D', number: 'DD-303', time: '08:00 AM', from: 'Chatiram', to: 'Junction' }
            ]
        }
    },
    'Madurai': {
        icon: '🏯',
        areas: ['Panjapur to Jamal College', 'Airport to Central', 'Chatiram to Junction'],
        buses: {
            'Panjapur to Jamal College': [
                { id: 601, name: 'Madurai Local', number: 'MD-101', time: '06:45 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 602, name: 'Temple Shuttle', number: 'MD-102', time: '07:30 AM', from: 'Panjapur', to: 'Jamal College' },
                { id: 603, name: 'City Cruiser', number: 'MD-103', time: '08:15 AM', from: 'Panjapur', to: 'Jamal College' }
            ],
            'Airport to Central': [
                { id: 604, name: 'Madurai Express', number: 'MD-201', time: '07:05 AM', from: 'Airport', to: 'Central' },
                { id: 605, name: 'Central Shuttle', number: 'MD-202', time: '07:50 AM', from: 'Airport', to: 'Central' },
                { id: 606, name: 'Rapid Madurai', number: 'MD-203', time: '08:35 AM', from: 'Airport', to: 'Central' }
            ],
            'Chatiram to Junction': [
                { id: 607, name: 'Madurai Connector', number: 'MD-301', time: '06:40 AM', from: 'Chatiram', to: 'Junction' },
                { id: 608, name: 'South Rider', number: 'MD-302', time: '07:25 AM', from: 'Chatiram', to: 'Junction' },
                { id: 609, name: 'Express South', number: 'MD-303', time: '08:10 AM', from: 'Chatiram', to: 'Junction' }
            ]
        }
    }
};

// ============ STATE MANAGEMENT ============
const appState = {
    currentUser: null,
    selectedDistrict: null,
    selectedArea: null,
    isLoggedIn: false
};

// ============ DOM ELEMENTS ============
const loginPage = document.querySelector('.login-page');
const appContainer = document.querySelector('.app-container');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.querySelector('.login-btn');
const logoutBtn = document.querySelector('.logout-btn');
const userInfoDisplay = document.querySelector('.user-info');
const navbar = document.querySelector('.navbar');

const districtPage = document.getElementById('district-page');
const areaPage = document.getElementById('area-page');
const busPage = document.getElementById('bus-page');

const districtGrid = document.querySelector('.districts-grid');
const areaGrid = document.querySelector('.areas-grid');
const busGrid = document.querySelector('.buses-grid');

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    attachEventListeners();
    initializeApp();
});

function initializeApp() {
    // Show login page initially
    showLoginPage();
}

// ============ EVENT LISTENERS ============
function attachEventListeners() {
    loginBtn.addEventListener('click', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
}

// ============ LOGIN FUNCTIONALITY ============
function handleLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation
    const errorMsg = document.querySelector('.error-msg');
    if (!username || !password) {
        showError('Please enter both username and password');
        return;
    }

    if (username.length < 3) {
        showError('Username must be at least 3 characters');
        return;
    }

    if (password.length < 4) {
        showError('Password must be at least 4 characters');
        return;
    }

    // Login success
    appState.currentUser = username;
    appState.isLoggedIn = true;
    hideError();
    showMainApp();
}

function handleLogout() {
    appState.currentUser = null;
    appState.selectedDistrict = null;
    appState.selectedArea = null;
    appState.isLoggedIn = false;

    usernameInput.value = '';
    passwordInput.value = '';
    hideError();
    showLoginPage();
}

function showError(message) {
    const errorMsg = document.querySelector('.error-msg');
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
}

function hideError() {
    const errorMsg = document.querySelector('.error-msg');
    errorMsg.style.display = 'none';
}

// ============ PAGE NAVIGATION ============
function showLoginPage() {
    loginPage.style.display = 'block';
    appContainer.classList.remove('active');
    navbar.style.display = 'none';
    logoutBtn.style.display = 'none';
    document.body.classList.remove('app-active');
}

function showMainApp() {
    loginPage.style.display = 'none';
    appContainer.classList.add('active');
    navbar.style.display = 'flex';
    logoutBtn.style.display = 'block';
    document.body.classList.add('app-active');
    updateUserDisplay();
    showDistrictPage();
}

function updateUserDisplay() {
    const userName = userInfoDisplay.querySelector('span') || document.createElement('span');
    userName.textContent = appState.currentUser || 'User';
    if (!userInfoDisplay.contains(userName)) {
        userInfoDisplay.appendChild(userName);
    }
}

// ============ SHOW PAGES ============
function showDistrictPage() {
    hideAllPages();
    districtPage.classList.add('active');
    // ensure sections inside pages are hidden when showing district list
    const areasSection = document.querySelector('.areas-section');
    const busesSection = document.querySelector('.buses-section');
    if (areasSection) areasSection.classList.remove('active');
    if (busesSection) busesSection.classList.remove('active');
    renderDistricts();
}

function showAreaPage() {
    hideAllPages();
    areaPage.classList.add('active');
    // show the areas section inside the page
    const areasSection = document.querySelector('.areas-section');
    const busesSection = document.querySelector('.buses-section');
    if (areasSection) areasSection.classList.add('active');
    if (busesSection) busesSection.classList.remove('active');
    renderAreas();
}

function showBusPage() {
    hideAllPages();
    busPage.classList.add('active');
    // ensure buses section is visible
    const busesSection = document.querySelector('.buses-section');
    if (busesSection) busesSection.classList.add('active');
    renderBuses();
}

function hideAllPages() {
    districtPage.classList.remove('active');
    areaPage.classList.remove('active');
    busPage.classList.remove('active');
}

// ============ RENDERING FUNCTIONS ============
function renderDistricts() {
    districtGrid.innerHTML = '';

    Object.keys(transportDatabase).forEach((districtName) => {
        const districtData = transportDatabase[districtName];
        const card = document.createElement('div');
        card.className = 'district-card';
        card.innerHTML = `
            <div class="district-icon">${districtData.icon}</div>
            <div class="district-name">${districtName}</div>
            <div class="district-areas-count">${districtData.areas.length} Areas</div>
        `;

        card.addEventListener('click', () => selectDistrict(districtName, card));
        districtGrid.appendChild(card);
    });
}

function selectDistrict(districtName, cardElement) {
    // Update state
    appState.selectedDistrict = districtName;
    appState.selectedArea = null;

    // Update UI
    document.querySelectorAll('.district-card').forEach(card => {
        card.classList.remove('selected');
    });
    cardElement.classList.add('selected');

    // Update area page title
    const areaPageTitle = areaPage.querySelector('.section-title');
    areaPageTitle.innerHTML = `<i class="fas fa-city section-icon"></i><span>Select Area in <strong>${districtName}</strong></span>`;

    // Show area page
    showAreaPage();
}

function renderAreas() {
    const districtName = appState.selectedDistrict;
    if (!districtName) return;

    areaGrid.innerHTML = '';
    const areas = transportDatabase[districtName].areas;

    areas.forEach((areaName) => {
        const badge = document.createElement('div');
        badge.className = 'area-badge';
        badge.innerHTML = `<div class="area-name">${areaName}</div>`;

        badge.addEventListener('click', () => selectArea(areaName, badge));
        areaGrid.appendChild(badge);
    });
}

function selectArea(areaName, badgeElement) {
    // Update state
    appState.selectedArea = areaName;

    // Update UI
    document.querySelectorAll('.area-badge').forEach(badge => {
        badge.classList.remove('selected');
    });
    badgeElement.classList.add('selected');

    // Update bus page title
    const busPageTitle = busPage.querySelector('.section-title');
    busPageTitle.innerHTML = `<i class="fas fa-bus section-icon"></i><span>Buses in <strong>${areaName}</strong></span>`;

    // Show bus page
    showBusPage();
}

function renderBuses() {
    const districtName = appState.selectedDistrict;
    const areaName = appState.selectedArea;

    if (!districtName || !areaName) return;

    busGrid.innerHTML = '';
    const buses = transportDatabase[districtName].buses[areaName] || [];

    if (buses.length === 0) {
        busGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🚫</div>
                <div class="empty-state-text">No buses available for this area</div>
            </div>
        `;
        return;
    }

    buses.forEach((bus, index) => {
        const card = document.createElement('div');
        card.className = 'bus-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="bus-image">
                <i class="fas fa-bus"></i>
            </div>
            <div class="bus-details">
                <div class="bus-number">#${bus.number}</div>
                <div class="bus-name">${bus.name}</div>
                <div class="bus-info-item">
                    <i class="fas fa-clock bus-info-icon"></i>
                    <span class="bus-time">${bus.time}</span>
                </div>
                <div class="bus-route">
                    <div class="route-item">
                        <i class="fas fa-map-pin"></i>
                        <span>${bus.from}</span>
                    </div>
                    <div class="route-arrow">↓</div>
                    <div class="route-item">
                        <i class="fas fa-flag-checkered"></i>
                        <span>${bus.to}</span>
                    </div>
                </div>
                <div style="margin-top:12px; display:flex; gap:8px;">
                    <button class="view-map-btn" data-bus-id="${bus.id}">View on map</button>
                    <button class="details-btn">Details</button>
                </div>
            </div>
        `;

        busGrid.appendChild(card);

        // attach event to view on map button
        const viewBtn = card.querySelector('.view-map-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', () => showBusOnMap(bus, districtName));
        }
        const detailsBtn = card.querySelector('.details-btn');
        if (detailsBtn) {
            detailsBtn.addEventListener('click', () => showBusDetails(bus, districtName));
        }
    });
}

// ============ BACK NAVIGATION ============
function goBack(page) {
    if (page === 'district') {
        appState.selectedDistrict = null;
        appState.selectedArea = null;
        showDistrictPage();
    } else if (page === 'area') {
        appState.selectedArea = null;
        showAreaPage();
    }
}

// Export for use in HTML
window.goBack = goBack;

// ============ MAP & GEO HELPERS ============
let leafletMap = null;
let busMarker = null;
let mapAnimationInterval = null;

// approximate coords for district centers (demo values)
const districtCoords = {
    'Trichy': [10.7905, 78.7047],
    'Puthukottai': [10.3810, 79.3116],
    'Chennai': [13.0827, 80.2707],
    'Karur': [10.9601, 78.0766],
    'Dindugal': [10.3626, 77.9859],
    'Madurai': [9.9252, 78.1198]
};

function getLatLngForPlace(districtName, placeName, offsetFactor = 0) {
    // placeName not geocoded in this demo; return offsets from district center
    const center = districtCoords[districtName] || [10.0, 78.0];
    // derive a small offset based on hash of placeName
    let hash = 0;
    for (let i = 0; i < placeName.length; i++) hash = (hash << 5) - hash + placeName.charCodeAt(i);
    const latOffset = ((hash % 100) / 1000) * (offsetFactor + 1);
    const lngOffset = (((hash >> 3) % 100) / 1000) * (offsetFactor + 1);
    return [center[0] + latOffset, center[1] + lngOffset];
}

function initMapIfNeeded() {
    if (leafletMap) return;
    leafletMap = L.map('map', { zoomControl: true, attributionControl: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(leafletMap);
}

function showBusOnMap(bus, districtName) {
    // ensure overlay visible
    const overlay = document.getElementById('map-overlay');
    if (!overlay) return;
    overlay.classList.add('active');

    // initialize map after overlay becomes visible so Leaflet can compute sizes
    setTimeout(() => {
        initMapIfNeeded();
        try { leafletMap.invalidateSize(); } catch (e) { /* ignore */ }

        // compute positions
        const fromLatLng = getLatLngForPlace(districtName, bus.from, 0.8);
        const toLatLng = getLatLngForPlace(districtName, bus.to, 1.2);

        // compute current position along the (demo) route and center map there
        const currentProgress = computeProgressFromTime(bus.time, 40);
        const currentLat = fromLatLng[0] + (toLatLng[0] - fromLatLng[0]) * currentProgress;
        const currentLng = fromLatLng[1] + (toLatLng[1] - fromLatLng[1]) * currentProgress;

        // center map on current position and set a reasonable zoom
        leafletMap.setView([currentLat, currentLng], 13);

        // clear previous marker
        if (busMarker) {
            try { leafletMap.removeLayer(busMarker); } catch (e) {}
            busMarker = null;
        }

        // create marker at current position only (no route polyline)
        busMarker = L.circleMarker([currentLat, currentLng], { radius: 9, color: '#FF006E', fillColor: '#FF006E', fillOpacity: 0.95 }).addTo(leafletMap);
        busMarker.bindPopup(`<strong>${bus.name}</strong><br/>${bus.from} → ${bus.to}<br/>${bus.time}`).openPopup();

        // animate marker along the line based on scheduled time
        if (mapAnimationInterval) {
            clearInterval(mapAnimationInterval);
            mapAnimationInterval = null;
        }

        const journeyDurationMinutes = 40; // assume 40-minute journey for demo
        const progressFunc = () => {
            const progress = computeProgressFromTime(bus.time, journeyDurationMinutes);
            const lat = fromLatLng[0] + (toLatLng[0] - fromLatLng[0]) * progress;
            const lng = fromLatLng[1] + (toLatLng[1] - fromLatLng[1]) * progress;
            if (busMarker && typeof busMarker.setLatLng === 'function') {
                busMarker.setLatLng([lat, lng]);
            }
            // recenter map on moving marker
            try { leafletMap.setView([lat, lng]); } catch (e) {}
        };

        // update immediately and then every 5 seconds
        progressFunc();
        mapAnimationInterval = setInterval(progressFunc, 5000);

    }, 120);

    // hook close button
    const closeBtn = document.getElementById('close-map');
    if (closeBtn) {
        closeBtn.onclick = closeMap;
    }
}

function showBusDetails(bus, districtName) {
    // create a modal overlay with bus details
    const overlay = document.createElement('div');
    overlay.className = 'details-overlay';
    overlay.innerHTML = `
        <div class="details-card">
            <button class="close-details">&times;</button>
            <h3>${bus.name} <small style="font-weight:600; color:var(--text-light);">#${bus.number}</small></h3>
            <p><strong>District:</strong> ${districtName}</p>
            <p><strong>From:</strong> ${bus.from}</p>
            <p><strong>To:</strong> ${bus.to}</p>
            <p><strong>Scheduled Time:</strong> ${bus.time}</p>
        </div>
    `;
    document.body.appendChild(overlay);
    const closer = overlay.querySelector('.close-details');
    closer.onclick = () => overlay.remove();
}

function computeProgressFromTime(timeStr, durationMinutes) {
    // parse '07:30 AM' or '08:15 PM'
    const parts = timeStr.trim().split(' ');
    if (parts.length < 2) return 0;
    const hm = parts[0].split(':');
    let hour = parseInt(hm[0], 10);
    const minute = parseInt(hm[1], 10) || 0;
    const ampm = parts[1].toUpperCase();
    if (ampm === 'PM' && hour !== 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;

    const now = new Date();
    const sched = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0);

    // compute minutes until scheduled arrival
    const minsUntil = (sched - now) / 60000;

    // if bus scheduled in future, progress is 0 -> will move towards start as time approaches
    // if bus scheduled around now, progress ~50%, if in past progress approaches 1
    const elapsed = durationMinutes - minsUntil; // approximate elapsed minutes
    let prog = elapsed / durationMinutes;
    if (prog < 0) prog = 0;
    if (prog > 1) prog = 1;
    return prog;
}

function closeMap() {
    const overlay = document.getElementById('map-overlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    if (mapAnimationInterval) {
        clearInterval(mapAnimationInterval);
        mapAnimationInterval = null;
    }
    if (busMarker && leafletMap) {
        leafletMap.removeLayer(busMarker);
        busMarker = null;
    }
    if (window._routeLine && leafletMap) {
        leafletMap.removeLayer(window._routeLine);
        window._routeLine = null;
    }
}
