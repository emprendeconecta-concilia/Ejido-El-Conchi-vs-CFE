import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { FileText, Scale, MapPin, Calendar, AlertTriangle, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('introduccion')

  const sections = [
    { id: 'introduccion', title: 'Introducción', icon: FileText },
    { id: 'contexto', title: 'Contexto y Antecedentes', icon: MapPin },
    { id: 'fundamento', title: 'Fundamento Legal', icon: Scale },
    { id: 'propuesta', title: 'Propuesta de Conciliación', icon: CheckCircle },
    { id: 'riesgos', title: 'Riesgos para CFE', icon: AlertTriangle },
    { id: 'conclusion', title: 'Conclusión', icon: FileText }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Scale className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Solicitud de Conciliación</h1>
                <p className="text-sm text-gray-600">Ejido El Conchi vs Comisión Federal de Electricidad</p>
              </div>
            </div>
            <Badge variant="outline" className="text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              19 de agosto de 2025
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Navegación</CardTitle>
                <CardDescription>Secciones del documento</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-sm transition-colors hover:bg-gray-100 ${
                          activeSection === section.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' : 'text-gray-700'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{section.title}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Introducción */}
              <section id="introduccion" className="scroll-mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span>I. Introducción: Un Llamado a la Justicia y la Razón</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      La presente solicitud se emite con el firme propósito de alcanzar una solución justa, equitativa y definitiva a una problemática que ha afectado gravemente al Ejido El Conchi y a la C. Irma Laura Garzón Garate durante años: la ocupación ilegal de sus terrenos por parte de la Comisión Federal de Electricidad (CFE).
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A pesar de los prolongados procesos judiciales que no han logrado una sentencia de fondo, la realidad de la afectación y el daño persiste. Es momento de dejar a un lado la litigación estéril y sentarse a la mesa de negociación para construir un acuerdo que beneficie a ambas partes, evitando mayores perjuicios y costos innecesarios.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                      <p className="text-blue-800 font-medium">
                        La CFE, como entidad paraestatal al servicio de la nación, tiene la responsabilidad de actuar con apego a la legalidad y respeto a los derechos de propiedad de los ciudadanos.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Contexto y Antecedentes */}
              <section id="contexto" className="scroll-mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span>II. Contexto y Antecedentes de la Afectación</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-2">Invasión Documentada</h4>
                        <p className="text-red-700 text-sm">
                          CFE ha ocupado terrenos del Ejido El Conchi sin proceso legal de expropiación o adquisición válido.
                        </p>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">Infraestructura Instalada</h4>
                        <p className="text-yellow-700 text-sm">
                          Subestación eléctrica con "pilas nucleares" de alto valor instalada entre 2001-2003.
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Desde hace años, la Comisión Federal de Electricidad ha ocupado de facto una extensión significativa de terrenos pertenecientes al Ejido El Conchi y a la C. Irma Laura Garzón Garate en Mazatlán, Sinaloa. Esta ocupación se ha llevado a cabo sin que mediara un proceso legal de expropiación, adquisición o constitución de servidumbre.
                    </p>
                    <div className="bg-gray-50 border rounded-lg p-4 my-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Evidencias de Reconocimiento por CFE:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Cheques emitidos entre 2009-2011 a nombre del Ejido y Felipe Garzón Navarro</li>
                        <li>Planos para compra presentados por representante de CFE en 2011</li>
                        <li>Expedientes judiciales 20/2007 y 614/2007 con derechos a salvo</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Fundamento Legal */}
              <section id="fundamento" className="scroll-mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Scale className="h-5 w-5 text-purple-600" />
                      <span>III. Fundamento Legal de la Reclamación</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Ley Agraria */}
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-semibold text-purple-800 mb-2">A. Ley Agraria</h4>
                        <div className="bg-purple-50 rounded-lg p-4 mb-3">
                          <p className="text-purple-800 font-medium mb-2">Artículo 74:</p>
                          <p className="text-purple-700 text-sm">
                            "La propiedad de las tierras de uso común es <strong>inalienable, imprescriptible e inembargable</strong>"
                          </p>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Esta disposición anula cualquier argumento de prescripción por parte de CFE y reafirma la propiedad del Ejido.
                        </p>
                      </div>

                      {/* Código Civil */}
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-semibold text-blue-800 mb-2">B. Código Civil Federal</h4>
                        <div className="bg-blue-50 rounded-lg p-4 mb-3">
                          <p className="text-blue-800 font-medium mb-2">Artículo 831:</p>
                          <p className="text-blue-700 text-sm">
                            "La propiedad no puede ser ocupada contra la voluntad de su dueño, sino por causa de utilidad pública y mediante indemnización"
                          </p>
                        </div>
                        <p className="text-gray-700 text-sm">
                          CFE ha violado este precepto al ocupar sin consentimiento y sin indemnización.
                        </p>
                      </div>

                      {/* Código Penal */}
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-semibold text-red-800 mb-2">C. Código Penal Federal</h4>
                        <div className="bg-red-50 rounded-lg p-4 mb-3">
                          <p className="text-red-800 font-medium mb-2">Artículo 395 - Delito de Despojo:</p>
                          <p className="text-red-700 text-sm">
                            Tipifica como delito la ocupación ilegal de inmueble ajeno, incluso si el derecho está en disputa.
                          </p>
                        </div>
                        <p className="text-gray-700 text-sm">
                          La CFE podría estar incurriendo en este delito por la ocupación sin consentimiento.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Propuesta de Conciliación */}
              <section id="propuesta" className="scroll-mt-8">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-green-800">
                      <CheckCircle className="h-5 w-5" />
                      <span>IV. La Propuesta de Conciliación</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-6 shadow-sm">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Afectación Estimada</p>
                          <p className="text-2xl font-bold text-gray-900">+$800 MDP</p>
                        </div>
                        <div className="text-2xl text-gray-400">→</div>
                        <div className="text-center">
                          <p className="text-sm text-green-600 mb-1">Propuesta (15% menos)</p>
                          <p className="text-2xl font-bold text-green-700">$680 MDP</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      En un gesto de buena voluntad y con el ánimo de facilitar un acuerdo, se propone una conciliación que implique el pago de un 15% por debajo de la suma estimada de más de 800 millones de pesos.
                    </p>
                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Justificación de la Propuesta:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>La infraestructura de CFE instalada supera el valor solicitado</li>
                        <li>Desmantelar la subestación implicaría costos exorbitantes</li>
                        <li>Se evitarían interrupciones en el suministro eléctrico</li>
                        <li>Solución expedita y beneficiosa para ambas partes</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Riesgos para CFE */}
              <section id="riesgos" className="scroll-mt-8">
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-orange-800">
                      <AlertTriangle className="h-5 w-5" />
                      <span>V. Lo que la CFE Tiene que Perder</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white border border-orange-200 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-800 mb-2">Riesgo de Restitución</h4>
                        <p className="text-orange-700 text-sm">
                          Obligación de desmantelar y reubicar infraestructura valiosa con costos superiores a la propuesta.
                        </p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-800 mb-2">Responsabilidad Penal</h4>
                        <p className="text-orange-700 text-sm">
                          Posibles acciones penales por delito de despojo con implicaciones legales y de imagen.
                        </p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-800 mb-2">Pago Retroactivo</h4>
                        <p className="text-orange-700 text-sm">
                          Rentas y daños desde el inicio de la ocupación, suma potencialmente mayor a la propuesta.
                        </p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-800 mb-2">Deterioro de Imagen</h4>
                        <p className="text-orange-700 text-sm">
                          Afectación a la credibilidad como empresa productiva del Estado.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white border-l-4 border-orange-400 p-4">
                      <p className="text-orange-800 font-medium">
                        La negativa a conciliar podría resultar en consecuencias económicas y legales significativamente mayores al monto propuesto.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Conclusión */}
              <section id="conclusion" className="scroll-mt-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-blue-800">
                      <FileText className="h-5 w-5" />
                      <span>VI. Conclusión: Un Llamado a la Acción</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      La presente solicitud no es solo una invitación a negociar; es un llamado contundente a la CFE para que asuma su responsabilidad y actúe con la visión de resolver un conflicto que ha perdurado por demasiado tiempo. La propuesta de conciliación es una oportunidad para evitar mayores litigios, costos y riesgos.
                    </p>
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
                        <p className="text-blue-800 font-semibold mb-4">
                          El Ejido El Conchi y la C. Irma Laura Garzón Garate están abiertos al diálogo y a la construcción de un acuerdo que ponga fin a esta situación.
                        </p>
                        <p className="text-gray-700 text-sm">
                          Esperamos una respuesta favorable y la disposición de la CFE para sentarse a negociar de manera inmediata y efectiva.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Footer */}
              <Card className="bg-gray-900 text-white">
                <CardContent className="text-center py-8">
                  <p className="text-lg font-semibold mb-2">Atentamente,</p>
                  <p className="text-gray-300">Representantes del Ejido El Conchi y la C. Irma Laura Garzón Garate</p>
                  <Separator className="my-4 bg-gray-700" />
                  <p className="text-sm text-gray-400">
                    Mazatlán, Sinaloa, México • 19 de agosto de 2025
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

