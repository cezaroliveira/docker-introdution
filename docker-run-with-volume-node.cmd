@REM Executa uma imagem no docker montando um volume e expondo a porta
docker run -d -v %cd%/api:/home/node/app -p 9001:9001 --rm --name node-container node-image