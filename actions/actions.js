import core from '@actions/core'

async function run() {
  console.log('ran! from console.log')
  core.debug('ran! from core.debug')
}

run()