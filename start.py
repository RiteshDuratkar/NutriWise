import os
import subprocess
import sys
import time


# ============================================================
# NutriWise Development Server Launcher
# ============================================================

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

BACKEND_DIR = os.path.join(ROOT_DIR, "backend")
FRONTEND_DIR = os.path.join(ROOT_DIR, "frontend")

VENV_PYTHON = os.path.join(
    BACKEND_DIR,
    "venv",
    "Scripts",
    "python.exe"
)


def print_header():
    print()
    print("=" * 60)
    print("                 NutriWise")
    print("            Development Launcher")
    print("=" * 60)
    print()

    print("Activation Code (venv)       : venv\\Scripts\\activate")
    print("FastAPI Server               : uvicorn main:app --reload")
    print("Development Server           : npm run dev")
    print()

    print("Web Application              : http://localhost:5173/")
    print("Backend                      : http://127.0.0.1:8000/")
    print("Backend Documentation        : http://127.0.0.1:8000/docs")
    print()

    print("=" * 60)
    print("Starting NutriWise servers...")
    print("=" * 60)
    print()


def check_paths():
    if not os.path.isdir(BACKEND_DIR):
        print("ERROR: Backend folder not found.")
        print(BACKEND_DIR)
        sys.exit(1)

    if not os.path.isdir(FRONTEND_DIR):
        print("ERROR: Frontend folder not found.")
        print(FRONTEND_DIR)
        sys.exit(1)

    if not os.path.isfile(VENV_PYTHON):
        print("ERROR: Python virtual environment not found.")
        print(VENV_PYTHON)
        sys.exit(1)


def start_backend():
    print("[BACKEND] Starting FastAPI...")

    backend_process = subprocess.Popen(
        [
            VENV_PYTHON,
            "-m",
            "uvicorn",
            "main:app",
            "--reload"
        ],
        cwd=BACKEND_DIR
    )

    return backend_process


def start_frontend():
    print("[FRONTEND] Starting Vite development server...")

    frontend_process = subprocess.Popen(
        ["npm", "run", "dev"],
        cwd=FRONTEND_DIR,
        shell=True
    )

    return frontend_process


def open_web_application():
    print("[WEB] Opening NutriWise in Chrome...")

    # Give Vite and FastAPI some time to start
    time.sleep(4)

    chrome_path = (
        r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    )

    urls = [
        "http://localhost:5173/",
        "http://127.0.0.1:8000/",
        "http://127.0.0.1:8000/docs"
    ]

    if not os.path.isfile(chrome_path):
        print()
        print("ERROR: Google Chrome was not found at:")
        print(chrome_path)
        print()
        print("Please check your Chrome installation path.")
        return

    subprocess.Popen(
        [chrome_path, "--new-window"] + urls
    )


def main():
    print_header()
    check_paths()

    backend_process = None
    frontend_process = None

    try:
        # ----------------------------------------------------
        # Start Backend
        # ----------------------------------------------------
        backend_process = start_backend()

        time.sleep(2)

        # ----------------------------------------------------
        # Start Frontend
        # ----------------------------------------------------
        frontend_process = start_frontend()

        # ----------------------------------------------------
        # Open Chrome with 3 tabs
        # ----------------------------------------------------
        open_web_application()

        print()
        print("=" * 60)
        print("NutriWise is running!")
        print("=" * 60)
        print()
        print("Frontend : http://localhost:5173/")
        print("Backend  : http://127.0.0.1:8000/")
        print("Swagger  : http://127.0.0.1:8000/docs")
        print()
        print("Chrome opened with 3 NutriWise tabs.")
        print()
        print("Press CTRL + C to stop both servers.")
        print("=" * 60)
        print()

        while True:
            time.sleep(1)

    except KeyboardInterrupt:
        print()
        print()
        print("Stopping NutriWise servers...")

    finally:
        if backend_process:
            backend_process.terminate()

        if frontend_process:
            frontend_process.terminate()

        print("NutriWise servers stopped.")
        print()


if __name__ == "__main__":
    main()