# Git
### Lo primero que tienes que hacer es configurar usuario y correo
```
 $ git config --global user.name "John Doe"

 $ git config --global user.email johndoe@example.com
```
Use `git init` para iniciar un proyecto en git.
```
 $ git init
```
Use `git status` para verificar tus cambios
```
 $ git status
```
Use `git add` para añadir los cambios al repositorio local
> Use `git add .` para añadir todos los cambios pendientes
```
 $ git add
 $ git add .
 $ git add nombreDirectorio
```
Use `git commit` para guardar los cambios añadidos
> Use `git commit -m ` para añadir un comentario en linea,
> normalmente sin `-m` se abre un editor de terminal `nano` si no sabe usarlo
> ponga siempre `-m` para que no tenga problemas.
```
 $ git commit
 $ git commit -m "comentario de prueba"
```
### Repositorios Externos 
- GitHub
- GitLab
- Bitbucket
### Hay dos manerar de trabajar con los repositorios 
> Creando el repositorio

> Clonando en repositorio

## Creando un repositorio ejemplo con Github
![alt text](https://docs.github.com/assets/images/help/repository/repo-create.png)

![alt text](https://docs.github.com/assets/images/help/repository/create-repository-name.png)
> no es obligatorio

![alt text](https://docs.github.com/assets/images/help/repository/create-repository-desc.png)

![alt text](https://docs.github.com/assets/images/help/repository/create-repository-public-private.png)

> esto es el README para escribir de que se trata el proyecto
> pero no es obligatorio para crear el repositorio

![alt text](https://docs.github.com/assets/images/help/repository/initialize-with-readme.png)

>Si no inicialiso el README.md, le saldra algo como esto

![alt text](https://d186loudes4jlv.cloudfront.net/git/images/github_new_repo3.png)

![alt text](https://docs.github.com/assets/images/help/repository/create-repository-button.png)

Use `git remote add` para añadir el repositorio externo GitHub
```
 $ git remote add https://github.com/sundarLuis/capacitacion_javascript.git

```
Use `git push` para guardar los cambios locales en el repositorio externo ejemplo GitHub
```
    $ git push
    $ git push origin master
```
Use `git pull` para actualizar los cambios locales en el repositorio externo ejemplo GitHub
```
    $ git pull
    $ git pull origin master
```
## Clonando un repositorio
Use `git clone` para clonar repositorios, ejemplo con el repositorio
```
 $ git clone https://github.com/sundarLuis/capacitacion_javascript.git nameForderAlCrearOpcional
```
![alt text](https://github.com/sundarLuis/capacitacion_javascript/blob/master/13_git/img/clonando.PNG?raw=true)