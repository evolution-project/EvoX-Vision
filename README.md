# [EvoX Vision](https://vision.evolution-network.org/)


[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

EvoX Vision is a blockchain explorer for Evolution Network


## Contributing

If you're new to open source, check out some of these resources to help you get started.

* [Github - Open Source Guides ](https://opensource.guide)
* [EggHead.io - How to contribute to open source](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)


### Open and Transparent

All of our work happens directly on [GitHub](https://github.com/evolution-project/EvoX-Vision). All pull requests by core team members and external contributors go through the same review process.


### Branch Organization

Pull requests should be made against the [master branch](https://github.com/evolution-project/EvoX-Vision/tree/master).



### Build and Run



#### Prerequisits

* [Git](https://git-scm.com/)
* [NVM](https://github.com/nvm-sh/nvm)
* [Node.js](https://nodejs.org/en/) 11.9.0

Get source code and download dependencies:

``` nvm use 11.9.0 ```

``` git clone https://github.com/evolution-project/EvoX-Vision.git ```

``` cd Evox-Vision ```

``` npm i ```



**Note**: For more information on how to install NPM modules globally on UNIX systems without resorting to sudo, refer to [this guide](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/).



#### Run

`npm run start`

This will run a local development server which default to http://localhost:8080

#### Build

`npm run build`

Generates a minified build in `/dist`

Move `/dist` to `/var/www/`



## Feedback

* Request new features on [GitHub](https://github.com/evolution-project/EvoX-Vision/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)
* Join our [Discord](https://discord.com/invite/erYnAQf)
* Send us a tweet [@Evolution_EvoX](https://twitter.com/Evolution_EvoX?lang=en)



## Related Projects

* [Onion Explorer](https://github.com/moneroexamples/onion-monero-blockchain-explorer)



## License

EvoX-Vision is [MIT licensed](./LICENSE).
