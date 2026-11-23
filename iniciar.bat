@echo off
title Servidor Recreacion - Next.js
cd /d "%~dp0"

:: Asegurar que la ruta de Node.js este disponible
set "PATH=C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%APPDATA%\npm;%PATH%"
set "NODE_OPTIONS=--require ./patch-node.js"

echo ======================================================
echo           INICIANDO PORTAL DE RECREACION
echo ======================================================
echo.

:: 1. Verificar si Node.js esta disponible
where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] No se encuentra Node.js.
    echo Por favor instala Node.js o reinicia tu computadora.
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js detectado correctamente.
echo.

:: 2. Instalar dependencias si no existen
if not exist "node_modules\" goto :INSTALL_DEPS
goto :START_SERVER

:INSTALL_DEPS
echo [PASO 1 de 2] Descargando librerias de Next.js, Tailwind y Lucide...
echo Por favor espera un momento, esto solo se hace la primera vez.
echo.
call npm.cmd install
if errorlevel 1 (
    echo.
    echo [ERROR] Fallo npm install al descargar dependencias.
    echo.
    pause
    exit /b 1
)
echo.
echo [OK] Librerias instaladas con exito.
echo.

:START_SERVER
echo [PASO 2 de 2] Arrancando servidor de desarrollo...
echo.
echo ======================================================
echo  Abre en tu navegador la siguiente direccion:
echo             http://localhost:3000
echo ======================================================
echo.

start "" "http://localhost:3000"

call npm.cmd run dev

echo.
echo El servidor se ha detenido.
pause
