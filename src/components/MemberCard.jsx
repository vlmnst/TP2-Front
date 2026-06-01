import { Link } from 'react-router-dom';

function avatarSource(member) {
    if (member.photo) return member.photo;
    const initials = member.name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
        <rect width="320" height="320" rx="28" fill="${member.accent}"/>
        <circle cx="238" cy="78" r="58" fill="#fff" opacity=".18"/>
        <circle cx="80" cy="254" r="74" fill="#0f172a" opacity=".16"/>
        <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
            font-family="DM Sans, Arial, sans-serif" font-size="90" font-weight="700"
            fill="#ffffff">${initials}</text>
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function MemberCard({ member, order }) {
    const meta = member.cardMeta || `${member.skills.length} habilidades`;

    return (
        <Link
            to={`/integrantes/${member.id}`}
            className="member-card"
            style={{
                '--member-accent': member.accent,
                '--animation-delay': `${order * 120}ms`
            }}
        >
            <img
                className="member-card-photo"
                src={avatarSource(member)}
                alt={member.name}
                onError={(e) => {
                    e.target.src = avatarSource({ ...member, photo: '' });
                }}
            />
            <span className="member-number">{member.id}</span>
            <span className="member-name">{member.name}</span>
            <span className="member-meta">{meta}</span>
        </Link>
    );
}

export default MemberCard;