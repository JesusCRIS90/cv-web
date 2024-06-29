import os
import json
import time
import stat
import shutil
import ctypes
import argparse
import subprocess
from elevate import elevate


class MessageError(Exception):
    """Custom exception for specific error conditions."""
    pass

def is_root():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def clone_and_rename_original_package():
    src = './package.json'
    dst = './package.original.json'
    shutil.copy2(src, dst)

# def remove_node_modules_folder():
#     dir_path = './node_modules'

#     if os.path.exists(dir_path):
#         shutil.rmtree(dir_path)
#         print(f'Directory {dir_path} and all its contents have been removed.')
#     else:
#         print(f'Directory {dir_path} does not exist.')


def remove_node_modules_folder():
    dir_path = './node_modules'

    def handle_remove_readonly(func, path, exc_info):
        # Change the file to be writable and then retry removal
        os.chmod(path, stat.S_IWRITE)
        func(path)

    if os.path.exists(dir_path):
        try:
            shutil.rmtree(dir_path, onerror=handle_remove_readonly)
            print(f'Directory {dir_path} and all its contents have been removed.')
        except PermissionError as e:
            print(f'PermissionError: {e}')
            print(f'Failed to remove {dir_path}')
    else:
        print(f'Directory {dir_path} does not exist.')

def remove_yarn_lock_file():
    file_path = './yarn.lock'

    if os.path.exists(file_path):
        os.remove(file_path)
        print(f'File {file_path} has been removed.')
    else:
        print(f'File {file_path} does not exist.')

def execute_command( command: list ):
    
    print('Executing:', ' '.join(command[2:]))

    result = subprocess.run(command, capture_output=True, text=True, shell=True)
    
    print('stdout:', result.stdout)
    print('stderr:', result.stderr)
    print('Return code:', result.returncode)

def allow_powerShell_script_executation():
    execute_command(['powershell', '-Command', 'Set-ExecutionPolicy RemoteSigned' ])

def clear_console():
    if os.name == 'nt':  # For Windows
        execute_command(command = ['powershell', '-Command', 'clear'])
    else:  # For Unix/Linux/MacOS
        execute_command(['clear'])

def read_package_file( file_path: str ):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
    
        print(f"The file {file_path} read correctly")
        return data
            
    except FileNotFoundError:
        print(f"The file {file_path} does not exist.")
    except json.JSONDecodeError:
        print(f"Failed to decode JSON from the file {file_path}.")
    except Exception as e:
        print(f"An error occurred: {e}")

def is_package_info_valid( packageInfo: dict ):
    
    if not isinstance(packageInfo, dict):
        return False

    if( list( packageInfo.keys() ) == [] ):
        return False
    
    if packageInfo.get("dependencies") is None:
        return False
    
    if packageInfo.get("devDependencies") is None:
        return False
    
    return True

def get_dependencies( packageInfo: dict ):
    
    if not is_package_info_valid(packageInfo):
        raise MessageError("Package information is not valid. Please check the packages.json file content")
    
    dependencies = {
     "devDependencies": [],
     "dependencies": [],   
    }

    try:
      dependencies['dependencies'] = list( packageInfo.get("dependencies").keys() )
      dependencies['devDependencies'] = list( packageInfo.get("devDependencies").keys() )

    except Exception:
        raise MessageError("Some Error happen while is gathering dependencies information")


    # print(dependencies)

    return dependencies

def string_list_to_string( stringList: list ):
    return " ".join( stringList )

def get_argument_parser_action():
    # Create ArgumentParser object
    parser = argparse.ArgumentParser(description='Packages Management')

    # Add positional arguments
    parser.add_argument('arg1', type=str, help='Action Update')

    # Parse the command-line arguments
    args = parser.parse_args()

    # Accessing parsed arguments
    return args.arg1


