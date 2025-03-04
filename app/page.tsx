import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ManualPadrinhosMadrinhas() {
  return (
    <div className="min-h-screen bg-[#f9f7f5]">
      <header className="bg-[#d4c1b0] py-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-[#3c3c3c] md:text-5xl lg:text-6xl">
          Manual dos Padrinhos e Madrinhas
        </h1>
        <p className="mt-4 text-lg text-[#5a5a5a]">Guia de cores e vestimentas para o nosso grande dia</p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="padrinhos" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="padrinhos" className="text-lg">
              Padrinhos
            </TabsTrigger>
            <TabsTrigger value="madrinhas" className="text-lg">
              Madrinhas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="padrinhos" className="mt-8">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-[#3c3c3c]">Orientações para os Padrinhos</h2>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-medium text-[#5a5a5a]">Cores Recomendadas</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-[#2c3e50]"></div>
                    <span className="mt-2 text-sm">Azul Marinho</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-[#34495e]"></div>
                    <span className="mt-2 text-sm">Azul Escuro</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-[#7f8c8d]"></div>
                    <span className="mt-2 text-sm">Cinza</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-medium text-[#5a5a5a]">Exemplos de Trajes</h3>
                <p className="mb-4 text-[#5a5a5a]">
                  Sugerimos ternos em tons escuros (azul marinho ou cinza escuro), com camisa branca e gravata em tons
                  que combinem com as cores do casamento.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Exemplo de traje para padrinho 1"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Exemplo de traje para padrinho 2"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Exemplo de traje para padrinho 3"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-medium text-[#5a5a5a]">Dicas Importantes</h3>
                <ul className="list-inside list-disc space-y-2 text-[#5a5a5a]">
                  <li>Evite cores muito claras que possam se confundir com o traje do noivo</li>
                  <li>Prefira sapatos sociais escuros e bem polidos</li>
                  <li>Acessórios discretos como abotoaduras são bem-vindos</li>
                  <li>Em caso de dúvidas, entre em contato com os noivos</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="madrinhas" className="mt-8">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-[#3c3c3c]">Orientações para as Madrinhas</h2>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-medium text-[#5a5a5a]">Paleta de Cores</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-[#d4b2a7]"></div>
                    <span className="mt-2 text-sm">Rosé</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-[#e8d2c5]"></div>
                    <span className="mt-2 text-sm">Nude</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-[#c9af98]"></div>
                    <span className="mt-2 text-sm">Bege</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-medium text-[#5a5a5a]">Exemplos de Vestidos</h3>
                <p className="mb-4 text-[#5a5a5a]">
                  Sugerimos vestidos longos ou midi nas cores da paleta. O modelo fica a critério de cada madrinha,
                  respeitando a tonalidade escolhida.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Exemplo de vestido para madrinha 1"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Exemplo de vestido para madrinha 2"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Exemplo de vestido para madrinha 3"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-medium text-[#5a5a5a]">Dicas Importantes</h3>
                <ul className="list-inside list-disc space-y-2 text-[#5a5a5a]">
                  <li>Evite vestidos brancos ou muito claros para não competir com a noiva</li>
                  <li>Prefira tecidos fluidos e confortáveis</li>
                  <li>Sandálias ou sapatos de salto médio são ideais</li>
                  <li>Acessórios delicados complementam o visual</li>
                  <li>Em caso de dúvidas, entre em contato com a noiva</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-[#d4c1b0] py-6 text-center text-[#5a5a5a]">
        <p>Agradecemos por fazerem parte deste momento tão especial!</p>
        <p className="mt-2">© {new Date().getFullYear()} - Manual dos Padrinhos e Madrinhas</p>
      </footer>
    </div>
  )
}
