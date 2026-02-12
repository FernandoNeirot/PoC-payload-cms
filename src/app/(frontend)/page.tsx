import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function Page() {
  // 1. Conectamos con Payload
  const payload = await getPayload({ config: configPromise })

  // 2. Traemos los datos de la colección 'projects'
  const projects = await payload.find({
    collection: 'projects',
  })

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Mis Proyectos</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {projects.docs.map((project) => (
          <article key={project.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <small>Cliente: {project.clientName}</small>
          </article>
        ))}
      </div>
    </main>
  )
}
