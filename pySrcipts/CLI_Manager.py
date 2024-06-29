from pySrcipts.ParserManagement import ParserManagement
from pySrcipts.ManagerActions import ManagerAction
from pySrcipts.actions import update_packages, install_packages, stop_running_server

class CLI_Manager(  ):
    
    def __init__(self) -> None:
        
        self.parser = ParserManagement()
    
    def execute( self ):
        self.parser.parse()
        # self.parser.print()

        self.action2execute()

    def action2execute( self ):

        action = self.parser.getParserAction()
        
        if action == ManagerAction.UPDATE_PACKAGES:
            print("Updating Packages")
            update_packages( file_path='./package.json' )
            
        if action == ManagerAction.RESET_PACKAGES:
            print("Reset Packages")
            update_packages( file_path='./package.original.json' )

        if action == ManagerAction.INSTALL_PACKAGES:
            print("Installing Packages")
            install_packages( )

        if action == ManagerAction.CREATE_REDUX_STORE:
            print("Creating Redux Store")
            
        if action == ManagerAction.CREATE_REDUX_SLICER:
            print("Creating Redux Slicer")
        
        if action == ManagerAction.STOP_SERVER:
            print("Stopping Server")
            stop_running_server()
        
