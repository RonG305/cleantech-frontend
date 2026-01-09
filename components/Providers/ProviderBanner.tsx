import React from 'react'

interface ProviderBannerProps {
    name: string
    tagline: string
}

const ProviderBanner = ({ name, tagline }: ProviderBannerProps) => {
  return (
    <div className='md:h-[30vh] h-[20vh] bg-primary rounded-2xl p-4 sm:p-6 md:p-8 mb-8 text-white'>
        <div className=" rounded-md ">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {name}
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-md">
                  {tagline}
                </p>

              </div>
    </div>
  )
}

export default ProviderBanner
