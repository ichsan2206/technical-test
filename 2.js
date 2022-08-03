const discount = ['DumbwayasJoy', 'DumbwaysMantap']

function vouchers(voucher, price) {

    if (voucher == discount[0]) {
        if (price >= 50000) {
            var diskon =  0.21 * price
            if(diskon > 20000){
                diskon = 20000
                var bayar = price - diskon
                var kembalian = price - bayar
            } else {
                var bayar = price - diskon
                var kembalian = price - bayar
            }   
        } else{
            console.log('tidak dapat diskon');
        }
    } else if (voucher == discount[1]){
        if (price >= 80000) {
            var diskon =  0.30 * price
            if(diskon > 40000){
                diskon = 40000
                var bayar = price - diskon
                var kembalian = price - bayar
            } else {
                var bayar = price - diskon
                var kembalian = price - bayar
            }
        } else{
            console.log('tidak dapat diskon');
        }

    }

    console.log(`Uang yang harus dibayar : ${bayar}`);
    console.log(`Diskon : ${diskon}`);
    console.log(`Kembalian : ${kembalian}`);
}

vouchers('DumbwaysMantap', 90000)