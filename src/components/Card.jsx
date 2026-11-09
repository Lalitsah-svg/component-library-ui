const Card = ({
  title,
  description,
  icon,
  children,
  action,
}) => {
  return (
    <article className="ui-card">
      {icon && <div className="card-icon">{icon}</div>}

      <div className="card-content">
        {title && <h3>{title}</h3>}

        {description && (
          <p className="card-description">{description}</p>
        )}

        {children && (
          <div className="card-body">
            {children}
          </div>
        )}

        {action && (
          <div className="card-action">
            {action}
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;