import images from "../src/assets/images.jpg"

function Hero(){
    return(
        <header id='about_me' className="h-screen animate-wiggle flex justify-center items-center mb-9">
            <div className="h-5/6 w-full flex flex-col justify-around items-center p-5 sm:flex-row">
                <img className="rounded-tr-3xl w-full h-1/2 rounded-bl-3xl object-cover mb-2 sm:w-2/5 sm:h-1/2" src={images}></img>
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-bold text-black mb-6 w-auto animate-wiggle tracking-widest">I AM MATIAS SEITOUR</h1>
                    <h2 className="mb-6 text-black text-2xl w-72 font-semibold">FRONTEND DEVELOPER</h2>
                    <p className="break-all text-black mb-3 w-72">Llalalalalasdasdsaasdasasdasdasdasasdasdasdasasddsasdasasdasdsdasalalalalasj</p>
                </div>
            </div>
        </header>
    )
}

export { Hero };