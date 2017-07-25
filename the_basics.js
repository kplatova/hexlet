Math.random();
Math.pow(7, 3); // 343
Math.abs(-2); // 2
Math.sqrt(9); // 3

// Задача
// Реализуйте функцию которая считает площадь треугольника на основе известной стороны и прилегающих к ней углов. Углы задаются в градусах. Экспортируйте ее по умолчанию.
// Формула: eсли известна одна сторона треугольника и два прилежащих к ней угла, то площадь данного треугольника вычисляется, как половина квадрата данной стороны умноженная на дробь, в числителе которой, произведение синусов прилежащих углов, а в знаменателе синус противолежащего угла.
// Противолежащий угол вычисляется по формуле: 180 - сумма двух известных углов.
// solution(3, 60, 60); // 3.89711431703

function deg2rad (degr) { 
    return degr * Math.PI/180;
}

const solution = (side, angle1, angle2) => {
    var angle3 = 180 - angle1 - angle2;
    var numerator = Math.sin(deg2rad(angle1)) * Math.sin(deg2rad(angle2));
    var denomenator = Math.sin(deg2rad(angle3));
    return Math.pow(side, 2)/2 * numerator/denomenator;
};

export default solution;
// END

export default num => num >= 1001 && num % 2 !== 0;

