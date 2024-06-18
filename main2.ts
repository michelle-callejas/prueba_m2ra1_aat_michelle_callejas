document.addEventListener('DOMContentLoaded', function () {
    class SueldoLiquido {
        private sueldo: number = 0;
        private bonificacion: number = 250;
        private comisiones: number = 0;
        private ahorro: number = 0;
        private igss: number = 0;
        private prestamos: number = 0;
        private tIngresos: number = 0;
        private tEgresos: number = 0;
        private totalFinal: number = 0;

        public obtenerSueldo(sueldo: number) {
            this.sueldo = sueldo;
        }

        public obtenerComisiones(comisiones: number) {
            this.comisiones = comisiones;
        }

        public obtenerAhorros(ahorro: number) {
            this.ahorro = ahorro;
        }

        public obtenerPrestamo(prestamos: number) {
            this.prestamos = prestamos;
        }

        public calcularIgss() {
            this.igss = this.sueldo * 0.0483;
        }

        public calcularTotalEgresos() {
            this.tEgresos = this.igss + this.prestamos + this.ahorro;
        }

        public calcularTotalIngresos() {
            this.tIngresos = this.comisiones + this.bonificacion + this.sueldo;
        }

        public calcularPorPagar(): number {
            this.totalFinal = this.tIngresos - this.tEgresos;
            return this.totalFinal;
        }

        public obtenerTotalEgresos(): number {
            return this.tEgresos;
        }

        public obtenerTotalIngresos(): number {
            return this.tIngresos;
        }

        public obtenerIgss(): number {
            return this.igss;
        }
    }

    // Crear objeto de la clase SueldoLiquido
    const sueldoL = new SueldoLiquido();

    function calcularSueldito(event: Event) {
        event.preventDefault();

        // Obtener valores de los inputs
        const sueldoInput = document.getElementById('sueldo') as HTMLInputElement;
        const comisionInput = document.getElementById('comisiones') as HTMLInputElement;
        const ahorroInput = document.getElementById('ahorro') as HTMLInputElement;
        const prestamosInput = document.getElementById('otrosDescuentos') as HTMLInputElement;
        const resultado1Input = document.getElementById("totalEgresos") as HTMLInputElement;
        const resultado2Input = document.getElementById("totalIngresos") as HTMLInputElement;
        const igssInput = document.getElementById("igss") as HTMLInputElement;
        const resultadoFinalInput = document.getElementById("totalPagar") as HTMLInputElement;

        if (sueldoInput && comisionInput && ahorroInput && prestamosInput && igssInput && resultado1Input && resultado2Input && resultadoFinalInput) {
            const sueldoValue = parseFloat(sueldoInput.value);
            const comisionValue = parseFloat(comisionInput.value);
            const ahorroValue = parseFloat(ahorroInput.value);
            const prestamosValue = parseFloat(prestamosInput.value);

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

    const btnEnviarDatos = document.getElementById('btnEnviar') as HTMLButtonElement;
    btnEnviarDatos.addEventListener('click', calcularSueldito);
});
