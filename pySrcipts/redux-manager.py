# from utils import update_packages, get_argument_parser_action, MessageError
import argparse

parser = argparse.ArgumentParser(description='Python Project Manager')

parser.add_argument('args', nargs='+', help='List of arguments')

args = parser.parse_args()

items = args.args

print("Items:", items)
