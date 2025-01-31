import React, { useState } from "react";

export default function ContractCreation() {
  const [formData, setFormData] = useState({
    contratante: "",
    cpf: "",
    rg: "",
    horario: "",
    endereco: "",
    estacoes: "",
    dataEvento: "",
    valorContrato: "",
    valorPago: "",
    dataHoje: "",
    duracaoEvento: "", // Novo campo para a duração do evento
  });

  const [generatedContract, setGeneratedContract] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contractTemplate = `
              CONTRATO DE SERVIÇOS                              
   
   Pelo presente instrumento particular, as partes abaixo especificadas, de um lado, Erica Raquel Pereira Moreira portadora do CPF: 105.474.147-65 e RG: 020.634.360-0,
   residente na Rua Tasso Blaso(Número:1020), doravante denominada simplesmente CONTRATADA, responsável pela R&B estações, e de outro lado, ${formData.contratante}
   portador(a) do CPF/CNPJ: ${formData.cpf} e RG: ${formData.rg}, residente na ${formData.endereco}, denominado simplesmente CONTRATANTE.
   O presente instrumento tem por objetivo e prestação de serviços de ${formData.estacoes} de acordo com as especificações constantes deste contrato, na data de ${formData.dataEvento}.
   O evento se realizará no endereço abaixo: 
   ${formData.endereco}
   Horário: ${formData.horario}
   Duração: Até ${formData.duracaoEvento}, mediante a demanda
   Contratam, sob as condições seguintes: 
   – O valor do serviço fica estabelecido em R$ ${formData.valorContrato}, sendo pago R$ ${formData.valorPago} no ato do contrato, o restante pago no dia do evento, no ato da chegada da equipe.
   Em caso de intenção de mudança na data do evento, a mesma só ocorrerá se houver disponibilidade por parte do CONTRATADO, caso não haja essa disponibilidade o CONTRATADO estará isento
   de quaisquer responsabilidades e penalidades legais.
   Vale ressaltar que o CONTRATADO não se responsabilizará por nenhum tipo de inconsistência e/ou precariedade referente a sua localidade de trabalho, e que as estações são complementares
   às festas e eventos, sendo descabida toda e qualquer reclamação perante a alta demanda das mesmas, uma vez que estejam exercendo o papel de prato principal.
   Todos e quaisquer danos materiais que lesem o CONTRATADO, sofridos mediante precariedade da localidade de trabalho, inconsistência/sobrecarga elétrica ou desinformação serão de responsabilidade
   do CONTRATANTE, estando o mesmo incumbido a arcar com as taxas de manutenção dos maquinários, caso não haja a possibilidade de conserto, a reposição do objeto danificado por outro novo
   de mesma marca e características.
   – O valor do sinal para reserva da data não será devolvido caso o CONTRATANTE cancele o evento.
   E por estarem CONTRATADO e CONTRATANTE de pleno acordo com o disposto neste instrumento particular, o assinam abaixo, e em duas vias.

   Rio de Janeiro, ${formData.dataHoje}


   CONTRATADO: Erica Raquel Pereira Moreira


   CONTRATANTE: ${formData.contratante}
 `;

    setGeneratedContract(contractTemplate);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFF0F6",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            border: "1px solid #FFC0CB",
            borderRadius: "8px",
            padding: "2rem",
            backgroundColor: "#FFFFFF",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#FF69B4",
              marginBottom: "1rem",
            }}
          >
            Criação de Contrato
          </h1>
          {!generatedContract ? (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: "1rem" }}>
                <input
                  type="text"
                  name="contratante"
                  placeholder="Qual é o nome do(a) contratante?"
                  value={formData.contratante}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="text"
                  name="cpf"
                  placeholder="Qual é o documento CPF do(a) contratante?"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="text"
                  name="rg"
                  placeholder="Qual é o documento RG do(a) contratante?"
                  value={formData.rg}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="text"
                  name="horario"
                  placeholder="Qual é o horário do evento? (00:00hrs)"
                  value={formData.horario}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="text"
                  name="endereco"
                  placeholder="Qual é o endereço do evento?"
                  value={formData.endereco}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <textarea
                  name="estacoes"
                  placeholder="Quais são as Estações contratadas?"
                  value={formData.estacoes}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    height: "80px",
                  }}
                />
                <input
                  type="text"
                  name="dataEvento"
                  placeholder="Quando será o evento? (dd/mm/aa)"
                  value={formData.dataEvento}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="text"
                  name="valorContrato"
                  placeholder="Qual é o valor do contrato? (R$)"
                  value={formData.valorContrato}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="text"
                  name="valorPago"
                  placeholder="Qual foi o valor pago no ato do contrato? (R$)"
                  value={formData.valorPago}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="text"
                  name="dataHoje"
                  placeholder="Qual é a data de hoje? (por extenso)"
                  value={formData.dataHoje}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="text"
                  name="duracaoEvento"
                  placeholder="Qual é a duração do evento? (00h)"
                  value={formData.duracaoEvento}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.5rem",
                    backgroundColor: "#FF69B4",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Gerar Contrato
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h2
                style={{
                  textAlign: "center",
                  color: "#FF69B4",
                  marginBottom: "1rem",
                }}
              >
                Contrato Gerado
              </h2>
              <pre
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "1rem",
                  borderRadius: "4px",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
                {generatedContract}
              </pre>
              <button
                onClick={() => setGeneratedContract("")}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  backgroundColor: "#FF69B4",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Criar Novo Contrato
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
