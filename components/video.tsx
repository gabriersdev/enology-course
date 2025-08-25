export default function Video() {
  return (
    <div className={"mx-4 sm:mx-4 md:mx-auto max-w-6xl mt-20"}>
      <div className={"relative md:mx-4"}>
        <div className={"absolute z-10 bg-gradient-to-t from-black/25 from-black/50 top-0 left-0 p-3 w-full h-full rounded-2xl"}></div>
        
        <video controls={false} autoPlay={true} loop={true} className={"rounded-2xl"}>
          <source src={"/videos/video.mp4"} type="video/mp4"/>
          <span className={"text-black my-4"}>Seu navegador não suporta a reprodução de vídeos.</span>
        </video>
        
        <div className={"text-white absolute bottom-6 left-6 mr-4 md:m-auto md:bottom-12 md:left-12 z-20 sm:max-w-[800px]"}>
          <h1 className={"text-2xl md:text-3xl lg:text-5xl font-semibold text-balance"}>Aprenda a entender as notas dos vinhos mais marcantes e apreciar as maravilhas da vida!</h1>
        </div>
      </div>
    </div>
  )
}