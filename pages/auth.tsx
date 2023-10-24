import {GetServerSideProps} from "next"
import AuthScene from "scenes/Auth"
import {PageConfig} from "types"
export default function Auth() {

  return (
    <AuthScene />
  )
}

export const getServerSideProps: GetServerSideProps<{pageConfig: PageConfig}> = async () => {

  return {
    props: {
      pageConfig: {
        title: "Авторизация",
      }
    }
  }
}
