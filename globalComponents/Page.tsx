import Head from "next/head"
import {PropsWithChildren} from "react"
import {PageConfig} from "types"

export default function Page({children, title = "Next"}: PropsWithChildren<PageConfig>) {

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative w-full min-h-screen ">
        {children}
      </div>
    </div>
  )
}
