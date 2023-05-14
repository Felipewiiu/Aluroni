# Aluroni

<img src="capaAlurone.png" alt="Imagem do Aluroni" width="100%">


# Getting Started with Create React App

> Para criar um projeto em React js com o typescript pré configurado use:

```
npx create-react-app aluroni --template typescript --use-npm
```
> Onde `template ` -> define a configuração do typescript
> e `--use-npm` --> Define o projeto para utilizar o `npm` no lugar do `yarn`

# Instalando o css-modules

- Para instalar o `css-modules` no projeto utilizando o typescript utilize:

```
npm install -D typescript-plugin-css-modules

```
> O -D instala o pacote como uma depêndencia de desenvolvimento 

# O comando npm run build

- Esse comando faz um build de toda a aplicação e mostra que um arquivo estático de imagem não é compilado
- para dentro da pasta build, pois o webpack não reconhece o caminho que está em forma de estring

```
export default function Cardapio() {
  return (
    <main>
        <nav className={Styles.menu}>
            <img src="../../assets.logo.svg" alt="Logo do aluroni" />
        </nav>
    </main>
  )
}

```

# usando um SVG como um componente com o pacote SGVR

> Esse recurso transforma um SVG em um componente React, esse pacote, SVGR,  já vem junto com o creat 

- Importante! Para o webPack possa entender um caminho, que é em forma de string, de um arquivo estático, basta    importar esse arquivo, que no caso deste exemplo é um SVG

# Para resolver o bug ao importar SVG

> Basta usar a configuração no arquivo `Global.d.ts`
> Site de referência :
`https://webpack.js.org/guides/typescript/#importing-other-assets`

> Site de referência :
`https://stackoverflow.com/questions/54121536/typescript-module-svg-has-no-exported-member-reactcomponent`

```
declare module "*.svg" {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
```

# Adicionando o normalize no projeto

> Link de referência para a configuração
> `https://create-react-app.dev/docs/adding-css-reset`

> Esse recurso reseta todo css do projeto.

> Outra maneira de se utilizar e fazendo a instalação com o comando `npm install normalize.css`
> em seguida importando no `index.tsx`

# Importando um pacote de ícones

> Para fazer a instalação da biblioteca é necessário digitar o comando `npm install react-icons`
> link da biblioteca: `https://react-icons.github.io/react-icons/icons?name=gr`


# Exemplo de renderização condicional

> Renderização condicional é o recurso que se pode alterar um estado baseado em uma condição. Observe o exemplo:

```
   ${styles.filtros__filtro} ${filtro == opcao.id ? styles['filtros__filtro--ativo'] : ""}`}

```
# Colocando classes condicionais com o pacote classNames

> Para a instalação deste pacote, devemos usar o comando `npm install classname`
> Essa biblioteca é um utilitário javascript, que serve para unir classNames condicionalmente

> Link de apoio: 
`https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#objetos_e_propriedades`

# Criando o regex para a função testaBusca()

> Notas: o parametro `'i'` dentro de RegExp serve para colocar a regex insensível a letras maiúsculas e minúsculas


```
  function testaBusca(title: string){
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
  }
```
> OBS: Esse trecho de código se encontra dentro do componente <Item/>

# Usando o contrutor RegExp 

> Há dois modos de criar um objeto RegExp: uma notação literal e um construtor.

```
/ab+c/i;
new RegExp('ab+c', 'i');
```
> OBS: Use a função construtora quando você sabe que o padrão da expressão regular será mudado, ou você não sabe o > padrão e o está recebendo de outra fonte, como uma entrada do usuário.


# instalando o Eslint no projeto

> Primeiro passo é fazer a instalação com o seguinte comando: `npm init @eslint/config`
> Responda as perguntas referente a configuração do projeto e prossiga com a instalação
> Depois basta executar o Eslint com o comando: ` npx. eslint ./src --fix` para aplicar as correções

> Nota: Quando aparecer o error, `'React' must be in scope when using JSX react/react-in-jsx-scope`,
> basta mudar a regra dentro do arquivo `.eslintre.json` 
> incluindo mas um atributo `"react/react-in-jsx-scope": "off"`






