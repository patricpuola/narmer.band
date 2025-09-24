import logo from "./assets/logo.png";
import styled from "styled-components";
import { FaBandcamp, FaSoundcloud, FaSpotify, FaYoutube } from "react-icons/fa";

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.img`
  width: auto;
  max-height: 20rem;
`;

const SpotifyFrame = styled.iframe`
  border: 0;
  height: 40rem;
  max-width: 100%;
`;

const YouTubeFrame = styled.iframe`
  border: 0;
  min-height: 15rem;
  max-width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem 0;

  section {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    max-width: 30rem;
    min-width: 20rem;
    text-align: center;
    gap: 1rem;
  }
`;

const FollowLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const LinkButton = styled.button<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${({ $color }) =>
    $color ? `color-mix(in srgb, ${$color} 70%, white)` : "#1db954"};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  color: black;

  & > svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({ $color }) =>
      $color ? `color-mix(in srgb, ${$color} 80%, white)` : "#1ed760"};
  }
`;

export const App = () => {
  return (
    <Page>
      <Header>
        <Logo src={logo} alt="Narmer logo" />
      </Header>
      <Container>
        <section>
          <h2>Listen to our songs</h2>
          <SpotifyFrame
            src="https://open.spotify.com/embed/artist/1iwSMTRbKFld4j6eI5MXew?utm_source=generator&theme=1"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </section>
        <section>
          <h2>Check out our music videos</h2>
          <YouTubeFrame
            src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_m1zZqASehObWGJJruWNQLs-ilBvkZxk4E"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h2>You can also find us here</h2>
          <FollowLinks>
            <a href="https://open.spotify.com/artist/1iwSMTRbKFld4j6eI5MXew?si=7mrLvndISk6Dkm03wDyx_A">
              <LinkButton $color="#1DB954">
                <FaSpotify />
                <span>Spotify</span>
              </LinkButton>
            </a>
            <a href="https://narmerband.bandcamp.com/">
              <LinkButton $color="#1DA0C3">
                <FaBandcamp />
                <span>Bandcamp</span>
              </LinkButton>
            </a>
            <a href="https://www.youtube.com/channel/UCI06QwJ_1HKFz663-ifbeRA">
              <LinkButton $color="#FF0000">
                <FaYoutube />
                <span>YouTube</span>
              </LinkButton>
            </a>
            <a href="https://soundcloud.com/narmerband">
              <LinkButton $color="#FF7700">
                <FaSoundcloud />
                <span>SoundCloud</span>
              </LinkButton>
            </a>
          </FollowLinks>
        </section>
      </Container>
    </Page>
  );
};
