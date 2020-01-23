// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs')

module.exports = (on, config) => {
  on('after:screenshot', (details) => {
    // details will look something like this:
    // {
    //   size: 10248
    //   takenAt: '2018-06-27T20:17:19.537Z'
    //   duration: 4071
    //   dimensions: { width: 1000, height: 660 }
    //   multipart: false
    //   pixelRatio: 1
    //   name: 'my-screenshot'
    //   specName: 'integration/my-spec.js'
    //   testFailure: true
    //   path: '/path/to/my-screenshot.png'
    //   scaled: true
    //   blackout: []
    // }

    // example of renaming the screenshot file

    const newPath = 'F:\Bayzat Test\cypress\screenshots'

    return new Promise((resolve, reject) => {
      fs.rename(details.path, newPath, (err) => {
        if (err) return reject(err)

        // because we renamed/moved the image, resolve with the new path
        // so it is accurate in the test results
        resolve({ path: newPath })
      })
    })
  })

  
  module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, args) => {
      // browser will look something like this
      // {
      //   name: 'chrome',
      //   displayName: 'Chrome',
      //   version: '63.0.3239.108',
      //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      //   majorVersion: '63'
      // }
  
      if (browser.name === 'chrome') {
        // `args` is an array of all the arguments
        // that will be passed to Chrome when it launchers
        args.push('--start-fullscreen')
  
        // whatever you return here becomes the new args
        return args
      }
  
      if (browser.name === 'electron') {
        // `args` is a `BrowserWindow` options object
        // https://electronjs.org/docs/api/browser-window#new-browserwindowoptions
        args['fullscreen'] = true
  
        // whatever you return here becomes the new args
        return args
      }
    })
  }
}
