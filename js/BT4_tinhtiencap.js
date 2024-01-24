



document.getElementById("soKetNoi").style.display = "none";
document.getElementById("areaKH").onchange = function(){
    if(this.value == 2){
        document.getElementById("soKetNoi").style.display = "block";
    }
    else {
        document.getElementById("soKetNoi").style.display = "none";
    }
}



function tinhTienCap(){
    let nhaDan = document.getElementById("nhaDan");
    let doanhNghiep = document.getElementById("doanhNghiep"); 
    let maKhachHang = document.getElementById("inputMaKH").value;
    let soKenh = document.getElementById("inputKenhCaoCap").value;

    let phiHD_ND = 4.5;
    let phiDV_ND = 20.5;
    let thueKenh_ND = 7.5;
    let phiHD_DN = 15;
    let phiDV_10_Dau_DN = 75;
    let phiDV_Tren_10_DN = 5;
    let thueKenh_DN = 50;

    let tienCap = 0;

   
   if (nhaDan.selected){
    
    console.log("nhaDan")
    tienCap = phiHD_ND + phiDV_ND + thueKenh_ND * soKenh

   }else if(doanhNghiep.selected){
   

    if(soKenh <= 10){
        tienCap = phiHD_DN + thueKenh_DN + phiDV_10_Dau_DN 
    }else{
        tienCap = phiHD_DN + thueKenh_DN + phiDV_10_Dau_DN  + (soKenh - 10)*phiDV_Tren_10_DN
    }

   }else{
    alert("Chọn loại khách hàng")

   }
   console.log(tienCap)

   document.getElementById("txtTinhTienCap").innerHTML= `Mã khách hàng: ${maKhachHang} <br> Tiền cáp: $${tienCap.toLocaleString()}`;
}
document.getElementById("btnTinhTienCap").onclick = tinhTienCap

