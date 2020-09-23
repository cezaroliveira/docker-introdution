@REM Executa um comando dentro do container
docker exec -i mysql-container mysql -uroot -proot < api/db/script.sql