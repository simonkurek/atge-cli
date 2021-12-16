import json


class Compiler:
    def __init__(self):
        self.commands = []
        self.result_commands = []
        self.command_map = {
            'print': {
                "id": 0,
                "value": 0,
                "text": ""
            },
            'enter': {
                "id": 1,
                "value": 1
            },
            'dots': {
                "id": 2,
                "value": 1
            },
            'sleep': {
                "id": 3,
                "value": 1000
            },
            'clear': {
                "id": 4,
                "value": 0
            }
        }
        self.file_name = 'commands.js'
        self.read_file(self.file_name)
        self.parse_commands()
        print(json.dumps(self.result_commands, indent=2))

    def read_file(self, file_name):
        with open(file_name, 'r') as file:
            self.commands = file.read().splitlines()

    def parse_commands(self):
        for command in self.commands:
            com, arg = command.split('(')
            arg = arg.replace(')', '')
            json_command = self.command_map[com]
            try:
                json_command['value'] = int(arg)
            except ValueError:
                if len(arg) > 0:
                    if '"' in arg:
                        arg = arg.replace('"', '')
                    json_command['text'] = arg
            self.result_commands.append(json_command)


if __name__ == '__main__':
    compiler = Compiler()

# https://rete.js.org/#/
