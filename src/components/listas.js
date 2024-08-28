// src/components/Listas.js
import React from 'react';

class ListaNodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

function ordenarlistasvinculadas(lista1, lista2) {
    let Listas = new ListaNodo(null);
    let nuevo = Listas;

    while (lista1 !== null && lista2 !== null) {
        if (lista1.valor > lista2.valor) {
            nuevo.siguiente = lista1;
            lista1 = lista1.siguiente;
        } else {
            nuevo.siguiente = lista2;
            lista2 = lista2.siguiente;
        }
        nuevo = nuevo.siguiente;
    }

    nuevo.siguiente = lista1 !== null ? lista1 : lista2;

    let anterior = null;
    nuevo = Listas.siguiente;

    while (nuevo !== null) {
        let siguienteNodo = nuevo.siguiente;
        nuevo.siguiente = anterior;
        anterior = nuevo;
        nuevo = siguienteNodo;
    }

    return anterior;
}

function crearListaEnlazada(arr) {
    let head = null;
    for (let i = 0; i < arr.length; i++) {
        let nuevoNodo = new ListaNodo(arr[i]);
        nuevoNodo.siguiente = head;
        head = nuevoNodo;
    }
    return head;
}

function imprimirLista(head) {
    let actual = head;
    let resultado = [];
    while (actual !== null) {
        resultado.push(actual.valor);
        actual = actual.siguiente;
    }
    return resultado.join(" -> ");
}

const Listas = () => {
    let lista1 = crearListaEnlazada([9, 7, 5, 3, 1]);
    let lista2 = crearListaEnlazada([10, 8, 6, 4, 2]);

    let listaOrdenada = ordenarlistasvinculadas(lista1, lista2);

    return (
        <div>
            <h2>Lista Ordenada</h2>
            <p>{imprimirLista(listaOrdenada)}</p>
        </div>
    );
};

export default Listas;
