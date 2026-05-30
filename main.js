/* =========================
BACK TO TOP BUTTON
========================= */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

```
if (window.scrollY > 300) {

    backToTop.style.display = "flex";

}

else {

    backToTop.style.display = "none";

}
```

});

backToTop.addEventListener("click", () => {

```
window.scrollTo({

    top: 0,

    behavior: "smooth"

});
```

});

/* =========================
SCROLL ANIMATION
========================= */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(

(entries) => {

```
entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.classList.add("show");

    }

});
```

},

{
threshold: 0.2
}

);

cards.forEach(card => {

```
observer.observe(card);
```

});

/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages =

document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

```
img.addEventListener("click", () => {

    const overlay =

    document.createElement("div");

    overlay.className = "lightbox";

    overlay.innerHTML =

    `<img src="${img.src}">`;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {

        overlay.remove();

    });

});
```

});

/* =========================
ORDER PRICE ESTIMATION
========================= */

function calculateEstimate() {

```
const chairInput =

document.getElementById("chairs");

const tableInput =

document.getElementById("tables");

const freezerInput =

document.getElementById("freezers");

const estimateBox =

document.getElementById("estimate");

if (!chairInput ||
    !tableInput ||
    !freezerInput ||
    !estimateBox) {

    return;

}

const chairs =
parseInt(chairInput.value) || 0;

const tables =
parseInt(tableInput.value) || 0;

const freezers =
parseInt(freezerInput.value) || 0;

const total =

(chairs * 30)
+
(tables * 300)
+
(freezers * 2500);

estimateBox.innerHTML =

"السعر التقديري: "
+
total
+
" دج";
```

}

document.addEventListener(

"input",

calculateEstimate

);

/* =========================
COUNTER ANIMATION
========================= */

const counters =

document.querySelectorAll(".counter");

counters.forEach(counter => {

```
const target =

parseInt(

counter.getAttribute("data-target")

);

let count = 0;

const updateCounter = () => {

    const increment =

    target / 100;

    if (count < target) {

        count += increment;

        counter.innerText =

        Math.ceil(count);

        requestAnimationFrame(

        updateCounter

        );

    }

    else {

        counter.innerText = target;

    }

};

updateCounter();
```

});
