document.addEventListener('DOMContentLoaded', function () {
    var SueldoLiquido = /** @class */ (function () {
        function SueldoLiquido() {
            this.sueldo = 0;
            this.bonificacion = 250;
            this.comisiones = 0;
            this.ahorro = 0;
            this.igss = 0;
            this.prestamos = 0;
            this.tIngresos = 0;
            this.tEgresos = 0;
            this.totalFinal = 0;
        }
        SueldoLiquido.prototype.obtenerSueldo = function (sueldo) {
            this.sueldo = sueldo;
        };
        SueldoLiquido.prototype.obtenerComisiones = function (comisiones) {
            this.comisiones = comisiones;
        };
        SueldoLiquido.prototype.obtenerAhorros = function (ahorro) {
            this.ahorro = ahorro;
        };
        SueldoLiquido.prototype.obtenerPrestamo = function (prestamos) {
            this.prestamos = prestamos;
        };
        SueldoLiquido.prototype.calcularIgss = function () {
            this.igss = this.sueldo * 0.0483;
        };
        SueldoLiquido.prototype.calcularTotalEgresos = function () {
            this.tEgresos = this.igss + this.prestamos + this.ahorro;
        };
        SueldoLiquido.prototype.calcularTotalIngresos = function () {
            this.tIngresos = this.comisiones + this.bonificacion + this.sueldo;
        };
        SueldoLiquido.prototype.calcularPorPagar = function () {
            this.totalFinal = this.tIngresos - this.tEgresos;
            return this.totalFinal;
        };
        SueldoLiquido.prototype.obtenerTotalEgresos = function () {
            return this.tEgresos;
        };
        SueldoLiquido.prototype.obtenerTotalIngresos = function () {
            return this.tIngresos;
        };
        SueldoLiquido.prototype.obtenerIgss = function () {
            return this.igss;
        };
        return SueldoLiquido;
    }());
    // Crear objeto de la clase SueldoLiquido
    var sueldoL = new SueldoLiquido();
    function calcularSueldito(event) {
        event.preventDefault();
        // Obtener valores de los inputs
        var sueldoInput = document.getElementById('sueldo');
        var comisionInput = document.getElementById('comisiones');
        var ahorroInput = document.getElementById('ahorro');
        var prestamosInput = document.getElementById('otrosDescuentos');
        var resultado1Input = document.getElementById("totalEgresos");
        var resultado2Input = document.getElementById("totalIngresos");
        var igssInput = document.getElementById("igss");
        var resultadoFinalInput = document.getElementById("totalPagar");
        if (sueldoInput && comisionInput && ahorroInput && prestamosInput && igssInput && resultado1Input && resultado2Input && resultadoFinalInput) {
            var sueldoValue = parseFloat(sueldoInput.value);
            var comisionValue = parseFloat(comisionInput.value);
            var ahorroValue = parseFloat(ahorroInput.value);
            var prestamosValue = parseFloat(prestamosInput.value);
            sueldoL.obtenerSueldo(sueldoValue);
            sueldoL.obtenerComisiones(comisionValue);
            sueldoL.obtenerAhorros(ahorroValue);
            sueldoL.obtenerPrestamo(prestamosValue);
            sueldoL.calcularIgss();
            igssInput.value = sueldoL.obtenerIgss().toFixed(2);
            sueldoL.calcularTotalEgresos();
            sueldoL.calcularTotalIngresos();
            resultado1Input.value = sueldoL.obtenerTotalEgresos().toFixed(2);
            resultado2Input.value = sueldoL.obtenerTotalIngresos().toFixed(2);
            resultadoFinalInput.value = sueldoL.calcularPorPagar().toFixed(2);
        }
    }
    var btnEnviarDatos = document.getElementById('btnEnviar');
    btnEnviarDatos.addEventListener('click', calcularSueldito);
});
