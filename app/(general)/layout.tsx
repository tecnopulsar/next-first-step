import { Navbar } from "@/components";

const temporalAsync = function(){
    return new Promise(resolve => {
       setTimeout(() => {
        resolve(true)
       }, 2000)
    })
}

export default async function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    await temporalAsync();

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span>Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
