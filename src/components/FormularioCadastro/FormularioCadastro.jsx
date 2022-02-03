import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }
    handlerMudancaTitulo(event) {
        this.titulo = event.target.value;
    }
    handlerMudancaTexto(event) {
        this.texto = event.target.value;
    }
    newNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.newNote(this.titulo, this.texto)
        console.log("Nova nota foi adicionada!");
    }
    render() {
        return (
            <form className="form-cadastro" onSubmit={this.newNote.bind(this)}>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this.handlerMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this.handlerMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
