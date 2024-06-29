from pySrcipts.utils import *

def update_packages( file_path: str ):

    stop_running_server()

    clear_console()
    print(f'JSON File to Read {file_path}')
    # Step 1 - Read package.json file and Getting Dependencies
    dependencies = get_dependencies( read_package_file( file_path ) )

    # Step 2 - Use command -> yarn remove to remove dependencies
    clear_console()
    execute_command(['powershell', '-Command', 'yarn', 'remove', string_list_to_string( dependencies['dependencies'] )])
    
    clear_console()
    execute_command(['powershell', '-Command', 'yarn', 'remove', string_list_to_string( dependencies['devDependencies'] )])

    # Step 3 - Delete Yarn.lock file
    remove_yarn_lock_file()

    # Step 4 - Delete node_modules folder
    remove_node_modules_folder()

    # Step 5 - Re-Install Dependencies
    print(f'/n installing dependencies. Do not Close Terminal. This process could last some time /n')
    
    clear_console()
    execute_command(['powershell', '-Command', 'yarn', 'add', string_list_to_string( dependencies['dependencies'] )])
    
    clear_console()
    execute_command(['powershell', '-Command', 'yarn', 'add', '-D', string_list_to_string( dependencies['devDependencies'] )])

def install_packages():
    stop_running_server()
    clear_console()
    execute_command(['powershell', '-Command', 'npm', 'install', '--force'])
    pass

def stop_running_server(port = 5173):
    execute_command(['powershell', '-Command', 'npx', 'kill-port', str(port) ])
