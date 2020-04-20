# Configuração do Mobile do projeto FastFeet

Este repositório contém a parte mobile do projeto FastFeet.

## Pré-requisitos

* Yarn;
* Node;
* Sistema Operacional iOS (pois o passo-a-passo foi utilizando o ambiente iOS e executando o comando NPX, se quem for testar souber testar no Windows ou com outro comando, fique à vontade :-) );

## Problemas conhecidos

* Não foi possível implementar por completo a parte da Confirmação da Entrega, pois considerando o tempo escasso de desenvolvimento/teste, utilizando o XCode do iOS não foi possível testar a câmera, pois todas as fotos tiradas ficavam pretas.

* Assim como o problema anterior, também não foi possível a aplicação no Android, pois não houve tempo necessário para migrar o projeto para o Expo ou configurar um emulador Android no computador.

* O perfil do entregador está com as informações estáticas, pois não foi possível corrigir isso a tempo (a solução pensada foi utilizar redux, porém ia dar trabalho para configurar todo o redux para apenas disponibilizar os dados que já existem na tela de Entregas).

## 1. Baixar as dependências do projeto

Para isso, deve-se executar o seguinte comando também na pasta `mobile`:

`yarn install`

## 6. Subir o emulador iOS apontando para o projeto mobile

Só foi obtido êxito ao executar no terminal do VSCode:

`npx react-native run-ios`

Obs.: Na primeira 'run' do projeto ás vezes ocorre erro ao carregar o bundle do projeto. A solução no meu caso foi fechar o emulador (XCode) e o MetroBundler e executar novamente o comando acima.

