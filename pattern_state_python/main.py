class State:
    def do_action(self):
        pass

class StateA(State):
    def do_action(self):
        print("State A: Realizando acción específica")

class StateB(State):
    def do_action(self):
        print("State B: Realizando acción específica")

class Context:
    def __init__(self):
        self.state = StateA()

    def change_state(self, state):
        self.state = state

    def perform_action(self):
        self.state.do_action()

# Uso del patrón de diseño State
context = Context()
context.perform_action()  # Salida: State A: Realizando acción específica

context.change_state(StateB())
context.perform_action()  # Salida: State B: Realizando acción específica
