// src/components/Arboles.js
import React from 'react';

class ArbolNodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

function calculaAltura(raiz) {
    if (raiz === null) {
        return 0;
    }

    let izquierdaAltura = calculaAltura(raiz.izquierda);
    let derechaAltura = calculaAltura(raiz.derecha);

    return Math.max(izquierdaAltura, derechaAltura) + 1;
}

const Arboles = () => {
    let raiz = new ArbolNodo(1);
    raiz.izquierda = new ArbolNodo(2);
    raiz.derecha = new ArbolNodo(3);
    raiz.izquierda.izquierda = new ArbolNodo(4);
    raiz.izquierda.derecha = new ArbolNodo(5);
    raiz.derecha.derecha = new ArbolNodo(6);
    raiz.izquierda.izquierda.izquierda = new ArbolNodo(7);

    let altura = calculaAltura(raiz);

    return (
        <div>
            <h2>Altura del Árbol</h2>
            <p>{altura}</p>
        </div>
    );
};

export default Arboles;
