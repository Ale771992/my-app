# Aplicación: Lista de Tareas (my-app)

Esta es una aplicación simple de lista de tareas, construida con React y TypeScript, obtiene los datos de una API
y los muestra en tarjetas. También es posible agregar nuevos elementos utilizando el input de la parte superior. 

## Caracteristicas

-Obtiene las tareas desde: `https://jsonplaceholder.typicode.com/todos`
-Se uso Zustand para la gestión del estado global. 
-Muestra las tareas en tarjetas y dependiendo del estado (completado o incompleto) varia su color. 
-Es posible agregar nuevos elementos a la lista con el input en la parte superior. 

## Estructura del proyecto

my-app/
├── src/
│   ├── components/
│   │   ├── AddItem.tsx
│   │   ├── Card.tsx
│   │   └── List.tsx
│   ├── hooks/
│   │   └── useStore.ts
│   ├── App.tsx
│   └── 
├── package.json
├── tsconfig.json
└── 
## Problemas del desarrollo de la app (28/06/2024)

A la fecha indicada, al añadir una nueva tarea con el input en la parte superior de la página, la tarea se añade a la lista, sin embargo al recargar la página, las nuevas tareas añadidas desaparecen. 

### Instrucciones para su ejecución (únicamente para propositos de desarrollo)

### Pre-requisitos

Asegurate de tener instaladas las siguientes herramientas en tu maquina:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Instalación 

1. Clona el repositorio y navega hasta su ubicación 

git clone https://github.com/Ale771992/my-app.git
cd my-app

2. Ejecuta la aplicación 
npm start

3. Abre tu navegador y navega a: http://localhost:3000/