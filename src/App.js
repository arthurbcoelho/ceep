import "./App.css";
import { FormularioCadastro } from "./components/FormularioCadastro";
import { ListaDeNotas } from "./components/ListaDeNotas";
import React, { Component } from 'react';



class App extends Component {
    render() {
        return (
            <section>
                <FormularioCadastro />
                <ListaDeNotas />
            </section>
        );
    }
}

export default App;
