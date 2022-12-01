/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <div id="contact" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
        </div>
        <div className="flex flex-row grid-cols-2 gap-10 ">
          <img
          src="https://lh3.googleusercontent.com/8uVtC1mUPaFp3q0L7u9DDMeTJyvHV5pLXeFXFP4pP1Q_ITzMxnqA2jgc6ZiMsC3cCgw=w2400"
          alt=""
          className="h-52 md:h-64" width="250"
        />
        <div className="mx-auto text-2xl">
          <div className="mx-12">Email-Kumarujjwal603@gmail.com</div></div>
        </div>
      </div>
    </div>
  );
}
