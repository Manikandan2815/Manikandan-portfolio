#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server():
    # Change current working directory to script location
    os.chdir(DIRECTORY)
    
    # Configure socket server
    handler = PortfolioHTTPRequestHandler
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("", PORT), handler) as httpd:
            print(f"==================================================")
            print(f" Manikandan R. Portfolio Dev Server")
            print(f"==================================================")
            print(f" Serving files from: {DIRECTORY}")
            print(f" Local URL:          http://localhost:{PORT}")
            print(f" Press Ctrl+C to stop the server")
            print(f"==================================================")
            
            # Automatically open browser
            webbrowser.open(f"http://localhost:{PORT}")
            
            # Start loop
            httpd.serve_forever()
            
    except PermissionError:
        print(f"Error: Port {PORT} is restricted. Try running with admin privileges or use another port.")
    except OSError as e:
        print(f"Error: Port {PORT} is already in use. Clean up other processes or change PORT in run.py.")
    except KeyboardInterrupt:
        print("\nStopping dev server. Goodbye!")
        sys.exit(0)

if __name__ == "__main__":
    run_server()
