// ========== CARRITO DE COMPRAS ==========
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.init();
    }

    init() {
        this.updateCartCount();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('[data-product]').forEach(btn => {
            btn.addEventListener('click', (e) => this.addToCart(e));
        });

        const emptyBtn = document.getElementById('empty-cart');
        if (emptyBtn) {
            emptyBtn.addEventListener('click', () => this.emptyCart());
        }

        this.updateRemoveButtons();
    }

    addToCart(e) {
        const btn = e.currentTarget;
        const productName = btn.dataset.product;
        const productPrice = parseFloat(btn.dataset.price);

        const existingItem = this.items.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.showNotification('Producto agregado al carrito');
    }

    removeFromCart(productName) {
        this.items = this.items.filter(item => item.name !== productName);
        this.saveCart();
        this.updateCartCount();
        this.updateCartDisplay();
    }

    updateQuantity(productName, quantity) {
        const item = this.items.find(item => item.name === productName);
        if (item) {
            item.quantity = Math.max(1, parseInt(quantity));
            this.saveCart();
            this.updateCartDisplay();
        }
    }

    emptyCart() {
        this.items = [];
        this.saveCart();
        this.updateCartCount();
        this.updateCartDisplay();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    loadCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    updateCartCount() {
        const total = this.items.reduce((sum, item) => sum + item.quantity, 0);

        document.querySelectorAll('[data-cart-count]').forEach(badge => {
            badge.textContent = total;
            badge.classList.toggle('hidden', total === 0);
        });
    }

    updateRemoveButtons() {
        document.querySelectorAll('.remove-from-cart').forEach(btn => {
            btn.onclick = () => this.removeFromCart(btn.dataset.product);
        });

        document.querySelectorAll('.cart-quantity').forEach(input => {
            input.onchange = (e) => {
                this.updateQuantity(input.dataset.product, e.target.value);
            };
        });
    }

    updateCartDisplay() {
        const cartContainer = document.getElementById('cart-items');
        const totalContainer = document.getElementById('cart-total');

        if (!cartContainer) return;

        if (this.items.length === 0) {
            cartContainer.innerHTML = `<p class="text-center py-8">El carrito está vacío</p>`;
            if (totalContainer) totalContainer.innerHTML = '';
            return;
        }

        let html = '';
        let total = 0;

        this.items.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            html += `
                <div class="flex justify-between items-center border-b py-4">
                    <div>
                        <h4 class="font-bold">${item.name}</h4>
                        <p>Bs. ${item.price}</p>
                    </div>

                    <div class="flex items-center gap-2">
                        <input type="number" min="1" value="${item.quantity}" class="cart-quantity border w-16 text-center" data-product="${item.name}">
                        <span class="font-bold">Bs. ${subtotal}</span>
                        <button class="remove-from-cart text-red-600" data-product="${item.name}">Eliminar</button>
                    </div>
                </div>
            `;
        });

        cartContainer.innerHTML = html;

        if (totalContainer) {
            totalContainer.innerHTML = `
                <div class="mt-4 p-4 bg-yellow-100 rounded">
                    <h3 class="font-bold text-xl">Total: Bs. ${total}</h3>
                </div>
            `;
        }

        this.updateRemoveButtons();
    }

    showNotification(message) {
        const notif = document.createElement('div');
        notif.className = 'fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded';
        notif.textContent = message;
        document.body.appendChild(notif);

        setTimeout(() => notif.remove(), 2000);
    }
}

// ========== MENÚ HAMBURGUESA ==========
class MobileMenu {
    constructor() {
        const btn = document.getElementById('hamburger-menu');
        const menu = document.getElementById('nav-menu');

        if (!btn || !menu) return;

        const setExpanded = (expanded) => {
            btn.setAttribute('aria-expanded', String(expanded));
            if (expanded) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                menu.classList.add('active');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                menu.classList.remove('active');
            }
        };

        // Asegurar estado inicial consistente
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        setExpanded(isExpanded);

        btn.addEventListener('click', () => {
            const next = btn.getAttribute('aria-expanded') !== 'true';
            setExpanded(next);
        });

        // Cerrar al navegar por los enlaces del menú
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setExpanded(false));
        });

        // Cerrar al hacer resize a desktop
        window.addEventListener('resize', () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                setExpanded(false);
            }
        });
    }
}

// ========== BUSCADOR ==========
class ProductSearch {
    constructor() {
        const btn = document.querySelector('[data-search-btn]');
        if (!btn) return;

        btn.addEventListener('click', () => {
            // UX simple y mejor que prompt: usar una búsqueda inline temporal.
            const existing = document.getElementById('product-search-input');
            if (existing) {
                existing.focus();
                return;
            }

            const input = document.createElement('input');
            input.id = 'product-search-input';
            input.type = 'search';
            input.placeholder = 'Buscar producto...';
            input.setAttribute('aria-label', 'Buscar producto');
            input.className = 'fixed top-24 left-1/2 -translate-x-1/2 z-[1000] w-[92%] md:w-[520px] px-4 py-3 rounded-lg border border-outline-variant bg-white shadow-md outline-none';

            const close = () => {
                input.remove();
                document.removeEventListener('keydown', onKeyDown);
            };

            const onKeyDown = (e) => {
                if (e.key === 'Escape') close();
                if (e.key === 'Enter') {
                    const query = input.value.trim();
                    if (query) this.searchOnPage(query);
                    close();
                }
            };

            document.addEventListener('keydown', onKeyDown);
            document.body.appendChild(input);
            input.focus();

            // Búsqueda por click fuera
            setTimeout(() => {
                const onClickAway = (e) => {
                    if (!input.contains(e.target) && !btn.contains(e.target)) {
                        document.removeEventListener('click', onClickAway);
                        close();
                    }
                };
                document.addEventListener('click', onClickAway);
            }, 0);
        });
    }

    searchOnPage(texto) {
        const q = texto.toLowerCase();
        const items = Array.from(document.querySelectorAll('h3'));
        let encontrado = false;

        items.forEach(el => {
            el.style.backgroundColor = '';
        });

        items.forEach(el => {
            const t = el.textContent.toLowerCase();
            if (t.includes(q)) {
                encontrado = true;
                el.style.backgroundColor = 'rgba(255, 215, 0, 0.35)';
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        if (!encontrado) {
            alert('No se encontró ese producto en esta página');
        }
    }
}


// ========== CONTACTO ==========
class ContactForm {
    constructor() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Mensaje enviado correctamente");
            form.reset();
        });
    }
}

// ========== INICIAR ==========
document.addEventListener('DOMContentLoaded', () => {
    window.cart = new ShoppingCart();
    new MobileMenu();
    new ProductSearch();
    new ContactForm();

    if (document.getElementById('cart-items')) {
        window.cart.updateCartDisplay();
    }

    console.log("Aplicación funcionando correctamente");
});