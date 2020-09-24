# Construindo uma imagem
```bash
# -t mysql-image => marca a tag mysql-image referente à imagem construida
# -f api\db\DockerFile => indica o arquivo a ser utilizado para a construção
docker build -t mysql-image -f api\db\DockerFile .
```

# Listando as imagens
```bash
docker image ls
```

# Executando uma imagem como um container Docker
```bash
# -d => detached, ou seja, não trava o console durante a execução, liberando para outros usos
# --rm => remove um container se já estiver em execução
# --name mysql-container mysql-image => informa o nome do container que executará a imagem
docker run -d --rm --name mysql-container mysql-image

# Executa montando um volume e mapeando para não perder os dados gerados durante a execução do container
# Devem ser utilizados os caminhos absolutos
# No Linux, $(pwd) pega o diretório corrente
docker run -d -v $(pwd)/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image

docker run -d -v Z:\Users\cezar.oliveira\git\docker-introdution\api\db\data:/var/lib/mysql --rm --name mysql-container mysql-image

# No Windows, %cd% pega o diretório corrente
docker run -d -v %cd%\api\db\data:/var/lib/mysql --rm --name mysql-container mysql-image

# Erro: Client does not support authentication protocol requested by server; consider upgrading MySQL client
# Solução 1: Passar o argumento --default-authentication-plugin=mysql_native_password para o MySQL
docker run -d -v %cd%\api\db\data:/var/lib/mysql --rm --name mysql-container mysql-image --default-authentication-plugin=mysql_native_password
# Solução 2: Alterar diretamente no MySQL passando a senha configurada para o ROOT
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '{SUA SENHA}';

# Executando compartilhando a porta local com a do container
# Padrão: localPort:containerPort
docker run -d -v %cd%/api:/home/node/app -p 9001:9001 --rm --name node-container node-image
```

# Lista os containers ativos
```bash
docker ps

# Lista inclusive os inativos que estão no histórico
docker ps -a
```

# Executa um comando dentro de um container docker

## Executa um script no mysql
```bash
# -i => o console será interativo, ou seja, vai aguardar a execução de tudo antes de finalizar
# mysql-container => em qual container o comando será executado
# mysql -uroot -proot < api/db/script.sql => o comando em si
docker exec -i mysql-container mysql -uroot -proot < api/db/script.sql
```

## Executa um terminal bash
```bash
# -it => além de interativo, será um terminal
docker exec -it mysql-container /bin/bash
```

# Initiating a node project
```bash
npm init
```

# Installing nodemon
```bash
npm install --save -dev nodemon
```

# Installing express with mysql driver
```bash
npm install --save express mysql
```

# Creating an entrypoint to nodemon in scripts in package.json
```json
"start": "nodemon ./src/index"
```
