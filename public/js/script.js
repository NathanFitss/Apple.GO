// 1. Loading Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 800);
});

// 2. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check local storage
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

// 3. Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// 4. Back to Top Button & Sticky Navbar
const backToTop = document.getElementById('backToTop');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 5. Render Reviews Dynamically
const reviewsData = [{"name": "Budi Santoso", "rating": 5, "review": "Bener-bener amanah. Sempat takut karena gak bisa COD, tapi trust issue hilang pas barang sampai."}, {"name": "Andi Pratama", "rating": 5, "review": "Gak perlu ribet antri atau cari ke luar negeri, tinggal duduk manis barang nyampe. Joss!"}, {"name": "Siti Aminah", "rating": 4, "review": "Harga oke, barang oke, mungkin ke depannya bisa tambah ekspedisi lain ya."}, {"name": "Ayu Lestari", "rating": 5, "review": "Adminnya ramah dan fast response, selalu update status barang sampai mana. Keren!"}, {"name": "Riko Wijaya", "rating": 5, "review": "Recommended banget buat yang cari iPhone ori harga miring. Thank you Apple.GO!"}, {"name": "Dimas Anggara", "rating": 5, "review": "Harga jastipnya terjangkau banget dibanding tempat lain. Pasti bakal order lagi buat adek."}, {"name": "Eka Putri", "rating": 4, "review": "Harga oke, barang oke, mungkin ke depannya bisa tambah ekspedisi lain ya."}, {"name": "Fajar Maulana", "rating": 5, "review": "Bener-bener amanah. Sempat takut karena gak bisa COD, tapi trust issue hilang pas barang sampai."}, {"name": "Gita Savitri", "rating": 4, "review": "Overall oke banget. Admin sedikit slow respon pas malam, tapi dimaklumi karena luar jam kerja."}, {"name": "Hadi Saputra", "rating": 5, "review": "Adminnya ramah dan fast response, selalu update status barang sampai mana. Keren!"}, {"name": "Intan Permata", "rating": 4, "review": "Overall oke banget. Admin sedikit slow respon pas malam, tapi dimaklumi karena luar jam kerja."}, {"name": "Joko Susilo", "rating": 5, "review": "Recommended banget buat yang cari iPhone ori harga miring. Thank you Apple.GO!"}, {"name": "Kiki Amelia", "rating": 5, "review": "Awalnya agak ragu karena belum pernah jastip, tapi ternyata Kiki puas banget! Barang beneran ori."}, {"name": "Lutfi Hakim", "rating": 5, "review": "Bener-bener amanah. Sempat takut karena gak bisa COD, tapi trust issue hilang pas barang sampai."}, {"name": "Maya Sari", "rating": 5, "review": "Sukses terus Apple.GO, pelayanannya bintang lima. Bakal langganan terus."}, {"name": "Niko Fernando", "rating": 4, "review": "Overall oke banget. Admin sedikit slow respon pas malam, tapi dimaklumi karena luar jam kerja."}, {"name": "Oki Setiawan", "rating": 5, "review": "Bener-bener amanah. Sempat takut karena gak bisa COD, tapi trust issue hilang pas barang sampai."}, {"name": "Putri Rahmawati", "rating": 4, "review": "Puas sama iPhonenya, warna sesuai request, kapasitas juga. Thanks min!"}, {"name": "Qori Akbar", "rating": 5, "review": "Gila sih ini jastip paling mantap. Barang mulus 100%, battery health 100%."}, {"name": "Reza Pahlevi", "rating": 5, "review": "Gak perlu ribet antri atau cari ke luar negeri, tinggal duduk manis barang nyampe. Joss!"}, {"name": "Tono Hartono", "rating": 4, "review": "Barang bagus, pengiriman agak lama sehari dari estimasi tapi tetep amanah."}, {"name": "Udin Sedunia", "rating": 5, "review": "Gila sih ini jastip paling mantap. Barang mulus 100%, battery health 100%."}, {"name": "Vina Panduwinata", "rating": 5, "review": "Harga jastipnya terjangkau banget dibanding tempat lain. Pasti bakal order lagi buat adek."}, {"name": "Wira Yudha", "rating": 5, "review": "Harga jastipnya terjangkau banget dibanding tempat lain. Pasti bakal order lagi buat adek."}, {"name": "Yudi Herdian", "rating": 5, "review": "Bener-bener amanah. Sempat takut karena gak bisa COD, tapi trust issue hilang pas barang sampai."}, {"name": "Zainuddin", "rating": 5, "review": "Awalnya agak ragu karena belum pernah jastip, tapi ternyata Zainuddin puas banget! Barang beneran ori."}, {"name": "Arif Rahman", "rating": 5, "review": "Gila sih ini jastip paling mantap. Barang mulus 100%, battery health 100%."}, {"name": "Bella Safira", "rating": 5, "review": "Gila sih ini jastip paling mantap. Barang mulus 100%, battery health 100%."}, {"name": "Chika Jessica", "rating": 5, "review": "Sukses terus Apple.GO, pelayanannya bintang lima. Bakal langganan terus."}, {"name": "Dika Ramadhan", "rating": 5, "review": "Harga jastipnya terjangkau banget dibanding tempat lain. Pasti bakal order lagi buat adek."}, {"name": "Rian D'Masiv", "rating": 5, "review": "Gak perlu ribet antri atau cari ke luar negeri, tinggal duduk manis barang nyampe. Joss!"}, {"name": "Sisca Kohl", "rating": 5, "review": "Proses jastip super transparan. Gak nyesel order di Apple.GO, mantap!"}, {"name": "Tika Panggabean", "rating": 5, "review": "Bener-bener amanah. Sempat takut karena gak bisa COD, tapi trust issue hilang pas barang sampai."}, {"name": "Umar Syarief", "rating": 5, "review": "Harga jastipnya terjangkau banget dibanding tempat lain. Pasti bakal order lagi buat adek."}, {"name": "Vano Marcell", "rating": 3, "review": "Barang sampai dengan aman. Cuma proses dari Batamnya agak antri, tapi gak apa-apa barang ori."}, {"name": "Wulan Guritno", "rating": 4, "review": "Puas sama iPhonenya, warna sesuai request, kapasitas juga. Thanks min!"}, {"name": "Yoga Pratama", "rating": 5, "review": "Harga jastipnya terjangkau banget dibanding tempat lain. Pasti bakal order lagi buat adek."}, {"name": "Zaki Mubarak", "rating": 5, "review": "Sukses terus Apple.GO, pelayanannya bintang lima. Bakal langganan terus."}, {"name": "Rina Nose", "rating": 5, "review": "Awalnya agak ragu karena belum pernah jastip, tapi ternyata Rina puas banget! Barang beneran ori."}, {"name": "Gilang Dirga", "rating": 5, "review": "Batam - Jakarta lumayan cepat, packing super aman tebal banget bubble wrapnya."}, {"name": "Dinda Hauw", "rating": 5, "review": "Proses jastip super transparan. Gak nyesel order di Apple.GO, mantap!"}, {"name": "Farhan Zainal", "rating": 4, "review": "Harga oke, barang oke, mungkin ke depannya bisa tambah ekspedisi lain ya."}, {"name": "Hendra Kurniawan", "rating": 5, "review": "Harga jastipnya terjangkau banget dibanding tempat lain. Pasti bakal order lagi buat adek."}, {"name": "Indah Kalalo", "rating": 4, "review": "Puas sama iPhonenya, warna sesuai request, kapasitas juga. Thanks min!"}, {"name": "Kevin Julio", "rating": 4, "review": "Puas sama iPhonenya, warna sesuai request, kapasitas juga. Thanks min!"}, {"name": "Lina Marlina", "rating": 5, "review": "Gak perlu ribet antri atau cari ke luar negeri, tinggal duduk manis barang nyampe. Joss!"}, {"name": "Nanda Persada", "rating": 5, "review": "Sukses terus Apple.GO, pelayanannya bintang lima. Bakal langganan terus."}, {"name": "Rio Dewanto", "rating": 4, "review": "Barang bagus, pengiriman agak lama sehari dari estimasi tapi tetep amanah."}, {"name": "Soni Setiawan", "rating": 5, "review": "Bener-bener amanah. Sempat takut karena gak bisa COD, tapi trust issue hilang pas barang sampai."}, {"name": "Nisa Sabyan", "rating": 5, "review": "Bener-bener amanah. Sempat takut karena gak bisa COD, tapi trust issue hilang pas barang sampai."}];

function renderReviews() {
    const container = document.getElementById('reviews-container');
    reviewsData.forEach(review => {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
                stars += '<i class="fa-solid fa-star"></i>';
            } else {
                stars += '<i class="fa-regular fa-star"></i>';
            }
        }
        
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-header">
                <div class="avatar"><i class="fa-solid fa-user"></i></div>
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="stars">${stars}</div>
                </div>
            </div>
            <p>"${review.review}"</p>
        `;
        container.appendChild(card);
    });
}
renderReviews();

// 6. FAQ Accordion
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});

// 7. WhatsApp Form Submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const wa = document.getElementById('wa').value;
    const seri = document.getElementById('seri').value;
    const warna = document.getElementById('warna').value;
    const kapasitas = document.getElementById('kapasitas').value;
    const alamat = document.getElementById('alamat').value;
    const catatan = document.getElementById('catatan').value;
    const pembayaran = document.querySelector('input[name="pembayaran"]:checked').value;

    const text = `Halo Admin Apple.GO, saya ingin order Jastip iPhone dengan detail berikut:\n\n` +
        `*Nama*: ${nama}\n` +
        `*No. WhatsApp*: ${wa}\n` +
        `*Seri iPhone*: ${seri}\n` +
        `*Warna*: ${warna}\n` +
        `*Kapasitas*: ${kapasitas}\n` +
        `*Alamat Lengkap*: ${alamat}\n` +
        `*Catatan Tambahan*: ${catatan || '-'}\n` +
        `*Metode Pembayaran*: ${pembayaran}\n\n` +
        `Mohon info total biaya dan proses selanjutnya. Terima kasih!`;

    const waURL = `https://api.whatsapp.com/send?phone=6285188249660&text=${encodeURIComponent(text)}`;
    window.open(waURL, '_blank');
});
                    
