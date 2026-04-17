function hesaplaNot() {
    const ad = document.getElementById('adSoyad').value;
    const vize = parseFloat(document.getElementById('vize').value);
    const final = parseFloat(document.getElementById('final').value);

    if (!ad || isNaN(vize) || isNaN(final)) return;

    const ortalama = (vize * 0.4) + (final * 0.6);
    let harf = "";

    if (ortalama >= 89) harf = "AA";
    else if (ortalama >= 81) harf = "BA";
    else if (ortalama >= 75) harf = "BB";
    else if (ortalama >= 65) harf = "CB";
    else if (ortalama >= 55) harf = "CC";
    else if (ortalama >= 45) harf = "DC";
    else if (ortalama >= 40) harf = "DD";
    else if (ortalama >= 30) harf = "FD";
    else harf = "FF";

    document.getElementById('displayAd').innerText = ad;
    document.getElementById('displayOrt').innerText = "Ortalama: " + ortalama.toFixed(2);
    document.getElementById('displayHarf').innerText = "Harf Notu: " + harf;
    document.getElementById('displayDurum').innerText = "Durum: " + (ortalama >= 50 ? "Geçti" : "Kaldı");
    
    document.getElementById('sonucNot').style.display = 'flex';
}

function hesaplaBirim() {
    const deger = parseFloat(document.getElementById('birimDeger').value);
    const tip = document.getElementById('donusumTipi').value;
    let sonuc = 0;

    if (isNaN(deger)) return;

    if (tip === "c-f") {
        sonuc = (deger * 9/5) + 32 + "°F";
    } else if (tip === "m-km") {
        sonuc = deger / 1000 + "km";
    } else if (tip === "kg-g") {
        sonuc = deger * 1000 + "g";
    }

    const resBox = document.getElementById('sonucBirim');
    document.getElementById('displayBirim').innerText = sonuc.toLocaleString('tr-TR');
    resBox.style.display = 'block';
}