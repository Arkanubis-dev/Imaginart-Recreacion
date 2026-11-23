@echo off
title Detener Servidor Recreacion
cd /d "%~dp0"

echo ======================================================
echo           DETENIENDO SERVIDOR DE RECREACION
echo ======================================================
echo.

set FOUND=0

:: Buscar proceso escuchando en el puerto 3000 y cerrarlo
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do (
    set FOUND=1
    echo [INFO] Cerrando proceso con PID %%a en el puerto 3000...
    taskkill /f /pid %%a >nul 2>&1
)

echo.
if "%FOUND%"=="1" (
    echo [EXITO] El servidor en el puerto 3000 ha sido apagado correctamente.
) else (
    echo [INFO] No habia ningun servicio activo en el puerto 3000.
)

echo ======================================================
echo.
pause
