@REM Executa uma imagem no docker montando um volume
@REM Erro: Client does not support authentication protocol requested by server; consider upgrading MySQL client
@REM Solução: Passar o argumento --default-authentication-plugin=mysql_native_password para o MySQL
docker run -d -v %cd%/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image --default-authentication-plugin=mysql_native_password