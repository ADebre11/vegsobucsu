(function () {
    function el(id) {
        return document.getElementById(id);
    }

    function renderNavbar() {
        const b = SITE_DATA.brand;
        el("navbar-mount").innerHTML = `
            <nav class="navbar">
                <div class="container navbar-inner">
                    <a href="#hero-mount" class="brand">
                        <img src="${b.logo}" alt="${b.name} – Polgári búcsúztató logó" class="brand-logo" />
                        <div class="brand-divider"></div>
                        <div class="brand-text">
                            <span class="brand-name gold-text">${b.name}</span>
                            <span class="brand-sub">${b.subtitle}</span>
                        </div>
                    </a>
                    <ul class="nav-links">
                        ${SITE_DATA.nav.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}
                    </ul>
                    <div class="nav-actions">
                        <a href="#contact-mount" class="btn btn-gold">✉ Kapcsolatfelvétel</a>
                        <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Menü megnyitása">☰</button>
                    </div>
                </div>
                <div class="mobile-drawer" id="mobile-drawer">
                    <ul>
                        ${SITE_DATA.nav.map((item) => `<li><a href="${item.href}" class="mobile-nav-link">${item.label}</a></li>`).join("")}
                    </ul>
                    <a href="${b.phoneHref}" class="btn btn-gold" style="width:100%;">
                        ☎ Hívás / Viber: ${b.phone}
                    </a>
                </div>
            </nav>
        `;

        const btn = el("mobile-menu-btn");
        const drawer = el("mobile-drawer");
        btn.addEventListener("click", () => drawer.classList.toggle("open"));
        drawer.querySelectorAll(".mobile-nav-link").forEach((a) =>
            a.addEventListener("click", () => drawer.classList.remove("open"))
        );
    }

    function renderHero() {
        const h = SITE_DATA.hero;
        el("hero-mount").innerHTML = `
            <div class="hero">
                <img src="${h.bgImage}" alt="" class="hero-bg" aria-hidden="true" />
                <div class="hero-overlay"></div>
                <div class="container hero-grid">
                    <div>
                        <h1 class="hero-title">${h.title}</h1>
                        <div class="hero-badge">${h.badge}</div>
                        <p class="hero-subtitle">${h.subtitle}</p>
                        <div class="hero-ctas">
                            <a href="${SITE_DATA.brand.phoneHref}" class="btn btn-brown">☎ ${h.primaryCta}</a>
                            <a href="#contact-mount" class="btn btn-gold">${h.secondaryCta} →</a>
                        </div>
                        <div class="hero-hours">
                            <span>✦ ${SITE_DATA.brand.hours}</span>
                            <span>✦ ${SITE_DATA.brand.location}</span>
                        </div>
                    </div>
                    <div class="hero-visual-stack">
                        <div class="hero-portrait-card">
                            <img src="${h.portrait}" alt="${SITE_DATA.brand.name} polgári búcsúztató" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderAbout() {
        const a = SITE_DATA.about;
        const h = SITE_DATA.hero;
        el("about-mount").innerHTML = `
            <div class="about-section section-pad">
                <div class="container">
                    <div class="about-card">
                        <div class="candle-showcase">
                            <div class="candle-frame" aria-label="${h.candleLabel}">
                                <video src="${h.candleVideo}" autoplay loop muted playsinline preload="metadata"></video>
                                <div class="candle-caption">${h.candleLabel}</div>
                            </div>
                        </div>
                        <div class="about-quote">
                            <span class="eyebrow">${a.eyebrow}</span>
                            <blockquote>${a.quote}</blockquote>
                            <cite>— ${a.quoteAuthor} —</cite>
                        </div>
                        <div class="about-body">
                            ${a.paragraphs.map((p) => `<p>${p}</p>`).join("")}
                            <div class="about-callout">${a.callout}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderServices() {
        el("services-mount").innerHTML = `
            <div class="services-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Szolgáltatások</span>
                        <h2 class="section-title">Személyes és méltó elköszönés</h2>
                        <p class="section-subtitle">Budapesten, Pest megyében és az ország egész területén – egyéni igényekhez igazítva.</p>
                    </div>
                    <div class="services-grid">
                        ${SITE_DATA.services
                            .map(
                                (s) => `
                            <article class="service-card">
                                <div class="service-img-wrap">
                                    <img src="${s.image}" alt="${s.title}" loading="lazy" />
                                </div>
                                <div class="service-body">
                                    <h3>${s.title}</h3>
                                    <p>${s.shortDesc}</p>
                                    <div class="service-actions">
                                        <button class="btn btn-outline service-detail-btn" data-service="${s.id}">Részletek →</button>
                                        <a href="#contact-mount" class="btn btn-brown">Érdeklődöm</a>
                                    </div>
                                </div>
                            </article>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll(".service-detail-btn").forEach((btn) => {
            btn.addEventListener("click", () => openServiceModal(btn.dataset.service));
        });
    }

    function renderAngelic() {
        const ang = SITE_DATA.angelic;
        el("angelic-mount").innerHTML = `
            <div class="angelic-section section-pad">
                <div class="container">
                    <div class="angelic-card">
                        <span class="eyebrow" style="background:rgba(255,255,255,0.12);color:var(--gold-champagne);border-color:rgba(240,207,133,0.45);">${ang.eyebrow}</span>
                        <h2 class="gold-text">${ang.title}</h2>
                        <p style="margin:0;color:rgba(255,248,238,0.88);">${ang.subtitle}</p>
                        <div class="angelic-video-wrap">
                            <iframe src="${ang.youtubeEmbed}" title="${ang.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderBlog() {
        el("blog-mount").innerHTML = `
            <div class="blog-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Blog & Útmutatók</span>
                        <h2 class="section-title">Gondolatok az elmúlásról és a búcsúról</h2>
                        <p class="section-subtitle">Gyakorlati segítségek és lelki támasz a nehéz időszakokra.</p>
                    </div>
                    <div class="blog-grid">
                        ${SITE_DATA.blogs
                            .map(
                                (b) => `
                            <article class="blog-card">
                                <div class="blog-cover">
                                    <img src="${b.cover}" alt="${b.title}" loading="lazy" />
                                </div>
                                <div class="blog-body">
                                    <div class="blog-date">${b.date}</div>
                                    <h3>${b.title}</h3>
                                    <p class="blog-excerpt">${b.excerpt}</p>
                                    <div>
                                        <button class="btn btn-outline blog-read-btn" data-blog="${b.id}">Elolvasom →</button>
                                    </div>
                                </div>
                            </article>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll(".blog-read-btn").forEach((btn) => {
            btn.addEventListener("click", () => openBlogModal(btn.dataset.blog));
        });
    }

    function renderContact() {
        const c = SITE_DATA.contact;
        el("contact-mount").innerHTML = `
            <div class="contact-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">${c.eyebrow}</span>
                        <h2 class="section-title">${c.title}</h2>
                        <p class="section-subtitle">${c.subtitle}</p>
                    </div>
                    <div class="contact-grid">
                        <div class="contact-info-card">
                            <h3 style="font-family:var(--font-serif);margin:0 0 12px 0;font-size:1.45rem;">Közvetlen elérhetőségek</h3>
                            <a href="${SITE_DATA.brand.phoneHref}" class="contact-row">
                                <span class="contact-label">Telefon / Viber (hívás most)</span>
                                <span class="contact-val">☎ ${SITE_DATA.brand.phone}</span>
                            </a>
                            <a href="mailto:${SITE_DATA.brand.email}" class="contact-row">
                                <span class="contact-label">E-mail cím</span>
                                <span class="contact-val">${SITE_DATA.brand.email}</span>
                            </a>
                            <div class="contact-row">
                                <span class="contact-label">Elérhetőség</span>
                                <span class="contact-val">${SITE_DATA.brand.hours}</span>
                            </div>
                            <div class="contact-row">
                                <span class="contact-label">Terület</span>
                                <span class="contact-val">${SITE_DATA.brand.location}</span>
                            </div>
                        </div>
                        <div class="contact-form-card">
                            <h3 style="font-family:var(--font-serif);margin:0 0 6px 0;font-size:1.45rem;">Üzenet vagy visszahívás kérése</h3>
                            <p style="margin:0 0 20px 0;color:var(--text-muted);font-size:0.92rem;">Adja meg elérhetőségét és a főbb részleteket – mielőbb felveszem Önnel a kapcsolatot.</p>
                            <form id="inquiry-form">
                                <div class="form-group">
                                    <label for="inq-name">Név *</label>
                                    <input id="inq-name" type="text" required placeholder="Az Ön neve" />
                                </div>
                                <div class="form-group">
                                    <label for="inq-contact">Telefonszám vagy E-mail *</label>
                                    <input id="inq-contact" type="text" required placeholder="+36 ... vagy nev@gmail.com" />
                                </div>
                                <div class="form-group">
                                    <label for="inq-details">Időpont, helyszín és röviden a kérések</label>
                                    <textarea id="inq-details" rows="4" placeholder="Pl. várható dátum, település / temető / rendezvényhelyszín..."></textarea>
                                </div>
                                <button type="submit" class="btn btn-gold" style="width:100%;">Üzenet küldése / Visszahívás kérése →</button>
                                <div id="form-status" class="form-status"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;

        el("inquiry-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = el("inq-name").value.trim();
            const contact = el("inq-contact").value.trim();
            const details = el("inq-details").value.trim();
            const subject = encodeURIComponent(`Polgári búcsúztatás érdeklődés – ${name}`);
            const body = encodeURIComponent(`Név: ${name}\nElérhetőség: ${contact}\nÜzenet:\n${details}`);
            const status = el("form-status");
            status.innerHTML = `Köszönöm, ${name}! Ha nem nyílt meg az e-mail kliense, telefonon is azonnal elér a <strong>${SITE_DATA.brand.phone}</strong> számon vagy az <a href="mailto:${SITE_DATA.brand.email}?subject=${subject}&body=${body}" style="text-decoration:underline;">${SITE_DATA.brand.email}</a> címen.`;
            status.classList.add("visible");
            window.location.href = `mailto:${SITE_DATA.brand.email}?subject=${subject}&body=${body}`;
        });
    }

    function renderFooter() {
        const b = SITE_DATA.brand;
        const fbHref = b.facebook || "#contact-mount";
        const fbAttrs = b.facebook ? 'target="_blank" rel="noopener noreferrer"' : 'title="Facebook oldal"';
        el("footer-mount").innerHTML = `
            <div class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                                <img src="${b.logo}" alt="${b.name}" style="height:54px;width:auto;" />
                                <div>
                                    <div style="font-family:var(--font-serif);font-size:1.25rem;" class="gold-text">${b.name}</div>
                                    <div style="font-size:0.78rem;color:var(--gold-champagne);letter-spacing:0.1em;text-transform:uppercase;">${b.subtitle}</div>
                                </div>
                            </div>
                            <p style="margin:0 0 14px 0;font-size:0.88rem;">„Minden élet egyedi történet, minden búcsú különleges pillanat.”</p>
                            <a href="${fbHref}" ${fbAttrs} class="btn btn-footer-fb" aria-label="Facebook oldal">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                                <span>Facebook</span>
                            </a>
                        </div>
                        <div>
                            <h4 style="color:var(--gold-champagne);margin:0 0 12px 0;font-size:0.95rem;">Menü</h4>
                            <ul class="footer-links">
                                ${SITE_DATA.nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
                            </ul>
                        </div>
                        <div>
                            <h4 style="color:var(--gold-champagne);margin:0 0 12px 0;font-size:0.95rem;">Elérhetőség & Dokumentumok</h4>
                            <ul class="footer-links">
                                <li><a href="${b.phoneHref}">Telefon / Viber: ${b.phone}</a></li>
                                <li><a href="mailto:${b.email}">${b.email}</a></li>
                                <li><button class="footer-link-btn" data-legal="aszf">ÁSZF</button></li>
                                <li><button class="footer-link-btn" data-legal="impresszum">Impresszum</button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <span>© ${new Date().getFullYear()} Debreczeni Anita – Minden jog fenntartva.</span>
                        <span>Design & Fejlesztés: Borbás Webdesign</span>
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll("[data-legal]").forEach((btn) => {
            btn.addEventListener("click", () => openLegalModal(btn.dataset.legal));
        });
    }

    function renderFloatingCta() {
        el("floating-cta-mount").innerHTML = `
            <a href="${SITE_DATA.brand.phoneHref}" class="floating-call" aria-label="Hívás most">
                ☎ Hívás most
            </a>
        `;
    }

    function openModal(html) {
        const mount = el("modal-mount");
        mount.innerHTML = `
            <div class="modal-backdrop" id="active-modal-backdrop">
                <div class="modal-box" role="dialog" aria-modal="true">
                    <button class="modal-close" id="modal-close-btn" aria-label="Bezárás">&times;</button>
                    ${html}
                </div>
            </div>
        `;
        el("modal-close-btn").addEventListener("click", closeModal);
        el("active-modal-backdrop").addEventListener("click", (e) => {
            if (e.target.id === "active-modal-backdrop") closeModal();
        });
    }

    function closeModal() {
        el("modal-mount").innerHTML = "";
    }

    function openServiceModal(serviceId) {
        const s = SITE_DATA.services.find((item) => item.id === serviceId);
        if (!s) return;
        openModal(`
            <span class="eyebrow">Szolgáltatás</span>
            <h2>${s.title}</h2>
            ${s.modalContent.map((p) => `<p>${p}</p>`).join("")}
            ${
                s.gallery.length
                    ? `<div class="modal-gallery">${s.gallery.map((g) => `<img src="${g}" alt="${s.title}" />`).join("")}</div>`
                    : ""
            }
            <div style="margin-top:24px;display:flex;flex-wrap:wrap;gap:12px;">
                <a href="${SITE_DATA.brand.phoneHref}" class="btn btn-brown">☎ Hívás: ${SITE_DATA.brand.phone}</a>
                <a href="#contact-mount" class="btn btn-gold" id="modal-to-contact">Kapcsolatfelvétel →</a>
            </div>
        `);
        const toContact = el("modal-to-contact");
        if (toContact) toContact.addEventListener("click", closeModal);
    }

    function openBlogModal(blogId) {
        const b = SITE_DATA.blogs.find((item) => item.id === blogId);
        if (!b) return;
        openModal(`
            <span class="eyebrow">${b.date}</span>
            <h2>${b.title}</h2>
            <img src="${b.cover}" alt="${b.title}" style="width:100%;max-height:320px;object-fit:cover;border-radius:16px;margin:12px 0 20px;" />
            ${b.sections.map((sec) => `<h3>${sec.heading}</h3><p>${sec.body}</p>`).join("")}
            ${
                b.gallery.length
                    ? `<div class="modal-gallery">${b.gallery.map((g) => `<img src="${g}" alt="${b.title}" />`).join("")}</div>`
                    : ""
            }
        `);
    }

    function openLegalModal(type) {
        const title = type === "aszf" ? "Általános Szerződési Feltételek" : "Impresszum";
        const lines = SITE_DATA.legal[type] || [];
        openModal(`
            <h2>${title}</h2>
            ${lines.map((l) => `<p>${l}</p>`).join("")}
        `);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    renderNavbar();
    renderHero();
    renderAbout();
    renderServices();
    renderAngelic();
    renderBlog();
    renderContact();
    renderFooter();
    renderFloatingCta();
})();
