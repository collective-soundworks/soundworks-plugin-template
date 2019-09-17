const serviceFactory = function(Service) {

  return class ServiceName extends Service {
    constructor(client, name, options) {
      super(client, name);

      const defaults = {
        // default config options
      };

      this.options = this.configure(defaults, options);
    }

    async start() {
      super.start();

      this.state = await this.client.stateManager.create(`s:${this.name}`);
      this.started();

      setTimeout(() => this.ready(), 1000);
    }
  }
}

// not mandatory
serviceFactory.defaultName = 'service-name';

export default serviceFactory;
