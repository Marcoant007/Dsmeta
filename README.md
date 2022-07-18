# Dsmeta
Semana Spring/React DevSuperior

<h2> Link para acesso </h2>

-> https://dsmetamarco.netlify.app/

<h2>Ferramentas utilizadas </h2>

-Backend   ![SpringBoot](https://img.shields.io/badge/-SpringBoot-darkgreen?style=flat&logoColor=fff&logo=spring)&nbsp;

-Frontend   ![React](https://img.shields.io/badge/-React-black?style=flat&logoColor=blue&logo=react)&nbsp;

<h2> Sobre </h2>

Aplicação que faz integração com a API da Twillio para envio de sms customizados;

![Projeto logo](https://i.ibb.co/9gQ4F7V/HC7uBAV.png "Projeto")

Resultado:

![Resultado final](https://i.ibb.co/4T5bT2Z/f85a389d-6643-45e4-b860-5f98614a0845.jpg "Resultado final")

<h2> Instalações </h2>

<h3> Frontend </h3>

```bat

yarn create vite frontend --teamplate react-ts

yarn add react-toastify@9.0.5

yarn add @types/react-datepicker


yarn add axios@0.27.2
```



<h3> Backend </h3>

```bat
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>com.twilio.sdk</groupId>
			<artifactId>twilio</artifactId>
			<version>8.31.1</version>
		</dependency>
	</dependencies>
```
