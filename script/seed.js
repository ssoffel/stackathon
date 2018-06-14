'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {StockList} = require('../server/db/models')
const {Portfolio} = require('../server/db/models')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  const cody = await User.create(
    {email: 'cody@email.com', password: '123'}
  )
 const murphy = await User.create(
    {email: 'murphy@email.com', password: '123'}
  )

   await Portfolio.create(
    { symbol: 'UA', sector: 'consumerdurablesapparel', buyPrice: 22.25, shares: 5000, userId: cody.id }
  )
     await Portfolio.create(
    { symbol: 'NKE', sector: 'consumerdurablesapparel', buyPrice: 74.11, shares: 1000, userId: murphy.id }
  )

  await StockList.create(
   { symbol: 'NKE' }
  )

  await StockList.create(
   { symbol: 'AU' }
  )
  await StockList.create(
   { symbol: 'XOM' }
  )
  await StockList.create(
   { symbol: 'MS' }
  )
  await StockList.create(
   { symbol: 'GS' }
  )


  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  //console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err)
      process.exitCode = 1
    })
    .then(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log('closing db connection')
      db.close()
      console.log('db connection closed')
    })
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...')
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
