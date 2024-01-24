
let thue_Den_60 = 0.05;
let thue_60_120 = 0.1;
let thue_120_210 = 0.15;
let thue_210_384 = 0.2;
let thue_384_624 = 0.25;
let thue_624_960 = 0.3;
let thue_Tren_960 = 0.35;

function tinhThue(){
    let hoVaTen = document.getElementById("inputHoVaTen").value;
    let thuNhapNam = document.getElementById("inputTongThuNhap").value;
    let nguoiPhuThuoc = document.getElementById("inputNguoiPhuThuoc").value;

    let thuNhapChiuThue = 0;
    let thueThuNhap = 0;

    thuNhapChiuThue = thuNhapNam - 4e+6 - nguoiPhuThuoc*1600000
    console.log(thuNhapChiuThue)

    if(thuNhapChiuThue <= 60e+6){
        thueThuNhap = thuNhapChiuThue * thue_Den_60

    }else if(thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6){
        thueThuNhap = 60e+6 * thue_Den_60 + (thuNhapChiuThue - 60e+6)*thue_60_120

    }else if(thuNhapChiuThue > 120e+6 && thuNhapChiuThue >= 210e+6){
        thueThuNhap = 60e+6 * thue_Den_60 + 60e+6 * thue_60_120 + (thuNhapChiuThue - 120e+6)* thue_120_210

    }else if(thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6){
        thueThuNhap = 60e+6 * thue_Den_60 + 60e+6* thue_60_120 + 90e+6 * thue_120_210 + (thuNhapChiuThue - 210e+6) * thue_210_384

    }else if(thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6){
        thueThuNhap = 60e+6 * thue_Den_60 + 60e+6* thue_60_120 + 90e+6* thue_120_210 + 174e+6 * thue_210_384 + (thuNhapChiuThue - 384e+6)*thue_384_624
        
    }else if(thuNhapChiuThue >624e+6 && thuNhapChiuThue <= 960e+6){
        thuNhapChiuThue = 60e+6 * thue_Den_60 + 60e+6* thue_60_120 + 90e+6 * thue_120_210 + 174e+6 * thue_210_384 + 240e+6* thue_384_624 +(thuNhapChiuThue - 624e+6)* thue_624_960

    }else{
        thueThuNhap = 60e+6 * thue_Den_60 + 60e+6* thue_60_120 + 90e+6 * thue_120_210 + 174e+6 * thue_210_384 + 240e+6* thue_384_624 + 336e+6 * thue_624_960 + (thuNhapChiuThue - 960e+6)*thue_Tren_960

    }
    document.getElementById("txtTinhThue").innerHTML = `Họ tên: ${hoVaTen}; Tiền Thuế Thu nhập cá nhân: ${thueThuNhap.toLocaleString()} VND`;
}
document.getElementById("btnTinhThue").onclick = tinhThue