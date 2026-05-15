document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeToggle");
    const regForm = document.getElementById("registrationForm");
    const resetBtn = document.getElementById("resetBtn");
    const summaryContent = document.getElementById("summaryContent");
    const applicationsList = document.getElementById("applicationsList");

    function applyTheme(isDark) {
        document.body.classList.toggle("dark-mode", isDark);
        themeBtn.textContent = isDark ? "Acik Temaya Gec" : "Koyu Temaya Gec";
        themeBtn.classList.toggle("btn-outline-light", isDark);
        themeBtn.classList.toggle("btn-outline-secondary", !isDark);
    }

    applyTheme(localStorage.getItem("theme") === "dark");

    themeBtn.addEventListener("click", function () {
        const isDark = !document.body.classList.contains("dark-mode");
        applyTheme(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    regForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const dept = document.getElementById("dept").value.trim();
        const grade = document.getElementById("grade").value;
        const sessionType = document.getElementById("sessionType").value;
        const joinType = document.getElementById("joinType").value;
        const msg = document.getElementById("msg").value.trim();
        const confirm = document.getElementById("confirm").checked;

        if (!name || !email || !dept || !confirm) {
            alert("Lutfen zorunlu alanlari doldurup onay kutusunu isaretleyin.");
            return;
        }

        summaryContent.classList.remove("alert-info");
        summaryContent.classList.add("alert-light", "border", "border-primary", "shadow-sm");
        summaryContent.innerHTML = `
            <div class="text-start mx-auto" style="max-width: 700px;">
                <h4 class="text-primary fw-bold mb-3 border-bottom pb-2">Basvuru Ozeti</h4>
                <div class="row small g-2">
                    <div class="col-md-6"><strong>Ad Soyad:</strong> ${name}</div>
                    <div class="col-md-6"><strong>E-posta:</strong> ${email}</div>
                    <div class="col-md-6"><strong>Bolum / Sinif:</strong> ${dept} - ${grade}. Sinif</div>
                    <div class="col-md-6"><strong>Oturum:</strong> ${sessionType}</div>
                    <div class="col-md-6"><strong>Katilim Turu:</strong> ${joinType}</div>
                    <div class="col-12 mt-2"><strong>Mesaj:</strong> ${msg || "Mesaj belirtilmedi."}</div>
                </div>
                <div class="mt-3 p-2 bg-primary bg-opacity-10 text-primary rounded text-center fw-semibold">
                    Basvurunuz basariyla kaydedilmistir.
                </div>
            </div>
        `;

        if (applicationsList.textContent.includes("Henuz kayitli basvuru yok.")) {
            applicationsList.innerHTML = "";
        }

        const item = document.createElement("div");
        item.className = "list-group-item";
        item.innerHTML = `
            <div class="d-flex justify-content-between align-items-start gap-2">
                <div>
                    <div class="fw-semibold">${name}</div>
                    <div class="small text-muted">${email}</div>
                    <div class="small">${dept} - ${grade}. Sinif</div>
                    <div class="small">${sessionType} / ${joinType}</div>
                    <div class="small mt-1">${msg || "Mesaj belirtilmedi."}</div>
                </div>
                <span class="badge bg-primary">Yeni</span>
            </div>
        `;
        applicationsList.prepend(item);

        summaryContent.scrollIntoView({ behavior: "smooth" });
    });

    resetBtn.addEventListener("click", function () {
        summaryContent.classList.remove("alert-light", "border", "border-primary", "shadow-sm");
        summaryContent.classList.add("alert-info");
        summaryContent.textContent = "Henuz basvuru ozeti olusturulmadi. Formu doldurduktan sonra sonuc burada gorunecek.";
    });
});
