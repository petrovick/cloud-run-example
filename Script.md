
## Iniciando com o projeto
```
yarn init -y
```

### Adicionar a dependências necessárias para o projeto
```
yarn add dotenv express express-async-errors youch
```

:src/server.js


### Adicionando eslint-prettier

Verifica se o código está seguindo os padrões definidos no arquivo de configuracao

```
yarn add eslint -D
```

```
yarn eslint --init
```

Popular style guide => airbnb => json

Adicionar no settings.json

```
"[javascript]": {
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
},
"[javascriptreact]": {
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
},
```

### prettier

Ferramenta para deixar o código mais padronizado

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Editar o .eslintrc.json, adicionando o prettier


adicinar o arquivo .prettierrc

```
{
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": false,
    "endOfLine":"auto"
}
```

### Dockerfile


### Docker-compose
