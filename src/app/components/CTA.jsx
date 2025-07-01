import React from 'react'

const CTA = () => {
  return (
    <section id="cta" className="ezy__cta4 light py-14 md:py-24 bg-[#291e6a] flex items-center justify-center min-h-[400px]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
            Join with us for more information
          </h2>
          
          <p className="text-lg leading-6 mb-12 max-w-2xl mx-auto">
            It's easier to reach your savings goals when you have the
            right savings account.
          </p>
          
          <form className="w-full max-w-md mx-auto">
            <div className="flex items-center p-2 bg-white rounded w-full">
              <input
                type="email"
                className="min-h-12 leading-10 px-4 flex-1 rounded-l border-0 outline-none"
                placeholder="Enter Email"
                suppressHydrationWarning={true}
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-opacity-90 text-white border border-blue-600 py-3 px-7 rounded-r transition font-normal whitespace-nowrap"
                suppressHydrationWarning={true}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA