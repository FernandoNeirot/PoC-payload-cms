import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function Page() {
  // 1. Conectamos con Payload
  const payload = await getPayload({ config: configPromise })

  // 2. Traemos los datos de la colección 'projects'
  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
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
            {typeof project.banner === 'object' && project.banner !== null && project.banner.url ? (
              <img
                src={project.banner.url}
                alt={project.banner.alt ?? project.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            ) : null}
            <div className="flex gap-2">
              {project.images?.map((image) =>
                typeof image === 'object' && image !== null && image.url ? (
                  <img
                    key={image.id}
                    src={image.url}
                    alt={image.alt ?? project.title}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                ) : null,
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
