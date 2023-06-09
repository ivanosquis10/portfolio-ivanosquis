import Head from 'next/head'

export function Seo () {
  return (
     <Head>
        <meta name="description" content="Bienvenido a mi portafolio de programación, donde podrás encontrar proyectos desarrollados en React, Vite.js, NextJS, Tailwind CSS y otras tecnologías. ¡Mira mis trabajos y contáctame para colaborar en tu próximo proyecto!" />
        <meta name="keywords" content="portafolio, programación, React, NextJS, Vite.js, Tailwind CSS, desarrollo frontend, colaboración, proyectos" />
        <link rel="icon" type="image/svg+xml" href="./logo-iv-3.svg" />
         <meta name="author" content="Ivanosquis | Ivan Rodriguez" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Ivanosquis - Desarrollador Frontend | Portafolio de Programación" />
        <meta property="og:description" content="Ivanosquis es un desarrollador frontend especializado en React, Next.js, Vite.js, Tailwind CSS y otras tecnologías. Explora su portafolio y contáctalo para colaborar en tu próximo proyecto." />
        <meta property="og:image" content="https://portfolio-ivanosquis-iv.vercel.app/logo-iv-3.svg" />
        <meta property="og:url" content="https://portfolio-ivanosquis-iv.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ivanosquis - Desarrollador Frontend | Portafolio de Programación" />
        <meta name="twitter:description" content="Ivanosquis es un desarrollador frontend especializado en React, Next.js, Vite.js, Tailwind CSS y otras tecnologías. Explora su portafolio y contáctalo para colaborar en tu próximo proyecto." />
        <meta name="twitter:image" content="https://portfolio-ivanosquis-iv.vercel.app/logo-iv-3.svg" />
        <meta name="twitter:creator" content="@ivanosquis" />
        <meta name="author" content="Ivan Rodriguez" />
        <meta name="twitter:domain" content="portfolio-ivanosquis-iv.vercel.app"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

         <title>Ivanosquis Portafolio - Desarrollador Frontend</title>
      </Head>
  )
}
