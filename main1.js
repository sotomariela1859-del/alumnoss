const { createApp } = Vue;

createApp({
    data() {
        return {
            nombre: "",
            edad: "",
            especialidad: "",
            alumnos: []
        };
    },
    methods: {
        registrarAlumno() {
            if (this.nombre !== "" && this.edad !== "" && this.especialidad !== "") {
                this.alumnos.push({
                    nombre: this.nombre,
                    edad: this.edad,
                    especialidad: this.especialidad
                });

                this.nombre = "";
                this.edad = "";
                this.especialidad = "";
            } else {
                alert("Por favor, completa todos los campos");
            }
        }
    }
}).mount("#app");