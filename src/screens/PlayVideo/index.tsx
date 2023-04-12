import React, { FC, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Player } from 'components/index';
import { Container, Title, ScreenHeight, ScreenWidth } from 'components/shared';
import { PlayerScreenRouteProp } from 'navigation/types';
import { VideoDataType, VideoDataItemType } from 'types/index';
import { API } from 'utils/index';

const PlayVideo: FC = () => {
  const route = useRoute<PlayerScreenRouteProp>();
  const theme = useTheme();
  const { movieId } = route.params;

  const { data, isLoading, error } = useQuery<VideoDataType>({
    queryKey: ['videos', movieId],
    queryFn: () => API.fetchVideo(movieId),
  });

  const [currentVideo, setCurrentVideo] = useState('');

  if (isLoading)
    return (
      <Container>
        <ActivityIndicator
          color={theme.colors.ACCENT_COLOR}
          size={ScreenHeight > ScreenWidth ? ScreenWidth / 6 : ScreenHeight / 6}
        />
      </Container>
    );
  if (error)
    return (
      <Container>
        <Title>An error has occured...</Title>
      </Container>
    );

  return (
    <Container>
      {data?.results?.length ? (
        <ScrollView>
          {data.results.map((video: VideoDataItemType) => (
            <Player
              key={video.key}
              videoId={video.key}
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
            />
          ))}
        </ScrollView>
      ) : (
        <Title>No video </Title>
      )}
    </Container>
  );
};

export default PlayVideo;
