import React from 'react';

const Leadership = ({ leader }) => {
  return (
    <div className="t-bq-quote t-bq-quote-paul mb-4">
      <div className="t-bq-quote-paul-userpic">
        <img src={leader.img} alt={leader.name} />
      </div>
      <div className="t-bq-quote-paul-qmark">&#10077;</div>
      <div className="t-bq-quote-paul-pattern"></div>

      <div className="t-bq-quote-paul-base">
        <h1 className="msg_dir mb-3 text-xl font-semibold hidden">
          Message from{" "}
          {leader.name.includes("Director")
            ? "the Founder and Managing Director"
            : leader.name}
        </h1>

        <blockquote className="t-bq-quote-paul-text text-justify">
          <div dangerouslySetInnerHTML={{ __html: leader.message.replace(/<br\s*\/?>/g, '<br><br>') }} />
        </blockquote>

        <div className="t-bq-quote-paul-meta mt-4">
          <div className="t-bq-quote-paul-meta-info">
            <div className="t-bq-quote-paul-author font-bold">
              <cite>{leader.name}</cite>
              <div className="text-sm text-gray-700">
                {leader.role.join(", ")}
              </div>
            </div>
            <div className="t-bq-quote-paul-source"></div>
          </div>
        </div>
      </div>
    </div>
    // <div className="div__card">
    //   <div style={{ position: 'relative', marginRight: '1rem' }}>
    //     <div className="div__card_quote">“</div>
    //     <img
    //       src={leader.img}
    //       alt={leader.name}
    //       style={{
    //         width: '80px',
    //         height: '80px',
    //         borderRadius: '50%',
    //         border: '3px solid #ddd',
    //         objectFit: 'cover',
    //       }}
    //     />
    //   </div>
    //   <div style={{ flex: 1 }}>
    //     <h3 style={{ margin: 0 }}>{`Message from ${leader.name}`}</h3>
    //     <p
    //         style={{ color: '#555', lineHeight: '1.6', marginTop: '1rem' }}
    //         dangerouslySetInnerHTML={{  __html: leader.message.replace(/<br\s*\/?>/g, '<br><br>')}}
    //     ></p>
    //     <div style={{ marginTop: '1rem' }}>
    //       <div style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>
    //         {leader.name}
    //       </div>
    //       <div style={{ fontSize: '0.85rem', color: '#888' }}>{leader.title}</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Leadership;
