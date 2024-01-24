


let tien_50_Dau = 500;
let tien_51_100 = 650;
let tien_101_200 = 850;
let tien_201_350 = 1100;
let tien_quaTai = 1300;

let tienDien = 0 ;

function tinhTienDien(){
    let hoTen = document.getElementById("inputTenHo").value;
    let soKW = document.getElementById("inputKW").value; 
    
    if(soKW <= 50){
        tienDien = soKW * tien_50_Dau

    } else if (soKW > 50 && soKW <= 100){
        tienDien = 50 * tien_50_Dau + (soKW - 50)* tien_51_100

    } else if( soKW >100 && soKW <=200){
        tienDien = 50 * tien_50_Dau + 50 * tien_51_100 + (soKW - 100)* tien_101_200

    } else if ( soKW > 200&& soKW <= 350){
        tienDien = 50 * tien_50_Dau + 50 * tien_51_100 + 100 * tien_101_200 + (soKW - 200)* tien_201_350  

    } else{
        tienDien = 50 * tien_50_Dau + 50 * tien_51_100 + 100 * tien_101_200 + 150* tien_201_350 + (soKW - 350)*tien_quaTai

    }
    console.log(hoTen , tienDien)

    document.getElementById("txtTinhTienDien").innerHTML = ` họ tên: ${hoTen} ; Tiền điện: ${tienDien.toLocaleString()}`

}
document.getElementById("btnTinhTienDien").onclick = tinhTienDien;