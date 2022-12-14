import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US" className="scroll-smooth">
        <Head>
        <meta charSet="utf-8" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />  */}
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">      
        <Main />       
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument