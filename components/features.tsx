import GridCards from "@/components/grid-cards";

export default function Features() {
  const data = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-lime-700"}>
          <path
            d="M120-80v-80h80v-128q-35-12-57.5-42.5T120-400v-320h240v320q0 39-22.5 69.5T280-288v128h80v80H120Zm80-440h80v-120h-80v120Zm40 160q17 0 28.5-11.5T280-400v-40h-80v40q0 17 11.5 28.5T240-360ZM520-80q-33 0-56.5-23.5T440-160v-382q0-26 15-46.5t39-29.5l38-14q14-5 21-14.5t7-23.5v-170q0-17 11.5-28.5T600-880h120q17 0 28.5 11.5T760-840v170q0 14 7 23.5t21 14.5l38 14q24 9 39 29.5t15 46.5v382q0 33-23.5 56.5T800-80H520Zm120-680h40v-40h-40v40ZM520-480h280v-62l-38-14q-38-14-60-44t-22-68v-12h-40v12q0 38-22 68t-60 44l-38 14v62Zm0 320h280v-80H520v80Zm0-160h280v-80H520v80ZM240-440Zm280 120v-80 80Z"/>
        </svg>
      ),
      title: "Desvende os segredos por trás dos melhores vinhos",
      description: "Aprenda a identificar aromas, sabores e características que diferenciam os grandes rótulos, tornando-se um verdadeiro apreciador.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-lime-700"}>
          <path
            d="M240-80v-366q-54-14-87-57t-33-97v-280h80v240h40v-240h80v240h40v-240h80v280q0 54-33 97t-87 57v366h-80Zm400 0v-381q-54-18-87-75.5T520-667q0-89 47-151t113-62q66 0 113 62.5T840-666q0 73-33 130t-87 75v381h-80Z"/>
        </svg>
      ),
      title: "Aprenda a harmonizar vinhos com diferentes pratos",
      description: "Descubra as combinações perfeitas para transformar refeições em experiências inesquecíveis, como um sommelier profissional.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-lime-700"}>
          <path
            d="M320-120v-80h120v-164q-86-14-143-80t-57-156v-240h480v240q0 90-57 156t-143 80v164h120v80H320Zm160-320q56 0 98-34t56-86H326q14 52 56 86t98 34ZM320-640h320v-120H320v120Zm160 200Z"/>
        </svg>
      ),
      title: "Entenda as etapas de produção do vinho, da uva à taça",
      description: "Explore o processo completo de fabricação do vinho, desde a escolha das uvas até a garrafa, e compreenda o que influencia sua qualidade.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-lime-700"}>
          <path
            d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
      ),
      title: "Aproveite Conteúdo Acessível e Prático",
      description: "Com materiais claros e linguagem descomplicada, o curso se adapta à sua rotina, permitindo aprendizado real e aplicável no dia a dia.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-lime-700"}>
          <path
            d="M250-40v-160h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40H120v-200h130v-40h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40h60v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v40h130v200H310v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v160h-60Zm400 0v-160h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40H520v-200h130v-40h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40h60v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v40h130v200H710v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v160h-60ZM220-760h120q8 0 14-6t6-14q0-8-6-14t-14-6H220q-8 0-14 6t-6 14q0 8 6 14t14 6Zm400 0h120q8 0 14-6t6-14q0-8-6-14t-14-6H620q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-520h160v-40H200v40Zm400 0h160v-40H600v40ZM220-280h120q8 0 14-6t6-14q0-8-6-14t-14-6H220q-8 0-14 6t-6 14q0 8 6 14t14 6Zm400 0h120q8 0 14-6t6-14q0-8-6-14t-14-6H620q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-760v-40 40Zm400 0v-40 40ZM200-520v-40 40Zm400 0v-40 40ZM200-280v-40 40Zm400 0v-40 40Z"/>
        </svg>
      ),
      title: "Desenvolva um Hábito Cultural e Sofisticado",
      description: "Amplie seu conhecimento sobre vinhos e mergulhe em uma cultura rica, tornando-se referência entre amigos e familiares.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             className={"fill-lime-700"}>
          <path
            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z"/>
        </svg>
      ),
      title: "Receba um certificado reconhecido no mercado",
      description: "Finalize o curso com uma certificação que comprova sua qualificação, ideal para enriquecer o currículo ou iniciar uma nova carreira.",
    },
  ]

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 bg-lime-950" id={"about-more"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl text-balance">
              Por que este curso é perfeito para você?
            </h2>
          </div>
          {/* Grid */}
          <GridCards data={data} classColor={['[&>*]:before:bg-lime-900', '[&>*]:after:bg-lime-900']}/>
        </div>
      </div>
    </section>
  );
}
