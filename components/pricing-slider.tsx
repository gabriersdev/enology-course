"use client";

const PricingTabs = () => {
  const prices = {
    plans: {
      starter: 297,
      business: 497,
    },
  };

  return (
    <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-2 items-start lg:max-w-[900px] py-12 md:py-20"
         id={"pricing"}>
      {/* Pricing tab 1 */}
      <div className="h-full">
        <div className="relative flex flex-col h-full p-6 pb-10">
          <div className="h-8" aria-hidden="true"></div>
          <div className="mb-5">
            <div className="text-slate-900 font-semibold mb-1">Degustador Iniciante</div>
            <div className="inline-flex items-baseline mb-2 gap-1">
              <span className="text-slate-900 font-bold text-3xl">R$</span>
              <span className="text-slate-900 font-bold text-4xl">
                {
                  // Formata a moeda para o padrão brasileiro
                  prices.plans.starter.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                }
              </span>
              <span className="text-slate-500 font-medium"></span>
            </div>
            <div className="text-sm text-slate-500 mb-5">
              <span className={"text-[16px]"}>
                Um plano voltado para quem deseja começar sua jornada no mundo dos vinhos, com conteúdos fundamentais e práticos.
              </span>
            </div>
            <a
              className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-pink-800 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-pink-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
              href="#0"
            >
              <span className={"text-[16px]"}>
                Adquirir plano
              </span>
            </a>
          </div>
          <div className="text-slate-900 text-sm font-medium mb-4">
            <span className={"text-[16px]"}>
              Ao adquirir este plano, você terá acesso a:
            </span>
          </div>
          <ul className="text-slate-600 text-sm space-y-3 grow">
            {
              [
                'Acesso completo aos módulos básicos e intermediários do curso',
                'Materiais em PDF para estudo',
                'Certificado de conclusão digital',
                'Suporte via e-mail para dúvidas'
              ].map((item, index) => {
                return (
                  <li className="flex items-center" key={index}>
                    <svg
                      className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                    </svg>
                    <span className={"text-[16px]"}>{item}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      {/* Pricing tab 2 */}
      <div className="h-full">
        <div
          className="relative flex flex-col h-full p-6 pb-10 rounded-2xl bg-lime-950 border border-lime-950 shadow shadow-slate-950/5" style={{margin: '0 0.5rem'}}>
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div
              className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Mais popular
            </div>
          </div>
          <div className="my-6">
            <div className="text-slate-200 font-semibold mb-1">Sommelier Expert</div>
            <div className="inline-flex items-baseline mb-2 gap-1">
              <span className="text-slate-200 font-bold text-3xl">R$</span>
              <span className="text-slate-200 font-bold text-4xl">
                {
                  // Formata a moeda para o padrão brasileiro
                  prices.plans.business.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                }
              </span>
              <span className="text-slate-500 font-medium"></span>
            </div>
            <div className="text-sm text-slate-400 mb-5">
              <span className={"text-[16px]"}>
                Para quem busca uma experiência completa e imersiva, com acesso a conteúdos avançados e benefícios exclusivos.
              </span>
            </div>
            <a
              className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-pink-800 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-pink-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
              href="#0"
            >
              <span className={"text-[16px]"}>
                Adquirir plano
              </span>
            </a>
          </div>
          <div className="text-slate-200 text-sm font-medium mb-4">
            <span className={"text-[16px]"}>
              Ao adquirir este plano, você terá acesso a todos os benefícios do plano Iniciante e também:
            </span>
          </div>
          <ul className="text-slate-400 text-sm space-y-3 grow">
            {
              [
                'Acesso a todos os módulos do curso, incluindo conteúdo avançado',
                'Materiais extras: e-book exclusivo sobre harmonização',
                'Certificado de conclusão impresso e digital',
                'Sessão ao vivo (online) de degustação guiada com um especialista',
                'Grupo VIP de networking com outros alunos e especialistas',
                'Bônus: Aula sobre como criar uma adega particular ou explorar o enoturismo'
              ].map((item, index) => {
                return (
                  <li className="flex items-center" key={index}>
                    <svg
                      className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                    </svg>
                    <span className={"text-[16px]"}>{item}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingTabs;