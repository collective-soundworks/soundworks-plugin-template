const schema = {

}

const pluginFactory = function(AbstractPlugin) {

  return class PluginName extends AbstractPlugin {
    constructor(server, name, options) {
      super(server, name);

      const defaults = {
        // default config options
      }

      this.options = this.configure(defaults, options);
      // this.states = new Map();
      // this.server.stateManager.registerSchema(`s:${this.name}`, schema);
    }

    start() {
      // this.server.stateManager.observe(async (schemaName, clientId) => {
      //   if (schemaName === `s:${this.name}`) {
      //     const state = await this.server.stateManager.attach(schemaName, clientId);

      //     this.states.set(clientId, state);

      //     state.onDetach(() => {
      //       this.states.delete(clientId);
      //     });
      //   }
      // });

      this.started();

      setTimeout(() => this.ready(), 1000);
    }

    connect(client) {
      super.connect(client);
    }

    disconnect(client) {
      super.disconnect(client);
    }
  }
}

export default pluginFactory;
