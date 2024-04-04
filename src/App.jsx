import './App.css'
import Porfile from "./assets/Photo.png";
import PorfileBg from "./assets/small.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
function App() {

  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-bold text-xl'>Youngwook Portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </header>
      <main>
        {/* 배너 부분 추가 예정 */ }
        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
            <div>
              <h1 className='font-bold text-4xl'>Hello! I'm Youngwook</h1>
              <h1 className='font-bold text-4xl mt-1 gradiant-text'>Full-Stack Developer</h1>
              <p className='mt-4 text-gray-400'>Seeking to apply competent development skills with focus on collaboration, communication, and passion</p>
            </div>
            <div className='relative'>
              <img src={Porfile} width={420} className='relative z-10'/>
              <img src={PorfileBg} className='absolute top-0 left-20 z-0'/>
            </div>
          </div>
        </section>
        {/* Project section */}
        <section>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold '>Projects</h2>
            <div className='flex gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project1} />
                <h3 className='text-2xl font-semibold mt-8'>가구 판매 페이지</h3>
                <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS 레이아웃을 이용한 온라인 가구샵 홈페이지입니다.</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project2} />
                <h3 className='text-2xl font-semibold mt-8'>가구 판매 페이지</h3>
                <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS 레이아웃을 이용한 온라인 가구샵 홈페이지입니다.</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
