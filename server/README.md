# Installation

In order to make this app work you'll need

A postgres database.

In my case I did use docker as such :

```sh
docker pull postgres
```


```sh
docker run --name myappname-postgress-db -e POSTGRES_PASSWORD=yoursecretpassword POSTGRES_USER=yourusername POSTGRES_DB=goodcook -d -p 5555:5432 postgres
```
Please note 5555 is the host port, meaning you can change it to any port you would like to use below.

After what, you will need to create or adjust the `src/main/resources/application.properties` file a so :

```
# This may be the only line in the file when you create a project from scratch
spring.application.name=goodcook
# In case you want to change the port (default is 8080 and I already had something running on that port)
server.port=8888

spring.datasource.url=jdbc:postgresql://localhost:5555/goodcook

spring.datasource.username=yourusername
spring.datasource.password=yoursecretpassword

spring.datasource.hikari.connection-timeout=20000
spring.datasource.hikari.maximum-pool-size=5

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

