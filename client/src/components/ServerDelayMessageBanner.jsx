import React from 'react'

function ServerDelayMessageBanner() {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      className="fixed top-16 w-full border border-[#e7195a] text-[#e7195a] rounded p-2.5 border-solid bg-[#ffefef] overflow-hidden -rotate-3"
    >
      <div class="flex space-x-2 ">
        <p class="inline-block animate-scroll">
          Please note that our backend deployment process may experience
          temporary interruptions due to inactivity detection by our hosting
          provider. If such an interruption occurs, deployment will
          automatically resume after approximately 50 seconds. We apologize for
          any inconvenience this may cause and appreciate your understanding.
        </p>
        <p class="inline-block animate-scroll">
          Please note that our backend deployment process may experience
          temporary interruptions due to inactivity detection by our hosting
          provider. If such an interruption occurs, deployment will
          automatically resume after approximately 50 seconds. We apologize for
          any inconvenience this may cause and appreciate your understanding.
        </p>
      </div>
    </marquee>
  )
}

export default ServerDelayMessageBanner
