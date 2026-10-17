/* ================================
   Main.js - Global Scripts
   ================================ */

/* -------- Dark / Light Mode Toggle -------- */
const toggle = document.getElementById('darkModeToggle');

// عند تحميل الصفحة، شوف لو فيه وضع محفوظ في LocalStorage
function applySavedTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        if (toggle) toggle.textContent = "☀️";
    } else {
        document.body.classList.remove('dark');
        if (toggle) toggle.textContent = "🌙";
    }
}

// نفذ عند تحميل الصفحة
applySavedTheme();

if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        // حفظ الوضع الحالي في LocalStorage
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            toggle.textContent = "☀️";
        } else {
            localStorage.setItem('theme', 'light');
            toggle.textContent = "🌙";
        }
    });
}

/* -------- Tool Search (Homepage) -------- */
const searchInput = document.getElementById('toolSearch');
if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        const query = this.value.toLowerCase();
        document.querySelectorAll('.tool-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? 'block' : 'none';
        });
    });
}

/* -------- Back Button (Tools Pages) -------- */
const backBtn = document.querySelector('.btn-back');
if (backBtn) {
    backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "../tools.html";
    });
}

/* -------- Smooth Scroll for Internal Links -------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* -------- Highlight Active Nav Link -------- */
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
})

/* Copy button */
function copyOutput() {
    const output = document.getElementById("output");
    if (output) {
        const text = output.innerText || output.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert("تم نسخ النص بنجاح ✅");
        }).catch(err => {
            console.error("خطأ في النسخ:", err);
        });
    }
}