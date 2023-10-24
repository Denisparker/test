import 'styles/globals.sass'
import Page from "globalComponents/Page"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Page {...pageProps.pageConfig}>
      <Component {...pageProps} />
    </Page>
  )
}
