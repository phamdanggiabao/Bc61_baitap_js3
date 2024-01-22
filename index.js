// _____________________________________________________________________________________________________________
var arrSon = [];
function themSoVaoMang(){
    var soN = document.getElementById('txt-soN').value*1;
    arrSon.push(soN);
    document.querySelector('.render_arr').innerHTML = arrSon;
}
document.getElementById('btn').onclick = themSoVaoMang;

//CÂU 1-----------------------
function tinhTongSoDuong(){
    var tong=0;
    for(var i=0; i<arrSon.length; i++){
        if(arrSon[i]>0){
            tong += arrSon[i];
        }
    }
    document.getElementById('ketQua1').innerHTML = `Tổng số dương là: ${tong}`;
}
document.getElementById('btn1').onclick = tinhTongSoDuong;

//CÂU 2-------------------------
function soDuongTrongMang(){
    var tongSoDuong = 0;
    for (var i=0; i<arrSon.length; i++){
      if(arrSon[i]>0){
        tongSoDuong++;
      }
    }
    document.getElementById('ketQua2').innerHTML= `Có "${tongSoDuong}" số dương trong mảng`
}
document.getElementById('btn2').onclick = soDuongTrongMang;

//CÂU 3---------------------------
function soNhoNhat(){
    var min = arrSon[0];
    for(var i=0; i<arrSon.length; i++){
        if(arrSon[i] < min){
            min = arrSon[i];
        }
    }
    document.getElementById('ketQua3').innerHTML = `Số "${min}" là số nhỏ nhất`;
}
document.getElementById('btn3').onclick = soNhoNhat;

//CÂU 4------------------------
function soDuongNhoNhat(){
    var min = arrSon[0];
    for(var i=0; i<arrSon.length; i++){
        if(arrSon[i] > 0 && arrSon[i] < min){
            min = arrSon[i];
        } 
    }

    document.getElementById('ketQua4').innerHTML =`Số dương nhỏ nhất trong mảng là: ${min}`;
}
document.getElementById('btn4').onclick = soDuongNhoNhat;

//CAU 5--------------------------
function soChanCuoiCung(){
   var soChan = -1;
    for(var i=arrSon.length-1; i>=0; i--){
        if(arrSon[i] % 2 == 0){
            soChan = arrSon[i];
            break;
        }
    }
    document.getElementById('ketQua5').innerHTML = `Số chẵn cuối cùng của mảng: ${soChan}`;
}
document.getElementById('btn5').onclick = soChanCuoiCung;

//CAU 7---------------------------
function sapXepTangDan(){
    arrSon.sort(function(a, b){
        return a - b;
    })
    var tangDan = '';
    for (var i=0; i<arrSon.length; i++){
     tangDan += arrSon[i] + ' ';
    }
    document.getElementById('ketQua7').innerHTML = `Thứ tự tăng dần: ${tangDan}`;
}
document.getElementById('btn7').onclick = sapXepTangDan;

//CAU 8 
function soNguyenToDauTien(number){
     //Nếu nhỏ hơn 2, ko phải là số nguyên tố
     if (number < 2){
        return false;
     }
     //lặp qua các số từ 2 đến căn bậc 2 của number
     for (var n = 2; n <= Math.sqrt(number); n++){
 // nếu number chia hết cho số nào đó, ko phải là số nguyên tố
      if (number % n == 0){;
      return false;
     }
    }
    // ko chia hết số nào, là số nguyên tố
    return true;
      
}
function timSoNguyenTo(){
    for (var i=0; i<arrSon.length; i++){
        if (soNguyenToDauTien(arrSon[i])){
             document.getElementById('ketQua8').innerHTML = 'Số nguyên tố đầu tiên trong mảng: ' + arrSon[i];
             return;
        }
    }
    document.getElementById('ketQua8').innerHTML ="Không có số nguyên tố trong mảng";
}
document.getElementById('btn8').onclick = timSoNguyenTo;

//CAU 10----------------------
function soSanhSo(){
    soDuong = 0;
    soAm = 0;
    for (var i=0; i<arrSon.length; i++){
        if (arrSon[i] > 0 ){
            soDuong++;
        }else if(arrSon[i] < 0){
            soAm++;
        }
    }
    var ketQua ='';
    if (soDuong > soAm){
      ketQua = 'Số dương nhiều hơn số âm';
    }else if(soAm > soDuong){
        ketQua= 'Số âm nhiều hơn số dương';
    }else {
        ketQua = 'Số dương và số âm bằng nhau';
    }
    document.getElementById('ketQua10').innerHTML = ketQua;
}
document.getElementById('btn10').onclick = soSanhSo;