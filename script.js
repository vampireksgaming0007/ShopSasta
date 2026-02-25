const products = [
    { id: 1, name: "LUXURY WATCH", real_price: 10000, off: 20, for_you: 8000, sale: true, tags: ["fancy", "tech"], logo: "assets/products/1.jpg" },
    { id: 2, name: "MINIMAL CHAIR", real_price: 5000, off: 10, for_you: 4500, sale: false, tags: ["home", "furniture"], logo: "assets/products/2.jpg" },
    { id: 3, name: "CYBER HEADPHONES", real_price: 3000, off: 50, for_you: 1500, sale: true, tags: ["tech", "music"], logo: "assets/products/3.jpg" },
    { id: 4, name: "SMART THERMOSTAT", real_price: 2500, off: 15, for_you: 2125, sale: true, tags: ["tech", "home"], logo: "assets/products/4.jpg" },
    { id: 5, name: "LEATHER WALLET", real_price: 1200, off: 5, for_you: 1140, sale: false, tags: ["fancy", "accessories"], logo: "assets/products/5.jpg" },
    { id: 6, name: "MECHANICAL KEYBOARD", real_price: 4500, off: 30, for_you: 3150, sale: true, tags: ["tech", "gaming"], logo: "assets/products/6.jpg" },
    { id: 7, name: "CERAMIC VASE", real_price: 800, off: 0, for_you: 800, sale: false, tags: ["home", "decor"], logo: "assets/products/7.jpg" },
    { id: 8, name: "NOISE CANCELING BUDS", real_price: 6000, off: 40, for_you: 3600, sale: true, tags: ["tech", "music"], logo: "assets/products/8.jpg" },
    { id: 9, name: "WOODEN DINING TABLE", real_price: 15000, off: 10, for_you: 13500, sale: false, tags: ["home", "furniture"], logo: "assets/products/9.jpg" },
    { id: 10, name: "GAMING MOUSE", real_price: 2000, off: 25, for_you: 1500, sale: true, tags: ["tech", "gaming"], logo: "assets/products/10.jpg" },
    { id: 11, name: "DESK LAMP", real_price: 1500, off: 50, for_you: 750, sale: true, tags: ["home", "decor"], logo: "assets/products/11.jpg" },
    { id: 12, name: "RUNNING SHOES", real_price: 4000, off: 20, for_you: 3200, sale: true, tags: ["sport", "fashion"], logo: "assets/products/12.jpg" },
    { id: 13, name: "ELECTRIC KETTLE", real_price: 1800, off: 10, for_you: 1620, sale: false, tags: ["home", "kitchen"], logo: "assets/products/13.jpg" },
    { id: 14, name: "SMART SPEAKER", real_price: 3500, off: 30, for_you: 2450, sale: true, tags: ["tech", "audio"], logo: "assets/products/14.jpg" },
    { id: 15, name: "VELVET CUSHION", real_price: 600, off: 0, for_you: 600, sale: false, tags: ["home", "decor"], logo: "assets/products/15.jpg" },
    { id: 16, name: "4K MONITOR", real_price: 22000, off: 15, for_you: 18700, sale: true, tags: ["tech", "work"], logo: "assets/products/16.jpg" },
    { id: 17, name: "YOGA MAT", real_price: 900, off: 10, for_you: 810, sale: false, tags: ["sport", "fitness"], logo: "assets/products/17.jpg" },
    { id: 18, name: "COFFEE BREWER", real_price: 7500, off: 25, for_you: 5625, sale: true, tags: ["home", "kitchen"], logo: "assets/products/18.jpg" },
    { id: 19, name: "SUNGLASSES", real_price: 2500, off: 20, for_you: 2000, sale: true, tags: ["fancy", "accessories"], logo: "assets/products/19.jpg" },
    { id: 20, name: "BACKPACK", real_price: 3200, off: 50, for_you: 1600, sale: true, tags: ["travel", "fashion"], logo: "assets/products/20.jpg" },
    { id: 21, name: "EXTERNAL SSD", real_price: 8000, off: 10, for_you: 7200, sale: false, tags: ["tech", "storage"], logo: "assets/products/21.jpg" },
    { id: 22, name: "SCENTED CANDLE", real_price: 400, off: 5, for_you: 380, sale: false, tags: ["home", "decor"], logo: "assets/products/22.jpg" },
    { id: 23, name: "WINTER JACKET", real_price: 9000, off: 35, for_you: 5850, sale: true, tags: ["fashion", "apparel"], logo: "assets/products/23.jpg" },
    { id: 24, name: "WATER BOTTLE", real_price: 1100, off: 0, for_you: 1100, sale: false, tags: ["sport", "fitness"], logo: "assets/products/24.jpg" },
    { id: 25, name: "BLUETOOTH SOUNDBAR", real_price: 12000, off: 20, for_you: 9600, sale: true, tags: ["tech", "audio"], logo: "assets/products/25.jpg" },
    { id: 26, name: "OFFICE DESK", real_price: 18000, off: 10, for_you: 16200, sale: false, tags: ["home", "furniture"], logo: "assets/products/26.jpg" },
    { id: 27, name: "WIRELESS MOUSEPAD", real_price: 1400, off: 15, for_you: 1190, sale: true, tags: ["tech", "gaming"], logo: "assets/products/27.jpg" },
    { id: 28, name: "SILK TIE", real_price: 2100, off: 40, for_you: 1260, sale: true, tags: ["fancy", "apparel"], logo: "assets/products/28.jpg" },
    { id: 29, name: "BLENDER", real_price: 5500, off: 20, for_you: 4400, sale: true, tags: ["home", "kitchen"], logo: "assets/products/29.jpg" },
    { id: 30, name: "PORTABLE CHARGER", real_price: 2800, off: 10, for_you: 2520, sale: false, tags: ["tech", "travel"], logo: "assets/products/30.jpg" },
    { id: 31, name: "TABLET STAND", real_price: 700, off: 50, for_you: 350, sale: true, tags: ["tech", "accessories"], logo: "assets/products/31.jpg" },
    { id: 32, name: "STAINLESS STEEL PAN", real_price: 3400, off: 15, for_you: 2890, sale: true, tags: ["home", "kitchen"], logo: "assets/products/32.jpg" },
    { id: 33, name: "DUMBBELL SET", real_price: 5000, off: 25, for_you: 3750, sale: true, tags: ["sport", "fitness"], logo: "assets/products/33.jpg" }
];

// 1. Loader & Initialization Logic
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    
    // Smooth transition from black screen to website
    setTimeout(() => {
        if(loader) {
            loader.classList.add("loader-finished");
            setTimeout(() => { loader.style.display = "none"; }, 1200);
        }
        renderProducts(products); // Render items after loader
    }, 2000); 
});

// 2. Intersection Observer (Scroll Animation)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

// 3. Main Render Function
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="card" style="opacity: 0; transform: translateY(30px); transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);">
            ${p.sale ? `<div class="sale-badge" style="position: absolute; top: 10px; right: 10px; background: #ff0000; color: #fff; padding: 5px 10px; font-size: 0.6rem; font-weight: 900; z-index: 5;">SALE ${p.off}%</div>` : ''}
            <img src="${p.logo}" alt="${p.name}" loading="lazy">
            <div class="card-info" style="padding: 20px; text-align: center;">
                <h3 style="font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;">${p.name}</h3>
                <p style="margin: 10px 0;">
                    <strike style="opacity: 0.4; font-size: 0.7rem;">₹${p.real_price}</strike> 
                    <span style="color: #ff0000; font-weight: 900; margin-left: 10px;">₹${p.for_you}</span>
                </p>
                <button class="primary-btn" onclick="handleBuy('${p.name}')" style="padding: 10px 20px; font-size: 0.6rem;">BUY NOW</button>
            </div>
        </div>
    `).join('');

    // Attach observer to new cards
    document.querySelectorAll('.card').forEach(card => observer.observe(card));
}

// 4. Search Functionality
function filterByTag() {
    const searchTerm = document.getElementById('tagSearch').value.toLowerCase();
    const filtered = products.filter(p => 
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm)) || 
        p.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
}

// 5. Buy Logic & Sound
function handleBuy(productName) {
    // Play Click Sound
    const audio = document.getElementById('click-sound');
    if(audio) {
        audio.currentTime = 0;
        audio.play();
    }
    
    // Professional Alert
    alert(`Redirecting to order: ${productName}. Get ready for the best price!`);
}

// 6. Smooth Scroll for "Back to Top"
document.addEventListener('click', (e) => {
    if(e.target.innerText === "BACK TO TOP") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});