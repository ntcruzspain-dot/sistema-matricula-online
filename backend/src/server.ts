import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Tipagem do aluno
interface Matricula {
  nome: string;
  email: string;
  curso_id: number;
}

const cursos = [
  { id: 1, nome: "Medicina" },
  { id: 2, nome: "Engenharia De Software" },
  { id: 3, nome: "Radiologia" },
  { id: 4, nome: "Pedagogia" },
  { id: 5, nome: "Análise e Desenvolvimento de Sistemas" },
  { id: 6, nome: "Biomedicina" },
  { id: 7, nome: "Direito" },
];

const matriculas: Matricula[] = [];

// Rota para listar cursos
app.get("/cursos", (req, res) => {
  res.status(200).json(cursos);
});

// Rota para realizar matrícula
app.post("/matricula", (req, res) => {
  const { nome, email, curso_id } = req.body;

  if (!nome || !email || !curso_id) {
    return res.status(400).json({
      mensagem: "Dados incompletos",
    });
  }

  const novaMatricula: Matricula = {
    nome,
    email,
    curso_id,
  };

  matriculas.push(novaMatricula);

  res.status(201).json({
    mensagem: "Matrícula realizada com sucesso",
  });
});

// Rota opcional para ver matrículas
app.get("/matriculas", (req, res) => {
  res.json(matriculas);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
