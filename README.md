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

> Esse recurso transforma um SVG em um componente React


