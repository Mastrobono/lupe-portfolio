import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/index.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Lupe Cozzolino</title>
        <meta name="description" content="Lupe Cozzolino Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <main className={styles.container}>
        <Header></Header>
      </main>
    </>
  )
}
