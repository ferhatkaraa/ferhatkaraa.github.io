document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Tema Değiştirme
    const themeBtn = document.getElementById("themeToggle");
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Açık Temaya Geç";
            themeBtn.classList.replace("btn-outline-secondary", "btn-outline-light");
        } else {
            themeBtn.textContent = "Koyu Temaya Geç";
            themeBtn.classList.replace("btn-outline-light", "btn-outline-secondary");
        }
    });

    // 2. Form ve Özet İşleme
    const regForm = document.getElementById("registrationForm");
    const summaryContent = document.getElementById("summaryContent");

    regForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Sayfa yenilenmesini engeller (ZORUNLU)

        // Verileri Yakala
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const dept = document.getElementById("dept").value;
        const grade = document.getElementById("grade").value;
        const session = document.getElementById("session").value;
        const type = document.getElementById("type").value;
        const msg = document.getElementById("msg").value;

        // Eksik Alan Kontrolü (ZORUNLU)
        if (!name || !email || !dept) {
            alert("Lütfen tüm zorunlu alanları doldurunuz!");
            return;
        }

        // Özeti Bas (ZORUNLU)
        summaryContent.classList.replace("alert-info", "alert-light");
        summaryContent.classList.add("border", "border-primary", "shadow-sm");
        
        summaryContent.innerHTML = `
            <div class="text-start mx-auto" style="max-width: 600px;">
                <h4 class="text-primary fw-bold mb-3 border-bottom pb-2">Başvuru Özeti</h4>
                <div class="row small g-2">
                    <div class="col-sm-6"><strong>Ad Soyad:</strong> ${name}</div>
                    <div class="col-sm-6"><strong>E-posta:</strong> ${email}</div>
                    <div class="col-sm-6"><strong>Bölüm / Sınıf:</strong> ${dept} - ${grade}</div>
                    <div class="col-sm-6"><strong>Oturum:</strong> ${session}</div>
                    <div class="col-sm-6"><strong>Katılım:</strong> ${type}</div>
                    <div class="col-12 mt-2 border-top pt-2"><strong>Mesaj:</strong> ${msg || 'Mesaj yok.'}</div>
                </div>
                <div class="mt-3 p-2 bg-primary bg-opacity-10 text-primary rounded text-center fw-semibold small">
                    ✓ Başvurunuz başarıyla kaydedilmiştir.
                </div>
            </div>
        `;

        summaryContent.scrollIntoView({ behavior: 'smooth' });
    });

    // Formu Temizle Butonu Etkileşimi
    document.getElementById("resetBtn").addEventListener("click", function() {
        summaryContent.classList.remove("alert-light", "border", "border-primary", "shadow-sm");
        summaryContent.classList.add("alert-info");
        summaryContent.innerHTML = "Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.";
    });
});