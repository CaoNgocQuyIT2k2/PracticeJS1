//Bài tập 1
var soNgayLamTag = document.getElementById("soNgayLam");

var xuatLuong = document.getElementById("xuatLuong");
function XuatKQ1(){
    var soNgayLamValue =parseFloat(soNgayLamTag.value) ;
    var kq = soNgayLamValue * 100000;
    var formattedKq = kq.toLocaleString('vi-VN');
    xuatLuong.innerHTML=`<b>${formattedKq} VNĐ </b>`; 
    xuatLuong.style.color="red";  
}


//Bài tập 2
var soThuc1Tag = document.getElementById("nhapSoThuc1");
var soThuc2Tag = document.getElementById("nhapSoThuc2");
var soThuc3Tag = document.getElementById("nhapSoThuc3");
var soThuc4Tag = document.getElementById("nhapSoThuc4");
var soThuc5Tag = document.getElementById("nhapSoThuc5");

var xuatGiaTriTrungBinh = document.getElementById("xuatGiaTriTrungBinh");
function XuatKQ2(){
    var soThuc1Value = parseFloat(soThuc1Tag.value);
    var soThuc2Value = parseFloat(soThuc2Tag.value);
    var soThuc3Value = parseFloat(soThuc3Tag.value);
    var soThuc4Value = parseFloat(soThuc4Tag.value);
    var soThuc5Value = parseFloat(soThuc5Tag.value);
    var kq = (soThuc1Value+soThuc2Value+soThuc3Value+soThuc4Value+soThuc5Value)/5
    xuatGiaTriTrungBinh.innerHTML=`<b>${kq}</b>`; 
    xuatGiaTriTrungBinh.style.color="red";  
}

//Bài tập 3
var quyDoiTienTag = document.getElementById("quyDoiTien");

var quyDoiSangTienViet = document.getElementById("quyDoiSangTienViet");
function XuatKQ3(){
    var quyDoiTienValue = quyDoiTienTag.value;
    var kq = quyDoiTienValue*23500;
    var formattedKq = kq.toLocaleString('vi-VN');
    quyDoiSangTienViet.innerHTML=`<b>${formattedKq} VNĐ </b>`; 
    quyDoiSangTienViet.style.color="red";  
}


//Bài tập 4
var chieuDaiTag = document.getElementById("chieuDai");
var chieuRongTag = document.getElementById("chieuRong");

var dienTich = document.getElementById("dienTich");
var chuVi = document.getElementById("chuVi");
function XuatKQ4(){
    var chieuDaiValue = parseFloat(chieuDaiTag.value);
    var chieuRongValue = parseFloat(chieuRongTag.value);
    var dientich = chieuDaiValue*chieuRongValue;
    var chuvi = (chieuDaiValue+chieuRongValue)*2;
    dienTich.innerHTML=`<b>${dientich}  </b>`; 
    chuVi.innerHTML=`<b>${chuvi}  </b>`; 
    dienTich.style.color="red";  
    chuVi.style.color="red";  
}


//Bài tập 5
var nhapSo2ChuSoTag = document.getElementById("nhapSo2ChuSo");
var xuatTong2ChuSo = document.getElementById("xuatTong2ChuSo");
function XuatKQ5(){
    var soNhap = nhapSo2ChuSoTag.value;
    var hangDonVi = soNhap%10;
    var hangChuc = Math.floor(soNhap/10);
    var kq = hangDonVi + hangChuc;
    xuatTong2ChuSo.innerHTML=`<b>${kq}</b>`; 
    xuatTong2ChuSo.style.color="red";  
}
