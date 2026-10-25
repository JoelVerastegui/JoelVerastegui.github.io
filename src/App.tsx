import { useCallback, useEffect, useRef } from 'react'
import profileData from './data/profile.json'
import projectsData from './data/projects.json'
import skillsData from './data/skills.json'
import type { Profile, SkillGroup } from './interfaces/profile'
import type { Project } from './interfaces/project'
import { HOME_HREF, useHashRoute } from './hooks/useHashRoute'
import { scrollToSection, type SectionId } from './utils/scroll'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import ProjectDetail from './components/project/ProjectDetail'

const profile: Profile = profileData
const projects = projectsData as Project[]
const skills = skillsData as SkillGroup[]

function App() {
  const route = useHashRoute()
  const pendingScroll = useRef<SectionId | null>(null)

  const projectIndex =
    route.view === 'project' ? projects.findIndex((p) => p.id === route.id) : -1
  const current = projectIndex >= 0 ? projects[projectIndex] : null

  // Ruta de proyecto desconocida: vuelve al inicio.
  useEffect(() => {
    if (route.view === 'project' && !current) window.location.hash = HOME_HREF
  }, [route, current])

  // Tras cambiar de vista: scroll pendiente de la navegación, o arriba al abrir un proyecto.
  useEffect(() => {
    const target = pendingScroll.current
    pendingScroll.current = null
    if (target) scrollToSection(target)
    else if (current) window.scrollTo(0, 0)
  }, [current])

  const navigate = useCallback(
    (id: SectionId) => {
      if (current && id !== 'contacto') {
        pendingScroll.current = id
        window.location.hash = HOME_HREF
      } else {
        scrollToSection(id)
      }
    },
    [current],
  )

  return (
    <>
      <Navbar name={profile.name} activeProjects={!!current} onNavigate={navigate} />
      <main>
        {current ? (
          <ProjectDetail
            key={current.id}
            project={current}
            prev={projects[(projectIndex - 1 + projects.length) % projects.length]}
            next={projects[(projectIndex + 1) % projects.length]}
            index={projectIndex}
            total={projects.length}
            onBack={() => navigate('proyectos')}
          />
        ) : (
          <>
            <Hero profile={profile} projects={projects} onNavigate={navigate} />
            <Projects projects={projects} />
            <About profile={profile} />
            <Skills groups={skills} />
          </>
        )}
        <Contact profile={profile} />
      </main>
    </>
  )
}

export default App
