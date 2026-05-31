function ProgressBar({ label, value, accent }) {
    const progress = Math.max(0, Math.min(100, value));

    return (
        <div className="progress-item">
            <div className="progress-item-header">
                <span>{label}</span>
                <strong>{progress}%</strong>
            </div>
            <div className="progress-track" aria-label={`${label} progreso`}> 
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%`, backgroundColor: accent }}
                />
            </div>
        </div>
    );
}

export default ProgressBar;
