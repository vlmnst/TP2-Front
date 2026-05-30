import { Link, useParams } from 'react-router-dom';
import { members } from '../data/team';

function renderSection(section) {
  if (section.type === 'intro') {
    return <p className="member-section-copy">{section.text}</p>;
  }

  if (section.type === 'stack') {
    return (
      <div className="stack-grid">
        {section.groups.map((group) => (
          <article
            key={group.name}
            className={`stack-card${group.featured ? ' stack-card-featured' : ''}`}
          >
            <h4>{group.name}</h4>
            {group.description ? <p>{group.description}</p> : null}
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    );
  }

  if (section.type === 'focus') {
    return (
      <div className="focus-grid">
        {section.items.map((item) => (
          <article key={item.name} className="focus-card">
            <h4>{item.name}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.type === 'flip') {
    return (
      <div className="pair-grid">
        {section.pairs.map((pair) => (
          <article key={`${pair.front}-${pair.back}`} className="pair-card">
            <p className="pair-label">{section.frontLabel}</p>
            <h4>{pair.front}</h4>
            <p className="pair-label pair-label-secondary">{section.backLabel}</p>
            <p>{pair.back}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.type === 'extra') {
    return <p className="member-extra">{section.text}</p>;
  }

  return null;
}

function MemberPage() {
  const { memberId } = useParams();
  const member = members.find((item) => item.id === memberId);

  if (!member) {
    return (
      <section className="page-section">
        <p className="section-kicker">Perfil</p>
        <h2>Integrante no encontrado</h2>
        <p>La ruta existe, pero todavia no hay datos migrados para ese integrante.</p>
        <Link className="inline-link" to="/">
          Volver al inicio
        </Link>
      </section>
    );
  }

  return (
    <section className="member-page" style={{ '--member-accent': member.accent }}>
      <aside className="member-aside">
        <img className="member-photo" src={member.photo} alt={`Foto de ${member.name}`} />
        <p className="section-kicker member-kicker">Integrante {member.id}</p>
        <h2>{member.name}</h2>
        <p className="member-headline">{member.headline}</p>
        <ul className="member-facts">
          <li>{member.location}</li>
          <li>{member.age} anos</li>
          {member.quickFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <div className="member-links">
          {member.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </aside>

      <div className="member-content">
        <section className="page-section">
          <p className="section-kicker">Presentacion</p>
          <h3 className="member-section-title">{member.heroCopy}</h3>
          <ul className="tag-list">
            {member.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        {member.sections.map((section) => (
          <section key={`${section.type}-${section.title ?? section.text}`} className="page-section">
            {section.title ? <h3 className="member-section-title">{section.title}</h3> : null}
            {renderSection(section)}
          </section>
        ))}
      </div>
    </section>
  );
}

export default MemberPage;