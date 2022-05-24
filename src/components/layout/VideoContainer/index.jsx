import React from 'react';
import './styles.scss';

export const VideoContainer = () => {
  return (
    <section className="container--responsive video video--background-color">
      <div className="video__information information">
        <span className="information__title">Quem são, o que fazem, onde vivem?</span>
        <p className="information__description text--color-opacity-black">
          Não precisa embedar o vídeo do Rick Astley Remastered 4K 60 FPS, pode ser qualquer outro vídeo da sua escolha,
          mas queremos dar play.
        </p>
      </div>
      <div className="video__content">
        <embed
          src="https://www.youtube.com/embed/rH0vUtcLm5s"
          allowFullScreen={true}
          width="100%"
          height="100%"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></embed>
      </div>
    </section>
  );
};
