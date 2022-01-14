export class SelectelClient {
  public async create() {
    return true;
  }
  public async edit() {
    return true;
  }
  public async getFunctionList() {
    return true;
  }
  public async delete() {
    return true;
  }
}

// import { client } from '@selectel/s8s';

// const functionConfig = {
//   action_name: 'my_first_function',
//   function_id: null, // will be added later
//   function_name: 'main',
//   file_name: 'hello.js',
//   limits: { memory: 256 },
//   module_name: 'hello',
//   runtime: 'nodejs',
//   version: '12',
//   env_vars: {},
// };

// client
//   .uploadModule('./hello.js')
//   .then(({ function_id }) => {
//     return client.startCreateFunction({
//       ...functionConfig,
//       ...{ function_id },
//     });
//   })
//   .then(() => {
//     client.getFunction(functionConfig.action_name);
//   })
//   .then(({ status }) => {
//     if (status.status === 'IN PROGRESS') {
//       // retry get function, until you get status "COMPLETE". This means function is ready for invoke.
//     }
//   })
//   .then(() => {
//     return client.startInvokeFunction(functionConfig.action_name, {
//       inParams: 'test',
//     });
//   })
//   .then(({ activationId }) => {
//     client.getActivationResult(activationId).catch((err) => {
//       // retry getActivationResult if receive 404. It means that invoke hasn't finished yet.
//     });
//     client.getActivationLogs(activationId).catch((err) => {
//       // retry getActivationResult if receive 404. It means that invoke hasn't finished yet.
//     });
//   });
