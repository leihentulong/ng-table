Table + AngularJS
=================
[![Build Status](https://travis-ci.org/esvit/ng-table.svg)](https://travis-ci.org/esvit/ng-table) [![Coverage Status](https://coveralls.io/repos/esvit/ng-table/badge.png)](https://coveralls.io/r/esvit/ng-table)

Code licensed under New BSD License.

This directive allow to liven your tables. It support sorting, filtering and pagination.
Header row with titles and filters automatic generated on compilation step.

## Bower package *deprecation* notice

Updates to this library will be **no longer published to bower**.

Updates to this library will be published to npm only.


## Upgrading from an earlier version?

### Upgrade from 0.8.3

It's recommended to upgrade in two jumps:

1. Upgrade to version 1.0.0-beta.9, making any changes to your application code neccessary to work with this version
2. Refactor your application to remove any code that depended on depreciated behaviours that where removed in the 1.0.0 release
3. Install 1.0.0 (should now be a drop in replacement for 1.0.0-beta.9)


### Upgrade from version earlier than 0.8.3

It's recommended to upgrade in three jumps:

1. Upgrade to version 0.8.3, making any changes to your application code neccessary to work with this version
    * EG: `bower install ng-table#0.8.3 --save`
3. Follow the guide above to upgrade from 0.8.3 -> 1.0.0-beta.9 -> 1.0.0

**Tips**
* To install an earlier version of ng-table (1.0.0-beta.9 in this case): `bower install ng-table#1.0.0-beta.9 --save`
* Read the [CHANGELOG.md](CHANGELOG.md). Each release details the breaking changes and migration guidance



## Installing

**NPM**
```
npm install ng-table --save
```

**CDN**

You can download the distribution files directly from [npmcdn](https://npmcdn.com/ng-table/dist/)

## Getting started

Please follow the getting started steps [here](http://ng-table.com/)

## Using Typescript?

Install the type definition files for ng-table:
```
typings install github:christianacca/typed-ng-table/typings.json#930b5a14174e594d6167691ed0938be42a6b06aa --global --save
```
**WARNING:**. The type definitions on [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/ng-table) 
and [@types/ng-table](https://www.npmjs.com/package/@types/ng-table) are depreciated.


## Development
We use Karma to ensure the quality of the code. The easiest way to run these checks is to use `npm test`:

```sh
npm install && npm run setup
npm run build
npm test
```

The karma task will try to open Firefox and Chrome as browser in which to run the tests. Make sure this is available or change the configuration in `karma.conf.js`


## Configuring ng-table
For a list of configuration options available, see [examples website](http://ng-table.com/)


## Updates

See CHANGELOG.md

## Submitting an issue

Please be responsible, the open source community is not there to guess your problem or to do your job. When submitting an issue try as much as possible to:

1. search in the already existing issues or on [stackoverflow](http://stackoverflow.com/questions/tagged/ngtable?sort=newest&pageSize=30) if your issue has not been raised before.

2. give a precise description mentionning angular version, ng-table version.

3. give a way to reproduce your issue, the best would be with a <strong>running example</strong>, you can use [plunkr](http://plnkr.co/), or [codepen](http://codepen.io/). **Tip:** See below for a list of base codepen's you can fork

4. isolate your code sample on the probable issue to avoid pollution and noise.

5. Close your issue when a solution has been found (and share it with the community)

Note that 80% of the open issues are actually not issues but "problem" due to developpers laziness or lack of investigation. These "issues" are a waste of time for us and especially if we have to setup a sample to reproduce the issue which those developpers could have done. Any open issue which does not fulfill this contract will be closed without investigation.


## Examples

* [Demo site](http://ng-table.com/)
* Codepen examples (**Tip**: fork these to create your own examples);
    * [`ngTable`: inmemory list](http://codepen.io/christianacca/pen/VLqVeo?editors=101)
    * [`ngTable`: server-side list](http://codepen.io/christianacca/pen/VLqqjP?editors=101)
    * [`ngTableDynamic`: inmemory list](http://codepen.io/christianacca/pen/jPxgzY?editors=101)
    * [`ngTableDynamic`: server-side list](http://codepen.io/christianacca/pen/JdwwrR/?editors=101)

## Compatibility

For work in IE < 9 need jQuery, just add:
```html
<!--[if lt IE 9]>
  <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<![endif]-->
```

## Plugins

* [Export to CSV](https://github.com/esvit/ng-table-export)

#### PS
Let me know if you are using **ng-table**. It will motivate me to work harder.
And if you like **ng-table**, just email me and add your website [here](http://bazalt-cms.com/ng-table/who-is-using)
Hope you like it, Thanks! :)

---

This project is part of [Bazalt CMS](http://bazalt-cms.com/).
