import './App.css'
import Porfile from "./assets/Photo.png";
import PorfileBg from "./assets/small.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import Linkedin from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
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
        {/* 배너 부분 추가 예정 */}
        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
            <div>
              <h1 className='font-bold text-4xl'>Hello! I'm Youngwook</h1>
              <h1 className='font-bold text-4xl mt-1 gradiant-text'>Full-Stack Developer</h1>
              <p className='mt-4 text-gray-400'>Seeking to apply competent development skills with focus on collaboration, communication, and passion</p>
            </div>
            <div className='relative'>
              <img src={Porfile} width={320} className='relative z-10' />
              <img src={PorfileBg} className='absolute top-0 left-10 z-0' />
            </div>
          </div>
        </section>
        {/* Project section */}
        <section>
          <div className='container m-auto px-4 py-12'>
            <h2 className='text-2xl font-semibold '>Projects</h2>
            <div className='flex gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project1} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>가구 판매 페이지</h3>
                <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS 레이아웃을 이용한 온라인 가구샵 홈페이지입니다.</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project2} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>가구 판매 페이지</h3>
                <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS 레이아웃을 이용한 온라인 가구샵 홈페이지입니다.</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
            </div>
            <div className='flex gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project1} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>가구 판매 페이지</h3>
                <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS 레이아웃을 이용한 온라인 가구샵 홈페이지입니다.</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project2} className='w-full h-auto' />
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
        {/* 기술 섹션 작성하기*/}
        <section className='py-10'>
          <div className='container m-auto px-4'>
            <h2 className='text-4xl font-semibold'>Technologies</h2>
            <div className='mt-14'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>Unity(C#)</h2>
                  <p className='text-gray-500'>Intermidate</p>
                </div>        {/* 퍼센티지 조정하는거 = w-[50%] */}
                <span className='w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>Javascript, React</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>JAVA, Spring Boot</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
            </div>
          </div>
        </section>
        {/* 추가 기술 기재 */}
        <section>
          <div className='container m-auto px-4 py-14'>
            <h2 className='text-3xl font-semibold'>Additional Technologies and Skills</h2>
            <div className='text-xl flex justify-between mt-12 w-[80%]'>
              <div>
                <p className='font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-3'>Git </p>
              </div>
              <div>
                <p className='font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-3'>English </p>
              </div>
              <div>
                <p className='font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-3'>Teamwork </p>
              </div>
              <div>
                <p className='font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-3'>Teamwork </p>
              </div>
            </div>
            <div className='text-xl flex justify-between mt-8 w-[80%]'>
              <div>
                <p className='font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-3'>Git </p>
              </div>
              <div>
                <p className='font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-3'>English </p>
              </div>
              <div>
                <p className='font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-3'>Teamwork </p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-8'>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>About me</h2>
            <div className='mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-0 before:w-1 before:bg-white'>
              <div className='pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                <h3 className='font-semibold text-lg absolute left-0'>2022</h3>
                <p>조선대학교 경영학부 재학 중 개발에 관심을 가지게 되었습니다. 그리하여 가나다라마바사 </p>

              </div>
              <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                <h3 className='font-semibold text-lg absolute left-0'>2024</h3>

                <p>졸업 이후 본격적으로 교육을 받아 프론트엔드와 백엔드 분야를 다룰 수 있는 기술을 배웠습니다.</p>
              </div>
              <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                <h3 className='font-semibold text-lg absolute left-0'>2024</h3>
                <p>부족한 CS지식을 채우기 위해 직접 컴퓨터를 제작해 간단한 프로그램을 개발하는 Nand2Tetris 프로젝트를 진행했습니다.</p>
              </div>
              <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                <h3 className='font-semibold text-lg absolute left-0'>2024</h3>
                <p>실무에 빠르게 적응하기 위해 여러가지 개인적인 프로젝트를 진행할 예정입니다.</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='container m-auto flex justify-between px-4 py-6'>
          <div>
            <p className='text-gray-300 text-sm'> Copyright @ 2024</p>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li>
                <a><img src={Facebook} className='w-8' /></a>
              </li>
              <li>
                <a><img src={Instagram} className='w-8'/></a>
              </li>
              <li>
                <a><img src={Linkedin} className='w-8'/></a>
              </li>
            </ul>

          </div>
        </div>
      </footer>
    </>
  )
}

export default App
