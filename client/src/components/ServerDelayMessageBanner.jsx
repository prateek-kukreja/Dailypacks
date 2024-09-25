import React from 'react'

function ServerDelayMessageBanner() {
  return (
    <div className="w-full border border-[#e7195a] text-[#e7195a] rounded p-2.5 border-solid bg-[#ffefef] overflow-hidden ">
      <div class="flex flex-shrink-0 whitespace-nowrap animate-scroll">
        <p class="inline-block">
          Please note that our backend deployment process may experience
          temporary interruptions due to inactivity detection by our hosting
          provider. If such an interruption occurs, deployment will
          automatically resume after approximately 50 seconds. We apologize for
          any inconvenience this may cause and appreciate your understanding.
        </p>
      </div>
    </div>
  )
}

export default ServerDelayMessageBanner
