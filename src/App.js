import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
    constructor() {
        super();
        this.state = {
            // <- Estado natural
            notas: [],
        };
    }
    newNote(titulo, texto) {
        const novaNota = { titulo, texto };
        const newNoteArray = [...this.state.notas, novaNota];
        const newState = {
            // seta novo estado
            notas: newNoteArray,
        };
        this.setState(newState); // "push"
    }
    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro newNote={this.newNote.bind(this)} />
                <ListaDeNotas notas={this.state.notas} />
            </section>
        );
    }
}

export default App;
