# Brain Games

Игры разума — набор из пяти консольных игр для тренировки мозга. Каждая игра задаёт вопросы, на которые нужно дать правильные ответы. После трёх правильных ответов игра считается завершённой.

## Минимальные требования

    Node.js версии 18 и выше

## Установка
1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/).
2. Склонируйте репозиторий:

```bash
git clone https://github.com/Zoro13252/frontend-project-44.git
cd frontend-project-44
```

## Запуск

```bash
# Запуск игры "Проверка на чётность"
node ./bin/brain-even.js
# Если есть Make
make brain-even

# Запуск игры "Калькулятор"
node ./bin/brain-calc.js
# Если есть Make
make brain-calc

# Запуск игры "НОД"
node bin/brain-gcd.js
# Если есть Make
make brain-gcd

# Запуск игры "Арифметическая прогрессия"
node bin/brain-progression.js
# Если есть Make
make brain-progression

# Запуск игры "Простое ли число"
node bin/brain-prime.js
# Если есть Make
make brain-prime
```

## Игры

### Brain-even

Игра, в которой пользователю нужно определить, является ли число чётным.
[![asciicast](https://asciinema.org/a/dd59VAJvmgWigW8D.svg)](https://asciinema.org/a/dd59VAJvmgWigW8D)

### Brain-calc

Игра, в которой пользователю нужно вычислить результат арифметического выражения.
[![asciicast](https://asciinema.org/a/yrQYInN16d4QH1OD.svg)](https://asciinema.org/a/yrQYInN16d4QH1OD)

### Brain-gcd

Игра, в которой пользователю нужно найти наибольший общий делитель (НОД) двух чисел.
[![asciicast](https://asciinema.org/a/aocewSYb6RpajoJ8.svg)](https://asciinema.org/a/aocewSYb6RpajoJ8)

### Brain-progression

Игра, в которой пользователю нужно найти пропущенное число в арифметической прогрессии.
[![asciicast](https://asciinema.org/a/ATi5KO8Oar8h40AM.svg)](https://asciinema.org/a/ATi5KO8Oar8h40AM)

### Brain-prime

Игра, в которой пользователю нужно определить, является ли число простым.
[![asciicast](https://asciinema.org/a/SegPY1uiUasgnBea.svg)](https://asciinema.org/a/SegPY1uiUasgnBea)

## Hexlet tests and linter status:

[![Actions Status](https://github.com/Zoro13252/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Zoro13252/frontend-project-44/actions)

