document.addEventListener('DOMContentLoaded', function () {
    class ObtencionDeLaIndemnizacion {
        private sueldo: number = 0;
        private anTrabajados: number = 0;
        private mesesTrabajados: number = 0;
        private bonoCatorce: number = 0;
        private aguinaldoProporcional: number = 0;
        private salarioPendiente: number = 0;
        private otrosPendientes: number = 0;
        private indemnizacionFinal: number = 0;
        private calculoAguinaldo: number = 0;
        private calculoBono: number = 0;

        public obtenerSueldo(sueldo: number) {
            this.sueldo = sueldo;
        }

        public obtenerATrabajados(anTrabajados: number) {
            this.anTrabajados = anTrabajados;
        }

        public obtenerMesesTrabajados(mesesTrabajados: number) {
            this.mesesTrabajados = mesesTrabajados;
        }

        public obtenerSalarioPendiente(salarioPendiente: number) {
            this.salarioPendiente = salarioPendiente;
        }

        public obtenerOtrosPendientes(otrosPendientes: number) {
            this.otrosPendientes = otrosPendientes;
        }

        public calcularAguinaldo() {
            this.calculoAguinaldo = this.sueldo  /  12* this.mesesTrabajados ;
        }

        public calcularBono() {
            this.calculoBono = this.sueldo  /  12* this.mesesTrabajados;
        }

        public calcularIndemnizacionTotal() {
            this.indemnizacionFinal = (this.sueldo * this.anTrabajados) + this.calculoBono + this.calculoAguinaldo + this.salarioPendiente - this.otrosPendientes;
        }

        public obtenerTotalBonos(): number {
            return this.calculoBono;
        }

        public obtenerTotalAguinaldo(): number {
            return this.calculoAguinaldo;
        }

        public obtenerIndenmizacionFinal(): number {
            return this.indemnizacionFinal;
        }
    }

    const indemnFinal = new ObtencionDeLaIndemnizacion();

    function calcularIndemnizacionEmpleado(event: Event) {
        event.preventDefault();

        const sueldoInput = document.getElementById('sueldoBase') as HTMLInputElement;
        const cantidadAnInput = document.getElementById('cantidadAn') as HTMLInputElement;
        const cantidadMeseInput = document.getElementById('cantidadMe') as HTMLInputElement;
        const sueldoPendienteInput = document.getElementById('salarioPendiente') as HTMLInputElement;
        const deudasPendientesInput = document.getElementById("deudasPendientes") as HTMLInputElement;
        const bonoCatorceInput = document.getElementById("bono14") as HTMLInputElement;
        const aguinaldoInput = document.getElementById("aguinaldo") as HTMLInputElement;
        const indenmizacionInput = document.getElementById("totalIndemnizacion") as HTMLInputElement;

        if (sueldoInput && cantidadAnInput && cantidadMeseInput && sueldoPendienteInput && deudasPendientesInput && bonoCatorceInput && aguinaldoInput && indenmizacionInput) {
            const sueldoValue = parseFloat(sueldoInput.value);
            const cantidadAnValue = parseFloat(cantidadAnInput.value);
            const cantidadMesesValue = parseFloat(cantidadMeseInput.value);
            const salarioPendienteValue = parseFloat(sueldoPendienteInput.value);
            const deudasPendientesValue = parseFloat(deudasPendientesInput.value);

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

    const btnEnviarDatos = document.getElementById('btnIndemnizacion') as HTMLButtonElement;
    btnEnviarDatos.addEventListener('click', calcularIndemnizacionEmpleado);
});
