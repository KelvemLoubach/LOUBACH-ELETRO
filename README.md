<h1 align="center">Store</h1>

<p align="center">
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Descrição-das-rotas">Descrição das rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>


<br>

<p align="center">
  <img alt="Store" src="https://github.com/KelvemLoubach/store/assets/120065894/57f48a9e-64b1-4b25-a268-1714ad6bc226" width="100%">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [Jwt](https://jwt.io/introduction)
- [PostgreSQL](https://www.postgresql.org/)
- [AWS S3](https://aws.amazon.com/pt/s3/)
- [Node.Js](https://nodejs.org/en)


## 💻 Projeto

Este projeto é uma API RESTful que segue a arquitetura MVC. Ela oferece endpoints para o cadastro de usuários e produtos, com uma estrutura flexível que permite que cada usuário possua uma quantidade ilimitada de produtos, enquanto cada produto é exclusivo de um único usuário.

Os produtos cadastrados são armazenados com todos os campos necessários para permitir tratamentos e filtragens futuras. Além disso, o sistema permite o armazenamento de até quatro imagens diferentes para cada produto, proporcionando uma experiência visual rica para os usuários.

O desenvolvimento deste projeto foi motivado por uma demanda real de um amigo, que buscava uma solução simples para exibir seus produtos. 

Esta Api está hospedada no Render, um serviço gratuito que oferece uma infraestrutura escalável para a execução da API. Essa escolha estratégica permite que o sistema suporte um alto volume de requisições de forma confiável, garantindo uma experiência de uso suave e contínua.

## 🔶 Descrição das rotas

/login: <br>

A rota recebe os dados dos campos de email e senha e realiza as seguintes etapas:

Validação dos dados de entrada: Verifica se os campos de email e senha são válidos.
Middleware de verificação: Envía os dados para um middleware responsável por fazer uma busca no banco de dados usando o email fornecido, a fim de verificar se o usuário está cadastrado.
Verificação da senha: Se o usuário estiver cadastrado, o middleware verifica se a senha fornecida corresponde à senha armazenada no banco de dados, utilizando o método 'compare' do módulo 'bcrypt'. Caso a senha esteja correta, é retornado uma instância do usuário.
Retorno de resposta: Se todas as etapas anteriores forem concluídas com sucesso, a rota retorna a instância do usuário. Caso contrário, é retornado um valor nulo.
Essa sequência de etapas visa garantir a autenticação do usuário com base nas informações fornecidas durante o processo de login. O uso do middleware e do método de comparação do 'bcrypt' aumenta a segurança da autenticação, protegendo as senhas armazenadas no banco de dados.


/signup <br>

A rota recebe os dados dos campos de email e senha e realiza as seguintes etapas:

Validação dos dados de entrada: Verifica se os campos de email e senha são válidos usando a biblioteca 'Zod'. O campo de email deve seguir o padrão de email e o campo de senha deve conter no mínimo seis caracteres.

Middleware de verificação: Um objeto contendo o email e a senha criptografada é enviado para um middleware, que verifica no banco de dados se o email já existe. Se o email já estiver cadastrado, o middleware retorna null, indicando que o usuário não pode ser criado novamente. Caso contrário, o middleware cria um novo usuário com os dados fornecidos.

Geração do token JWT: Se o usuário for criado com sucesso, um token JWT (JSON Web Token) é gerado utilizando o ID do usuário como payload.

Resposta da rota: A rota retorna uma resposta com o status 201 (Created) e o token JWT no corpo da resposta, caso o usuário seja criado com sucesso. Caso contrário, se o email já estiver cadastrado, a rota retorna uma resposta com o status 409 (Conflict) e uma mensagem de erro indicando que o usuário já existe.

/createproducts<br>

Esta rota recebe os dados necessários para o cadastro do produto, de acordo com o usuário logado. Em seguida, verifica se todos os campos estão preenchidos. Se estiverem preenchidos, os dados são enviados como parâmetros para a função 'createProduct', responsável por criar os produtos.

/update<br>

Esta rota recebe o ID do produto que será atualizado por meio do parâmetro 'id' presente em 'reqExpress.params'. Em seguida, extrai o ID do usuário logado da propriedade 'userId' de 'req' e o passa como parâmetro juntamente com dois objetos para a função 'updateProductsServices'. O primeiro objeto contém o ID do usuário e o ID do produto, enquanto o segundo objeto contém os campos a serem atualizados no produto. A função 'updateProductsServices' busca o produto correspondente ao ID fornecido no banco de dados. Se o produto não existir, a função retorna 'undefined'; caso contrário, o produto é atualizado.


/deleteproducts<br>

Esta rota recebe o ID do produto que será deletado através do parâmetro 'id' presente em 'req.params'. Em seguida, o ID é passado como parâmetro para a função 'searchProductAndDelete' no controller. A função 'searchProductAndDelete' verifica separadamente se o produto existe no banco de dados. Se o produto existir, ele é deletado; caso contrário, a função retorna null.


## 🚀 Como executar


- Certifique-se de ter o Node.js instalado em seu sistema. Você pode fazer o download e instalá-lo a partir do site oficial do Node.js: https://nodejs.org/

- Abra um terminal ou prompt de comando e navegue até o diretório onde deseja clonar o repositório.

- Execute o seguinte comando para clonar o repositório para o seu sistema:

- git clone <URL_DO_REPOSITÓRIO>
- Substitua <URL_DO_REPOSITÓRIO> pela URL do repositório que deseja clonar. Por exemplo:


- git clone https://github.com/seu-usuario/seu-repositorio.git
- Após o clone do repositório, navegue até o diretório do projeto:


- cd nome-do-repositorio
- Execute o seguinte comando para instalar as dependências do projeto:


- npm install
- Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias, como as credenciais para o banco de dados e o AWS S3. Consulte a documentação do projeto ou o arquivo .env.example fornecido para obter mais informações sobre as variáveis de ambiente necessárias.

 - Após configurar as variáveis de ambiente, você pode iniciar o servidor de desenvolvimento executando o seguinte comando:


- npm run start-dev
- Isso irá iniciar o servidor utilizando o TypeScript (tsx) para transpilar e executar o código em tempo real.

- Agora você pode acessar a aplicação em http://localhost:1655 ou na porta especificada no arquivo .env, dependendo da configuração do projeto.

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.




