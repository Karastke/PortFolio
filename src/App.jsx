import './App.css'
import Porfile from "./assets/Photo.png";

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
            <div>
              <img src={Porfile} width={220}></img>
            </div>
          </div>
            

        </section>
      </main>

    </>
  )
}

export default App
