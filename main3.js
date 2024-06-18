document.addEventListener('DOMContentLoaded', function () {
    var ObtencionDeLaIndemnizacion = /** @class */ (function () {
        function ObtencionDeLaIndemnizacion() {
            this.sueldo = 0;
            this.anTrabajados = 0;
            this.mesesTrabajados = 0;
            this.bonoCatorce = 0;
            this.aguinaldoProporcional = 0;
            this.salarioPendiente = 0;
            this.otrosPendientes = 0;
            this.indemnizacionFinal = 0;
            this.calculoAguinaldo = 0;
            this.calculoBono = 0;
        }
        ObtencionDeLaIndemnizacion.prototype.obtenerSueldo = function (sueldo) {
            this.sueldo = sueldo;
        };
        ObtencionDeLaIndemnizacion.prototype.obtenerATrabajados = function (anTrabajados) {
            this.anTrabajados = anTrabajados;
        };
        ObtencionDeLaIndemnizacion.prototype.obtenerMesesTrabajados = function (mesesTrabajados) {
            this.mesesTrabajados = mesesTrabajados;
        };
        ObtencionDeLaIndemnizacion.prototype.obtenerSalarioPendiente = function (salarioPendiente) {
            this.salarioPendiente = salarioPendiente;
        };
        ObtencionDeLaIndemnizacion.prototype.obtenerOtrosPendientes = function (otrosPendientes) {
            this.otrosPendientes = otrosPendientes;
        };
        ObtencionDeLaIndemnizacion.prototype.calcularAguinaldo = function () {
            this.calculoAguinaldo = this.sueldo / 12 * this.mesesTrabajados;
        };
        ObtencionDeLaIndemnizacion.prototype.calcularBono = function () {
            this.calculoBono = this.sueldo / 12 * this.mesesTrabajados;
        };
        ObtencionDeLaIndemnizacion.prototype.calcularIndemnizacionTotal = function () {
            this.indemnizacionFinal = (this.sueldo * this.anTrabajados) + this.calculoBono + this.calculoAguinaldo + this.salarioPendiente - this.otrosPendientes;
        };
        ObtencionDeLaIndemnizacion.prototype.obtenerTotalBonos = function () {
            return this.calculoBono;
        };
        ObtencionDeLaIndemnizacion.prototype.obtenerTotalAguinaldo = function () {
            return this.calculoAguinaldo;
        };
        ObtencionDeLaIndemnizacion.prototype.obtenerIndenmizacionFinal = function () {
            return this.indemnizacionFinal;
        };
        return ObtencionDeLaIndemnizacion;
    }());
    var indemnFinal = new ObtencionDeLaIndemnizacion();
    function calcularIndemnizacionEmpleado(event) {
        event.preventDefault();
        var sueldoInput = document.getElementById('sueldoBase');
        var cantidadAnInput = document.getElementById('cantidadAn');
        var cantidadMeseInput = document.getElementById('cantidadMe');
        var sueldoPendienteInput = document.getElementById('salarioPendiente');
        var deudasPendientesInput = document.getElementById("deudasPendientes");
        var bonoCatorceInput = document.getElementById("bono14");
        var aguinaldoInput = document.getElementById("aguinaldo");
        var indenmizacionInput = document.getElementById("totalIndemnizacion");
        if (sueldoInput && cantidadAnInput && cantidadMeseInput && sueldoPendienteInput && deudasPendientesInput && bonoCatorceInput && aguinaldoInput && indenmizacionInput) {
            var sueldoValue = parseFloat(sueldoInput.value);
            var cantidadAnValue = parseFloat(cantidadAnInput.value);
            var cantidadMesesValue = parseFloat(cantidadMeseInput.value);
            var salarioPendienteValue = parseFloat(sueldoPendienteInput.value);
            var deudasPendientesValue = parseFloat(deudasPendientesInput.value);
            indemnFinal.obtenerSueldo(sueldoValue);
            indemnFinal.obtenerATrabajados(cantidadAnValue);
            indemnFinal.obtenerMesesTrabajados(cantidadMesesValue);
            indemnFinal.obtenerSalarioPendiente(salarioPendienteValue);
            indemnFinal.obtenerOtrosPendientes(deudasPendientesValue);
            indemnFinal.calcularAguinaldo();
            indemnFinal.calcularBono();
            indemnFinal.calcularIndemnizacionTotal();
            bonoCatorceInput.value = indemnFinal.obtenerTotalBonos().toFixed(2);
            aguinaldoInput.value = indemnFinal.obtenerTotalAguinaldo().toFixed(2);
            indenmizacionInput.value = indemnFinal.obtenerIndenmizacionFinal().toFixed(2);
        }
    }
    var btnEnviarDatos = document.getElementById('btnIndemnizacion');
    btnEnviarDatos.addEventListener('click', calcularIndemnizacionEmpleado);
});
