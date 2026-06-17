/* ==========================================================================
   1. BURGER MENU
   ========================================================================== */
const menuBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-item a');

if (menuBtn && navList) {
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('is-open');
        menuBtn.classList.toggle('is-open');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('is-open');
            menuBtn.classList.remove('is-open');
        });
    });
}

/* ==========================================================================
   2. TRANSLATIONS & LANG TOGGLE
   ========================================================================== */
let currentLang = 'pl';

const translations = {
    pl: {
        "nav-home": "Główna",
        "nav-features": "O nas",
        "nav-gallery": "Galeria",
        "nav-booking": "Rezerwacja",
        "hero-title": "Odpocznij w sercu natury",
        "gallery-title": "Nasze przytulne domki",
        "filter-all": "Wszystkie",
        "filter-lake": "Nad jeziorem",
        "filter-forest": "W głębi lasu",
        "house1-title": "Domek „Szuwarek”",
        "house1-desc": "Przytulny domek z prywatnym pomostem i pięknym widokiem na zachód słońca.",
        "house2-title": "Domek „Borowik”",
        "house2-desc": "Ukryty wśród starych sosen, idealny dla miłośników świętego spokoju i grzybobrania.",
        "house3-title": "Resort „Flisaka”",
        "house3-desc": "Nowoczesny design, panoramiczne okna wychodzące na wodę i duży taras na samym brzegu.",
        "house4-title": "Domek „Szyszka”",
        "house4-desc": "Tradycyjny drewniany domek z kominkiem i dużym oknem na gęsty, sosnowy las.",
        "house5-title": "Oaza „Cisza”",
        "house5-desc": "Położona blisko pomostu, z klimatycznym wieczornym oświetleniem i bezpośrednim zejściem do wody.",
        "house6-title": "Domek „Leśny Przystanek”",
        "house6-desc": "Ukryty w sercu sosnowego boru, z dużym tarasem и miejscem na hamak. Idealny na ucieczkę we dwoje.",
        "feat-title": "Dlaczego warto nas wybrać?",
        "feat1-sub": "Cisza i spokój",
        "feat1-desc": "Nasze domki są otoczone gęstym lasem, co gwarantuje pełną prywatność i idealne warunki do odpoczynku od miejskiego hałasu.",
        "feat2-sub": "Bliskość natury",
        "feat2-desc": "Tylko 50 metrów dzieli Cię od czystego jeziora. Idealne miejsce na poranny spacer, wędkowanie lub wieczorne ognisko pod gwiazdami.",
        "feat3-sub": "Komfort i wygoda",
        "feat3-desc": "Każdy domek posiada w pełni wyposażony aneks kuchenny, nowoczesną łazienkę oraz przytulny kominek na chłodniejsze wieczory.",
        "hero-desc": "Zanurz się w ciszy i spokoju. Wynajmij przyতুলны domek w lesie nad jeziorem i ucieknij od zgiełku miasta na idealny weekend.",
        "hero-btn": "Zarezerwuj domek",
        "book-title": "Zarezerwuj swój pobyt",
        "book-name-label": "Imię i nazwisko",
        "book-check-in-label": "Data przyjazdu",
        "book-check-out-label": "Data wyjazdu",
        "book-guests-label": "Liczba gości",
        "book-submit": "Wyślij formularz",
        "map-title": "Jak do nas dojechać",
        "map-popup-title": "Leśny Zakątek",
        "map-popup-text": "🌲 Zapraszamy do wypoczynku nad jeziorem!",
        "review-title": "Opinie naszych gości",
        "footer-copy": "Leśny Zakątek. Wszelkie prawa zastrzeżone",
        "footer-address": "ul. Leśna 15, Miałkówek",
        // Строки ошибок для валидации
        "err-empty": "Pole nie może być puste!",
        "err-name-length": "Imię musi mieć co najmniej 3 znaki!",
        "err-name-chars": "Użyj tylko liter (bez cyfr i znaków)!",
        "err-name-invalid": "Wprowadź poprawne imię!",
        "err-date-past": "Data nie może być w przeszłości",
        "err-date-order": "Data wyjazdu musi być późniejsza niż data przyjazdu",
        "alert-errors": "Proszę poprawić błędy w formularzu przed wysłaniem!",
        "alert-success": "Sukces! Twoja rezerwacja została wysłana do Leśnego Zakątka."
    },
    en: {
        "nav-home": "Home",
        "nav-features": "About us",
        "nav-gallery": "Gallery",
        "nav-booking": "Booking",
        "hero-title": "Relax in the heart of nature",
        "gallery-title": "Our Cozy Cabins",
        "filter-all": "All",
        "filter-lake": "By the lake",
        "filter-forest": "In the forest",
        "house1-title": "Cabin “Szuwarek”",
        "house1-desc": "A cozy cabin with a private pier and a beautiful view of the sunset.",
        "house2-title": "Cabin “Borowik”",
        "house2-desc": "Hidden among old pine trees, perfect for lovers of peace, quiet, and mushroom picking.",
        "house3-title": "Resort “Flisaka”",
        "house3-desc": "Modern design, panoramic windows overlooking the water, and a large terrace right on the shore.",
        "house4-title": "Cabin “Szyszka”",
        "house4-desc": "A traditional wooden cabin with a fireplace and a large window facing a thick pine forest.",
        "house5-title": "Oasis “Cisza”",
        "house5-desc": "Located close to the pier, with atmospheric evening lighting and direct access to the water.",
        "house6-title": "Cabin “Forest Haven”",
        "house6-desc": "Hidden in the heart of a pine forest, featuring a large terrace and a hammock spot. Perfect for a getaway for two.",
        "feat-title": "Why Choose Us?",
        "feat1-sub": "Peace and Quiet",
        "feat1-desc": "Our cabins are surrounded by a dense forest, guaranteeing full privacy and ideal conditions to relax away from city noise.",
        "feat2-sub": "Close to Nature",
        "feat2-desc": "Only 50 meters separate you from a crystal-clear lake. A perfect place for a morning walk, fishing, or an evening campfire under the stars.",
        "feat3-sub": "Comfort and Convenience",
        "feat3-desc": "Each cabin features a fully equipped kitchenette, a modern bathroom, and a cozy fireplace for cooler evenings.",
        "hero-desc": "Immerse yourself in peace and quiet. Rent a cozy cabin in the forest by the lake and escape the hustle and bustle of the city for a perfect weekend.",
        "hero-btn": "Book a cabin",
        "book-title": "Book Your Stay",
        "book-name-label": "Full Name",
        "book-check-in-label": "Check-in Date",
        "book-check-out-label": "Check-out Date",
        "book-guests-label": "Number of Guests",
        "book-submit": "Submit Form",
        "map-title": "How to get to us",
        "map-popup-title": "Forest Corner",
        "map-popup-text": "🌲 Welcome to relax by the lake!",
        "review-title": "Guest reviews",
        "footer-copy": "Leśny Zakątek. All rights reserved",
        "footer-address": "15 Leśna St., Miałkówek, Poland",
        // Error messages for validation
        "err-empty": "Field cannot be empty!",
        "err-name-length": "Name must be at least 3 characters long!",
        "err-name-chars": "Letters only (no numbers or symbols)!",
        "err-name-invalid": "Please enter a valid name!",
        "err-date-past": "Date cannot be in the past",
        "err-date-order": "Check-out date must be after check-in date",
        "alert-errors": "Please correct the errors in the form before submitting!",
        "alert-success": "Success! Your reservation has been sent to Leśny Zakątek."
    }
};

function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    if (typeof calculateDays === 'function') calculateDays();
    if (typeof updateMapPopup === 'function') updateMapPopup();
    if (typeof renderReview === 'function') renderReview();
}

const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function() {
        const nameInput = document.getElementById('booking-name');

        if (currentLang === 'pl'){
            currentLang = 'en';
            changeLanguage(currentLang);
            langToggleBtn.style.fontWeight = 'bold';
            if (nameInput) nameInput.placeholder = 'e.g. John Smith';
        } else {
            currentLang = 'pl';
            changeLanguage(currentLang);
            langToggleBtn.style.fontWeight = 'normal';
            if (nameInput) nameInput.placeholder = 'np. Jan Kowalski';
        }

        // Мягко обновляем валидацию при смене языка, если там уже есть ошибки
        if (inputName && inputName.classList.contains('invalid')) inputName.dispatchEvent(new Event('input'));
        if (checkInInput && checkInInput.classList.contains('invalid')) checkInInput.dispatchEvent(new Event('change'));
        if (checkOutInput && checkOutInput.classList.contains('invalid')) checkOutInput.dispatchEvent(new Event('change'));
    });
}

/* ==========================================================================
   3. FORM VALIDATION & NIGHTS COUNTER
   ========================================================================== */
const inputName = document.querySelector('#booking-name');
const nameError = document.querySelector('#name-error');
const checkInInput = document.getElementById('booking-check-in');
const checkOutInput = document.getElementById('booking-check-out');
const checkInError = document.querySelector('#check-in-error');
const checkOutError = document.querySelector('#check-out-error');
const inputGuests = document.querySelector('#booking-guests');
const daysSummary = document.getElementById('days-summary');

// Установка минимальной даты заезда (сегодня)
const now = new Date();
const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
if (checkInInput) checkInInput.min = todayStr;

// Калькулятор количества ночей
function calculateDays() {
    if (!daysSummary) return null;
    if (!checkInInput || !checkOutInput || !checkInInput.value || !checkOutInput.value) {
        daysSummary.style.display = "none";
        return null;
    }

    const date1 = new Date(checkInInput.value);
    const date2 = new Date(checkOutInput.value);
    const timeDiff = date2.getTime() - date1.getTime();
    const daysCount = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysCount <= 0) {
        daysSummary.style.display = "none";
        return null;
    }

    let summaryText = "";
    if (currentLang === 'pl') {
        let word = "nocy";
        if (daysCount === 1) {
            word = "noc";
        } else if (daysCount % 10 >= 2 && daysCount % 10 <= 4 && (daysCount % 100 < 10 || daysCount % 100 >= 20)) {
            word = "noce";
        }
        summaryText = `🗓️ Razem: ${daysCount} ${word}`;
    } else {
        let word = daysCount === 1 ? "night" : "nights";
        summaryText = `🗓️ Total: ${daysCount} ${word}`;
    }

    daysSummary.textContent = summaryText;
    daysSummary.style.display = "block"; 
    return daysCount;
}

// Валидация заезда
if (checkInInput) {
    checkInInput.addEventListener('change', function() {
        if (checkOutInput) checkOutInput.min = checkInInput.value;
        
        if (checkOutInput && checkOutInput.value && checkOutInput.value < checkInInput.value) {
            checkOutInput.value = '';
            if (checkOutError) {
                checkOutError.textContent = '';
                checkOutError.style.display = "none";
            }
            checkOutInput.classList.remove('invalid');
        }

        if (!checkInInput.value) {
            checkInError.textContent = translations[currentLang]["err-empty"];
            checkInError.style.display = "block";
            checkInInput.classList.add('invalid');
            calculateDays();
            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedCheckIn = new Date(checkInInput.value);
        selectedCheckIn.setHours(0, 0, 0, 0);

        if (selectedCheckIn < today) {
            checkInError.textContent = translations[currentLang]["err-date-past"];
            checkInError.style.display = "block";
            checkInInput.classList.add('invalid');
        } else {
            checkInError.textContent = "";
            checkInError.style.display = "none";
            checkInInput.classList.remove('invalid');
        }
        calculateDays();
    });
}

// Валидация выезда
if (checkOutInput) {
    checkOutInput.addEventListener('change', function() {
        if (!checkOutInput.value) {
            checkOutError.textContent = translations[currentLang]["err-empty"];
            checkOutError.style.display = "block";
            checkOutInput.classList.add('invalid');
            calculateDays();
            return;
        }

        if (checkInInput && checkInInput.value && checkOutInput.value <= checkInInput.value) {
            checkOutError.textContent = translations[currentLang]["err-date-order"];
            checkOutError.style.display = "block";
            checkOutInput.classList.add('invalid');
        } else {
            checkOutError.textContent = "";
            checkOutError.style.display = "none";
            checkOutInput.classList.remove('invalid');
        }
        calculateDays();
    });
}

// Валидация имени
if (inputName) {
    inputName.addEventListener('input', function() {
        const nameValue = inputName.value.trim();
        const nameRegex = /^[a-zA-ZęćłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/;
        const gibberishRegex = /[^aeiouyąęó\s]{5,}/i;

        if (nameValue === '') {
            nameError.textContent = translations[currentLang]["err-empty"];
            nameError.style.display = "block";
            inputName.classList.add('invalid');
        } else if (nameValue.length < 3) {
            nameError.textContent = translations[currentLang]["err-name-length"];
            nameError.style.display = "block";
            inputName.classList.add('invalid');
        } else if (!nameRegex.test(nameValue)) {
            nameError.textContent = translations[currentLang]["err-name-chars"];
            nameError.style.display = "block";
            inputName.classList.add('invalid');
        } else if (gibberishRegex.test(nameValue)) {
            nameError.textContent = translations[currentLang]["err-name-invalid"];
            nameError.style.display = "block";
            inputName.classList.add('invalid');
        } else {
            nameError.textContent = "";
            nameError.style.display = "none";
            inputName.classList.remove('invalid');
        }
    });
}

// Сабмит формы
const form = document.querySelector('.booking-form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (inputName && inputName.value.trim() === "") inputName.dispatchEvent(new Event('input'));
        if (checkInInput && checkInInput.value === "") checkInInput.dispatchEvent(new Event('change'));
        if (checkOutInput && checkOutInput.value === "") checkOutInput.dispatchEvent(new Event('change'));

        const hasErrors = form.querySelectorAll('.invalid').length > 0;

        if (hasErrors) {
            alert(translations[currentLang]["alert-errors"]);
        } else {
            const messageText = `Nowa rezerwacja!\nImię: ${inputName.value}\nZjazd: ${checkInInput.value}\nWyjazd: ${checkOutInput.value}\nGości: ${inputGuests ? inputGuests.value : '0'}`;
            const rezerwacja = `https://api.telegram.org/bot8839321877:AAF4bTv7spvPKO7dvQUlqxiCtOyIx0SR7cc/sendMessage?chat_id=7623726168&text=${encodeURIComponent(messageText)}`;
            
            fetch(rezerwacja)
            .then(response => {
                if (response.ok) {
                    alert(translations[currentLang]["alert-success"]);
                    form.reset();
                    if (daysSummary) daysSummary.style.display = "none";
                }
            });
        }
    });
}

/* ==========================================================================
   4. GALLERY FILTERS
   ========================================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(function(button){
    button.addEventListener('click', function() {
        const activeBtn = document.querySelector('.filter-btn.active');
        if (activeBtn) activeBtn.classList.remove('active');
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        galleryItems.forEach(function(item) {
            const itemCategory = item.getAttribute('data-category');
            if (filterValue === 'all' || itemCategory === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

/* ==========================================================================
   5. MODAL WINDOW GALLERY
   ========================================================================== */
const galleryModal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalClose = document.querySelector('.modal-close');

galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const clickedImg = item.querySelector('img');
        const clickedTitle = item.querySelector('h3');

        if (clickedImg && modalImg) modalImg.src = clickedImg.src;
        if (clickedTitle && modalTitle) modalTitle.textContent = clickedTitle.textContent;
        if (galleryModal) galleryModal.classList.add('show');
    });
});

if (modalClose) {
    modalClose.addEventListener('click', function(e) {
        e.stopPropagation(); // Предотвращает конфликт с закрытием по фону
        if (galleryModal) galleryModal.classList.remove('show');
    });
}

if (galleryModal) {
    galleryModal.addEventListener('click', function(e) {
        // ИСПРАВЛЕНО: Закрываем только если кликнули на темный фон, а не на само изображение!
        if (e.target === galleryModal) {
            galleryModal.classList.remove('show');
        }
    });
}

/* ==========================================================================
   6. AUTOMATIC YEAR IN FOOTER
   ========================================================================== */
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* ==========================================================================
   7. LEAFLET MAP WITH MOBILE UX FIX
   ========================================================================== */
let map;
let mapMarker;

function initMap() {
    const mapContainer = document.getElementById('map-block');
    if (!mapContainer || typeof L === 'undefined') return;

    const lakeCoords = [52.5112, 19.4294]; 
    
    // ИСПРАВЛЕНО: Добавлены защитные опции скролла и драггинга для мобильных устройств
    map = L.map('map-block', {
        center: lakeCoords,
        zoom: 13,
        scrollWheelZoom: false,         // Отключает случайный зум при скролле колесиком на ПК
        dragging: !L.Browser.mobile,    // Отключает перетаскивание карты 1 пальцем на мобильных
        tap: !L.Browser.mobile          // Убирает задержку тапов на тач-скринах
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    mapMarker = L.marker(lakeCoords).addTo(map);
    updateMapPopup();
}

function updateMapPopup() {
    if (!mapMarker) return;

    const title = translations[currentLang]["map-popup-title"] || "Leśny Zakątek";
    const text = translations[currentLang]["map-popup-text"] || "🌲";

    mapMarker.bindPopup(`
        <div style="text-align: center; font-family: sans-serif; font-size: 14px;">
            <strong style="color: #2e7d32; font-size: 16px;">${title}</strong><br style="margin-bottom: 5px;">
            ${text}
        </div>
    `).openPopup();
}

initMap();

/* ==========================================================================
   8. REVIEWS SLIDER & TOUCH SWIPES
   ========================================================================== */
const reviewsData = [
    {
        name: "Anna i Tomasz, Łódź",
        stars: 5,
        text: {
            pl: "Wspaniałe miejsce na ucieczkę od miejskiego zgiełku! Cisza, zapach lasu i bezpośrednie sąsiedztwo Jeziora Lucieńskiego. Domek był czysty i świetnie wyposażony. Na pewno wrócimy tu w sierpniu!",
            en: "A wonderful place to escape the hustle and bustle of the city! Silence, the smell of the forest, and the direct vicinity of Lake Lucieńskie. The cottage was clean and well-equipped. We will definitely come back in August!"
        }
    },
    {
        name: "Marta & Family",
        stars: 4,
        text: {
            pl: "Czysto, przytulnie i bardzo klimatycznie. Dzieci zachwycone lasem i możliwością podglądania przyrody. Jezioro czyste, idealne do odpoczynku. Mały minus za słaby zasięg LTE, ale dzięki temu naprawdę odpoczęliśmy od telefonów!",
            en: "Clean, cozy, and very atmospheric. The children were delighted with the forest and the opportunity to watch nature. The lake is clean, perfect for relaxation. A small minus for the weak LTE coverage, but thanks to this we really rested from phones!"
        }
    },
    {
        name: "Janusz K.",
        stars: 5,
        text: {
            pl: "Spędziliśmy tu z rodziną fantastyczny tydzień. Wieczorne ogniska i bliskość natury to dokładnie to, czego szukaliśmy. Świetna baza wypadowa na piesze wędrówki po Gostynińsko-Włocławskim Parku Krajobrazowym.",
            en: "We spent a fantastic week here with the family. Evening campfires and proximity to nature were exactly what we were looking for. A great base for hiking in the Gostynin-Włocławek Landscape Park."
        }
    },
    {
        name: "John D., UK",
        stars: 5,
        text: {
            pl: "Niesamowity eko-wypoczynek w sercu Polski. Rezerwacja przez stronę przebiegła błyskawicznie, a sam pobyt przeszedł nasze oczekiwania. Jeśli szukasz prawdziwego spokoju wśród drzew, to jest to miejsce.",
            en: "Amazing eco-holiday in the heart of Poland. Booking through the website was lightning fast, and the stay itself exceeded our expectations. If you are looking for real peace among the trees, this is the place."
        }
    }
];

let currentReviewIndex = 0;
const reviewStars = document.getElementById('review-stars');
const reviewText = document.getElementById('review-text');
const reviewAuthor = document.getElementById('review-author');
const btnPrev = document.getElementById('prev-review-btn');
const btnNext = document.getElementById('next-review-btn');
const reviewItem = document.querySelector('.review-item');
let isAnimating = false;

function renderReview() {
    if (!reviewAuthor || !reviewText || !reviewStars) return;
    
    const review = reviewsData[currentReviewIndex];
    reviewAuthor.textContent = review.name;
    reviewText.textContent = review.text[currentLang];

    const totalStars = 5;
    const goldStarsCount = review.stars;
    const grayStarsCount = totalStars - goldStarsCount;

    let starsHTML = '';
    for (let i = 0; i < goldStarsCount; i++) { starsHTML += '<span class="star-gold">★</span>'; }
    for (let i = 0; i < grayStarsCount; i++) { starsHTML += '<span class="star-gray">★</span>'; }

    reviewStars.innerHTML = starsHTML;
}

if (btnNext) {
    btnNext.addEventListener('click', function () {
        if (isAnimating || !reviewItem) return;
        isAnimating = true;
        reviewItem.classList.add('slide-left-out');

        setTimeout(function () {
            currentReviewIndex++;
            if (currentReviewIndex >= reviewsData.length) currentReviewIndex = 0;
            renderReview();

            reviewItem.classList.remove('slide-left-out');
            reviewItem.classList.add('slide-right-in');

            setTimeout(function() {
                reviewItem.classList.remove('slide-right-in');
                isAnimating = false;
            }, 250);
        }, 250);        
    });
}

if (btnPrev) {
    btnPrev.addEventListener('click', function() {
        if (isAnimating || !reviewItem) return;
        isAnimating = true;
        reviewItem.classList.add('slide-right-out');

        setTimeout(function () {
            currentReviewIndex--;
            if (currentReviewIndex < 0) currentReviewIndex = reviewsData.length - 1;
            renderReview();

            reviewItem.classList.remove('slide-right-out');
            reviewItem.classList.add('slide-left-in');

            setTimeout(function() {
                reviewItem.classList.remove('slide-left-in');
                isAnimating = false;
            }, 250);
        }, 250);        
    });
}

if (reviewItem) {
    let touchStartX = 0;
    let touchEndX = 0;

    reviewItem.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    reviewItem.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        const minSwipeDistance = 50;

        if (isAnimating) return;

        if (swipeDistance < -minSwipeDistance) {
            if (btnNext) btnNext.click();
        }
        if (swipeDistance > minSwipeDistance) {
            if (btnPrev) btnPrev.click();
        }
    }
}

// Стартовый рендеринг первого отзыва
renderReview();