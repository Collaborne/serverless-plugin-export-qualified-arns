# serverless-plugin-export-qualified-arns

Serverless Framework plugin to export the qualified ARNs for Lambda functions under a predictable name.

This is based on the requirements suggested in [serverless/serverless#3661](https://github.com/serverless/serverless/issues/3661).

## Usage

1. Install the plugin

    ```sh
    npm install --save serverless-plugin-export-qualified-arns
    ```

2. Add the plugin to the `serverless.yml` configuration file

    ```yaml
    plugins:
      - serverless-plugin-export-qualified-arns
    ```

3. Use the stack outputs named "function name" + `QualifiedArn`

## License

```text
MIT License

Copyright (c) 2021 Collaborne B.V.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
