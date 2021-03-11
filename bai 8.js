function Start() {
    let lowrange = prompt("Nhập vào a (a<x<b)");
    let highrange = prompt("Nhập vào b (a<x<b)");
    let random = Random(lowrange, highrange);

    count = 0;
    while (count<3) {
        let x = prompt("Nhập vào số bạn đoán");
        if (x == random) {
            alert("Bạn đã đoán đúng");
            count = 4;
        }
        else {
            if (x > random) {
                alert("Số bạn đoán cao hơn kết quả");
            }
            else alert("Số bạn đoán thấp hơn kết quả");
            count = count + 1;
        }

    }
}

function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}