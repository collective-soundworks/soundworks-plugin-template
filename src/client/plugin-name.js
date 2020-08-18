const pluginFactory = function(AbstractPlugin) {

  return class PluginName extends AbstractPlugin {
    constructor(client, name, options) {
      super(client, name);

      const defaults = {
        // default config options
      };

      this.options = this.configure(defaults, options);
    }

    async start() {
      super.start();
      // this.state = await this.client.stateManager.create(`s:${this.name}`);
      this.started();

      setTimeout(() => this.ready(), 1000);
    }
  }
}

export default pluginFactory;
