import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SOCIAL_CONFIG = {
    GitHub: {
        icon: FaGithub,
        color: '#24292e',
    },
    LinkedIn: {
        icon: FaLinkedin,
        color: '#0077b5',
    },
};

function SocialButtons({ links = [] }) {
    if (!links.length) return null;

    return (
        <div className="social-buttons">
            {links.map(({ label, href }) => {
                const config = SOCIAL_CONFIG[label];
                if (!config) return null;
                const Icon = config.icon;

                return (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                        style={{ '--social-color': config.color }}
                        aria-label={label}
                    >
                        <Icon />
                        <span>{label}</span>
                    </a>
                );
            })}
        </div>
    );
}

export default SocialButtons;