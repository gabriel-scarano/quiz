import { useState } from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoMock = new QuestaoModel(1, 'Qual é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Azul'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.certa('Preto'),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);
  
  function questaoRespondida(questao: QuestaoModel) {

  }

  function irPraProximoPasso() {

  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Questionario
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </div>
  )
}
