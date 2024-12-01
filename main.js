/*alert("Harici JS Dosyası");*/
console.log("Deneme");
console.log("Merhaba Dünya");
/*document.write("Deneme Yazısı");*/
//document.getElementById("tr").innerText = "JavaScript Dersi";
//document.getElementById("usa").innerHTML = "<b>HTML Dersine Hoşgeldiniz!</b>";

//var a = 5;
//console.log(a);

//a++;
//console.log(a);
function Hesapla()
{
    /*alert("Butona Tıklandı");*/
    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);
    console.log(sayi1);
    console.log(sayi2);
    var sonuc = sayi1 + sayi2;
    document.getElementById("sonuc").value = sonuc;
    console.log(sonuc);
}

function Karsilastir() {
    var sayi = parseInt(document.getElementById("sayi3").value)
    //if (sayi < 50) {
    //    alert("Kaldınız!");
    //}
    //else {
    //    alert("Geçtiniz!");
    if (sayi < 50) {
        document.getElementById("d1").innerText = "Kaldınız";
        document.getElementById("d1").style.backgroundColor = "red";
        document.getElementById("d1").style.color = "white";
    }
    else {
        document.getElementById("d1").innerText = "Geçtiniz";
        document.getElementById("d1").style.backgroundColor = "darkblue";
        document.getElementById("d1").style.color = "white";
    
    }
    /*document.getElementById("d1").innerText = Topla(5, 7);*/
}
function Topla(sayi1, sayi2) {
    return sayi1+sayi2
}

document.getElementsByClassName("c1")[0].innerText = "Ali";
document.getElementsByClassName("c1")[1].innerText = "Akif";
document.getElementsByTagName("p")[0].innerText = "Paragraf - 1"
document.getElementsByTagName("p")[0].style.fontSize = "25px";

function Gonder(sayiKontrol)
{
    var x = " ";
    if (document.getElementById("fullname").value == "")
    {
        x += "Ad Soyad Bilgisi Boş Bırakılamaz\n";
    }
    if (document.getElementById("phone").value == "")
    {
        x += "Telefon Bilgisi Boş Bırakılamaz\n";
    }
    if (document.getElementById("message").value == "")
    {
        x += "Mesaj Bilgisi Boş Bırakılamaz";
    }
    if (x == "")
    {
        document.getElementById("result").innerText = "Mesajınız Başarıyla Gönderildi";
    }
    else {
        alert(x);
    }
}
function sayiKontrol(event) {
    if (event.keyCode != 8 && event.keyCode != 0 && (event.keyCode < 48 || event.keyCode > 57))
        return false;
    var frm = document.getElementById("sayisal_form");
    frm.setAttribute("onsubmit", true);
    return true;
}

/*Hesap Makinesi Örneği*/
function HesapMakinesi()
{
    var s = parseFloat(document.getElementById("sayi4").value)
    var s1 = parseFloat(document.getElementById("s5").value)
    var result = document.getElementById("islem").value
    var sonuc = 0;
    if (result == "+") {
          sonuc = s + s1;
    }
    if (result == "-") {
         sonuc = s - s1;
    }
    if (result == "*") {
         sonuc = s * s1;
    }
    if (result == "/") {
         sonuc = s / s1;
    }
    else
    {
        alert("Lütfen bir işlem türü seçiniz!");
    }
    document.getElementById("cevap").innerText = sonuc;   
}