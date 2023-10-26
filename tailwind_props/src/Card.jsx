import React from 'react'

function Card() {
  return (
    <div>
          <h1 className='bg-green-400 text-black rounded'>Hello World</h1>
          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HxV79tFMPfBAIo0BBF-sOgHaEy%26pid%3DApi&f=1&ipt=52c8661fa7c6493a7cc5106738a07bee6747057862613de0891d4d622515590c&ipo=images" alt="" width="384" height="512" />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p className="text-lg font-medium">
                          “Tailwind CSS is the only framework that I've seen scale
                          on large teams. It’s easy to customize, adapts to any design,
                          and the build size is tiny.”
                      </p>
                  </blockquote>
                  <figcaption className="font-medium">
                      <div className="text-sky-500 dark:text-sky-400">
                          Sarah Dayan
                      </div>
                      <div className="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                      </div>
                  </figcaption>
              </div>
          </figure>
    </div>
  )
}

export default Card;