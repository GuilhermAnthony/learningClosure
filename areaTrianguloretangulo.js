const areaTrianguloretangulo = (function () {

    let altura;
    let base;
    let area;

    function calcularArea() {
        area = base * altura / 2;
    }

    return {
        baseTri(bas) {
	base = bas;
        calcularArea();
        },

        alturaTri(alt) {
	altura = alt;
        calcularArea();
        },

        calcularArea() {
        console.log(`Area do tringulo retângulo: ${area}`);
        }
    }
})();

areaTrianguloretangulo.baseTri(5);
areaTrianguloretangulo.alturaTri(10);

areaTrianguloretangulo.calcularArea();
