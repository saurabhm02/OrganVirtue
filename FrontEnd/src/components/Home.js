import React from 'react'
import banner from "../assets/banner.png"
import Navbar from './Navbar'
import Home1 from "../assets/Home1.png"
import Home2 from "../assets/Home2.png"
import Home3 from "../assets/Home3.png"

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-0 overflow-hidden">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div >
            <img src={banner} alt="banner" className='max-w-none'></img>
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-center font-serif font-bold mt-[-1%] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 '>Why one should donate organ?</h1>
        </div>
        <div className='flex flex-row'>
          <div>
            <p className='text-xl text-gray-800 font-serif italic w-[130%] mt-4 ml-2'>"Organ donation is a powerful and life-changing act of kindness that has the potential to save and transform the lives of others. By donating your organs, you have the power to make a profound impact on someone else's life and give them a second chance at life. Imagine the joy and relief you could bring to a family that has been waiting anxiously for a life-saving organ transplant. Your selfless act of donating organs can provide hope and healing to those who need it the most. It's a simple gesture that can have a ripple effect on society, inspiring others to do the same and raising awareness about the importance of organ donation. So, consider the incredible impact you could make by becoming an organ donor, and give the gift of life to someone in need"</p>
          </div>
          {/* <div className='w-[150%]'> */}
          <img src='https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/11/30085955/organ.jpg' alt='organ' className='rounded-xl h-[100%] w-[35%] ml-[16%] mt-2 shadow-lg shadow-gray-500'></img>
          {/* </div> */}
        </div>
        <div className='text-3xl text-center font-serif font-bold mt-8 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
          <h1>How we are supporting this nobel cause.</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 cursor-pointer overflow-hidden mt-4 ">
          <img
            className="object-cover w-full border transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg"
            src={Home1} alt='grid1' />
          <img
            className="object-cover w-full border transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg"
            src={Home3} alt='grid2' />
          <img
            className="object-cover w-full border transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg"
            src={Home2} alt='3' />
          <img
            className="h-[100%] object-cover w-full border transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg"
            src="https://storage.googleapis.com/jacksonh/1/2016-03-04-OrganDonation.jpg" alt='4' />
        </div>
        <div className='text-3xl text-center font-serif font-bold mt-4 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
          <h1>Hear from some of the superheroes itself</h1>
        </div>
        <div>
          <section class="mb-10 text-gray-800 text-center mt-3">
            <div class="grid md:grid-cols-3 gap-x-6 xl:gap-x-12 cursor-pointer">
              <div class="mb-6 lg:mb-0">
                <div class="bg-white block rounded-lg shadow-xl transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-102 duration-300">
                  <div class="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="w-[40%] rounded-xl ml-[30%] mt-4" alt='' />
                  </div>
                  <div class="p-6">
                    <h5 class="text-lg font-bold mb-2">Rashi</h5>
                    <h6 class="font-medium text-blue-600 mb-4">Baudh Gaya</h6>
                    <div class="flex justify-center mb-4 mt-[-4%]">
                      <img className='w-[40%]' src='https://t3.ftcdn.net/jpg/02/97/01/64/360_F_297016408_5u0GkUlSv9oeRR0Z57kCn3aqu2flZn5V.jpg' alt=''/>
                    </div> 
                    <p>OrganAngel is such a great platform which working for a great nobel cause, my experience with them is really well.There is no offline visits and all you can do is donate your organ so that someone can survive.</p>
                  </div>
                </div>
              </div>

              <div class="mb-6 lg:mb-0">
                <div class="bg-white block rounded-lg shadow-xl transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-102 duration-300">
                  <div class="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="w-[40%] rounded-xl ml-[30%] mt-4" alt='' />
                  </div>
                  <div class="p-6">
                    <h5 class="text-lg font-bold mb-1">Viven Vatsal</h5>
                    <h6 class="font-medium text-blue-600 mb-4">Muzzafur</h6>
                    <div class="flex justify-center mb-6">
                    <img className='w-[40%] mt-[-4%]' src='https://t3.ftcdn.net/jpg/04/20/03/48/360_F_420034841_AKpgqQGkkUyeD7oWc9y8vGTMwT4GmbHm.jpg' alt=''/>
                    </div>
                    <p>A great compnay , makes the process of organ donation to my doorstep. I was planning from long time for donation but organAngel give me that platform to do it in no time.</p>
                  </div>
                </div>
              </div>

              <div class="">
                <div class="bg-white block rounded-lg shadow-xl transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-102 duration-300">
                  <div class="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" class="w-[40%] rounded-xl ml-[30%] mt-4" alt='' />
                  </div>
                  <div class="p-6">
                    <h5 class="text-lg font-bold mb-2">Nand Nondon</h5>
                    <h6 class="font-medium text-blue-600 mb-4">Jamshedpur</h6>
                    <ul class="flex justify-center mb-6">
                    <img className='w-[40%] mt-[-4%]' src='https://t3.ftcdn.net/jpg/02/97/01/64/360_F_297016408_5u0GkUlSv9oeRR0Z57kCn3aqu2flZn5V.jpg' alt=''/>
                    </ul>
                    <p>I also have joined this nobel cause and felling very happy that after me someone will survive by me what else can be more satisfying than this. Thank you organAngel.</p>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  )
}

export default Home