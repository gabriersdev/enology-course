import GridCards from "@/components/grid-cards";

export default function AdvCourse() {
  const data = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-pink-700"}>
          <path
            d="M120-80v-80h80v-128q-35-12-57.5-42.5T120-400v-320h240v320q0 39-22.5 69.5T280-288v128h80v80H120Zm80-440h80v-120h-80v120Zm40 160q17 0 28.5-11.5T280-400v-40h-80v40q0 17 11.5 28.5T240-360ZM520-80q-33 0-56.5-23.5T440-160v-382q0-26 15-46.5t39-29.5l38-14q14-5 21-14.5t7-23.5v-170q0-17 11.5-28.5T600-880h120q17 0 28.5 11.5T760-840v170q0 14 7 23.5t21 14.5l38 14q24 9 39 29.5t15 46.5v382q0 33-23.5 56.5T800-80H520Zm120-680h40v-40h-40v40ZM520-480h280v-62l-38-14q-38-14-60-44t-22-68v-12h-40v12q0 38-22 68t-60 44l-38 14v62Zm0 320h280v-80H520v80Zm0-160h280v-80H520v80ZM240-440Zm280 120v-80 80Z"/>
        </svg>
      ),
      title: "Amantes de vinho em busca de conhecimento",
      description: "Ideal para quem deseja ir além da apreciação e entender profundamente o universo dos vinhos.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-pink-700"}>
          <path
            d="M220-640q-17 0-28.5-11.5T180-680q0-17 11.5-28.5T220-720q17 0 28.5 11.5T260-680q0 17-11.5 28.5T220-640ZM400-80q-66 0-113-47t-47-113v-240q0-100 70-170t170-70h73q69 0 118 46.5T720-559q0 46-24.5 84.5T629-416q-32 15-50.5 44.5T560-307v67q0 67-46.5 113.5T400-80Zm-80-640q-17 0-28.5-11.5T280-760v-20q0-17 11.5-28.5T320-820q17 0 28.5 11.5T360-780v20q0 17-11.5 28.5T320-720Zm80 560q33 0 56.5-23.5T480-240v-67q0-58 30.5-107t83.5-74q21-10 33.5-29.5T640-560q0-35-26-57.5T553-640h-73q-66 0-113 47t-47 113v240q0 33 23.5 56.5T400-160Zm40-600q-17 0-28.5-11.5T400-800v-20q0-17 11.5-28.5T440-860q17 0 28.5 11.5T480-820v20q0 17-11.5 28.5T440-760Zm120 0q-17 0-28.5-11.5T520-800v-40q0-17 11.5-28.5T560-880q17 0 28.5 11.5T600-840v40q0 17-11.5 28.5T560-760Zm140 40q-25 0-42.5-17.5T640-780v-40q0-25 17.5-42.5T700-880q25 0 42.5 17.5T760-820v40q0 25-17.5 42.5T700-720ZM400-480Z"/>
        </svg>
      ),
      title: "Iniciantes que querem começar com o pé direito",
      description: "Aprenda desde os fundamentos até as técnicas avançadas, sem necessidade de conhecimento prévio.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"
             className={"fill-pink-700"}>
          <path
            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
        </svg>
      ),
      title: "Profissionais que desejam se destacar no mercado",
      description: "Perfeito para quem busca adicionar uma habilidade valiosa à sua carreira ou explorar novas oportunidades.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-pink-700"}>
          <path
            d="M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z"/>
        </svg>
      ),
      title: "Entusiastas de experiências culturais",
      description: "Descubra a história, tradições e diversidade cultural por trás de cada garrafa de vinho.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-pink-700"}>
          <path
            d="m80-80 200-560 360 360L80-80Zm132-132 282-100-182-182-100 282Zm370-246-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64ZM212-212Z"/>
        </svg>
      ),
      title: "Organizadores de eventos e anfitriões refinados",
      description: "Eleve a experiência de seus convidados com harmonizações e escolhas de vinhos certeiras.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-pink-700"}>
          <path
            d="M120-80v-80h80v-128q-35-12-57.5-42.5T120-400v-320h240v320q0 39-22.5 69.5T280-288v128h80v80H120Zm80-440h80v-120h-80v120Zm40 160q17 0 28.5-11.5T280-400v-40h-80v40q0 17 11.5 28.5T240-360ZM520-80q-33 0-56.5-23.5T440-160v-382q0-26 15-46.5t39-29.5l38-14q14-5 21-14.5t7-23.5v-170q0-17 11.5-28.5T600-880h120q17 0 28.5 11.5T760-840v170q0 14 7 23.5t21 14.5l38 14q24 9 39 29.5t15 46.5v382q0 33-23.5 56.5T800-80H520Zm120-680h40v-40h-40v40ZM520-480h280v-62l-38-14q-38-14-60-44t-22-68v-12h-40v12q0 38-22 68t-60 44l-38 14v62Zm0 320h280v-80H520v80Zm0-160h280v-80H520v80ZM240-440Zm280 120v-80 80Z"/>
        </svg>
      ),
      title: "Curiosos por novos hobbies e hábitos sofisticados",
      description: "Explore um universo rico e cheio de nuances, cultivando um hobby prazeroso e sofisticado.",
    },
  ]

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 bg-pink-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl text-balance">
              Ideal também para...
            </h2>
          </div>
          {/* Grid */}
          <GridCards data={data} classColor={['[&>*]:before:bg-pink-900', '[&>*]:after:bg-pink-900']}/>
        </div>
      </div>
    </section>
  );
}
