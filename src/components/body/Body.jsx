import "./body.css"

const Body = () => {
  return (
    <div>
        <section className="h-52 pb-10 grid grid-cols-1 sm:grid-cols-2 xl:h-72 ">
        
            <div className="flex justify-center h-24 pt-2 sm:mt-6 xl:h-44"> 
                <div className="h-full imagen w-1/6 sm:w-1/3 xl:w-1/6"></div>
            </div>

            <div className="grid content-center text-center">
                <h1 className="font-bold font-mono text-3xl ">Crea tu idea</h1>
                <p className="">Somos la empresa número 1 en creacion de contenido de Sublimacion, donde podras encontrar 
                    de la mejor manera el todo, tu tienes la idea y nosotros lo hacemos realidad
                </p>

            </div>
        
      </section >

        <section className=" beneficios h-72 grid grid-cols-1 sm:grid-cols-2 ">
   
                <div className="grid content-center text-center">
                    <h1 className="font-bold font-mono text-3xl text-center">Crea tu idea</h1>
                    <p className="">
                        Somos la empresa número 1 en creacion de contenido de Sublimacion, donde podras encontrar 
                        de la mejor manera el todo, tu tienes la idea y nosotros lo hacemos realidad
                       
                    </p>

                </div>
  
            <div className="flex justify-center h-24 pt-2 sm:mt-7 xl:h-44"> 
                <div className=" imagen w-1/6  h-full sm:w-1/6 rounded-full"></div>
            </div>      
      </section >

      <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto  outline-double outline-3 outline-offset-2 outline-cyan-500 rounded-2xl   p-10 grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">conoce nuestro grupo</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                </div>

                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src="https://tse2.mm.bing.net/th?id=OIP.OM6Z1rS88tAMNvE9F3vVXQHaJP&pid=Api&P=0&h=180" alt="foto" />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">ENDER TORRES</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">DISEÑADOR WEB SEMI-SENIOR</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.5TupH3c6D-Ma65KuMnEsOwHaJP&pid=Api&P=0&h=180" alt="foto" />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">MAXIMO CAVERO</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">DISEÑADOR WEB SENIOR</p>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Categorias</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className="group relative">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="" />

                        </div>
                        <h3 className="mt-6 text-sm text-gray-500">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Desk and Office
                            </a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
                        </div>
                        <div className="group relative">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="" className="h-full w-full object-cover object-center"/>
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Self-Improvement
                            </a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
                        </div>
                        <div className="group relative">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="" class="h-full w-full object-cover object-center"/>
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Travel
                            </a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    

  )
}

export default Body