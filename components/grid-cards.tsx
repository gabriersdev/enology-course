import {JSX} from "react";

export default function GridCards({data, classColor}: { data: { icon: JSX.Element, title: string, description: string }[], classColor: [string, string] }) {
  return (
    <div
      className={`grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute ${classColor[0]}  [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute ${classColor[1]}  [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10`}>
      {
        data.map((item, index) => {
          return (
            <article key={index}>
              <h3 className="mb-2 flex items-center flex-wrap gap-2 font-medium text-gray-200">
                {item.icon}
                <span className={"text-[16px]"}>
                  {item.title}
                </span>
              </h3>
              <p className="text-[16px] text-gray-400">
                {item.description}
              </p>
            </article>
          )
        })
      }
    </div>
  )
}