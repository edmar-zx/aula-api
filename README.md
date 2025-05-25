# Pokédex API com React

Uma Pokédex interativa construída com **React + TypeScript**, consumindo dados da **PokéAPI** para exibir detalhes, variações, tipos e ataques de Pokémons. O projeto oferece uma experiência moderna com **busca em tempo real**, **navbar inteligente com scroll automático**, **navegação fluida entre páginas** e funcionalidades extras que otimizam a performance e usabilidade.

---

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Styled-Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)

---

## 📱 Responsividade

O layout foi otimizado para funcionar perfeitamente em diversos tamanhos de tela, com breakpoints para:

- **1024px** – Desktop  
- **768px** – Tablet  
- **480px** – Celulares

---

## ⚙️ Funcionalidades

- Busca dinâmica por nome do Pokémon  
- Listagem de até **1302 Pokémons**  
- Também é possível limitar a listagem inicial para **60 Pokémons na home**, evitando sobrecarga na API e melhorando o desempenho inicial  
- Página de detalhes com:
  - Altura e peso
  - Tipos e habilidades
  - Barra de stats com visual intuitivo
  - Lista completa de ataques
  - Navegação entre variações do Pokémon
- Ao clicar em uma variação, você é redirecionado diretamente para a página de detalhes dela
- O ícone da navbar funciona como botão para voltar rapidamente à **home**
- Navbar inteligente que desaparece ao descer e reaparece ao subir o scroll
- Todos os botões e interações são totalmente funcionais

---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/edmar-zx/aula-api.git
cd pokemon-catalogue

# Instale as dependências
npm install

# Rode a aplicação
npm run dev