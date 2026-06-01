const ACCENTS = [
    '#2f7a5f',
    '#c4513b',
    '#a35f16',
    '#235d49',
    '#657076',
    '#1f2528',
];

function JsonMemberCard({ member, order }) {
    const accent = ACCENTS[(member.id - 1) % ACCENTS.length];

    return (
        <article
            className="json-member-card"
            style={{
                '--member-accent': accent,
                '--animation-delay': `${order * 40}ms`,
            }}
        >
            <div className="json-member-card-header">
                <img
                    className="json-member-avatar"
                    src={member.avatar}
                    alt={`Avatar de ${member.nombre}`}
                    loading="lazy"
                />
                <span className="json-member-id">{member.id}</span>
            </div>

            <div className="json-member-card-body">
                <h3 className="json-member-name">{member.nombre}</h3>
                <p className="json-member-role">{member.role}</p>
                <p className="json-member-meta">
                    {member.proyectos.length} proyecto{member.proyectos.length === 1 ? '' : 's'}
                </p>
            </div>

            <ul className="json-tag-list" aria-label={`Stack de ${member.nombre}`}>
                {member.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </article>
    );
}

export default JsonMemberCard;
