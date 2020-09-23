@REM Executa uma imagem no docker montando um volume
docker run -d -v %cd%\api\db\data:/var/lib/mysql --rm --name mysql-container mysql-image