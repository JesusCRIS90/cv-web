from enum import Enum, auto

class ManagerAction(Enum):
    NONE = auto()
    UPDATE_PACKAGES = auto()
    RESET_PACKAGES = auto()
    INSTALL_PACKAGES = auto()
    CREATE_REDUX_STORE = auto()
    CREATE_REDUX_SLICER = auto()
    STOP_SERVER = auto()