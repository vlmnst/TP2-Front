import { useParams, Link } from 'react-router-dom';
import { members } from '../data/team';
import ProfileAside from '../components/ProfileAside';
import SectionRenderer from '../components/SectionRenderer';

function MemberPage() {
    const { memberId } = useParams();
    const member = members.find((item) => item.id === memberId);

    if (!member) {
        return (
            <div className="container page-stack">
                <section className="section-heading">
                    <p className="eyebrow">Perfil</p>
                    <h2>Integrante no encontrado</h2>
                    <Link to="/">Volver al inicio</Link>
                </section>
            </div>
        );
    }

    return (
        <div className="container profile-layout" style={{ '--member-accent': member.accent }}>
            <ProfileAside member={member} />

            <article className="profile-card profile-card-portfolio">
                {member.progress && <SectionRenderer section={member.progress} />}
                {member.sections.map((section, i) => (
                    <SectionRenderer key={i} section={section} />
                ))}
            </article>
        </div>
    );
}

export default MemberPage;