import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center py-5">
        <Image className="w-[1200px] rounded-lg" src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/52/b1/52b1bb50bff9caa98ee302e4151a6fd1.png" alt="" width={1200} height={300} unoptimized/>
      </div>
    </div>
  )
}

export default Banner;