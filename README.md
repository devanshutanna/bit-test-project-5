# Bit Project Template

## How create the project

Use this template by clicking on `Use this template` button on top, or go to this [link](https://github.com/online-directory/bit-project-template/generate).

Then give it an a name, and `Create repository from template`.

Here u can find more information about it, [creating-a-repository-from-a-template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

You would need to add `BIT_TOKEN`, `BIT_USERNAME` and `BIT_COLLECTION_NAME` for this repo, so ask an admin to assure they are there.

## How to develop

Clone the repo you just made in your local machine, and run `npm ci`.

### <a class="anchor" aria-hidden="true" id="install-bit-cli"></a>[](#install-bit-cli)Install Bit CLI

Install Bit CLI on your computer using npm:

    npm install bit-bin -g

Visit [Install Bit](https://docs.bit.dev/docs/installation) for other installation methods.

If you have Bit installed, verify the installation by running the command:

    bit --version

### Then create a module
For exporting component to bit you would need it in a module.
So create module for your component.

And don't forgat to export them from module.

Then you are ready to add them to bit.

### Track a New Component

This the command that tell Bit about the component and the files that are related to it. And this causes the component data to be added to `.bitmap` file.

    bit add <path-to-component-folder>  --main <path-to-module-file>
For example,

    bit add src/app/hello-world  --main src/app/hello-world/hello-world.module.ts

And now you can just commit and push your code and it will be automatically be added in bit.
