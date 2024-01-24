

function quanLyDiem(){
    let diemChuan = Number(document.getElementById("inputDiemChuan").value);
    let diemMon1 = Number(document.getElementById("inputDiem1").value);
    let diemMon2 = Number(document.getElementById("inputDiem2").value);
    let diemMon3 = Number(document.getElementById("inputDiem3").value);
    let khuVuc = Number(document.getElementById("area").value);
    let doiTuong = Number(document.getElementById("object").value);
    let diemTong = 0;
    let ketQua = "";

    if(diemMon1 == 0 | diemMon2 == 0 | diemMon3 == 0){
        console.log("Rớt")
    }else {
        diemTong = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong
    }
    
    console.log(diemTong)

    if(diemTong >= diemChuan){
        ketQua = "Đậu"
    }else {
        ketQua = "Rớt"
    }
    document.getElementById("txtKetQua").innerHTML= ketQua;
}
document.getElementById("btnKetQua").onclick = quanLyDiem;