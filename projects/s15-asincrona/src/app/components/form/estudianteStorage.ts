import { Injectable } from "@angular/core";
import { estudiante } from "./estudiante";

@Injectable({
    providedIn: 'root'
})

export class estudianteStorage {
    CLAVE_LOCAL_STORAGE = 'Estudiante'

    constructor() {}

    getEstudianteStorage(): estudiante[] {
        return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || '[]')
    }

    setEstudianteStorage(estudiantes_storage: estudiante[]) {
        localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(estudiantes_storage))
    }
}