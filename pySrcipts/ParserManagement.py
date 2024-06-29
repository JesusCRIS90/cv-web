import argparse

from pySrcipts.ManagerActions import ManagerAction

class ParserManagement():

    def __init__(self) -> None:

        self.arguments = []
        self.isValid = False
        self.struturedArgs = {
            "section": "",
            "action": "",
            "args": []
        }

        self.action = ManagerAction.NONE
        
        self.parser = argparse.ArgumentParser(description='Python Project Manager')
        self.parser.add_argument('args', nargs='+', help='List of arguments')

    
    def parse(self) -> None:
        self.arguments = self.parser.parse_args().args
        self.identify_action()

    
    def getParserAction( self ):
        return self.action

    def identify_action( self ) -> None:
        
        self.action = ManagerAction.NONE

        if not self.arguments:
            return
            
        if len( self.arguments ) < 2:
            return

        self.to_lower_case_arguments()
        
        # Identify Actions
        if self.arguments[ 0 ] == "packages":
            
            if self.arguments[ 1 ] == "update":
                self.action = ManagerAction.UPDATE_PACKAGES
                return
            
            if self.arguments[ 1 ] == "reset":
                self.action = ManagerAction.RESET_PACKAGES
                return
            
            if self.arguments[ 1 ] == "install":
                self.action = ManagerAction.INSTALL_PACKAGES
                return
            

        if self.arguments[ 0 ] == "redux":
            
            if self.arguments[ 1 ] == "createstore":
                self.action = ManagerAction.CREATE_REDUX_STORE
                return
            
            if self.arguments[ 1 ] == "createslice":
                self.action = ManagerAction.CREATE_REDUX_SLICER
                return
        

        if self.arguments[ 0 ] == "server":
            
            if self.arguments[ 1 ] == "stop":
                self.action = ManagerAction.STOP_SERVER
                return
        
        
    def to_lower_case_arguments(self):
        lower_case_args = []

        for arg in self.arguments:
            lower_case_args.append( arg.lower() )

        self.arguments = lower_case_args

    def print(self) -> None:
        print( self.arguments )
        print( "Action to Execute", self.getParserAction().name )