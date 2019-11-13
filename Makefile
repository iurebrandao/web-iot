build:
	sudo docker-compose up -d --build application

up:
	sudo docker-compose up -d application

stop:
	sudo docker-compose stop application

restart:
	sudo docker-compose stop application && docker-compose start application

bash:
	sudo docker exec -it application /bin/bash
