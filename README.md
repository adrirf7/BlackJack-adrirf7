# 🃏 BlackJack Game

Juego de BlackJack desarrollado con **JavaScript vanilla** y **Vite**, implementando arquitectura modular y buenas prácticas de desarrollo.

## 🚀 Tecnologías

- **JavaScript ES6+** (Módulos, destructuring, arrow functions)
- **Vite** - Build tool y dev server
- **HTML5 & CSS3**
- **Underscore.js** - Utilidades funcionales

## 📋 Características Técnicas

- ✅ **Arquitectura modular** con separación de casos de uso
- ✅ **Clean Code** con funciones puras y responsabilidad única
- ✅ **Gestión de estado** del juego (baraja, puntos, ases)
- ✅ **Lógica de juego completa**: jugador, crupier, reglas BlackJack
- ✅ **Interfaz responsive** con manipulación del DOM

## 🎮 Funcionalidades

- Baraja aleatoria de 52 cartas
- Sistema de puntuación automático
- Manejo de ases (1 u 11 puntos)
- Turno automático del crupier
- Detección de ganador/perdedor

## 📂 Estructura del Proyecto

```
src/
├── blackJack/
│   ├── usecases/         # Casos de uso separados
│   │   ├── create-deck.js
│   │   ├── take-card.js
│   │   ├── accumulate-points.js
│   │   ├── dealer-turn.js
│   │   └── ...
│   └── index.js          # Punto de entrada
└── main.js
```

## ⚙️ Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🎯 Objetivo del Proyecto

Proyecto desarrollado para demostrar capacidades en:

- JavaScript moderno y patrones de diseño
- Arquitectura de código escalable y mantenible
- Gestión de lógica de negocio compleja
- Desarrollo frontend con herramientas actuales

---

**Desarrollado por Adrián** | [GitHub](https://github.com/adrirf7)
