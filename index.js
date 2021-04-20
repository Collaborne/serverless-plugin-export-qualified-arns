/**
 * @implements {import('serverless/classes/Plugin')}
 */
class ExportQualifiedArnsPlugin {
	/**
	 *
	 * @param {import('serverless')} serverless
	 */
	constructor(serverless) {
		this.serverless = serverless;
		this.provider = this.serverless.getProvider('aws');

		this.hooks = {
			'before:aws:package:finalize:mergeCustomProviderResources': async () => {
				// For all known functions that have a versionLogicalId: Export a ref to that.
				for (const functionName of this.serverless.service.getAllFunctions()) {
					const functionObject = this.serverless.service.getFunction(
						functionName,
					);
					if (!functionObject.versionLogicalId) {
						// No version for this function configured
						continue;
					}
					const outputName = `${this.provider.naming.getLambdaLogicalId(
						functionName,
					)}QualifiedArn`;
					if (!this.serverless.service.resources.Outputs) {
						this.serverless.service.resources.Outputs = {};
					}
					if (outputName in this.serverless.service.resources.Outputs) {
						// Output with this name exist, keep it.
						continue;
					}
					this.serverless.service.resources.Outputs[outputName] = {
						Value: {
							Ref: functionObject.versionLogicalId,
						},
					};
				}
			},
		};
	}
}

module.exports = ExportQualifiedArnsPlugin;
