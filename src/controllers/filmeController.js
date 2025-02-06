const Filme = require("../models/filme");
const filmeList = require("../models/FilmeList");

const lista = new filmeList();

const filme1 = new Filme("Diario de uma Paixao", 'Romance', '2h 1m', 2004);
lista.addFilme(filme1);
const filme2 = new Filme ('O Rei do Show', 'Musical', '1h 45m', 2017);

const router = {
    addFilme: (req,res) => {
        try {
            const { nome, genero, duracao, ano} = req.body;
            if (!nome || !genero || !duracao || !ano){
                throw new Error("Todos os campos são obrigatórios");
            }
            const filme = new Filme(nome, genero, duracao, ano);
            lista.addFilme(filme);
            res.status(200).json({ message: "Filme registrado com sucesso", filme });
        } catch (error) {
            res.status(400).json({message: "Erro ao criar filme", error});
        }
    },

    getAllFilmes: (req, res) => {
        try {
            const filmes = lista.getAllFilmes();
            res.status(200).json(filmes);
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar filmes", error});
        }
    },

    getFilmeById: (req, res) => {
        try {
            const id  = req.params.id;
            res.status(200).json(lista.getFilmeById(id));
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar filme", error});
        }
    },

    updateFilme: (req, res) => {
        try {
            res.status(200).json(lista.updateFilme(req.params.id, req.body));
        } catch (error) {
            res.status(400).json({message: "Erro ao atualizar filme", error});
        }
    },

    deleteFilme: (req, res) => {
        try {
            lista.deleteFilme(req.params.id);
            res.status(200).json({message: "Filme deletado com sucesso"});
        } catch (error) {
            res.status(400).json({message: "Erro ao deletar filme", error});
        }
    }
};

module.exports = router;