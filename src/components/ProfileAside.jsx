import { useState } from 'react';
import SocialButtons from './SocialButtons';

const FILTERS = [
    { filter: 'none', borderColor: '#ffffff' },
    { filter: 'grayscale(100%)', borderColor: '#64748b' },
    { filter: 'sepia(85%)', borderColor: '#c4513b' },
    { filter: 'hue-rotate(70deg)', borderColor: '#2f7a5f' },
    { filter: 'saturate(170%)', borderColor: '#7b4fa3' }
];

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

function ProfileAside({ member }) {
    const [styleIndex, setStyleIndex] = useState(0);

    function changeStyle() {
        setStyleIndex((i) => (i + 1) % FILTERS.length);
    }

    const src = avatarSource(member);
    const currentFilter = FILTERS[styleIndex];

    return (
        <aside className="profile-aside" style={{ '--member-accent': member.accent }}>
            <img
                className={`profile-photo${member.photoClass ? ' ' + member.photoClass : ''}`}
                src={src}
                alt={`Avatar de ${member.name}`}
                style={{ filter: currentFilter.filter, borderColor: currentFilter.borderColor }}
                onError={(e) => {
                    if (!e.target.dataset.fallback) {
                        e.target.dataset.fallback = 'true';
                        e.target.src = avatarSource({ ...member, photo: '' });
                    }
                }}
            />

            <div className="profile-summary">
                <p className="eyebrow">Perfil</p>
                <h2>{member.name}</h2>
                {member.headline ? (
                    <p className="profile-headline">{member.headline}</p>
                ) : (
                    <>
                        <p>{member.location}</p>
                        <p>{member.age} anos</p>
                    </>
                )}
                {member.quickFacts && (
                    <ul className="quick-fact-list">
                        {member.quickFacts.map((fact) => (
                            <li key={fact}>{fact}</li>
                        ))}
                    </ul>
                )}
            </div>

            <button className="button button-light" type="button" onClick={changeStyle}>
                Cambiar estilo
            </button>

            <SocialButtons links={member.links ?? []} />
        </aside>
    );
}

export default ProfileAside;