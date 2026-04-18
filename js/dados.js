/* ================================================
   RAÍZES DO NORDESTE — Dados Mockados (Mock Data)
   Simula a base de dados do sistema
   ================================================ */

const DADOS = {

  unidades: [
    {
      id: 1,
      nome: "Raízes do Nordeste – Centro",
      endereco: "Rua Antônio Agu, 120 – Centro",
      cidade: "Osasco – SP",
      horario: "Aberto · Fecha às 22h",
      aberto: true
    },
    {
      id: 2,
      nome: "Raízes do Nordeste – Vila Yara",
      endereco: "Av. dos Autonomistas, 855 – Vila Yara",
      cidade: "Osasco – SP",
      horario: "Aberto · Fecha às 21h",
      aberto: true
    },
    {
      id: 3,
      nome: "Raízes do Nordeste – Barra Funda",
      endereco: "Av. Marquês de São Vicente, 182 – Barra Funda",
      cidade: "São Paulo – SP",
      horario: "Aberto · Fecha às 23h",
      aberto: true
    }
  ],

  categorias: ["Todos", "Tapiocas", "Cuscuz", "Bebidas", "Sobremesas", "Combos"],

  cardapio: [
    {
      id: 1,
      nome: "Tapioca de Carne Seca",
      preco: 18.90,
      categoria: "Tapiocas",
      emoji: "🌮",
      disponivel: true,
      descricao: "Carne seca desfiada com queijo coalho derretido",
      destaque: false
    },
    {
      id: 2,
      nome: "Tapioca de Frango com Catupiry",
      preco: 16.90,
      categoria: "Tapiocas",
      emoji: "🌮",
      disponivel: true,
      descricao: "Frango desfiado temperado com catupiry cremoso",
      destaque: false
    },
    {
      id: 3,
      nome: "Tapioca de Queijo Coalho",
      preco: 12.90,
      categoria: "Tapiocas",
      emoji: "🌮",
      disponivel: true,
      descricao: "Queijo coalho derretido, sabor autêntico nordestino",
      destaque: false
    },
    {
      id: 4,
      nome: "Tapioca Doce de Coco",
      preco: 11.90,
      categoria: "Tapiocas",
      emoji: "🌮",
      disponivel: true,
      descricao: "Coco ralado com leite condensado e canela",
      destaque: false
    },
    {
      id: 5,
      nome: "Tapioca de Calabresa",
      preco: 17.90,
      categoria: "Tapiocas",
      emoji: "🌮",
      disponivel: false,
      descricao: "Calabresa acebolada artesanal",
      destaque: false
    },
    {
      id: 6,
      nome: "Cuscuz com Ovo Caipira",
      preco: 10.90,
      categoria: "Cuscuz",
      emoji: "🥣",
      disponivel: true,
      descricao: "Cuscuz flocado com ovo caipira frito",
      destaque: false
    },
    {
      id: 7,
      nome: "Cuscuz com Queijo e Manteiga",
      preco: 12.90,
      categoria: "Cuscuz",
      emoji: "🥣",
      disponivel: true,
      descricao: "Com queijo coalho e manteiga de garrafa",
      destaque: false
    },
    {
      id: 8,
      nome: "Cuscuz com Carne de Sol",
      preco: 15.90,
      categoria: "Cuscuz",
      emoji: "🥣",
      disponivel: true,
      descricao: "Carne de sol grelhada e cuscuz temperado",
      destaque: false
    },
    {
      id: 9,
      nome: "Suco de Caju",
      preco: 8.90,
      categoria: "Bebidas",
      emoji: "🥤",
      disponivel: true,
      descricao: "Suco natural de caju gelado",
      destaque: false
    },
    {
      id: 10,
      nome: "Suco de Graviola",
      preco: 8.90,
      categoria: "Bebidas",
      emoji: "🥤",
      disponivel: true,
      descricao: "Suco natural de graviola cremoso",
      destaque: false
    },
    {
      id: 11,
      nome: "Café com Leite",
      preco: 6.90,
      categoria: "Bebidas",
      emoji: "☕",
      disponivel: true,
      descricao: "Café coado forte com leite integral",
      destaque: false
    },
    {
      id: 12,
      nome: "Água de Coco Natural",
      preco: 7.90,
      categoria: "Bebidas",
      emoji: "🥥",
      disponivel: true,
      descricao: "Água de coco natural gelada",
      destaque: false
    },
    {
      id: 13,
      nome: "Mungunzá",
      preco: 9.90,
      categoria: "Sobremesas",
      emoji: "🍮",
      disponivel: true,
      descricao: "Doce de milho branco com leite de coco e canela",
      destaque: false
    },
    {
      id: 14,
      nome: "Canjica com Amendoim",
      preco: 8.90,
      categoria: "Sobremesas",
      emoji: "🍮",
      disponivel: true,
      descricao: "Canjica cremosa com amendoim torrado",
      destaque: false
    },
    {
      id: 15,
      nome: "Combo Nordestino",
      preco: 29.90,
      categoria: "Combos",
      emoji: "🍱",
      disponivel: true,
      descricao: "Cuscuz + Tapioca de Queijo + Suco à escolha",
      destaque: true
    },
    {
      id: 16,
      nome: "Combo Família",
      preco: 54.90,
      categoria: "Combos",
      emoji: "🍱",
      disponivel: true,
      descricao: "2 Tapiocas + 2 Cuscuz + 2 Bebidas à escolha",
      destaque: true
    }
  ],

  promocoes: [
    {
      id: 1,
      titulo: "Combo do Dia",
      descricao: "Qualquer Combo com 20% de desconto hoje!",
      badge: "–20%",
      validade: "Válido hoje, 18/04/2026"
    },
    {
      id: 2,
      titulo: "Dobro de Pontos",
      descricao: "Compras acima de R$ 30 ganham pontos em dobro.",
      badge: "2× PTS",
      validade: "Todo final de semana"
    },
    {
      id: 3,
      titulo: "Bônus de Boas-Vindas",
      descricao: "Ganhe 100 pontos extras no seu primeiro pedido!",
      badge: "+100 pts",
      validade: "Somente para novos clientes"
    }
  ],

  recompensas: [
    { id: 1, nome: "Bebida Grátis", pontos: 80,  emoji: "🥤" },
    { id: 2, nome: "10% de Desconto", pontos: 50, emoji: "🏷️" },
    { id: 3, nome: "Tapioca Grátis",   pontos: 150, emoji: "🌮" },
    { id: 4, nome: "Combo Nordestino Grátis", pontos: 300, emoji: "🍱" }
  ]
};
